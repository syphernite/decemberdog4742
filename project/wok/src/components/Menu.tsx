import { useEffect, useMemo, useState } from 'react';
import { Star, Flame, DollarSign, Sparkles, X, Search } from 'lucide-react';

/** ===== MENU DATA (transcribed from the board photo) =====
 * Edit here if you want to correct spelling/price tweaks.
 */

type Item = {
  name: string;
  price?: string;        // single price (e.g., "$10.35")
  lunch?: string;        // lunch price (e.g., "$9.25")
  dinner?: string;       // dinner price (e.g., "$10.35")
  spicy?: boolean;       // red items on the board
  note?: string;
};

type Section = {
  title: string;
  columns?: ('name'|'price'|'lunch'|'dinner')[];
  items: Item[];
};

const fullMenuData: Section[] = [
  {
    title: 'SPECIALTIES',
    columns: ['name','price'],
    items: [
      { name: 'Emerald Chicken', price: '$10.35' },
      { name: 'Hot & Spicy Chicken', price: '$10.95', spicy: true },
      { name: 'Triple Delight', price: '$11.95' },
      { name: 'Broccoli Garlic Sauce', price: '$8.75' },
      { name: 'Vegetable Combination', price: '$8.75' },
      { name: 'Happy Family', price: '$12.95' },
      { name: 'Garlic Shrimp & Scallop', price: '$11.95' },
      { name: 'China Wok Special', price: '$10.95' },
      { name: 'Shrimp with Snow Pea', price: '$11.95' },
      { name: 'Shrimp with Pepper', price: '$11.95' },
      { name: 'Shrimp with Cashew', price: '$11.95' },
      { name: 'Curry Shrimp', price: '$11.95', spicy: true },
      { name: 'General Chicken', price: '$10.95', spicy: true },
      { name: 'Orange Chicken', price: '$10.95' },
      { name: 'Sesame Chicken', price: '$10.95' },
      { name: 'Mongolian Beef', price: '$11.95' },
      { name: 'Mongolian Chicken', price: '$11.95' },
    ],
  },
  {
    title: 'FRIED RICE',
    columns: ['name','price'],
    items: [
      { name: 'Beef Fried Rice', price: '$11.25' },
      { name: 'Pork Fried Rice', price: '$11.25' },
      { name: 'Chicken Fried Rice', price: '$11.25' },
      { name: 'Shrimp Fried Rice', price: '$11.75' },
      { name: 'Combination Fried Rice', price: '$11.75' },
      { name: 'Vegetable Fried Rice', price: '$11.25' },
      { name: 'House Fried Rice', price: '$11.75' },
    ],
  },
  {
    title: 'LO MEIN',
    columns: ['name','price'],
    items: [
      { name: 'Chicken Lo Mein', price: '$11.25' },
      { name: 'Beef Lo Mein', price: '$11.75' },
      { name: 'Shrimp Lo Mein', price: '$11.75' },
      { name: 'Combination Lo Mein', price: '$11.75' },
      { name: 'Vegetable Lo Mein', price: '$11.25' },
    ],
  },
  {
    title: 'BEEF',
    columns: ['name','lunch','dinner'],
    items: [
      { name: 'Beef Chow Mein', lunch: '$9.25', dinner: '$10.35' },
      { name: 'Pepper Steak', lunch: '$9.25', dinner: '$10.35' },
      { name: 'Beef / Snow Pea', lunch: '$9.25', dinner: '$10.35' },
      { name: 'Beef / Broccoli', lunch: '$9.25', dinner: '$10.35' },
      { name: 'Beef / Mixed Veg.', lunch: '$9.25', dinner: '$10.35' },
      { name: 'Beef / Garlic Sauce', lunch: '$9.25', dinner: '$10.35', spicy: true },
      { name: 'Kung Pao Beef', lunch: '$9.25', dinner: '$10.35', spicy: true },
      { name: 'Hunan Beef', lunch: '$9.25', dinner: '$10.35', spicy: true },
    ],
  },
  {
    title: 'CHICKEN',
    columns: ['name','lunch','dinner'],
    items: [
      { name: 'Chicken Chow Mein', lunch: '$9.25', dinner: '$10.35' },
      { name: 'Moo Goo Gai Pan', lunch: '$9.25', dinner: '$10.35' },
      { name: 'Chicken / Mixed Veg.', lunch: '$9.25', dinner: '$10.35' },
      { name: 'Chicken / Cashew', lunch: '$9.25', dinner: '$10.35' },
      { name: 'Chicken / Snow Pea', lunch: '$9.25', dinner: '$10.35' },
      { name: 'Chicken / Garlic Sauce', lunch: '$9.25', dinner: '$10.35', spicy: true },
      { name: 'Kung Pao Chicken', lunch: '$9.25', dinner: '$10.35', spicy: true },
      { name: 'Hunan Chicken', lunch: '$9.25', dinner: '$10.35', spicy: true },
    ],
  },
  {
    title: 'SHRIMP',
    columns: ['name','lunch','dinner'],
    items: [
      { name: 'Shrimp Chow Mein', lunch: '$9.55', dinner: '$10.75' },
      { name: 'Shrimp / Green Pea', lunch: '$9.55', dinner: '$10.75' },
      { name: 'Shrimp / Mixed Veg.', lunch: '$9.55', dinner: '$10.75' },
      { name: 'Shrimp / Garlic Sauce', lunch: '$9.55', dinner: '$10.75', spicy: true },
      { name: 'Kung Pao Shrimp', lunch: '$9.55', dinner: '$10.75', spicy: true },
      { name: 'Hunan Shrimp', lunch: '$9.55', dinner: '$10.75', spicy: true },
    ],
  },
  {
    title: 'SWEET & SOURS',
    columns: ['name','lunch','dinner'],
    items: [
      { name: 'Sweet & Sour Chicken', lunch: '$9.25', dinner: '$10.50' },
      { name: 'Sweet & Sour Pork', lunch: '$9.25', dinner: '$10.50' },
      { name: 'Sweet & Sour Shrimp', lunch: '$9.75', dinner: '$10.95' },
      { name: 'Sweet & Sour Combination', lunch: '$9.75', dinner: '$10.95' },
    ],
  },
  {
    title: 'SIDE ORDERS',
    columns: ['name','price'],
    items: [
      { name: 'Egg Roll', price: '$1.75' },
      { name: 'Pork Wontons (6)', price: '$4.95' },
      { name: 'Cheese Rangoons (6)', price: '$4.95' },
      { name: 'Egg Drop Soup', price: '$2.00' },
      { name: 'Wonton Soup', price: '$2.75' },
      { name: 'Fried Noodles', price: '$1.00' },
      { name: 'Kimchi', price: '$2.00' },
      { name: 'Cup of Rice', price: '$2.00' },
      { name: 'Container Rice', price: '$2.75' },
    ],
  },
  {
    title: 'LUNCH (MON–FRI ONLY • 11:00 AM – 2:00 PM)',
    columns: ['name','price'],
    items: [
      { name: 'Mix & Match of 2 Items (includes 2 scoops brown rice)', price: '$9.75', note: 'Choose two:' },
      { name: '1) Beef with Broccoli', price: '' },
      { name: '2) Chicken with Mixed Vegetables', price: '' },
      { name: '3) Pepper Steak', price: '' },
      { name: '4) Sweet & Sour Chicken', price: '' },
      { name: '5) Sweet & Sour Pork', price: '' },
    ],
  },
  {
    title: 'DRINKS',
    columns: ['name','price'],
    items: [
      { name: 'Regular 20 oz', price: '$2.19' },
      { name: 'Large 32 oz', price: '$2.49' },
    ],
  },
];

