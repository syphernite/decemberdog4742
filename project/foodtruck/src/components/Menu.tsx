import React, { useEffect, useRef, useState } from 'react';
import { Flame } from 'lucide-react';

interface Taco {
  name: string;
  description: string;
  price: string;
  spiceLevel: number;
  image: string;
}

const Menu = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const tacos: Taco[] = [
    {
      name: "Seoul Street",
      description: "Korean bulgogi beef with kimchi slaw and gochujang aioli",
      price: "$12",
      spiceLevel: 3,
      image: "https://images.pexels.com/photos/7613568/pexels-photo-7613568.jpeg"
    },
    {
      name: "Mumbai Express",
      description: "Curry-spiced chicken tikka with mint chutney and pickled onions",
      price: "$11",
      spiceLevel: 4,
      image: "https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg"
    },
    {
      name: "Mediterranean Magic",
      description: "Lamb shawarma with tzatziki, olives, and fresh herbs",
      price: "$13",
      spiceLevel: 2,
      image: "https://images.pexels.com/photos/4958792/pexels-photo-4958792.jpeg"
    },
    {
      name: "Tokyo Fusion",
      description: "Teriyaki salmon with wasabi cream and crispy seaweed",
      price: "$14",
      spiceLevel: 2,
      image: "https://images.pexels.com/photos/4393021/pexels-photo-4393021.jpeg"
    },
    {
      name: "Bangkok Fire",
      description: "Thai basil pork with sriracha lime sauce and crushed peanuts",
      price: "$11",
      spiceLevel: 5,
      image: "https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg"
    },
    {
      name: "Moroccan Sunset",
      description: "Spiced lamb with harissa, preserved lemons, and fresh cilantro",
      price: "$13",
      spiceLevel: 4,
      image: "https://images.pexels.com/photos/5639266/pexels-photo-5639266.jpeg"
    },
    {
      name: "Caribbean Vibes",
      description: "Jerk chicken with mango salsa and coconut lime crema",
      price: "$12",
      spiceLevel: 3,
      image: "https://images.pexels.com/photos/6941004/pexels-photo-6941004.jpeg"
    },
    {
      name: "Peruvian Power",
      description: "Aji amarillo beef with crispy sweet potato and cilantro",
      price: "$13",
      spiceLevel: 4,
      image: "https://images.pexels.com/photos/5792320/pexels-photo-5792320.jpeg"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const SpiceMeter = ({ level }: { level: number }) => {
    return (
      <div className="flex items-center space-x-1">
        {[...Array(5)].map((_, i) => (
          <Flame
            key={i}
            className={`w-4 h-4 ${
              i < level 
                ? 'text-red-500 animate-bounce-slow' 
                : 'text-gray-400'
            }`}
            style={{ animationDelay: `${i * 0.1}s` }}
          />
        ))}
      </div>
    );
  };

  return (
    <section ref={sectionRef} id="menu" className="py-20 bg-gradient-to-br from-red-900 via-gray-900 to-yellow-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`font-heading text-4xl md:text-5xl text-white mb-4 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            Signature <span className="text-yellow-400">Tacos</span>
          </h2>
          <p className={`text-xl text-gray-300 max-w-3xl mx-auto font-body ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
            Each taco is a journey around the world, crafted with authentic ingredients and bold flavors
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {tacos.map((taco, index) => (
            <div
              key={taco.name}
              className={`bg-white rounded-2xl overflow-hidden shadow-xl card-hover ${
                isVisible ? 'animate-fade-in' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={taco.image}
                  alt={taco.name}
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-black/70 rounded-full px-3 py-1">
                  <SpiceMeter level={taco.spiceLevel} />
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-heading text-xl text-gray-900">{taco.name}</h3>
                  <span className="text-2xl font-bold text-red-600">{taco.price}</span>
                </div>
                
                <p className="text-gray-600 font-body text-sm leading-relaxed mb-4">
                  {taco.description}
                </p>
                
                <button className="w-full bg-gradient-to-r from-red-500 to-yellow-500 text-white py-2 rounded-lg font-bold hover:from-red-600 hover:to-yellow-600 transform hover:scale-105 transition-all duration-300">
                  Order Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;