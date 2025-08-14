import React from 'react'
import { useParams } from 'react-router-dom'
import { api } from '../lib/api'
import type { ApiProduct } from '../lib/api'
import { useCart } from '../lib/cart' // ✅ Assuming you have a cart hook/context

type Selected = Record<string, string>

function ProductSchema({ p }: { p: ApiProduct }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: p.title,
    image: [p.image],
    description: p.description,
    brand: 'Nightwave Supply',
    sku: p.id,
    aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.8', ratingCount: '128' },
    offers: { '@type': 'Offer', priceCurrency: 'USD', price: String(p.price ?? '0.00'), availability: 'https://schema.org/InStock' }
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}

export function ProductDetail() {
  const { id } = useParams()
  const { addItem } = useCart() // ✅ Hook from your cart system
  const [loading, setLoading] = React.useState(true)
  const [p, setP] = React.useState<ApiProduct | null>(null)
  const [imgErr, setImgErr] = React.useState(false)
  const [sel, setSel] = React.useState<Selected>({})
  const [qty, setQty] = React.useState(1)
  const [addedMsg, setAddedMsg] = React.useState('')

  React.useEffect(() => {
    let m = true
    if (!id) return
    api.products.getById(id).then((prod) => {
      if (!m) return
      setP(prod || null)
      setLoading(false)
      if (prod?.options) {
        const initial: Selected = {}
        for (const opt of prod.options) initial[opt.name] = opt.values[0]
        setSel(initial)
      }
    })
    return () => { m = false }
  }, [id])

  if (loading) return <div className="py-10 muted">Loading…</div>
  if (!p) return <div className="py-10 muted">Product not found.</div>

  const price = typeof p.price === 'number' ? `$${p.price.toFixed(2)}` : '$XX.XX'
  const badge = (p.tags || []).includes('bestseller') ? 'Bestseller' :
                (p.tags || []).includes('limited') ? 'Limited' :
                (p.tags || []).includes('new') ? 'New' : null

  const handleAddToCart = () => {
    addItem({
      id: p.id,
      title: p.title,
      price: p.price ?? 0,
      image: p.image,
      quantity: qty,
      options: sel
    })
    setAddedMsg('✅ Added to cart!')
    setTimeout(() => setAddedMsg(''), 2000)
  }

  return (
    <div className="py-10 grid grid-cols-1 md:grid-cols-2 gap-10">
      <ProductSchema p={p} />

      {/* Gallery */}
      <div className="rounded-3xl border border-[var(--line)] overflow-hidden bg-[#0d0d14] relative">
        <div className="aspect-square flex items-center justify-center bg-[#0f111a]">
          {imgErr ? (
            <div className="text-center">
              <div className="text-xs uppercase tracking-wide muted">Your Product Image</div>
            </div>
          ) : (
            <img
              src={p.image}
              alt={p.title}
              className="w-full h-full object-cover"
              onError={() => setImgErr(true)}
            />
          )}
        </div>
        {badge ? (
          <div className="absolute left-4 top-4 rounded-full bg-white text-black text-xs font-semibold px-2 py-1 shadow">
            {badge}
          </div>
        ) : null}
      </div>

      {/* Info */}
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-white">{p.title}</h1>
          <p className="mt-2 muted">{p.description}</p>
        </div>

        <div className="text-xl font-semibold">{price}</div>

        {p.options?.length ? (
          <div className="space-y-5">
            {p.options.map((opt) => (
              <div key={opt.name} className="space-y-2">
                <div className="text-sm font-medium text-white">{opt.name}</div>
                <div className="flex flex-wrap gap-2">
                  {opt.values.map(v => {
                    const active = sel[opt.name] === v
                    return (
                      <button
                        key={v}
                        onClick={() => setSel(s => ({ ...s, [opt.name]: v }))}
                        className={`px-3 py-1.5 rounded-lg border text-sm transition ${
                          active ? 'border-white bg-white text-black' : 'border-gray-700 hover:bg-[#1a1a1e] text-gray-300'
                        }`}
                      >
                        {v}
                      </button>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>
        ) : null}

        <div className="flex items-center gap-3">
          <label className="text-sm muted">Qty</label>
          <input
            type="number"
            min={1}
            value={qty}
            onChange={(e) => setQty(Math.max(1, Number(e.target.value)))}
            className="w-24 rounded-md border border-gray-700 bg-[#151516] px-3 py-2 text-gray-100"
          />
        </div>

        <div className="flex gap-3 pt-1">
          <button
            onClick={handleAddToCart}
            className="btn btn-primary px-6"
          >
            Add to Cart
          </button>
          <button className="btn btn-ghost px-6">Add to Wishlist</button>
        </div>
        {addedMsg && <div className="text-green-400 text-sm pt-1">{addedMsg}</div>}

        {/* Meta */}
        <div className="pt-6 border-t border-[var(--line)] grid grid-cols-1 md:grid-cols-3 gap-3">
          <div className="card p-4">
            <div className="text-sm font-semibold text-white">Fast Shipping</div>
            <div className="text-sm muted">2–5 business days</div>
          </div>
          <div className="card p-4">
            <div className="text-sm font-semibold text-white">Easy Returns</div>
            <div className="text-sm muted">30-day return window</div>
          </div>
          <div className="card p-4">
            <div className="text-sm font-semibold text-white">Secure Checkout</div>
            <div className="text-sm muted">PCI-compliant payments</div>
          </div>
        </div>

        {/* Reviews */}
        <section className="pt-6 border-t border-[var(--line)]">
          <h2 className="text-lg font-semibold text-white">Reviews</h2>
          <div className="mt-3 grid grid-cols-1 md:grid-cols-3 gap-3">
            {['Great quality and fast shipping', 'Looks amazing on our site', 'Setup was easy'].map((t, i) => (
              <div key={i} className="card p-3">
                <div className="text-sm text-gray-100">★★★★★</div>
                <div className="text-sm muted">{t}</div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

export default ProductDetail
