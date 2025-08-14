import React from 'react';
import { Clock, Zap, ExternalLink } from 'lucide-react';

const Recipes = () => {
  const base = import.meta.env.BASE_URL; // handles subpaths like /wakefield/

  const recipes = [
    {
      title: 'Steak & Potatoes',
      image: `${base}images/steak.png`,
      calories: '698 cal',
      protein: '60g protein',
      time: '15 min'
    },
    {
      title: 'Shrimp Veg Pasta',
      image: `${base}images/shrimp-pasta.png`,
      calories: '497 cal',
      protein: '45g protein',
      time: '25 min'
    },
    {
      title: 'Mango Chicken',
      image: `${base}images/chicken-curry.png`,
      calories: '598 cal',
      protein: '78g protein',
      time: '5 min'
    }
  ];

  return (
    <section className="py-20 bg-white" id="recipes">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Fuel Your Body. <span className="text-sky-500">Enjoy Every Bite.</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Macro-friendly meals that keep progress moving — simple, fast, and tasty.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {recipes.map((recipe, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              <div className="relative overflow-hidden">
                <img
                  src={recipe.image}
                  alt={recipe.title}
                  className="w-full h-64 object-cover hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{recipe.title}</h3>

                <div className="flex items-center justify-between mb-6 text-gray-600">
                  <div className="flex items-center space-x-2">
                    <Zap className="w-4 h-4 text-sky-500" />
                    <span className="font-medium">{recipe.calories}</span>
                  </div>

                  <div className="flex items-center space-x-2">
                    <span className="font-medium text-sky-500">{recipe.protein}</span>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-gray-500" />
                    <span>{recipe.time}</span>
                  </div>
                </div>

                {/* THEMED CTA */}
                <button
                  className="w-full bg-sky-500 hover:bg-sky-600 text-white py-3 px-6 rounded-full font-bold transition-all duration-300
                             flex items-center justify-center gap-2 group
                             focus:outline-none focus:ring-4 focus:ring-sky-200 active:scale-[0.98] shadow-sm hover:shadow-md"
                >
                  <span>Get Recipe</span>
                  <ExternalLink className="w-4 h-4 translate-x-0 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Recipes;
