import React from 'react'
import { api } from '../../lib/api'
import { Link } from 'react-router-dom'

type Props = { open: boolean; onClose: () => void }

export function SearchModal({ open, onClose }: Props) {
  const [q, setQ] = React.useState('')
  const [results, setResults] = React.useState<any[]>([])

  React.useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open, onClose])

  React.useEffect(() => {
    let active = true
    ;(async () => {
      const all = await api.products.getAll()
      const term = q.trim().toLowerCase()
      const filtered = term
        ? all.filter(p =>
            (p.title || '').toLowerCase().includes(term) ||
            (p.description || '').toLowerCase().includes(term) ||
            (p.category || '').toLowerCase().includes(term) ||
            (p.tags || []).some((t: string) => t.toLowerCase().includes(term))
          )
        : all.slice(0, 8)
      if (active) setResults(filtered.slice(0, 20))
    })()
    return () => { active = false }
  }, [q])

  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 bg-black/40 flex items-start justify-center pt-24">
      <div className="w-full max-w-2xl rounded-2xl bg-[#131316] border border-gray-700 overflow-hidden">
        <div className="p-3 border-b border-gray-700 flex items-center gap-2">
          <input
            autoFocus
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search products or categories"
            className="w-full rounded-md px-3 py-2 bg-[#151516] text-gray-100 outline-none"
          />
          <button onClick={onClose} className="text-sm px-3 py-1.5 rounded-md hover:bg-[#1a1a1e] text-gray-100">
            Close
          </button>
        </div>
        <div className="p-3 max-h-[60vh] overflow-auto">
          {results.length === 0 ? (
            <div className="text-sm text-gray-400">No results</div>
          ) : (
            <ul className="divide-y divide-gray-800">
              {results.map(p => (
                <li key={p.id}>
                  <Link
                    to={`/products/${p.id}`}
                    onClick={onClose}
                    className="flex items-center gap-3 p-3 hover:bg-[#1a1a1e] rounded-lg"
                  >
                    <img src={p.image} alt={p.title} className="h-12 w-12 rounded-md bg-gray-50 object-cover" />
                    <div className="min-w-0">
                      <div className="truncate text-sm font-medium text-gray-100">{p.title}</div>
                      <div className="truncate text-xs text-gray-400">{p.category}</div>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  )
}
export default SearchModal
