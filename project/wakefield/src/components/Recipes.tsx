import React from 'react';
import { Clock, Zap, ExternalLink } from 'lucide-react';

const Recipes = () => {
  const recipes = [
    { title: 'High-Protein Cinema Nachos', image: 'https://images.pexels.com/photos/1647163/pexels-photo-1647163.jpeg?auto=compress&cs=tinysrgb&w=800', calories: '420 cal', protein: '35g protein', time: '15 min' },
    { title: 'BBQ Beef Bowl Meal Prep', image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800', calories: '484 cal', protein: '50g protein', time: '25 min' },
    { title: 'Coconut Yogurt Bowl', image: 'https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?auto=compress&cs=tinysrgb&w=800', calories: '320 cal', protein: '22g protein', time: '5 min' },
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
          {recipes.map((r) => (
            <div key={r.title} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <div className="relative overflow-hidden">
                <img src={r.image} alt={r.title} className="w-full h-64 object-cover hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{r.title}</h3>

                <div className="flex items-center justify-between mb-6 text-gray-600">
                  <div className="flex items-center space-x-2">
                    <Zap className="w-4 h-4 text-sky-500" />
                    <span className="font-medium">{r.calories}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="font-medium text-sky-500">{r.protein}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-gray-500" />
                    <span>{r.time}</span>
                  </div>
                </div>

                <a
                  href="#contact"
                  className="w-full inline-flex items-center justify-center bg-sky-500 hover:bg-sky-600 text-white py-3 px-6 rounded-full font-bold transition-all duration-300 group"
                >
                  <span>Get Recipe</span>
                  <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Recipes;
