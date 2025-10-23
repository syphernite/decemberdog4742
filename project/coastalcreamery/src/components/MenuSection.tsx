import { useState } from 'react';
import { Sparkles } from 'lucide-react';

interface Flavor {
  name: string;
  category: string;
  description: string;
  color: string;
}

const flavors: Flavor[] = [
  { name: 'Salty Seabreeze Vanilla', category: 'Wave Riders', description: 'Classic vanilla with a hint of sea salt', color: 'from-amber-100 to-yellow-50' },
  { name: 'Chocolate Tide Pool', category: 'Wave Riders', description: 'Rich dark chocolate swirled with caramel', color: 'from-amber-800 to-amber-600' },
  { name: 'Strawberry Sunset', category: 'Wave Riders', description: 'Fresh strawberries meet creamy perfection', color: 'from-pink-300 to-rose-200' },
  { name: 'Pier Mint Chip', category: 'Beach Bums', description: 'Cool mint with chocolate chunks', color: 'from-emerald-300 to-teal-200' },
  { name: 'Boardwalk Butter Pecan', category: 'Beach Bums', description: 'Buttery with toasted pecans', color: 'from-amber-200 to-orange-100' },
  { name: 'Coastal Caramel Swirl', category: 'Tidal Treasures', description: 'Local honey caramel ribbon', color: 'from-yellow-600 to-amber-400' },
  { name: 'Seashell Cookie Dough', category: 'Tidal Treasures', description: 'Homemade dough chunks throughout', color: 'from-stone-300 to-amber-100' },
  { name: 'Blueberry Beach Blast', category: 'Beach Bums', description: 'NC blueberries in creamy bliss', color: 'from-blue-300 to-purple-200' },
];

const categories = ['All', 'Wave Riders', 'Beach Bums', 'Tidal Treasures'];

export default function MenuSection() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [hoveredFlavor, setHoveredFlavor] = useState<string | null>(null);

  const filteredFlavors = selectedCategory === 'All'
    ? flavors
    : flavors.filter(f => f.category === selectedCategory);

  return (
    <section className="py-20 bg-gradient-to-b from-amber-50 to-cyan-50 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" className="w-full fill-amber-50">
          <path d="M0,32L48,37.3C96,43,192,53,288,53.3C384,53,480,43,576,42.7C672,43,768,53,864,56C960,59,1056,53,1152,48C1248,43,1344,37,1392,34.7L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-bold text-cyan-800 mb-4 font-display">
            Scoop the Menu
          </h2>
          <p className="text-xl text-cyan-600 italic">Handcrafted happiness, one scoop at a time</p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-pink-400 to-rose-400 text-white shadow-lg scale-110'
                  : 'bg-white text-cyan-700 hover:bg-cyan-50 shadow-md hover:shadow-xl'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredFlavors.map((flavor, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredFlavor(flavor.name)}
              onMouseLeave={() => setHoveredFlavor(null)}
              className="relative group cursor-pointer"
            >
              <div className={`bg-gradient-to-br ${flavor.color} rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-rotate-2 relative overflow-hidden min-h-[280px] flex flex-col`}>
                {hoveredFlavor === flavor.name && (
                  <div className="absolute inset-0 bg-white/20 animate-drip"></div>
                )}

                <div className="absolute top-2 right-2">
                  <Sparkles className={`w-6 h-6 ${hoveredFlavor === flavor.name ? 'animate-spin text-yellow-400' : 'text-white/40'}`} />
                </div>

                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <span className="inline-block px-3 py-1 bg-white/50 rounded-full text-xs font-semibold text-cyan-800 mb-3">
                      {flavor.category}
                    </span>
                    <h3 className="text-2xl font-bold text-cyan-900 mb-3 leading-tight">
                      {flavor.name}
                    </h3>
                  </div>

                  <p className="text-cyan-800 leading-relaxed">
                    {flavor.description}
                  </p>
                </div>

                <div className="absolute -bottom-2 left-0 right-0 h-4 bg-gradient-to-b from-transparent to-white/30 rounded-b-3xl drip-effect"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
