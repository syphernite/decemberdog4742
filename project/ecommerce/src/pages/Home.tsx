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
    return () => {
      mounted = false
    }
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
      {/* HERO — clean, no border/outline; generous line-height so headline never clips */}
      <section className="relative mt-6" style={{ border: '0', outline: '0', boxShadow: 'none' }}>
        {/* Background image as cover (no rounded container to avoid visible frame) */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat pointer-events-none"
          style={{
            backgroundImage: `url('/placeholders/banner_landscape.svg')`,
            filter: 'brightness(0.86)'
          }}
          aria-hidden
        />

        {/* Hyperspeed effect layer */}
        <div className="absolute inset-0 pointer-events-none opacity-55">
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

        {/* Hero height */}
        <div className="h-[52vh] md:h-[64vh]" />

        {/* Overlay content */}
        <div className="absolute inset-0 p-6 md:p-10 flex items-center justify-center">
          <div
            className="max-w-2xl w-full"
            style={{
              backdropFilter: 'blur(14px)',
              background: 'rgba(255,255,255,.05)',
              border: '0',
              outline: '0',
              boxShadow: 'none'
            }}
          >
            <div className="p-6 md:p-8 pt-8 pb-10">
              <h1
                className="font-extrabold tracking-tight text-4xl md:text-6xl"
                style={{
                  background: 'linear-gradient(90deg,var(--acc),var(--acc2))',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  display: 'inline-block',
                  lineHeight: 1.22,           // prevents baseline clip
                  marginBottom: '0.25rem'     // subtle space under headline
                }}
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
