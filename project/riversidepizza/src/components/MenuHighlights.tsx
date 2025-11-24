import { Star } from 'lucide-react';

const menuItems = [
  {
    category: "Signature Pizzas",
    icon: "🍕",
    items: [
      {
        name: "The Riverside Supreme",
        description: "Pepperoni, sausage, peppers, onions, mushrooms, olives - loaded the way you love it",
        price: "From $14.99",
        popular: true
      },
      {
        name: "White Pie Perfection",
        description: "Ricotta, mozzarella, garlic, and fresh basil on our signature crust",
        price: "From $13.99",
        popular: true
      },
      {
        name: "Meat Lovers Paradise",
        description: "Pepperoni, sausage, bacon, ham, and meatballs - for serious carnivores",
        price: "From $15.99",
        popular: false
      }
    ]
  },
  {
    category: "Famous Subs",
    icon: "🥖",
    items: [
      {
        name: "Italian Hero",
        description: "Salami, capicola, ham, provolone, lettuce, tomato, onions, oil & vinegar",
        price: "From $10.99",
        popular: true
      },
      {
        name: "Chicken Parm Classic",
        description: "Breaded chicken cutlet, marinara, melted mozzarella on toasted bread",
        price: "From $11.99",
        popular: true
      },
      {
        name: "Philly Cheesesteak",
        description: "Shaved steak, sautéed onions, peppers, and melted American cheese",
        price: "From $12.99",
        popular: false
      }
    ]
  },
  {
    category: "Wings & Sides",
    icon: "🍗",
    items: [
      {
        name: "Buffalo Wings",
        description: "Crispy wings tossed in your choice of sauce: mild, hot, BBQ, or garlic parm",
        price: "From $11.99",
        popular: true
      },
      {
        name: "Mozzarella Sticks",
        description: "Golden fried and served with our house marinara sauce",
        price: "$8.99",
        popular: false
      },
      {
        name: "Garlic Knots",
        description: "Fresh-baked and brushed with garlic butter and parmesan",
        price: "$5.99",
        popular: false
      }
    ]
  }
];

export default function MenuHighlights() {
  return (
    <section id="menu" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Fan Favorites & Signature Dishes
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Every item made fresh to order. Every bite packed with flavor. These are the dishes that keep our neighbors coming back.
          </p>
        </div>

        <div className="space-y-16">
          {menuItems.map((category, idx) => (
            <div key={idx}>
              <div className="flex items-center space-x-3 mb-8">
                <span className="text-5xl">{category.icon}</span>
                <h3 className="text-3xl font-bold text-gray-900">{category.category}</h3>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                {category.items.map((item, itemIdx) => (
                  <div
                    key={itemIdx}
                    className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border-2 border-gray-200 hover:border-red-700 transition-all hover:shadow-xl"
                  >
                    {item.popular && (
                      <div className="flex items-center space-x-1 text-yellow-500 mb-3">
                        <Star className="w-5 h-5 fill-current" />
                        <span className="text-sm font-bold text-gray-900">Customer Favorite</span>
                      </div>
                    )}
                    <h4 className="text-xl font-bold text-gray-900 mb-2">{item.name}</h4>
                    <p className="text-gray-600 mb-4 leading-relaxed">{item.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-red-700">{item.price}</span>
                      <button className="bg-red-700 text-white px-4 py-2 rounded-lg font-semibold hover:bg-red-800 transition-colors">
                        Add to Order
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-gray-900 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-800 transition-colors shadow-xl">
            View Complete Menu
          </button>
        </div>
      </div>
    </section>
  );
}