/** ===== FEATURED GRID (your existing section cards) ===== */

type CardItem = { name: string; price: string; icon: string; spicy?: boolean };
const featuredData: Record<string, CardItem[]> = {
  'WOK STARS': [
    { name: "General Tso's Chicken", price: "$10.95", icon: "🍗", spicy: true },
    { name: 'Beef & Broccoli', price: '$11.25', icon: '🥦' },
    { name: 'Orange Chicken', price: '$10.95', icon: '🍊' },
    { name: 'Kung Pao Chicken', price: '$10.35', icon: '🌶️', spicy: true },
  ],
  'HIDDEN GEMS': [
    { name: 'Mongolian Beef', price: '$11.95', icon: '🐮' },
    { name: 'Sesame Chicken', price: '$10.95', icon: '🥢' },
    { name: 'Emerald Chicken', price: '$10.35', icon: '💎' },
    { name: 'Hunan Shrimp', price: '$10.75', icon: '🍤', spicy: true },
  ],
  'CASH CRUSHES': [
    { name: 'Beef Fried Rice', price: '$11.25', icon: '🍚' },
    { name: 'Chicken Lo Mein', price: '$11.25', icon: '🍜' },
    { name: 'Sweet & Sour Chicken (Lunch)', price: '$9.25', icon: '🍗' },
    { name: 'Regular Drink (20 oz)', price: '$2.19', icon: '🥤' },
  ],
};

