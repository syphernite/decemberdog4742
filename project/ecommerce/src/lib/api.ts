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

const IMG: string[] = [
  'https://images.unsplash.com/photo-1520975693413-35a4c86c5e52?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1592878904946-b3cd9a8d8f80?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1580894732444-8ecded7900cd?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1517705008128-361805f42e86?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1526045612212-70caf35c14df?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1542293787938-c9e299b88054?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1556909114-95f7f72f0dd4?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1535059329802-3b7a9a7f2c02?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1542291024-7f0f4b6c28b6?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1520975922284-9d8a5d51d0b1?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1524594227084-df79e4e4d7f0?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1520975926212-4f2b9b1e0c58?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1537039557101-4a42c334fd08?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1490367532201-b9bc1dc483f6?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1520975605362-33898b26f8a0?q=80&w=1200&auto=format&fit=crop'
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
    image: IMG[i % IMG.length],
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
