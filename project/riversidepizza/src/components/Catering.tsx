import { Users, ShoppingBag, Pizza } from 'lucide-react';

const packages = [
  {
    name: "Office Lunch",
    serves: "10-15 people",
    includes: [
      "5 Large Pizzas (choice of toppings)",
      "Caesar Salad",
      "Garlic Knots",
      "2L Soda"
    ],
    price: "$89.99",
    icon: ShoppingBag
  },
  {
    name: "Party Package",
    serves: "20-25 people",
    includes: [
      "8 Large Pizzas",
      "50 Buffalo Wings",
      "2 Garden Salads",
      "Garlic Knots",
      "3 x 2L Sodas"
    ],
    price: "$149.99",
    icon: Users
  },
  {
    name: "Big Event",
    serves: "40-50 people",
    includes: [
      "15 Large Pizzas",
      "100 Wings (2 flavors)",
      "4 Party Subs",
      "3 Large Salads",
      "Appetizer Platter",
      "Drinks for all"
    ],
    price: "$299.99",
    icon: Pizza
  }
];

export default function Catering() {
  return (
    <section id="catering" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Catering & Large Orders
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Feeding a crowd? We've got you covered. From office meetings to birthday parties, game days to graduation celebrations—we make it easy and delicious.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {packages.map((pkg, idx) => {
            const Icon = pkg.icon;
            return (
              <div
                key={idx}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border-2 border-gray-200 hover:border-red-700 transition-all hover:shadow-xl"
              >
                <Icon className="w-12 h-12 text-red-700 mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                <p className="text-gray-600 mb-6 font-medium">{pkg.serves}</p>
                <ul className="space-y-2 mb-6">
                  {pkg.includes.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex items-start text-gray-700">
                      <span className="text-red-600 mr-2">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="text-3xl font-bold text-red-700 mb-4">{pkg.price}</div>
                <button className="w-full bg-red-700 text-white py-3 rounded-lg font-bold hover:bg-red-800 transition-colors">
                  Order This Package
                </button>
              </div>
            );
          })}
        </div>

        <div className="bg-gradient-to-br from-red-700 to-red-800 rounded-2xl p-8 md:p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">Custom Catering Options Available</h3>
          <p className="text-xl text-red-100 mb-8 max-w-3xl mx-auto">
            Need something specific? We can build a custom package for your event. Call us or fill out our contact form with your needs, and we'll create the perfect menu for your occasion.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-white text-red-700 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-300 transition-colors">
              Request Custom Quote
            </button>
            <a href="tel:5557897499" className="bg-yellow-400 text-red-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-300 transition-colors">
              Call (555) 789-PIZZA
            </a>
          </div>
          <p className="text-red-100 mt-6 text-sm">
            💡 Pro tip: Order 24 hours in advance for best availability
          </p>
        </div>
      </div>
    </section>
  );
}
