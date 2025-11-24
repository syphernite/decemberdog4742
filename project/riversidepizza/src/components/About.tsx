import { Users, Star, Clock, Pizza } from 'lucide-react';

const stats = [
  { icon: Pizza, value: '25+', label: 'Years Serving', color: 'text-red-600' },
  { icon: Star, value: '4.3', label: 'Star Rating', color: 'text-yellow-500' },
  { icon: Users, value: '50K+', label: 'Happy Customers', color: 'text-blue-600' },
  { icon: Clock, value: '30min', label: 'Average Wait', color: 'text-green-600' },
];

export default function About() {
  return (
    <section className="py-20 bg-gradient-to-br from-orange-50 to-red-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Old-School Pizza Shop Energy.
              <br />
              Modern Comfort Food Cravings.
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              Riverside Pizza &amp; Subs has been a local fixture in Newport since 1999. The kind of spot where staff
              know the regulars, delivery drivers recognize your voice, and the pizza box on the counter means the night
              just got better.
            </p>
            <p className="text-lg text-gray-700">
              From family dinners and game-day spreads to late-night cheesesteaks, Riverside is built on simple ideas:
              real ingredients, generous portions, and consistent flavor that keeps people coming back week after week.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow"
                >
                  <Icon className={`w-12 h-12 mx-auto mb-3 ${stat.color}`} />
                  <div className="text-4xl font-bold text-gray-900 mb-1">{stat.value}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">What Makes Riverside Different</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Serious Portions</h4>
              <p className="text-gray-600">
                Giant pies, overstuffed subs, loaded fries, and salads that actually count as a meal. No tiny-plate
                energy here.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Real Ingredients</h4>
              <p className="text-gray-600">
                Fresh dough, real cheese, classic sauce, and toppings prepped in-house. It tastes like the kind of
                pizza shop you grew up with.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Local Love</h4>
              <p className="text-gray-600">
                Newport families, workers, and visitors have been calling on Riverside for decades for dependable,
                no-drama, good food.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