/** ===== COMPONENT ===== */

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState<keyof typeof featuredData>('WOK STARS');
  const [hovered, setHovered] = useState<string | null>(null);
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState('');

  // Search across full menu
  const filteredMenu = useMemo(() => {
    const s = q.trim().toLowerCase();
    if (!s) return fullMenuData;
    return fullMenuData
      .map(section => ({
        ...section,
        items: section.items.filter(it =>
          [it.name, it.price, it.lunch, it.dinner, it.note]
            .filter(Boolean)
            .some(v => String(v).toLowerCase().includes(s))
        ),
      }))
      .filter(sec => sec.items.length > 0);
  }, [q]);

  // Close on Esc
  useEffect(() => {
    const h = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    document.addEventListener('keydown', h);
    return () => document.removeEventListener('keydown', h);
  }, []);

  return (
    <section id="menu" className="relative py-20 bg-gradient-to-b from-black via-red-950 to-black text-white">
      {/* subtle background */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute text-6xl"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              transform: `rotate(${Math.random() * 360}deg)`,
            }}
          >
            🥢
          </div>
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <h2
          className="text-7xl font-['Luckiest_Guy'] text-center mb-4 text-yellow-300"
          style={{ textShadow: '5px 5px 0 #000, 7px 7px 0 rgba(255,0,0,0.5)' }}
        >
          FLAVOR MENU
        </h2>
        <p className="text-center font-['Permanent_Marker'] text-xl mb-10 text-red-400">
          Every dish comes with attitude &amp; extra MSG (More Seriously Good!)
        </p>

        {/* Full Menu Button */}
        <div className="flex justify-center mb-10">
          <button
            onClick={() => setOpen(true)}
            className="px-8 py-4 font-['Bangers'] text-2xl comic-border bg-gradient-to-r from-yellow-300 via-yellow-400 to-red-400 text-black hover:scale-110 hover:rotate-1 transition-all shadow-[0_10px_0_#000] active:translate-y-1"
          >
            VIEW FULL MENU 🍽️
          </button>
        </div>

        {/* Category tabs */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {Object.keys(featuredData).map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat as keyof typeof featuredData)}
              className={`px-8 py-4 font-['Bangers'] text-xl comic-border transform hover:scale-110 transition-all ${
                activeCategory === cat
                  ? 'bg-yellow-400 text-black'
                  : 'bg-black text-white hover:bg-gray-900'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {featuredData[activeCategory].map((item, idx) => (
            <div
              key={idx}
              className="relative group"
              onMouseEnter={() => setHovered(item.name)}
              onMouseLeave={() => setHovered(null)}
            >
              <div
                className={`absolute -inset-2 bg-gradient-to-r from-yellow-500 to-red-500 opacity-50 blur-lg group-hover:opacity-100 transition-opacity ${
                  hovered === item.name ? 'animate-pulse' : ''
                }`}
              />
              <div className="relative bg-white text-black p-6 comic-border transform group-hover:scale-105 transition-transform">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-5xl">{item.icon}</span>
                      {item.spicy && <Flame className="w-6 h-6 text-red-600" />}
                    </div>
                    <h3 className="font-['Bangers'] text-2xl mb-2">{item.name}</h3>
                  </div>
                  <div className="bg-green-500 text-white px-4 py-2 comic-border font-['Luckiest_Guy'] text-2xl transform rotate-6">
                    {item.price}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Cash banner */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-gradient-to-r from-green-400 to-emerald-500 p-1 comic-border">
            <div className="bg-black px-8 py-6">
              <div className="flex items-center justify-center gap-3 mb-3">
                <DollarSign className="w-8 h-8 text-green-400" />
                <Star className="w-8 h-8 text-yellow-400" />
                <Sparkles className="w-8 h-8 text-blue-400" />
              </div>
              <p className="font-['Luckiest_Guy'] text-3xl text-yellow-300 mb-2">
                BRING CASH, GET CLASS
              </p>
              <p className="font-['Permanent_Marker'] text-lg text-white">
                Exact change = Good karma 🙏
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ===== FULL MENU MODAL (text) ===== */}
      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Full menu"
          className="fixed inset-0 z-50"
          onClick={(e) => {
            if (e.target === e.currentTarget) setOpen(false);
          }}
        >
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
          <div className="relative h-full overflow-y-auto p-6 sm:p-10">
            <div className="max-w-6xl mx-auto">
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
                <h3
                  className="text-5xl sm:text-6xl font-['Luckiest_Guy'] text-yellow-300"
                  style={{ textShadow: '4px 4px 0 #000, 6px 6px 0 rgba(255,0,0,0.4)' }}
                >
                  FULL MENU
                </h3>
                <div className="flex items-center gap-2">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/60" />
                    <input
                      value={q}
                      onChange={(e) => setQ(e.target.value)}
                      placeholder="Search dishes…"
                      className="pl-9 pr-3 py-2 bg-black/40 text-white rounded comic-border outline-none placeholder:text-white/60"
                    />
                  </div>
                  <button
                    onClick={() => setOpen(false)}
                    className="inline-flex items-center justify-center rounded-full comic-border bg-yellow-400 text-black w-12 h-12 hover:rotate-6 transition-transform"
                    aria-label="Close full menu"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
              </div>

              {/* Sections */}
              <div className="space-y-12">
                {filteredMenu.map((section) => (
                  <div key={section.title}>
                    <div className="mb-5">
                      <h4 className="inline-block font-['Bangers'] text-3xl sm:text-4xl bg-yellow-400 text-black px-5 py-2 comic-border">
                        {section.title}
                      </h4>
                    </div>

                    {/* Table-like list */}
                    <div className="grid grid-cols-1 gap-3">
                      {section.items.map((it, i) => (
                        <div
                          key={i}
                          className="relative bg-white text-black p-4 comic-border"
                        >
                          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                            <div className="flex items-center gap-2 min-w-0">
                              {it.spicy && <Flame className="w-4 h-4 text-red-600 shrink-0" />}
                              <span className="font-['Bangers'] text-xl break-words">
                                {it.name}
                              </span>
                              {it.note && (
                                <span className="text-xs text-black/60">— {it.note}</span>
                              )}
                            </div>
                            <div className="ml-auto flex items-center gap-4 text-right font-['Luckiest_Guy'] text-lg">
                              {section.columns?.includes('lunch') && (
                                <span className="bg-green-500/10 border border-green-600 px-2 py-0.5 rounded text-green-700">
                                  Lunch {it.lunch || '-'}
                                </span>
                              )}
                              {section.columns?.includes('dinner') && (
                                <span className="bg-blue-500/10 border border-blue-600 px-2 py-0.5 rounded text-blue-700">
                                  Dinner {it.dinner || '-'}
                                </span>
                              )}
                              {section.columns?.includes('price') && it.price && (
                                <span className="bg-green-600 text-white px-3 py-1 rounded comic-border">
                                  {it.price}
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Footer */}
              <div className="mt-10 flex items-center justify-center">
                <button
                  onClick={() => setOpen(false)}
                  className="px-6 py-3 font-['Bangers'] text-xl comic-border bg-black text-white hover:bg-gray-900 transition-all"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
