import React, { useState } from 'react';
import { Filter } from 'lucide-react';

const categories = ['All', 'Starters', 'Wings', 'Burgers', 'Tacos', 'Mains', 'Kids', 'Drinks'];

const menuItems = [
  // Starters
  { category: 'Starters', name: 'Loaded Nachos', description: 'Crispy chips with cheese, jalapeños, and your choice of meat', price: '$12.99' },
  { category: 'Starters', name: 'Onion Rings', description: 'Beer-battered rings served with ranch dipping sauce', price: '$8.99' },
  { category: 'Starters', name: 'Mozzarella Sticks', description: 'Golden fried cheese sticks with marinara sauce', price: '$9.99' },
  
  // Wings
  { category: 'Wings', name: 'Buffalo Wings', description: 'Traditional wings with blue cheese and celery', price: '$9.99' },
  { category: 'Wings', name: 'BBQ Wings', description: 'Smoky barbecue sauce wings', price: '$9.99' },
  { category: 'Wings', name: 'Honey Garlic Wings', description: 'Sweet and savory wings', price: '$10.99' },
  
  // Burgers
  { category: 'Burgers', name: 'Classic Burger', description: 'Half-pound beef with lettuce, tomato, onion, and pickles', price: '$11.99' },
  { category: 'Burgers', name: 'Bacon Cheeseburger', description: 'Classic burger with bacon and cheddar cheese', price: '$13.99' },
  { category: 'Burgers', name: 'BBQ Ranch Burger', description: 'With BBQ sauce, ranch, and onion rings', price: '$14.99' },
  
  // Tacos
  { category: 'Tacos', name: 'Blackened Shrimp Tacos', description: 'Three tacos with slaw and chipotle sauce', price: '$14.99' },
  { category: 'Tacos', name: 'Fish Tacos', description: 'Beer-battered fish with cabbage slaw', price: '$13.99' },
  { category: 'Tacos', name: 'Beef Tacos', description: 'Seasoned ground beef with traditional toppings', price: '$11.99' },
  
  // Mains
  { category: 'Mains', name: 'Reuben Sandwich', description: 'Stacked corned beef with swiss cheese and sauerkraut', price: '$12.99' },
  { category: 'Mains', name: 'Shrimp and Grits', description: 'Creamy cheese grits with seasoned shrimp', price: '$16.99' },
  { category: 'Mains', name: 'Fish and Chips', description: 'Beer-battered cod with seasoned fries', price: '$15.99' },
  
  // Kids
  { category: 'Kids', name: 'Kids Burger', description: 'Quarter-pound burger with fries', price: '$7.99' },
  { category: 'Kids', name: 'Chicken Tenders', description: 'Three tenders with fries and dipping sauce', price: '$8.99' },
  { category: 'Kids', name: 'Grilled Cheese', description: 'Classic grilled cheese with fries', price: '$6.99' },
  
  // Drinks
  { category: 'Drinks', name: 'Draft Beer', description: 'Ask about our rotating selection', price: '$4.50' },
  { category: 'Drinks', name: 'House Wine', description: 'Red or white wine by the glass', price: '$6.00' },
  { category: 'Drinks', name: 'Soft Drinks', description: 'Coke, Pepsi, Sprite, and more', price: '$2.99' }
];

export default function Menu() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredItems = selectedCategory === 'All' 
    ? menuItems 
    : menuItems.filter(item => item.category === selectedCategory);

  return (
    <div className="pt-24 pb-16 bg-charcoal min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Menu</h1>
          <p className="text-gray-300 text-lg">Delicious food made fresh daily</p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          <Filter className="w-5 h-5 text-gray-400 mr-2 hidden sm:block" />
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ease-in-out ${
                selectedCategory === category
                  ? 'bg-amber-500 text-charcoal'
                  : 'bg-slate-850 text-gray-300 hover:bg-gray-700 border border-gray-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredItems.map((item, index) => (
            <div key={index} className="bg-slate-850 p-6 rounded-lg border border-gray-700 hover:border-amber-500/50 transition-all duration-200 ease-in-out hover:shadow-lg">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-white font-bold text-lg">{item.name}</h3>
                <span className="text-amber-500 font-bold text-lg ml-4">{item.price}</span>
              </div>
              <p className="text-gray-300 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Specials Note */}
        <div className="bg-amber-500/10 border border-amber-500/30 rounded-lg p-6 text-center">
          <h3 className="text-white font-bold mb-2">Ask about today's specials!</h3>
          <p className="text-gray-300">
            Our chefs prepare fresh daily specials featuring seasonal ingredients and local favorites.
          </p>
        </div>

        <div className="text-center mt-8">
          <p className="text-gray-400 text-sm">
            Menu items and prices subject to change. Call for current specials.
          </p>
        </div>
      </div>
    </div>
  );
}