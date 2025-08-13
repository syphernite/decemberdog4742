import React from 'react'
import { api, ApiProduct } from '../lib/api'
import { ProductCard } from '../components/product/ProductCard'

export function Collections() {
  const [all, setAll] = React.useState<ApiProduct[]>([])
  const [loading, setLoading] = React.useState(true)
  const [sp, setSp] = React.useState(() => new URLSearchParams(window.location.search))

  const selected = sp.getAll('cat')
  const q = sp.get('q') || ''
  const tag = sp.get('tag') || ''

  React.useEffect(() => {
    let m = true
    api.products.getAll().then((res) => {
      if (!m) return
      setAll(res)
      setLoading(false)
    })
    return () => { m = false }
  }, [])

  const categories = React.useMemo(
    () => Array.from(new Set(all.map(p => p.category))).sort(),
    [all]
  )
  const tags = React.useMemo(
    () => Array.from(new Set(all.flatMap(p => p.tags || []))).sort(),
    [all]
  )

  const setParam = (key: string, value?: string) => {
    const fresh = new URLSearchParams(sp.toString())
    if (value) fresh.set(key, value)
    else fresh.delete(key)
    setSp(fresh)
    const url = new URL(window.location.href); url.search = fresh.toString(); window.history.replaceState({}, '', url.toString())
  }

  const toggleCat = (cat: string) => {
    const next = new Set(sp.getAll('cat'))
    if (next.has(cat)) next.delete(cat)
    else next.add(cat)
    const fresh = new URLSearchParams(sp.toString())
    fresh.delete('cat')
    Array.from(next).forEach(c => fresh.append('cat', c))
    setSp(fresh)
    const url = new URL(window.location.href); url.search = fresh.toString(); window.history.replaceState({}, '', url.toString())
  }

  const filtered = all.filter(p => {
    const byCat = selected.length ? selected.includes(p.category) : true
    const byTag = tag ? (p.tags || []).includes(tag) : true
    const term = q.trim().toLowerCase()
    const byText = term
      ? (p.title || '').toLowerCase().includes(term) ||
        (p.description || '').toLowerCase().includes(term) ||
        (p.category || '').toLowerCase().includes(term)
      : true
    return byCat && byTag && byText
  })

  const badgeFor = (p: ApiProduct): string | null => {
    const t = (p.tags || [])
    if (t.includes('bestseller')) return 'Bestseller'
    if (t.includes('limited')) return 'Limited'
    if (t.includes('new')) return 'New'
    return null
  }

  return (
    <div className="py-12 grid grid-cols-1 lg:grid-cols-4 gap-10">
      <aside className="lg:col-span-1">
        <div className="rounded-2xl border border-gray-800 bg-[#131316] p-4 sticky top-20">
          <h2 className="text-lg font-semibold text-white">Filters</h2>

          <div className="mt-3 space-y-2">
            <input
              value={q}
              onChange={(e) => setParam('q', e.target.value || undefined)}
              placeholder="Search"
              className="w-full rounded-md border border-gray-700 bg-[#151516] px-3 py-2 text-sm text-gray-100"
            />
          </div>

          <div className="pt-4">
            <div className="text-sm font-medium mb-2 text-white">Category</div>
            <div className="flex flex-wrap gap-2">
              {categories.map(cat => {
                const active = selected.includes(cat)
                return (
                  <button
                    key={cat}
                    onClick={() => toggleCat(cat)}
                    className={`px-3 py-1.5 rounded-lg border text-sm transition ${
                      active ? 'border-white bg-white text-black' : 'border-gray-700 hover:bg-[#1a1a1e] text-gray-300'
                    }`}
                  >
                    {cat}
                  </button>
                )
              })}
            </div>
          </div>

          <div className="pt-4">
            <div className="text-sm font-medium mb-2 text-white">Tag</div>
            <select
              value={tag}
              onChange={(e) => setParam('tag', e.target.value || undefined)}
              className="w-full rounded-md border border-gray-700 bg-[#151516] px-3 py-2 text-sm text-gray-100"
            >
              <option value="">All</option>
              {tags.map(t => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
          </div>
        </div>
      </aside>

      <section className="lg:col-span-3">
        <header className="mb-6">
          <h1 className="text-2xl font-bold text-white">Collections</h1>
          <p className="text-gray-300 mt-2">Browse your grid. Use filters or search to narrow the list.</p>
        </header>

        {loading ? (
          <div className="text-gray-400">Loading…</div>
        ) : filtered.length === 0 ? (
          <div className="rounded-xl border border-gray-800 p-8 text-center text-gray-400">
            No products match these filters.
          </div>
        ) : (
          <div className="mt-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filtered.map((p) => (
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
      </section>
    </div>
  )
}

export default Collections
