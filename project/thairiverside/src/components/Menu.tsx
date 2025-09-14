// src/components/Menu.tsx
import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Flame } from 'lucide-react';

const Menu = () => {
  const [expandedCategory, setExpandedCategory] = useState<string | null>('appetizers');

  const menuCategories = [
    {
      id: 'appetizers',
      title: 'Appetizers',
      items: [
        { name: 'Crispy Rangoons', price: '$8.95', description: 'Crispy wontons with creamy filling' },
        { name: 'Veggie Spring Rolls', price: '$7.95', description: 'Fresh vegetables wrapped in rice paper' },
        { name: 'Skewers with Peanut Sauce', price: '$9.95', description: 'Grilled skewers served with house sauce' },
        { name: 'Hot and Sour Soup', price: '$6.95', description: 'Bright and savory broth' },
      ],
    },
    {
      id: 'noodles',
      title: 'Noodles',
      items: [
        { name: 'Stir-Fry Noodles', price: '$12.95', description: 'Rice noodles with savory sauce' },
        { name: 'Spicy Basil Noodles', price: '$13.95', description: 'Wide noodles with basil and chilies', spicy: true },
        { name: 'Sweet Soy Noodles', price: '$12.95', description: 'Noodles with greens and sweet soy' },
        { name: 'Lo Mein', price: '$11.95', description: 'Soft noodles with mixed vegetables' },
      ],
    },
    {
      id: 'curries',
      title: 'Curries',
      items: [
        { name: 'Mild Curry', price: '$14.95', description: 'Rich curry with potatoes and onions' },
        { name: 'Red Curry', price: '$13.95', description: 'Spicy coconut curry with bamboo', spicy: true },
        { name: 'Green Curry', price: '$13.95', description: 'Very spicy curry with eggplant', spicy: true },
        { name: 'Yellow Curry', price: '$13.95', description: 'Mild curry with pineapple and peppers' },
      ],
    },
    {
      id: 'rice',
      title: 'Fried Rice',
      items: [
        { name: 'Pineapple Fried Rice', price: '$14.95', description: 'Jasmine rice with pineapple and cashews' },
        { name: 'House Fried Rice', price: '$11.95', description: 'Classic fried rice with egg and vegetables' },
        { name: 'Basil Fried Rice', price: '$12.95', description: 'Fried rice with basil and chilies', spicy: true },
        { name: 'Veggie Fried Rice', price: '$11.95', description: 'Vegetarian friendly favorite' },
      ],
    },
    {
      id: 'specials',
      title: 'Chef Specials',
      items: [
        { name: 'Grilled Shrimp Plate', price: '$18.95', description: 'Seasoned shrimp with citrus glaze' },
        { name: 'Crispy Chicken Plate', price: '$16.95', description: 'Crispy chicken with sweet sauce' },
        { name: 'Whole Fish', price: '$22.95', description: 'Fried whole fish with herbs' },
        { name: 'Roast Duck Curry', price: '$19.95', description: 'Roasted duck in red curry' },
      ],
    },
    {
      id: 'vegetarian',
      title: 'Vegan & Vegetarian',
      items: [
        { name: 'Tofu Noodles', price: '$11.95', description: 'Rice noodles with crispy tofu' },
        { name: 'Vegetable Green Curry', price: '$12.95', description: 'Mixed vegetables in coconut curry', spicy: true },
        { name: 'Mushroom Salad', price: '$10.95', description: 'Spicy mushroom salad with herbs' },
        { name: 'Eggplant Basil', price: '$11.95', description: 'Stir-fried eggplant with basil' },
      ],
    },
  ];

  const toggleCategory = (categoryId: string) => {
    setExpandedCategory(expandedCategory === categoryId ? null : categoryId);
  };

  return (
    <section id="menu" className="py-24 bg-gradient-to-br from-white via-accent-50/30 to-warm-50/30 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-40 left-10 w-24 h-24 bg-accent-400 rounded-full blur-2xl"></div>
        <div className="absolute bottom-40 right-10 w-32 h-32 bg-warm-400 rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-6 relative">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-white/80 backdrop-blur-sm px-6 py-2 rounded-full mb-6 shadow-warm">
              <span className="text-accent-600 font-medium text-sm tracking-wider uppercase">Sample Menu</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-display font-bold text-gray-900 mb-8">
              <span className="bg-gradient-to-r from-accent-700 via-warm-600 to-accent-700 bg-clip-text text-transparent">
                Our Menu
              </span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-accent-400 to-warm-400 mx-auto mb-8"></div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-warm inline-block">
              <p className="text-sm text-gray-500 font-medium">
                Demo content. Items and prices are placeholders.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            {menuCategories.map((category) => (
              <div key={category.id} className="bg-white/90 backdrop-blur-sm rounded-2xl overflow-hidden shadow-warm hover:shadow-warm-lg transition-all duration-300 border border-accent-100/20">
                <button
                  onClick={() => toggleCategory(category.id)}
                  className="w-full px-8 py-6 flex justify-between items-center text-left hover:bg-gradient-to-r hover:from-accent-50/50 hover:to-warm-50/50 transition-all duration-300 group"
                >
                  <h3 className="text-2xl font-bold text-gray-900 font-display group-hover:text-accent-700 transition-colors">
                    {category.title}
                  </h3>
                  <div className="p-2 rounded-full bg-accent-100/50 group-hover:bg-accent-200/50 transition-colors">
                    {expandedCategory === category.id ? (
                      <ChevronUp className="w-6 h-6 text-accent-600 transform group-hover:scale-110 transition-transform" />
                    ) : (
                      <ChevronDown className="w-6 h-6 text-accent-600 transform group-hover:scale-110 transition-transform" />
                    )}
                  </div>
                </button>

                {expandedCategory === category.id && (
                  <div className="px-8 pb-6 bg-gradient-to-br from-white/50 to-accent-50/30">
                    <div className="space-y-6">
                      {category.items.map((item, index) => (
                        <div key={index} className="group/item flex justify-between items-start p-4 rounded-xl hover:bg-white/80 transition-all duration-300 border border-transparent hover:border-accent-200/30">
                          <div className="flex-1 pr-4">
                            <div className="flex items-center mb-2">
                              <h4 className="font-bold text-gray-900 mr-3 text-lg group-hover/item:text-accent-700 transition-colors">
                                {item.name}
                              </h4>
                              {item.spicy && (
                                <div className="flex items-center bg-red-100 px-2 py-1 rounded-full">
                                  <Flame className="w-4 h-4 text-red-500 animate-pulse" />
                                  <span className="text-xs text-red-600 ml-1 font-medium">SPICY</span>
                                </div>
                              )}
                            </div>
                            <p className="text-gray-600 leading-relaxed">
                              {item.description}
                            </p>
                          </div>
                          <div className="flex-shrink-0">
                            <span className="text-2xl font-bold text-accent-600 bg-gradient-to-r from-accent-600 to-warm-600 bg-clip-text text-transparent">
                              {item.price}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
