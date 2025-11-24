import { Users, Star, Clock, Pizza } from 'lucide-react';

const stats = [
  { icon: Pizza, value: "40+", label: "Years Serving", color: "text-red-600" },
  { icon: Star, value: "4.8", label: "Star Rating", color: "text-yellow-500" },
  { icon: Users, value: "50K+", label: "Happy Customers", color: "text-blue-600" },
  { icon: Clock, value: "30min", label: "Average Wait", color: "text-green-600" }
];

export default function About() {
  return (
    <section className="py-20 bg-gradient-to-br from-orange-50 to-red-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Your Hometown Spot Since 1985
            </h2>
            <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
              <p>
                For four decades, Riverside Pizza & Subs has been the place where neighbors become friends and every meal feels like coming home. We're not just serving food—we're serving memories.
              </p>
              <p>
                From families celebrating Friday nights to students grabbing a quick bite between classes, from workers fueling up for the day to friends catching up over oversized slices—this is where the community gathers.
              </p>
              <p>
                Our secret? Fresh ingredients, time-tested recipes, generous portions, and a team that treats every customer like family. When someone asks "Where should we eat?" around here, the answer is always the same: <span className="font-bold text-red-700">Riverside</span>.
              </p>
            </div>
          </div>
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">What Makes Us Different</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">✓</span>
                  <span>Fresh dough made daily in-house</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">✓</span>
                  <span>Locally sourced produce and meats</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">✓</span>
                  <span>Family recipes passed down for generations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">✓</span>
                  <span>Fast service without compromising quality</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">✓</span>
                  <span>Portions that actually satisfy</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">✓</span>
                  <span>Prices that respect your wallet</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div key={idx} className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow">
                <Icon className={`w-12 h-12 mx-auto mb-3 ${stat.color}`} />
                <div className="text-4xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
