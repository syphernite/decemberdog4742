import React from 'react'
import { api, ApiProduct } from '../lib/api'
import { ProductCard } from '../components/product/ProductCard'
import { Link } from 'react-router-dom'

export function NewArrivals() {
  const [all, setAll] = React.useState<ApiProduct[]>([])
  const [loading, setLoading] = React.useState(true)

  React.useEffect(() => {
    let m = true
    api.products.getAll().then((res) => {
      if (!m) return
      setAll(res)
      setLoading(false)
    })
    return () => { m = false }
  }, [])

  const onlyNew = all.filter(p => (p.tags || []).includes('new'))
  const badgeFor = (p: ApiProduct): string | null => {
    const t = p.tags || []
    if (t.includes('bestseller')) return 'Bestseller'
    if (t.includes('limited')) return 'Limited'
    if (t.includes('new')) return 'New'
    return null
  }

  return (
    <div className="py-12">
      <header className="mb-6 flex items-end justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">New Arrivals</h1>
          <p className="muted mt-2">Fresh picks dropped this week.</p>
        </div>
        <Link to="/collections" className="text-sm muted hover:text-white">Browse all</Link>
      </header>

      {loading ? (
        <div className="muted">Loading…</div>
      ) : onlyNew.length === 0 ? (
        <div className="rounded-xl border border-gray-800 p-8 text-center muted">
          No new arrivals at the moment. Check back soon.
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {onlyNew.map((p) => (
            <ProductCard
              key={p.id}
              id={p.id}
              title={p.title}
              image={p.image}
              price={p.price}
              badge={badgeFor(p)}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default NewArrivals
