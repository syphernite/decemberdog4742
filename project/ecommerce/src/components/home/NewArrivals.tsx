import React from 'react'
import { api } from '../../lib/api'
import { ProductCard } from '../product/ProductCard'

export function NewArrivalsGrid() {
  const [products, setProducts] = React.useState<any[]>([])
  const [loading, setLoading] = React.useState(true)

  React.useEffect(() => {
    let mounted = true
    api.products.getAll().then((res) => {
      if (mounted) {
        setProducts(res)
        setLoading(false)
      }
    })
    return () => { mounted = false }
  }, [])

  if (loading) return <div className="mt-6 text-gray-600">Loading…</div>

  const arrivals = products.slice(0, 8)

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {arrivals.map((p) => (
        <ProductCard key={p.id} id={p.id} title={p.title} price={p.price} image={p.image} />
      ))}
    </div>
  )
}

export default NewArrivalsGrid
