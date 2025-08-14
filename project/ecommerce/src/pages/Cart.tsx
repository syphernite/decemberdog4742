// src/pages/Cart.tsx
import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { api } from '../lib/api'

type LineItem = {
  id: string
  title: string
  qty: number
  image: string
  price: number
}

const SAVE_KEY = 'cart'
const LEGACY_KEYS = ['demo_cart', 'ecom_cart', 'cart']

const hasWindow = typeof window !== 'undefined'

/** In-memory fallback when storage is blocked */
const memoryStore = (() => {
  let map = new Map<string, string>()
  return {
    getItem: (k: string) => map.get(k) ?? null,
    setItem: (k: string, v: string) => void map.set(k, v),
    removeItem: (k: string) => void map.delete(k),
  }
})()

type SafeStore = Pick<Storage, 'getItem' | 'setItem' | 'removeItem'>

function getStore(): SafeStore {
  if (!hasWindow) return memoryStore
  // prefer sessionStorage for session-lifetime carts
  try {
    const t = '__cart_test__'
    window.sessionStorage.setItem(t, '1')
    window.sessionStorage.removeItem(t)
    return window.sessionStorage
  } catch {}
  try {
    const t = '__cart_test__'
    window.localStorage.setItem(t, '1')
    window.localStorage.removeItem(t)
    return window.localStorage
  } catch {}
  return memoryStore
}

function mergeItems(a: LineItem[], b: LineItem[]) {
  const m = new Map<string, LineItem>()
  ;[...a, ...b].forEach((it) => {
    const cur = m.get(it.id)
    if (cur) m.set(it.id, { ...cur, qty: cur.qty + Math.max(1, it.qty || 1) })
    else m.set(it.id, { ...it, qty: Math.max(1, it.qty || 1) })
  })
  return Array.from(m.values())
}

function loadCart(): LineItem[] {
  const store = getStore()
  try {
    // read newest first; merge any legacy keys to be compatible with “add to cart” elsewhere
    let result: LineItem[] = []
    for (const k of LEGACY_KEYS) {
      const raw = store.getItem(k)
      if (raw) {
        const parsed = JSON.parse(raw) as LineItem[]
        result = mergeItems(result, parsed)
      }
    }
    return result
  } catch {
    return []
  }
}

function saveCart(items: LineItem[]) {
  const store = getStore()
  try {
    // write to primary key and clean legacy
    store.setItem(SAVE_KEY, JSON.stringify(items))
    for (const k of LEGACY_KEYS) if (k !== SAVE_KEY) store.removeItem(k)
    // notify other tabs/pages
    if (hasWindow) window.dispatchEvent(new StorageEvent('storage', { key: SAVE_KEY, newValue: JSON.stringify(items) }))
  } catch {}
}

function LineRow({
  it,
  onQty,
  onRemove
}: {
  it: LineItem
  onQty: (id: string, qty: number) => void
  onRemove: (id: string) => void
}) {
  const [imgErr, setImgErr] = React.useState(false)
  return (
    <div className="flex items-center gap-4 rounded-2xl border border-[var(--line)] p-4 bg-[var(--surface)]">
      <div className="h-24 w-24 rounded-xl overflow-hidden bg-[#0f111a] flex items-center justify-center">
        {imgErr ? (
          <div className="text-[10px] uppercase tracking-wide" style={{ color: 'var(--muted)' }}>
            Your Product Image
          </div>
        ) : (
          <img
            src={it.image}
            alt={it.title}
            className="h-full w-full object-cover"
            onError={() => setImgErr(true)}
          />
        )}
      </div>

      <div className="flex-1">
        <div className="font-semibold text-white line-clamp-1">{it.title}</div>
        <div className="text-sm" style={{ color: 'var(--muted)' }}>
          Fast shipping. Easy returns.
        </div>
        <div className="mt-2 flex items-center gap-3">
          <label className="text-sm" style={{ color: 'var(--muted)' }}>
            Qty
          </label>
          <input
            type="number"
            min={1}
            value={Number.isFinite(it.qty) ? it.qty : 1}
            onChange={(e) => onQty(it.id, Math.max(1, Number(e.target.value) || 1))}
            className="w-20 rounded-md border border-[var(--line)] bg-[#151516] px-2 py-1 text-gray-100"
          />
          <button onClick={() => onRemove(it.id)} className="text-sm hover:text-white" style={{ color: 'var(--muted)' }}>
            Remove
          </button>
        </div>
      </div>

      <div className="text-right">
        <div className="text-sm text-white">${(it.price * it.qty).toFixed(2)}</div>
        <div className="text-xs" style={{ color: 'var(--muted)' }}>
          ${it.price.toFixed(2)} each
        </div>
      </div>
    </div>
  )
}

