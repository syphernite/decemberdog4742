import { useState } from 'react';
import { Star, Flame, DollarSign, Sparkles } from 'lucide-react';

interface MenuItem {
  name: string;
  price: string;
  icon: string;
  spicy?: boolean;
  fortune?: string;
}

const menuData: Record<string, MenuItem[]> = {
  'WOK STARS': [
    { name: "General Tso's Chicken", price: "$12", icon: "🍗", spicy: true, fortune: "You will crave this again tomorrow" },
    { name: "Beef & Broccoli", price: "$13", icon: "🥦", fortune: "Greatness comes in green" },
    { name: "Orange Chicken", price: "$11", icon: "🍊", fortune: "Sweet victory awaits" },
    { name: "Sesame Chicken", price: "$12", icon: "🌿", fortune: "You will discover crunchy happiness" },
  ],
  'RICE & NOODLES': [
    { name: "House Fried Rice", price: "$10", icon: "🍚", fortune: "Abundance is a full bowl" },
    { name: "Lo Mein", price: "$10", icon: "🍜", fortune: "Long noodles, long life" },
    { name: "Singapore Noodles", price: "$12", icon: "🍝", spicy: true, fortune: "Spice opens new paths" },
  ],
  'SIDES': [
    { name: "Egg Roll (2)", price: "$5", icon: "🥟", fortune: "Double luck enters your day" },
    { name: "Crab Rangoon (6)", price: "$7", icon: "🦀", fortune: "Golden pockets of joy" },
    { name: "Steamed Broccoli", price: "$4", icon: "🥦", fortune: "Greens power your journey" },
  ],
  'DRINKS': [
    { name: "Soda", price: "$2", icon: "🥤" },
    { name: "Iced Tea", price: "$2", icon: "🧊" },
    { name: "Bottled Water", price: "$2", icon: "💧" },
  ],
};

export default function Menu() {
  const [showFortune, setShowFortune] = useState<string | null>(null);

  return (
    <section id="menu" className="relative py-20 bg-black text-white overflow-hidden">
      {/* background ornaments */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-10 text-9xl">🥡</div>
        <div className="absolute bottom-10 left-10 text-9xl">🐯</div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2
            className="text-6xl md:text-7xl font-['Luckiest_Guy'] text-yellow-300"
            style={{ textShadow: '4px 4px 0 #000, 6px 6px 0 rgba(255,0,0,0.5)' }}
          >
            FULL MENU
          </h2>
          <p className="mt-3 font-['Permanent_Marker'] text-white text-xl">
            No tabs. No hiding. Everything we serve, all in one scroll.
          </p>
        </div>

        {/* value ribbon */}
        <div className="mx-auto max-w-4xl mb-10">
          <div className="bg-gradient-to-r from-red-600 via-yellow-500 to-orange-500 p-1 rounded-xl">
            <div className="bg-black rounded-xl p-4 flex flex-wrap items-center justify-center gap-6">
              <div className="flex items-center gap-2">
                <DollarSign className="w-5 h-5" />
                <span className="font-['Bangers'] text-lg">Fair Prices</span>
              </div>
              <div className="flex items-center gap-2">
                <Flame className="w-5 h-5" />
                <span className="font-['Bangers'] text-lg">Fresh & Hot</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5" />
                <span className="font-['Bangers'] text-lg">Fan Favorites</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5" />
                <span className="font-['Bangers'] text-lg">Made with Love</span>
              </div>
            </div>
          </div>
        </div>

        {/* full expanded menu */}
        <div className="space-y-16">
          {Object.entries(menuData).map(([category, items]) => (
            <div key={category}>
              <h3 className="text-4xl md:text-5xl font-['Luckiest_Guy'] text-center mb-8 text-yellow-300">
                {category}
              </h3>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {items.map((item, idx) => (
                  <div
                    key={idx}
                    className="relative group bg-white text-black p-6 comic-border transform hover:-translate-y-1 hover:rotate-1 transition-transform"
                  >
                    {/* Sticker icon */}
                    <div className="absolute -top-5 -right-5 w-16 h-16 rounded-full bg-red-600 text-white border-4 border-black flex items-center justify-center font-['Bangers'] text-3xl transform rotate-12">
                      {item.icon}
                    </div>

                    {/* Title + price row */}
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <h4 className="font-['Bangers'] text-2xl leading-snug">
                        {item.name}
                      </h4>
                      <span className="font-['Luckiest_Guy'] text-xl px-3 py-1 bg-yellow-300 border-2 border-black">
                        {item.price}
                      </span>
                    </div>

                    {/* Badges */}
                    <div className="flex items-center gap-3 mb-4">
                      {item.spicy && (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 border-2 border-black bg-red-500 text-white font-['Bangers'] text-xs rounded">
                          <Flame className="w-4 h-4" /> Spicy
                        </span>
                      )}
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 border-2 border-black bg-emerald-300 font-['Bangers'] text-xs rounded">
                        <Star className="w-4 h-4" /> Popular
                      </span>
                    </div>

                    {/* Fortune toggle (if present) */}
                    {item.fortune && (
                      <div
                        className="relative mt-2"
                        onClick={() => setShowFortune(showFortune === item.name ? null : item.name)}
                      >
                        <div className="cursor-pointer text-center font-['Permanent_Marker'] text-sm underline">
                          {showFortune === item.name ? 'Hide fortune' : 'Reveal fortune'}
                        </div>
                        {showFortune === item.name && (
                          <div className="mt-3 p-3 border-2 border-black bg-yellow-100 font-['Permanent_Marker'] text-sm">
                            {item.fortune}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* cash-only ribbon */}
        <div className="mt-16 mx-auto max-w-3xl">
          <div className="bg-gradient-to-r from-yellow-500 via-red-500 to-orange-500 p-1 comic-border">
            <div className="bg-black p-8 text-center">
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
    </section>
  );
}
