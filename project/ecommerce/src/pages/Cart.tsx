import React from 'react'
import { Link } from 'react-router-dom'
import { api } from '../lib/api'

type LineItem = {
  id: string
  title: string
  qty: number
  image: string
  price: number
}

function loadDemoCart(): LineItem[] {
  try {
    const raw = localStorage.getItem('demo_cart')
    if (raw) return JSON.parse(raw)
  } catch {}
  return []
}

function saveDemoCart(items: LineItem[]) {
  try {
    localStorage.setItem('demo_cart', JSON.stringify(items))
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
            value={it.qty}
            onChange={(e) => onQty(it.id, Number(e.target.value))}
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
  const [items, setItems] = React.useState<LineItem[]>(loadDemoCart())
  const [loading, setLoading] = React.useState(items.length === 0)

  React.useEffect(() => {
    if (items.length > 0) return
    let mounted = true
    // Seed a couple demo lines so the page feels alive (real titles/images/prices)
    api.products.getAll().then((products) => {
      if (!mounted) return
      const seed: LineItem[] = products.slice(0, 2).map((p, i) => ({
        id: p.id,
        title: p.title,
        qty: i === 0 ? 1 : 2,
        image: p.image,
        price: typeof p.price === 'number' ? p.price : 0
      }))
      setItems(seed)
      saveDemoCart(seed)
      setLoading(false)
    })
    return () => {
      mounted = false
    }
  }, [items.length])

  const updateQty = (id: string, qty: number) => {
    const next = items.map((it) => (it.id === id ? { ...it, qty: Math.max(1, qty) } : it))
    setItems(next)
    saveDemoCart(next)
  }

  const remove = (id: string) => {
    const next = items.filter((it) => it.id !== id)
    setItems(next)
    saveDemoCart(next)
  }

  const subtotal = items.reduce((sum, it) => sum + it.qty * it.price, 0)
  const shipping = 0
  const tax = 0
  const total = subtotal + shipping + tax

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <h1 className="text-2xl font-bold text-white">Your Cart</h1>
      <p className="mt-2" style={{ color: 'var(--muted)' }}>
        Demo Mode — Replace these products with your own inventory in the admin panel.
      </p>

      {loading ? (
        <div className="mt-6" style={{ color: 'var(--muted)' }}>
          Loading…
        </div>
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

            <p className="mt-3 text-xs" style={{ color: 'var(--muted)' }}>
              This is a demo checkout flow. No real payments are processed.
            </p>
          </aside>
        </div>
      )}
    </div>
  )
}

export default Cart
