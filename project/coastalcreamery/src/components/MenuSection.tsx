import { useState } from 'react';
import { Sparkles, IceCream, Cookie, GlassWater, Milk, Utensils } from 'lucide-react';

interface MenuItem {
  name: string;
  description?: string;
  image?: string; // Optional: for 3D product images
}

interface MenuCategory {
  title: string;
  items: MenuItem[];
  color: string;
  icon: React.ElementType;
  display: 'grid' | 'list';
  subCategories?: { title: string; items: MenuItem[] }[];
}

const menuData: MenuCategory[] = [
  {
    title: 'Ice Cream & Gelato',
    icon: IceCream,
    color: 'from-blue-300 to-cyan-200',
    display: 'grid',
    items: [], // Parent category, items are in sub-categories
    subCategories: [
      { title: 'Ice Cream', items: [
        { name: 'Cookies and Cream' }, { name: 'Mint Chip' }, { name: 'Strawberry Dip Cheesecake' },
        { name: 'Strawberry' }, { name: 'Vanilla' }, { name: 'Pistachio' }, { name: 'Chocolate' },
        { name: 'Butter Pecan' }, { name: 'Cotton Candy' }, { name: 'Cookie Dough' },
      ]},
      { title: 'Gelato', items: [
        { name: 'Coffee' }, { name: 'Lemon' }, { name: 'Salted Caramel' }, { name: 'Coconut' },
      ]},
    ],
  },
  {
    title: 'Crepes',
    icon: Cookie,
    color: 'from-amber-300 to-yellow-200',
    display: 'grid',
    items: [
      { name: 'The Original', description: 'Nutella and Banana' },
      { name: 'Banana Roll' },
      { name: 'Monkey Business', description: 'Nutella, Banana, Strawberry' },
      { name: 'Doughnut and Cream' },
      { name: 'Strawberry Cheesecake' },
      { name: 'Fruity Delight', description: 'Mixed Berries' },
      { name: 'Lemon and Sugar' },
      { name: 'Cinnabon' },
      { name: 'Waffle Batter Crepe' },
      { name: 'Make Your Own', description: 'Choose sauces, 3 toppings, and 1 ice cream scoop' },
    ],
  },
  {
    title: 'Milkshakes',
    icon: Milk,
    color: 'from-pink-300 to-rose-200',
    display: 'grid',
    items: [
      { name: 'Cookies and Cream' }, { name: 'Oreo' }, { name: 'Butter Pecan' },
      { name: 'Salted Caramel' }, { name: 'Chocolate' }, { name: 'Strawberry' },
      { name: 'Banana' }, { name: 'Coconut' }, { name: 'Pistachio' },
      { name: 'Vanilla' }, { name: 'Peanut Butter' }, { name: 'Avocado' },
    ],
  },
  {
    title: 'Boba Tea',
    icon: GlassWater,
    color: 'from-purple-300 to-indigo-200',
    display: 'grid',
    items: [
      // Add specific Boba flavors here when you have them
      { name: 'Classic Milk Tea' }, { name: 'Taro Milk Tea' }, { name: 'Matcha Latte' }, { name: 'Brown Sugar Boba' },
    ],
  },
  {
    title: 'Toppings & Sauces',
    icon: Utensils,
    color: 'from-emerald-300 to-teal-200',
    display: 'list',
    items: [], // Items are in sub-categories
    subCategories: [
      { title: 'Toppings', items: [
        { name: 'Sprinkles' }, { name: 'Oreo' }, { name: 'Banana' }, { name: 'Marshmallows' },
        { name: 'Strawberry' }, { name: 'Gummy Bears' }, { name: 'Reese\'s' }, { name: 'Fudge' },
        { name: 'M&M\'s' }, { name: 'Whipped Cream' }, { name: 'Chocolate Chip' }, { name: 'Cherries' },
        { name: 'Graham Cracker Crumbs' }, { name: 'Pretzels' }, { name: 'White Chocolate Chips' },
        { name: 'Peanuts' }, { name: 'Toasted Coconut' }, { name: 'Butterscotch' },
        { name: 'Peanut Butter Cups' }, { name: 'Heath Bar' }, { name: 'Butterfinger' },
      ]},
      { title: 'Sauces', items: [
        { name: 'Nutella' }, { name: 'Hot Fudge' }, { name: 'Chocolate' }, { name: 'Caramel' },
        { name: 'Maple Syrup' }, { name: 'Strawberry' }, { name: 'White Chocolate' },
      ]},
    ],
  },
];

const categories = menuData.map(cat => cat.title);

export default function MenuSection() {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [hoveredFlavor, setHoveredFlavor] = useState<string | null>(null);

  const activeCategory = menuData.find(cat => cat.title === selectedCategory);

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
                  ? 'bg-gradient-to-r from-pink-400 to-rose-400 text-white shadow-lg scale-105'
                  : 'bg-white text-cyan-700 hover:bg-cyan-50 shadow-md hover:shadow-xl'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        {activeCategory && (
          <div className="bg-white/60 backdrop-blur-sm p-8 rounded-3xl shadow-lg">
            {activeCategory.display === 'grid' && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {(activeCategory.items.length > 0 ? [{ title: activeCategory.title, items: activeCategory.items }] : activeCategory.subCategories || []).map(subCat => (
                  (subCat.items).map((item, index) => (
                    <div
                      key={index}
                      onMouseEnter={() => setHoveredFlavor(item.name)}
                      onMouseLeave={() => setHoveredFlavor(null)}
                      className="relative group cursor-pointer"
                    >
                      <div className={`bg-gradient-to-br ${activeCategory.color} rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-rotate-2 relative overflow-hidden min-h-[220px] flex flex-col justify-between`}>
                        {hoveredFlavor === item.name && <div className="absolute inset-0 bg-white/20 animate-drip"></div>}
                        <div className="absolute top-2 right-2"><Sparkles className={`w-6 h-6 ${hoveredFlavor === item.name ? 'animate-spin text-yellow-400' : 'text-white/40'}`} /></div>
                        <div>
                          <span className="inline-block px-3 py-1 bg-white/50 rounded-full text-xs font-semibold text-cyan-800 mb-3">{subCat.title}</span>
                          <h3 className="text-2xl font-bold text-cyan-900 mb-2 leading-tight">{item.name}</h3>
                        </div>
                        {item.description && <p className="text-cyan-800 leading-relaxed text-sm">{item.description}</p>}
                      </div>
                    </div>
                  ))
                ))}
              </div>
            )}
            
            {activeCategory.display === 'list' && activeCategory.subCategories && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {activeCategory.subCategories.map(subCat => (
                  <div key={subCat.title}>
                    <h3 className="text-3xl font-bold text-cyan-800 mb-4 font-display">{subCat.title}</h3>
                    <ul className="space-y-2">
                      {subCat.items.map((item, index) => (
                        <li key={index} className="bg-gradient-to-r from-white to-transparent p-3 rounded-lg text-cyan-900 font-medium">
                          {item.name}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