export function Cart() {
  const [items, setItems] = React.useState<LineItem[]>([])
  const [hydrated, setHydrated] = React.useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  // Initial load
  React.useEffect(() => {
    setItems(loadCart())
    setHydrated(true)
  }, [])

  // Listen for storage updates and custom cart events
  React.useEffect(() => {
    const onStorage = (e: StorageEvent) => {
      if (!e.key || !LEGACY_KEYS.includes(e.key)) return
      try {
        setItems(loadCart())
      } catch {}
    }

    const onCartAdd = (e: Event) => {
      const detail = (e as CustomEvent).detail as Partial<LineItem> & { qty?: number }
      if (!detail?.id || !detail?.title) return
      addItem({
        id: String(detail.id),
        title: String(detail.title),
        qty: Math.max(1, Number(detail.qty) || 1),
        image: String(detail.image || ''),
        price: Number(detail.price || 0),
      })
    }

    window.addEventListener('storage', onStorage)
    window.addEventListener('cart:add', onCartAdd as EventListener)
    return () => {
      window.removeEventListener('storage', onStorage)
      window.removeEventListener('cart:add', onCartAdd as EventListener)
    }
  }, [])

  // Support “/cart?add=<id>&qty=<n>” deep-linking
  React.useEffect(() => {
    const params = new URLSearchParams(location.search)
    const add = params.get('add')
    const qty = Math.max(1, Number(params.get('qty') || 1))
    if (!add) return

    ;(async () => {
      const all = await api.products.getAll()
      const p = all.find((x: any) => String(x.id) === String(add))
      if (!p) return
      addItem({
        id: String(p.id),
        title: p.title,
        image: p.image,
        price: typeof p.price === 'number' ? p.price : 0,
        qty,
      })
      // clean URL so refresh doesn’t re-add
      params.delete('add')
      params.delete('qty')
      navigate({ pathname: location.pathname, search: params.toString() ? `?${params.toString()}` : '' }, { replace: true })
    })()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.search])

  function addItem(newItem: LineItem) {
    const next = mergeItems(items, [newItem])
    setItems(next)
    saveCart(next)
  }

  const updateQty = (id: string, qty: number) => {
    const next = items.map((it) => (it.id === id ? { ...it, qty: Math.max(1, qty || 1) } : it))
    setItems(next)
    saveCart(next)
  }

  const remove = (id: string) => {
    const next = items.filter((it) => it.id !== id)
    setItems(next)
    saveCart(next)
  }

  const subtotal = items.reduce((sum, it) => sum + it.qty * it.price, 0)
  const shipping = 0
  const tax = 0
  const total = subtotal + shipping + tax

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <h1 className="text-2xl font-bold text-white">Your Cart</h1>

      {!hydrated ? (
        <div className="mt-6" style={{ color: 'var(--muted)' }}>Loading…</div>
      ) : items.length === 0 ? (
        <div className="mt-8">
          <p className="mb-4" style={{ color: 'var(--muted)' }}>
            Your cart is empty.
          </p>
          <Link to="/collections" className="inline-block btn btn-primary">
            Browse Products
          </Link>
        </div>
      ) : (
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            {items.map((it) => (
              <LineRow key={it.id} it={it} onQty={updateQty} onRemove={remove} />
            ))}
          </div>

          <aside className="rounded-2xl border border-[var(--line)] p-5 h-fit bg-[var(--surface)]">
            <h2 className="text-lg font-semibold text-white">Order Summary</h2>
            <div className="mt-4 space-y-2 text-sm">
              <div className="flex justify-between">
                <span style={{ color: 'var(--muted)' }}>Subtotal</span>
                <span className="text-white">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span style={{ color: 'var(--muted)' }}>Shipping</span>
                <span className="text-white">${shipping.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span style={{ color: 'var(--muted)' }}>Tax</span>
                <span className="text-white">${tax.toFixed(2)}</span>
              </div>
              <div className="border-t border-[var(--line)] pt-2 flex justify-between font-medium">
                <span className="text-white">Total</span>
                <span className="text-white">${total.toFixed(2)}</span>
              </div>
            </div>

            <Link to="/checkout" className="mt-4 block w-full text-center btn btn-primary">
              Checkout
            </Link>
          </aside>
        </div>
      )}
    </div>
  )
}

export default Cart
