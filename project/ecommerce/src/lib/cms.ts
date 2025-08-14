export type HomeCMS = {
  hero: {
    headline: string
    subtext: string
    primaryCtaText: string
    primaryCtaHref: string
    secondaryCtaText: string
    secondaryCtaHref: string
  }
  promos: Array<{ title: string; text: string; href: string }>
}

const homeContent: HomeCMS = {
  hero: {
    headline: 'Nightwave Supply',
    subtext: 'A bold, high-contrast storefront. Swap in your images and go live.',
    primaryCtaText: 'Explore Collections',
    primaryCtaHref: '/collections',
    secondaryCtaText: 'New Arrivals',
    secondaryCtaHref: '/new-arrivals'
  },
  promos: [
    { title: 'Fast setup', text: 'Drop in products and publish.', href: '/collections' },
    { title: 'Clean design', text: 'Modern UI focused on conversion.', href: '/collections' },
    { title: 'Flexible variants', text: 'Sizes and colors ready.', href: '/collections' }
  ]
}

export async function getHomeContent(): Promise<HomeCMS> {
  return new Promise(res => setTimeout(() => res(homeContent), 10))
}
