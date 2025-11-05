import { useState } from 'react';
import { Sparkles, IceCream, Cookie, GlassWater, Milk, Utensils } from 'lucide-react';
import berryDelight from '../assets/berry-delight.png';
import pumpkinPieCaramelApple from '../assets/pumpkin-pie-caramel-apple.png';

interface MenuItem {
  name: string;
  description?: string;
  image?: string; // Optional: for 3D product images
  price?: string;
}

interface MenuCategory {
  title: string;
  items: MenuItem[];
  color: string;
  icon: React.ElementType;
  display: 'grid' | 'list';
  description?: string;
  subCategories?: { title: string; items: MenuItem[]; description?: string }[];
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
    description: 'Make fresh to order with your choice of fillings. Includes 2 fillings + 1 sauce',
    items: [], // Parent category, items are in sub-categories
    subCategories: [
      { title: 'Varieties', items: [
        { name: 'Berry Delight', description: 'Mixed berries and cream', image: berryDelight, price: '$11.27 / $9.77' },
        { name: 'Pumpkin Pie Caramel Apple', description: 'Pumpkin pie filling with caramel and apple slices', image: pumpkinPieCaramelApple, price: '$11.27 / $9.77' },
        { name: 'Strawberry and Banana', price: '$11.27 / $9.77' },
        { name: 'Banana and Nutella', price: '$11.27 / $9.77' },
        { name: 'Kiwi and Strawberry', price: '$11.27 / $9.77' },
        { name: 'Cookie and Cream', price: '$11.27 / $9.77' },
        { name: 'Strawberry Cheesecake', price: '$11.27 / $9.77' },
        { name: 'Salted Caramel', price: '$11.27 / $9.77' },
        { name: 'Pistachio Chocolate', price: '$11.27 / $9.77' },
        { name: 'Coconut', price: '$11.27 / $9.77' },
        { name: 'Butter Pecan', price: '$11.27 / $9.77' },
        { name: 'Make Your Own', description: 'Pick 3 toppings, choice of sauces, pick 1 ice cream scoop or none', price: '$11.27 / $9.77' },
      ]},
      { title: 'Fillings', items: [
        { name: 'Nutella' }, { name: 'Strawberry' }, { name: 'Banana' }, { name: 'Peanut Butter' }, { name: 'Cookies & Cream' },
      ]},
      { title: 'Sauces', items: [
        { name: 'Chocolate' }, { name: 'Caramel' }, { name: 'Nutella' }, { name: 'Condensed Milk' }, { name: 'Honey' }, { name: 'Maple Syrup' },
      ]},
      { title: 'Add-ons', items: [
        { name: 'Ice cream scoop', price: '$2.00' }, { name: 'Extra fillings', price: '$1.00' },
      ]},
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
    items: [], // Parent category, items are in sub-categories
    subCategories: [
      { title: 'Flavors', items: [
        { name: 'Mango' }, { name: 'Strawberry' }, { name: 'Vanilla' }, { name: 'Taro Tea' }, { name: 'Thai Tea' },
      ]},
      { title: 'Sizes', items: [
        { name: 'Medium', price: '$6.95' }, { name: 'Large', price: '$7.95' },
      ]},
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
        // From the menu image (common toppings)
        { name: 'Chocolate Chips' }, { name: 'Oreo' }, { name: 'KitKat' }, { name: 'Hershey' },
        { name: 'M&M\'s' }, { name: 'Reese\'s' }, { name: 'Whipped Cream' }, { name: 'Strawberry' },
        { name: 'Gummy Worms' }, { name: 'Gummy Bears' }, { name: 'Almonds' }, { name: 'Pocky' },
        { name: 'Marshmallow' }, { name: 'Sprinkles' }, { name: 'Rainbow Sprinkles' }, { name: 'Pretzels' },
        { name: 'Toasted Coconut' }, { name: 'Peanuts' }, { name: 'Chocolate Sprinkle' }, { name: 'White Chocolate Chips' },
      ]},
      { title: 'Sauces', items: [
        // Sauces from the menu image
        { name: 'Chocolate' }, { name: 'Caramel' }, { name: 'Nutella' }, { name: 'Condensed Milk' },
        { name: 'Honey' }, { name: 'Maple Syrup' }, { name: 'Strawberry' }, { name: 'White Chocolate' },
      ]},
    ],
  },
  {
    title: 'Waffle Ice Cream (Build Your Own) - $10.95',
    icon: IceCream,
    color: 'from-pink-300 to-fuchsia-200',
    display: 'grid',
    items: [],
    subCategories: [
      { title: 'Waffle Ice Cream Base', items: [
        { name: 'Original Waffle' }, { name: 'Japanese Coconut' }, { name: 'Japanese Vanilla' },
      ]},
      { title: 'Ice Cream Flavors', items: [
        { name: 'Strawberry' }, { name: 'Chocolate' }, { name: 'Vanilla' }, { name: 'Cookies and Cream' }, { name: 'Whipped Cream' },
      ]},
      { title: 'Toppings', items: [
        { name: 'Chocolate Chips' }, { name: 'Oreo' }, { name: 'KitKat' }, { name: 'Hershey' }, { name: 'M&M\'s' }, { name: 'Reese\'s' },
        { name: 'Chocolate sprinkle' }, { name: 'White chocolate sprinkle' }, { name: 'Oreo crumbs' }, { name: 'Rainbow sprinkles' },
        { name: 'Strawberry' }, { name: 'Blueberry' }, { name: 'Mango' }, { name: 'Whipped cream' }, { name: 'Marshmallow' },
        { name: 'Pocky' }, { name: 'Almonds' }, { name: 'Gummy Worms' }, { name: 'Gummy Bears' },
      ]},
      { title: 'Sauces', items: [
        { name: 'Chocolate' }, { name: 'Caramel' }, { name: 'Nutella' }, { name: 'Condensed Milk' }, { name: 'Honey' }, { name: 'Maple Syrup' },
      ]},
      { title: 'Add-ons', items: [
        { name: 'Add on scoop', price: '$2.00' }, { name: 'Add on toppings', price: '$0.25' },
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
            {activeCategory.description && (
              <div className="text-center mb-8">
                <p className="text-lg text-cyan-700 italic">{activeCategory.description}</p>
              </div>
            )}
            {activeCategory.display === 'grid' && (
              // Special handling for Crepes: show 'Varieties' as cards (with images) and other sub-categories as plain lists
              activeCategory.title === 'Crepes' ? (
                <>
                  {/* Varieties grid (cards with images) */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-6 items-stretch">
                    {((activeCategory.subCategories || []).find(sc => sc.title === 'Varieties')?.items || []).map((item, index) => (
                      <div key={index} className="relative group cursor-pointer h-72">
                        <div className={`h-full bg-gradient-to-br ${activeCategory.color} rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-rotate-2 relative overflow-hidden flex flex-col justify-between`}>
                          {hoveredFlavor === item.name && <div className="absolute inset-0 bg-white/20 animate-drip"></div>}
                          <div className="absolute top-2 right-2"><Sparkles className={`w-6 h-6 ${hoveredFlavor === item.name ? 'animate-spin text-yellow-400' : 'text-white/40'}`} /></div>

                          <div>
                            {/* fixed image area so all cards align */}
                            <div className="mb-4 rounded-lg overflow-hidden bg-gray-50 w-full h-40">
                              {item.image ? (
                                <img src={item.image} alt={item.name} className="w-full h-full object-cover object-center block" />
                              ) : (
                                <div className="w-full h-full flex items-center justify-center text-cyan-700">
                                  <span className="text-sm font-medium">No image</span>
                                </div>
                              )}
                            </div>

                            <div className="flex items-start justify-between">
                              <div className="pr-4">
                                <span className="inline-block px-3 py-1 bg-white/50 rounded-full text-xs font-semibold text-cyan-800 mb-3">Varieties</span>
                                {item.description && <p className="text-cyan-800 text-sm mb-2">{item.description}</p>}
                                <h3 className="text-2xl font-bold text-cyan-900 mb-2 leading-tight">{item.name}</h3>
                              </div>
                              {item.price && (
                                <div className="text-right ml-4">
                                  <span className="text-sm font-semibold text-cyan-900">{item.price}</span>
                                </div>
                              )}
                            </div>
                          </div>

                          {item.description && <p className="text-cyan-800 leading-relaxed text-sm">{item.description}</p>}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Other crepe sub-categories as plain lists (no cards) */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {((activeCategory.subCategories || []).filter(sc => sc.title !== 'Varieties')).map(subCat => (
                      <div key={subCat.title}>
                        <h3 className="text-3xl font-bold text-cyan-800 mb-4 font-display">{subCat.title}</h3>
                        {subCat.description && <p className="text-cyan-700 mb-3">{subCat.description}</p>}
                        <ul className="flex flex-wrap gap-2">
                          {subCat.items.map((item, idx) => (
                            <li key={idx} className="px-3 py-2 bg-white/80 rounded-full text-cyan-900 font-medium text-sm">{item.name}{item.price ? ` — ${item.price}` : ''}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </>
              ) : (
                // Default grid behavior for other categories
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                  {(activeCategory.items.length > 0 ? [{ title: activeCategory.title, items: activeCategory.items }] : activeCategory.subCategories || []).map(subCat => (
                    (subCat.items).map((item, index) => (
                      <div
                        key={index}
                        onMouseEnter={() => setHoveredFlavor(item.name)}
                        onMouseLeave={() => setHoveredFlavor(null)}
                        className="relative group cursor-pointer h-72"
                      >
                        <div className={`h-full bg-gradient-to-br ${activeCategory.color} rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-rotate-2 relative overflow-hidden flex flex-col justify-between`}>
                          {hoveredFlavor === item.name && <div className="absolute inset-0 bg-white/20 animate-drip"></div>}
                          <div className="absolute top-2 right-2"><Sparkles className={`w-6 h-6 ${hoveredFlavor === item.name ? 'animate-spin text-yellow-400' : 'text-white/40'}`} /></div>

                          <div>
                            <div className="mb-4 rounded-lg overflow-hidden bg-gray-50 w-full h-40">
                              {item.image ? (
                                <img src={item.image} alt={item.name} className="w-full h-full object-cover object-center block" />
                              ) : (
                                <div className="w-full h-full flex items-center justify-center text-cyan-700">
                                  <span className="text-sm font-medium">No image</span>
                                </div>
                              )}
                            </div>

                            <div className="flex items-start justify-between">
                              <div>
                                <span className="inline-block px-3 py-1 bg-white/50 rounded-full text-xs font-semibold text-cyan-800 mb-3">{subCat.title}</span>
                                {subCat.description && <p className="text-cyan-800 text-sm mb-2">{subCat.description}</p>}
                                <h3 className="text-2xl font-bold text-cyan-900 mb-2 leading-tight">{item.name}</h3>
                              </div>
                              {item.price && (
                                <div className="text-right ml-4">
                                  <span className="text-sm font-semibold text-cyan-900">{item.price}</span>
                                </div>
                              )}
                            </div>
                          </div>
                          {item.description && <p className="text-cyan-800 leading-relaxed text-sm">{item.description}</p>}
                        </div>
                      </div>
                    ))
                  ))}
                </div>
              )
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
