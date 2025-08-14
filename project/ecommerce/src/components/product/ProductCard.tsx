// src/components/product/ProductCard.tsx
import React from 'react'
import { Link } from 'react-router-dom'

export type ProductCardProps = {
  id: string | number
  title?: string
  image?: string
  price?: number
  badge?: string | null
}

type LineItem = { id: string; title: string; qty: number; image: string; price: number }

export function ProductCard({ id, title, image, price, badge = null }: ProductCardProps) {
  const ref = React.useRef<HTMLDivElement>(null)

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current
    if (!el) return
    const r = el.getBoundingClientRect()
    const x = (e.clientX - r.left) / r.width
    const y = (e.clientY - r.top) / r.height
    const rx = (0.5 - y) * 6
    const ry = (x - 0.5) * 6
    el.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-2px)`
  }
  const onLeave = () => { if (ref.current) ref.current.style.transform = '' }

  // -------- Cart storage helpers (session-scoped) --------
  const SAVE_KEY = 'cart'
  const LEGACY_KEYS = ['demo_cart', 'ecom_cart', 'cart']
  const hasWindow = typeof window !== 'undefined'

  const getStore = () => {
    if (!hasWindow) return null as unknown as Storage
    try {
      const t = '__cart_test__'
      sessionStorage.setItem(t, '1'); sessionStorage.removeItem(t)
      return sessionStorage
    } catch {}
    try {
      const t = '__cart_test__'
      localStorage.setItem(t, '1'); localStorage.removeItem(t)
      return localStorage
    } catch {}
    return null as unknown as Storage
  }

  const mergeItems = (a: LineItem[], b: LineItem[]) => {
    const m = new Map<string, LineItem>()
    ;[...a, ...b].forEach(it => {
      const cur = m.get(it.id)
      if (cur) m.set(it.id, { ...cur, qty: cur.qty + Math.max(1, it.qty || 1) })
      else m.set(it.id, { ...it, qty: Math.max(1, it.qty || 1) })
    })
    return Array.from(m.values())
  }

  const loadCart = (): LineItem[] => {
    const store = getStore()
    if (!store) return []
    try {
      let result: LineItem[] = []
      for (const k of LEGACY_KEYS) {
        const raw = store.getItem(k)
        if (raw) result = mergeItems(result, JSON.parse(raw))
      }
      return result
    } catch { return [] }
  }

  const saveCart = (items: LineItem[]) => {
    const store = getStore()
    if (!store) return
    try {
      store.setItem(SAVE_KEY, JSON.stringify(items))
      for (const k of LEGACY_KEYS) if (k !== SAVE_KEY) store.removeItem(k)
      // notify any open Cart views and listeners
      if (hasWindow) {
        window.dispatchEvent(new StorageEvent('storage', { key: SAVE_KEY, newValue: JSON.stringify(items) }))
        window.dispatchEvent(new CustomEvent('cart:add', { detail: { id: String(id) } }))
      }
    } catch {}
  }

  const setQtyFor = (productId: string, qty: number) => {
    const current = loadCart()
    let next: LineItem[]
    if (qty <= 0) {
      next = current.filter(it => it.id !== productId)
    } else {
      const base: LineItem = {
        id: productId,
        title: title || 'Product Title',
        image: image || '',
        price: typeof price === 'number' ? price : 0,
        qty
      }
      const exists = current.find(it => it.id === productId)
      next = exists
        ? current.map(it => it.id === productId ? { ...it, qty } : it)
        : [...current, base]
    }
    saveCart(next)
    return next
  }

  const getQtyFor = (productId: string) => {
    const found = loadCart().find(it => it.id === productId)
    return found?.qty ?? 0
  }
  // -------------------------------------------------------

  // Popup state
  const [open, setOpen] = React.useState(false)
  const [qty, setQty] = React.useState<number>(() => getQtyFor(String(id)))
  const anchorRef = React.useRef<HTMLButtonElement>(null)

  React.useEffect(() => {
    // keep qty in sync if cart changes elsewhere
    const onStorage = (e: StorageEvent) => {
      if (e.key && !LEGACY_KEYS.includes(e.key)) return
      setQty(getQtyFor(String(id)))
    }
    const onCartAdd = () => setQty(getQtyFor(String(id)))
    window.addEventListener('storage', onStorage)
    window.addEventListener('cart:add', onCartAdd as EventListener)
    return () => {
      window.removeEventListener('storage', onStorage)
      window.removeEventListener('cart:add', onCartAdd as EventListener)
    }
  }, [id])

  // Close popup on outside click or Esc
  React.useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false) }
    const onClick = (e: MouseEvent) => {
      const target = e.target as Node
      if (!anchorRef.current) return
      const card = ref.current
      if (card && !card.contains(target)) setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    window.addEventListener('mousedown', onClick)
    return () => {
      window.removeEventListener('keydown', onKey)
      window.removeEventListener('mousedown', onClick)
    }
  }, [open])

  const handleAddClick = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    const nextQty = qty > 0 ? qty + 1 : 1
    setQty(nextQty)
    setQtyFor(String(id), nextQty)
    setOpen(true)
  }

  const inc = (e: React.MouseEvent) => {
    e.preventDefault(); e.stopPropagation()
    const nextQty = Math.max(0, qty + 1)
    setQty(nextQty)
    setQtyFor(String(id), nextQty)
  }

  const dec = (e: React.MouseEvent) => {
    e.preventDefault(); e.stopPropagation()
    const nextQty = Math.max(0, qty - 1)
    setQty(nextQty)
    setQtyFor(String(id), nextQty)
    if (nextQty === 0) setOpen(false)
  }

  const onInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = Math.max(0, Math.floor(Number(e.target.value) || 0))
    setQty(val)
    setQtyFor(String(id), val)
    if (val === 0) setOpen(false)
  }

  const displayTitle = title || 'Product Title'
  const displayPrice = '$0.00' // visuals unchanged

  return (
    <Link to={`/products/${id}`} className="block will-change-transform">
      <div
        ref={ref}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        className="card-border glow transition-transform duration-200"
      >
        <div className="overflow-hidden rounded-[1.25rem]">
          {/* IMAGE / BADGE AREA */}
          <div className="relative">
            <div className="aspect-square bg-[#0f111a] flex items-center justify-center">
              <div className="flex items-center gap-2 select-none">
                <span
                  className="text-sm font-semibold"
                  style={{
                    background: 'linear-gradient(90deg, var(--acc), var(--acc2))',
                    WebkitBackgroundClip: 'text',
                    color: 'transparent'
                  }}
                >
                  Product coming soon
                </span>
                <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
                  <defs>
                    <linearGradient id="smile-g" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0" stopColor="#ff4d4d" />
                      <stop offset="1" stopColor="#00e5ff" />
                    </linearGradient>
                  </defs>
                  <circle cx="9" cy="9" r="8" fill="url(#smile-g)"/>
                  <circle cx="6" cy="7" r="1.1" fill="rgba(0,0,0,.85)"/>
                  <circle cx="12" cy="7" r="1.1" fill="rgba(0,0,0,.85)"/>
                  <path d="M5.5 10.5c1.2 2.2 5.8 2.2 7 0" fill="none" stroke="rgba(0,0,0,.85)" strokeWidth="1.2" strokeLinecap="round"/>
                </svg>
              </div>
            </div>
            {badge ? (
              <div className="absolute left-3 top-3 rounded-full bg-white text-black text-[10px] font-semibold px-2 py-1 shadow-sm">
                {badge}
              </div>
            ) : null}
          </div>

          {/* CONTENT */}
          <div className="p-4 md:p-5 bg-[rgba(255,255,255,.04)] backdrop-blur-sm">
            <h3 className="text-white font-semibold line-clamp-1">{displayTitle}</h3>
            <div className="mt-1 text-sm" style={{ color: 'var(--muted)' }}>
              Product Description Here
            </div>

            <div className="pt-2 flex items-center justify-between relative">
              <span className="text-sm">{displayPrice}</span>

              {/* Add button */}
              <button
                ref={anchorRef}
                onClick={handleAddClick}
                className="btn btn-primary !py-2 !px-4"
                aria-label="Add to cart"
              >
                {qty > 0 ? 'Added' : 'Add'}
              </button>

              {/* Quantity popup */}
              {open && (
                <div
                  className="absolute right-0 -top-2 translate-y-[-100%] z-30 rounded-xl border border-[var(--line)] bg-[rgba(22,22,24,.98)] backdrop-blur p-3 shadow-xl"
                  onClick={(e) => { e.preventDefault(); e.stopPropagation() }}
                >
                  <div className="flex items-center gap-2">
                    <button
                      onClick={dec}
                      className="h-8 w-8 rounded-md border border-[var(--line)] text-white flex items-center justify-center"
                      aria-label="Decrease quantity"
                    >
                      −
                    </button>
                    <input
                      type="number"
                      min={0}
                      value={qty}
                      onChange={onInput}
                      className="h-8 w-16 text-center rounded-md border border-[var(--line)] bg-[#151516] text-gray-100"
                    />
                    <button
                      onClick={inc}
                      className="h-8 w-8 rounded-md border border-[var(--line)] text-white flex items-center justify-center"
                      aria-label="Increase quantity"
                    >
                      +
                    </button>
                  </div>
                  <div className="mt-2 text-xs" style={{ color: 'var(--muted)' }}>
                    {qty > 0 ? `${qty} in cart` : 'Removed'}
                  </div>

                  {/* caret */}
                  <div
                    className="absolute right-4 bottom-[-6px] h-3 w-3 rotate-45 border-b border-r border-[var(--line)]"
                    style={{ background: 'rgba(22,22,24,.98)' }}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}
export default ProductCard
