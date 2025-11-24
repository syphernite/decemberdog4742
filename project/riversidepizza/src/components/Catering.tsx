import { Users, ShoppingBag, Pizza } from 'lucide-react';

const packages = [
  {
    name: 'Office Lunch',
    serves: '10–15 people',
    includes: ['5 Large Pizzas (choice of toppings)', 'Caesar Salad', 'Garlic Knots', '2L Soda'],
    price: '$89.99',
    icon: ShoppingBag,
  },
  {
    name: 'Game Day Spread',
    serves: '15–20 people',
    includes: ['8 Large Pizzas', '50 Wings (mix of sauces)', 'Loaded Fries Tray', 'Assorted 2L Sodas'],
    price: '$169.99',
    icon: Users,
  },
  {
    name: 'Family Party',
    serves: '20–25 people',
    includes: ['10 Large Pizzas', 'Pasta Tray (Baked Ziti or Lasagna)', 'Garlic Bread', 'Salad Bowl'],
    price: '$219.99',
    icon: Pizza,
  },
];

export default function Catering() {
  return (
    <section id="catering" className="py-20 bg-red-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Catering &amp; Group Orders</h2>
          <p className="text-lg text-red-100 max-w-2xl mx-auto">
            Feeding the office, the team, or the whole family? Riverside puts together hot, ready-to-eat spreads that
            keep everyone full and happy.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-10">
          {packages.map(pkg => {
            const Icon = pkg.icon;
            return (
              <div
                key={pkg.name}
                className="bg-white/95 rounded-2xl p-8 shadow-2xl flex flex-col justify-between border border-red-100"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-gray-900">{pkg.name}</h3>
                    <div className="bg-red-100 text-red-700 rounded-full p-3">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>
                  <p className="text-sm font-semibold text-red-700 mb-3">{pkg.serves}</p>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    {pkg.includes.map(item => (
                      <li key={item}>• {item}</li>
                    ))}
                  </ul>
                </div>
                <div className="mt-6">
                  <p className="text-2xl font-extrabold text-gray-900">{pkg.price}</p>
                  <p className="text-xs text-gray-500 mt-1">+ tax · Custom packages available</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-gradient-to-r from-yellow-400 to-red-500 rounded-3xl px-8 py-10 md:px-12 md:py-12 flex flex-col md:flex-row items-center justify-between shadow-2xl">
          <div className="text-white mb-6 md:mb-0">
            <h3 className="text-3xl font-extrabold mb-2">Need Riverside for your next event?</h3>
            <p className="text-red-50 max-w-xl">
              Call ahead and the team will help you plan the right mix of pizzas, subs, wings, and pasta for your crew.
              Perfect for offices, birthdays, team celebrations, and more.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <button className="bg-white text-red-700 px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-200 transition-colors">
              Request Custom Quote
            </button>
            <a
              href="tel:12522232277"
              className="bg-yellow-50 text-red-800 px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-200 transition-colors text-center"
            >
              Call (252) 223-2277
            </a>
          </div>
        </div>

        <p className="text-red-100 mt-6 text-sm text-center md:text-left">
          💡 Pro tip: Order 24 hours in advance for best availability on big group orders.
        </p>
      </div>
    </section>
  );
}
