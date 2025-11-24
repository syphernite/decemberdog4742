const specials = [
  {
    day: "Monday",
    title: "Pizza Monday",
    deal: "Large 1-Topping Pizza",
    price: "$12.99",
    color: "from-red-500 to-orange-500"
  },
  {
    day: "Tuesday",
    title: "Two-for-Tuesday",
    deal: "Buy One Sub, Get One 50% Off",
    price: "Mix & Match",
    color: "from-blue-500 to-cyan-500"
  },
  {
    day: "Wednesday",
    title: "Wings Day",
    deal: "50 Wings + 2 Large Pizzas",
    price: "$49.99",
    color: "from-orange-500 to-yellow-500"
  },
  {
    day: "Thursday",
    title: "Family Feast",
    deal: "2 Large Pizzas + Garlic Knots + 2L Soda",
    price: "$34.99",
    color: "from-green-500 to-emerald-500"
  },
  {
    day: "Friday",
    title: "Weekend Kickoff",
    deal: "Large Specialty Pizza",
    price: "$16.99",
    color: "from-purple-500 to-pink-500"
  }
];

const combos = [
  {
    name: "Quick Lunch Combo",
    includes: "2 Slices + Can of Soda",
    price: "$6.99",
    time: "11am - 3pm"
  },
  {
    name: "Party Package",
    includes: "3 Large Pizzas + 30 Wings + 2L Soda",
    price: "$59.99",
    time: "Anytime"
  },
  {
    name: "Game Day Special",
    includes: "5 Large Pizzas + 50 Wings + Caesar Salad",
    price: "$89.99",
    time: "Weekend Only"
  }
];

export default function DailySpecials() {
  return (
    <section id="specials" className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Daily Specials & Combo Deals
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            More food, more flavor, better value. Check out what's hot today.
          </p>
        </div>

        <div className="mb-16">
          <h3 className="text-3xl font-bold mb-8 text-center">This Week's Specials</h3>
          <div className="grid md:grid-cols-5 gap-4">
            {specials.map((special, idx) => (
              <div
                key={idx}
                className="bg-white text-gray-900 rounded-xl p-6 shadow-xl hover:scale-105 transition-transform"
              >
                <div className="text-center">
                  <div className={`bg-gradient-to-br ${special.color} text-white rounded-lg py-2 px-4 mb-4 font-bold`}>
                    {special.day}
                  </div>
                  <h4 className="font-bold text-lg mb-2">{special.title}</h4>
                  <p className="text-sm text-gray-600 mb-3">{special.deal}</p>
                  <div className="text-2xl font-bold text-red-700">{special.price}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-3xl font-bold mb-8 text-center">Combo Deals</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {combos.map((combo, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-red-600 to-red-700 rounded-xl p-8 shadow-xl hover:shadow-2xl transition-all"
              >
                <div className="text-center">
                  <h4 className="text-2xl font-bold mb-3">{combo.name}</h4>
                  <p className="text-red-100 mb-4 text-lg">{combo.includes}</p>
                  <div className="text-4xl font-bold text-yellow-300 mb-2">{combo.price}</div>
                  <div className="text-sm text-red-100 mb-6">{combo.time}</div>
                  <button className="bg-white text-red-700 px-6 py-3 rounded-lg font-bold hover:bg-yellow-300 transition-colors w-full">
                    Order Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
