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

  // ----- Add to Cart (session-scoped, no checkout) -----
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

  type LineItem = { id: string; title: string; qty: number; image: string; price: number }
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
      // notify any open Cart views
      if (hasWindow) {
        window.dispatchEvent(new StorageEvent('storage', { key: SAVE_KEY, newValue: JSON.stringify(items) }))
        window.dispatchEvent(new CustomEvent('cart:add', { detail: items[items.length - 1] }))
      }
    } catch {}
  }

  const handleAdd = (e: React.MouseEvent) => {
    e.preventDefault() // stay on the grid; no product/checkout navigation
    const item: LineItem = {
      id: String(id),
      title: title || 'Product Title',
      image: image || '',
      price: typeof price === 'number' ? price : 0,
      qty: 1,
    }
    const next = mergeItems(loadCart(), [item])
    saveCart(next)
  }
  // -----------------------------------------------------

  const displayTitle = title || 'Product Title'
  const displayPrice = '$0.00' // leaving visuals unchanged per your request

  return (
    <Link to={`/products/${id}`} className="block will-change-transform">
      <div
        ref={ref}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        className="card-border glow transition-transform duration-200"
      >
        <div className="overflow-hidden rounded-[1.25rem]">
          {/* PLACEHOLDER AREA */}
          <div className="relative">
            <div className="aspect-square bg-[#0f111a] flex items-center justify-center">
              <div className="flex items-center gap-2 select-none">
                {/* gradient headline */}
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
                {/* gradient smiley (SVG so it always renders) */}
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
              <div className="absolute left-3 top-3 rounded-full bg.white text-black text-[10px] font-semibold px-2 py-1 shadow-sm">
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
            <div className="pt-2 flex items.center justify-between">
              <span className="text-sm">{displayPrice}</span>
              <button
                onClick={handleAdd}
                className="btn btn-primary !py-2 !px-4"
                aria-label="Add to cart"
              >
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}
export default ProductCard
