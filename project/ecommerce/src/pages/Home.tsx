// src/pages/Home.tsx
import React from 'react'
import { Link } from 'react-router-dom'
import { api, ApiProduct } from '../lib/api'
import { ProductCard } from '../components/product/ProductCard'
import { getHomeContent } from '../lib/cms'
import Hyperspeed from '../components/Hyperspeed'

export function Home() {
  const [products, setProducts] = React.useState<ApiProduct[]>([])
  const [hero, setHero] = React.useState<any>(null)
  const [promos, setPromos] = React.useState<any[]>([])
  const [loading, setLoading] = React.useState(true)

  React.useEffect(() => {
    let mounted = true
    Promise.all([api.products.getAll(), getHomeContent()]).then(([ps, cms]) => {
      if (!mounted) return
      setProducts(ps)
      setHero(cms.hero)
      setPromos(cms.promos)
      setLoading(false)
    })
    return () => { mounted = false }
  }, [])

  const badgeFor = (p: ApiProduct): string | null => {
    const t = p.tags || []
    if (t.includes('bestseller')) return 'Bestseller'
    if (t.includes('limited')) return 'Limited'
    if (t.includes('new')) return 'New'
    return null
  }

  return (
    <div className="min-h-screen">
      {/* HERO */}
      {/* outline removed: no border on the outer section */}
      <section className="relative rounded-3xl mt-6">
        {/* background image (clipped to rounded box) */}
        <div className="rounded-3xl overflow-hidden">
          <img
            alt=""
            className="w-full h-[50vh] md:h-[62vh] object-cover opacity-80"
          />
        </div>

        {/* subtle hyperspeed animation behind the card */}
        <div className="absolute inset-0 rounded-3xl pointer-events-none opacity-55">
          <Hyperspeed
            effectOptions={{
              distortion: 'turbulentDistortionStill',
              colors: {
                roadColor: 0x0a0a0f,
                islandColor: 0x0b0b11,
                background: 0x000000,
                shoulderLines: 0x20222b,
                brokenLines: 0x20222b,
                leftCars: [0xff6a66, 0xff5a5f, 0xff7a6e],
                rightCars: [0x00e5ff, 0x74f3ff, 0x10d0ff],
                sticks: [0x00e5ff, 0xff6a66]
              },
              fov: 70,
              fovSpeedUp: 95,
              speedUp: 1.25,
              lightPairsPerRoadWay: 26,
              totalSideLightSticks: 12
            }}
          />
        </div>

        {/* overlay card — centered */}
        <div className="absolute inset-0 p-6 md:p-10 flex items-center justify-center">
          {/* use a custom container without any border/ring classes */}
          <div
            className="rounded-2xl max-w-2xl w-full overflow-visible border-0 ring-0 shadow-[0_10px_60px_rgba(0,0,0,0.45)]"
            style={{ backdropFilter: 'blur(14px)', background: 'rgba(255,255,255,.05)' }}
          >
            <div className="p-6 md:p-8">
              <h1
                className="h1 leading-tight pb-1 [text-wrap:balance] overflow-visible"
                style={{ background: 'linear-gradient(90deg,var(--acc),var(--acc2))', WebkitBackgroundClip: 'text', color: 'transparent' }}
              >
                {hero?.headline || 'Nightwave Supply'}
              </h1>
              <p className="mt-3 md:text-lg muted">
                {hero?.subtext || 'A bold, high-contrast storefront. Swap in your images and go live.'}
              </p>
              <div className="mt-6 flex gap-3">
                <Link to={hero?.primaryCtaHref || '/collections'} className="btn btn-primary">
                  {hero?.primaryCtaText || 'Explore Collections'}
                </Link>
                <Link to={hero?.secondaryCtaHref || '/new-arrivals'} className="btn btn-ghost">
                  {hero?.secondaryCtaText || 'New Arrivals'}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROMOS */}
      {promos?.length ? (
        <section className="py-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {promos.map((p: any, i: number) => (
              <Link key={i} to={p.href} className="card glow p-5 hover:-translate-y-0.5 transition">
                <div className="text-white font-semibold">{p.title}</div>
                <div className="text-sm muted mt-1">{p.text}</div>
              </Link>
            ))}
          </div>
        </section>
      ) : null}

      {/* FEATURED */}
      <section className="py-12">
        <div className="flex items-end justify-between">
          <h2 className="h2">Featured Products</h2>
          <Link to="/collections" className="text-sm muted hover:text-white">View all</Link>
        </div>

        {loading ? (
          <div className="mt-6 muted">Loading…</div>
        ) : (
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.slice(0, 8).map((p) => (
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

      {/* MORE ROW */}
      {!loading && (
        <section className="py-6">
          <h3 className="h2 mb-6">Trending Now</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {products.slice(8, 20).map((p) => (
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
        </section>
      )}
    </div>
  )
}

export default Home
