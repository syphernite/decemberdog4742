import React from 'react';
import { Star } from 'lucide-react';

const FeaturedDrinks: React.FC = () => {
  const featuredDrinks = [
    {
      name: "Signature Cappuccino",
      description: "Rich espresso topped with velvety steamed milk and artistic foam",
      image: "https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      price: "$4.50",
      popular: true
    },
    {
      name: "Honey Lavender Latte",
      description: "A floral twist on our classic latte with local honey and dried lavender",
      image: "https://images.pexels.com/photos/851555/pexels-photo-851555.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      price: "$5.25",
      popular: false
    },
    {
      name: "Cold Brew Special",
      description: "Smooth, concentrated coffee steeped for 12 hours, served over ice",
      image: "https://images.pexels.com/photos/1475554/pexels-photo-1475554.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      price: "$4.75",
      popular: true
    },
    {
      name: "Matcha Cloud Latte",
      description: "Premium ceremonial grade matcha with steamed oat milk and a touch of vanilla",
      image: "https://images.pexels.com/photos/5946960/pexels-photo-5946960.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      price: "$5.50",
      popular: false
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-coffee-800 mb-4">
            Customer Favorites
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover the drinks that keep our community coming back for more
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredDrinks.map((drink, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-cream-200"
            >
              <div className="relative">
                <img
                  src={drink.image}
                  alt={drink.name}
                  className="w-full h-48 object-cover"
                />
                {drink.popular && (
                  <div className="absolute top-3 right-3 bg-amber-400 text-coffee-800 px-2 py-1 rounded-full text-xs font-semibold flex items-center">
                    <Star className="h-3 w-3 mr-1 fill-current" />
                    Popular
                  </div>
                )}
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-semibold text-coffee-800">{drink.name}</h3>
                  <span className="text-coffee-600 font-bold">{drink.price}</span>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{drink.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedDrinks;