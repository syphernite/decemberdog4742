import React, { useState } from 'react';

const Menu: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('coffee');

  const menuCategories = {
    coffee: {
      title: "Coffee & Espresso",
      items: [
        { name: "Espresso", description: "Rich, full-bodied shot of pure coffee essence", price: "$2.50" },
        { name: "Americano", description: "Espresso with hot water, smooth and bold", price: "$3.25" },
        { name: "Cappuccino", description: "Equal parts espresso, steamed milk, and foam", price: "$4.50" },
        { name: "Latte", description: "Espresso with steamed milk and light foam", price: "$4.75" },
        { name: "Macchiato", description: "Espresso 'marked' with a dollop of steamed milk", price: "$4.25" },
        { name: "Mocha", description: "Chocolate and espresso with steamed milk", price: "$5.00" },
        { name: "Flat White", description: "Double espresso with microfoam milk", price: "$4.50" },
        { name: "Cold Brew", description: "Smooth, concentrated coffee steeped for 12 hours", price: "$4.75" }
      ]
    },
    specialty: {
      title: "Specialty Drinks",
      items: [
        { name: "Honey Lavender Latte", description: "Floral twist with local honey and dried lavender", price: "$5.25" },
        { name: "Maple Cinnamon Latte", description: "Warm spices with pure maple syrup", price: "$5.00" },
        { name: "Vanilla Bean Frappé", description: "Blended iced coffee with vanilla and whipped cream", price: "$5.50" },
        { name: "Caramel Macchiato", description: "Vanilla syrup, steamed milk, espresso, and caramel drizzle", price: "$5.25" },
        { name: "Iced Brown Sugar Oat Milk Latte", description: "Brown sugar syrup with creamy oat milk over ice", price: "$5.50" },
        { name: "Seasonal Spice Latte", description: "Rotating seasonal blend of warming spices", price: "$5.00" }
      ]
    },
    tea: {
      title: "Teas & Matcha",
      items: [
        { name: "Matcha Cloud Latte", description: "Ceremonial grade matcha with steamed oat milk", price: "$5.50" },
        { name: "Earl Grey", description: "Classic bergamot-infused black tea", price: "$3.50" },
        { name: "Chamomile Dreams", description: "Soothing herbal blend perfect for evening", price: "$3.25" },
        { name: "Green Tea", description: "Delicate and refreshing organic green tea", price: "$3.25" },
        { name: "Chai Latte", description: "Spiced tea blend with steamed milk", price: "$4.25" },
        { name: "Jasmine Phoenix Pearls", description: "Hand-rolled green tea with jasmine flowers", price: "$4.00" },
        { name: "Iced Matcha", description: "Premium matcha over ice with your choice of milk", price: "$5.00" }
      ]
    },
    pastries: {
      title: "Pastries & Treats",
      items: [
        { name: "Croissant", description: "Buttery, flaky French pastry", price: "$3.50" },
        { name: "Almond Croissant", description: "Filled with sweet almond cream and sliced almonds", price: "$4.25" },
        { name: "Blueberry Muffin", description: "Fresh blueberries in a tender, moist muffin", price: "$3.75" },
        { name: "Banana Bread", description: "Homemade with ripe bananas and walnuts", price: "$3.25" },
        { name: "Scone", description: "Traditional British-style with clotted cream", price: "$3.50" },
        { name: "Cinnamon Roll", description: "Warm, gooey pastry with cream cheese glaze", price: "$4.00" },
        { name: "Avocado Toast", description: "Multigrain bread with smashed avocado and seasonings", price: "$7.50" }
      ]
    }
  };

  const categories = Object.keys(menuCategories);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-coffee-800 mb-4">
            Our Menu
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Crafted with care, served with passion
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center mb-8 border-b border-cream-200">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 text-sm font-medium transition-colors duration-200 border-b-2 ${
                activeCategory === category
                  ? 'text-coffee-600 border-coffee-600'
                  : 'text-gray-500 border-transparent hover:text-coffee-600 hover:border-coffee-300'
              }`}
            >
              {menuCategories[category as keyof typeof menuCategories].title}
            </button>
          ))}
        </div>

        {/* Menu Items */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-coffee-800 mb-8 text-center">
            {menuCategories[activeCategory as keyof typeof menuCategories].title}
          </h3>
          
          <div className="grid gap-6">
            {menuCategories[activeCategory as keyof typeof menuCategories].items.map((item, index) => (
              <div 
                key={index}
                className="flex justify-between items-start p-6 bg-cream-50 rounded-lg hover:bg-cream-100 transition-colors duration-200"
              >
                <div className="flex-1">
                  <h4 className="text-lg font-semibold text-coffee-800 mb-2">
                    {item.name}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
                <div className="ml-4 text-lg font-bold text-coffee-600">
                  {item.price}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;