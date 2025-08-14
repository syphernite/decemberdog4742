export type VariantOption = { name: string; values: string[] }
export type Product = {
  id: string
  title: string
  description: string
  image: string
  price: number
  category: string
  options: VariantOption[]
  tags?: string[]
}

const CATS = ['Apparel', 'Accessories', 'Home', 'Tech']
const TAG_SRC = ['new', 'bestseller', 'limited', 'editor-pick'] as const

type TagKey = typeof TAG_SRC[number]

const NAMES: string[] = [
  'Wireless Noise-Canceling Headphones',
  'Retro Canvas High-Top Sneakers',
  'Minimalist Walnut Desk Lamp',
  'Everyday Cotton Crew Tee',
  'Midnight Leather Strap Watch',
  'Urban Commuter Backpack',
  'Ceramic Stoneware Vase',
  'Mirrorless Camera Sling',
  'Fleece-Lined Hoodie',
  'Insulated Travel Mug',
  'Polarized Round Sunglasses',
  'Monstera Plant in Pot',
  'Hand-Stitched Leather Wallet',
  'Vacuum-Insulated Water Bottle',
  'Classic Velvet Ring Case',
  'Recycled Canvas Tote',
  'Linen Throw Pillow',
  'Low-Profile Mechanical Keyboard',
  'Aluminum Desk Organizer',
  'Ribbed Knit Beanie',
  'Matte Incense Holder',
  'True Wireless Earbuds',
  'Hardcover Dot Grid Notebook',
  'Corduroy Baseball Cap'
]

const DESCS: string[] = [
  'Crisp sound with deep bass and all-day comfort.',
  'Timeless silhouette built for daily miles.',
  'Warm focused glow with adjustable arm.',
  'Soft handfeel and a perfect drape.',
  'Everyday-ready with sapphire crystal.',
  'Weatherproof with padded laptop sleeve.',
  'Hand-glazed texture for modern spaces.',
  'Compact carry for essentials on the go.',
  'Roomy fit with brushed interior.',
  'Locking lid, keeps heat for hours.',
  'UV400 protection with lightweight frame.',
  'Low-maintenance and apartment-friendly.',
  'A slim profile that ages beautifully.',
  'Keeps drinks cold for 24 hours.',
  'Protect your keepsakes in style.',
  'Sturdy seams and shoulder-length straps.',
  'Washed finish with soft loft.',
  'Quiet switches tuned for focus.',
  'Tidy trays for pens and notes.',
  'Cozy warmth with minimal branding.',
  'A calm ritual for the desktop.',
  'Stable Bluetooth with rich detail.',
  'Lay-flat binding for easy writing.',
  'Soft brim with classic crown.'
]

function priceFor(i: number): number {
  const base = [29, 39, 49, 59, 69, 79, 89, 99][i % 8]
  return base + (i % 3 === 0 ? 0.99 : 0)
}

const PRODUCTS: Product[] = Array.from({ length: 24 }).map((_, i) => {
  const id = String(i + 1)
  const category = CATS[i % CATS.length]
  const tag = TAG_SRC[i % TAG_SRC.length] as TagKey
  return {
    id,
    title: NAMES[i % NAMES.length],
    description: DESCS[i % DESCS.length],
    price: priceFor(i),
    category,
    options: [
      { name: 'Color', values: ['Black', 'White', 'Gray'] },
      { name: 'Size', values: ['S', 'M', 'L', 'XL'] }
    ],
    tags: [tag]
  }
})

async function getAll(): Promise<Product[]> {
  return new Promise(res => setTimeout(() => res(PRODUCTS), 80))
}
async function getById(id: string): Promise<Product | null> {
  const p = PRODUCTS.find(x => x.id === id) ?? null
  return new Promise(res => setTimeout(() => res(p), 80))
}

export const api = { products: { getAll, getById } }
export type { Product as ApiProduct }
