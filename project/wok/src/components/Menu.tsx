import { useState } from 'react';
import { Star, Flame, DollarSign, Sparkles } from 'lucide-react';

interface MenuItem {
  name: string;
  price: string;
  icon: string;
  spicy?: boolean;
}

const menuData: Record<string, MenuItem[]> = {
  'WOK STARS': [
    { name: "General Tso's Chicken", price: "$12", icon: "🍗", spicy: true },
    { name: "Beef & Broccoli", price: "$13", icon: "🥦" },
    { name: "Orange Chicken", price: "$11", icon: "🍊" },
    { name: "Kung Pao Chicken", price: "$12", icon: "🌶️", spicy: true }
  ],
  'HIDDEN GEMS': [
    { name: "Mapo Tofu", price: "$10", icon: "🧈", spicy: true },
    { name: "Salt & Pepper Squid", price: "$14", icon: "🦑" },
    { name: "Twice-Cooked Pork", price: "$13", icon: "🥓" },
    { name: "Dan Dan Noodles", price: "$11", icon: "🍜", spicy: true }
  ],
  'CASH CRUSHES': [
    { name: "Combo #1: Fried Rice + Egg Roll", price: "$8", icon: "🍱" },
    { name: "Combo #2: Lo Mein + Spring Roll", price: "$9", icon: "🍝" },
    { name: "Combo #3: Chow Mein + Dumpling", price: "$8.50", icon: "🥟" },
    { name: "Family Feast (Feeds 4)", price: "$40", icon: "🎉" }
  ]
};

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState('WOK STARS');
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  return (
    <section id="menu" className="relative py-20 bg-gradient-to-b from-black via-red-950 to-black text-white">
      <div className="absolute inset-0 opacity-5">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute text-6xl"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              transform: `rotate(${Math.random() * 360}deg)`
            }}
          >
            🥢
          </div>
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-7xl font-['Luckiest_Guy'] text-center mb-4 text-yellow-300" style={{
          textShadow: '5px 5px 0 #000, 7px 7px 0 rgba(255,0,0,0.5)'
        }}>
          FLAVOR MENU
        </h2>
        <p className="text-center font-['Permanent_Marker'] text-xl mb-12 text-red-400">
          Every dish comes with attitude & extra MSG (More Seriously Good!)
        </p>

        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {Object.keys(menuData).map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-8 py-4 font-['Bangers'] text-xl comic-border transform hover:scale-110 transition-all ${
                activeCategory === category
                  ? 'bg-yellow-400 text-black'
                  : 'bg-black text-white hover:bg-gray-900'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {menuData[activeCategory].map((item, idx) => (
            <div
              key={idx}
              className="relative group"
              onMouseEnter={() => setHoveredItem(item.name)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <div className={`absolute -inset-2 bg-gradient-to-r from-yellow-500 to-red-500 opacity-50 blur-lg group-hover:opacity-100 transition-opacity ${
                hoveredItem === item.name ? 'animate-pulse' : ''
              }`}></div>

              <div className="relative bg-white text-black p-6 comic-border transform group-hover:scale-105 transition-transform">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-5xl">{item.icon}</span>
                      {item.spicy && (
                        <Flame className="w-6 h-6 text-red-600 pulse-glow" />
                      )}
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

        <div className="mt-16 text-center">
          <div className="inline-block bg-gradient-to-r from-green-400 to-emerald-500 p-1 comic-border">
            <div className="bg-black px-8 py-6">
              <div className="flex items-center justify-center gap-3 mb-3">
                <DollarSign className="w-8 h-8 text-green-400 pulse-glow" />
                <Star className="w-8 h-8 text-yellow-400 pulse-glow" />
                <Sparkles className="w-8 h-8 text-blue-400 pulse-glow" />
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
    </section>
  );
}
