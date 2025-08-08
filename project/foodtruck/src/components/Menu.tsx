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

  const imgUrl = (u: string) => (u.includes('?') ? u : `${u}?auto=compress&cs=tinysrgb&w=1200`);

  const tacos: Taco[] = [
    { name: "Seoul Street", description: "Korean bulgogi beef with kimchi slaw and gochujang aioli", price: "$12", spiceLevel: 3, image: imgUrl("https://images.pexels.com/photos/7613568/pexels-photo-7613568.jpeg") },
    { name: "Mumbai Express", description: "Curry-spiced chicken tikka with mint chutney and pickled onions", price: "$11", spiceLevel: 4, image: imgUrl("https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg") },
    { name: "Baja Blaze", description: "Crispy fish with chipotle crema, mango salsa, and cabbage", price: "$12", spiceLevel: 2, image: imgUrl("https://images.pexels.com/photos/4958792/pexels-photo-4958792.jpeg") },
    { name: "Havana Heat", description: "Cuban mojo pork with citrus slaw and habanero glaze", price: "$11", spiceLevel: 5, image: imgUrl("https://images.pexels.com/photos/4393021/pexels-photo-4393021.jpeg") },
    { name: "Tokyo Tempura", description: "Shrimp tempura with wasabi mayo and pickled ginger", price: "$13", spiceLevel: 2, image: imgUrl("https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg") },
    { name: "Mediterranean Market", description: "Falafel with tahini, cucumber, and sumac onions", price: "$10", spiceLevel: 1, image: imgUrl("https://images.pexels.com/photos/5639266/pexels-photo-5639266.jpeg") },
    { name: "Rio Rojo", description: "Churrasco steak with chimichurri and roasted peppers", price: "$13", spiceLevel: 4, image: imgUrl("https://images.pexels.com/photos/6941004/pexels-photo-6941004.jpeg") },
    { name: "Sichuan Sizzle", description: "Spicy pork with numbing pepper, scallions, and sesame crunch", price: "$12", spiceLevel: 5, image: imgUrl("https://images.pexels.com/photos/5792320/pexels-photo-5792320.jpeg") },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => e.isIntersecting && setIsVisible(true)),
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="menu" ref={sectionRef} className="py-20 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">Signature Tacos</h2>
          <p className="mt-3 text-gray-400">Global flavors, all on one truck.</p>
        </div>

        <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ${isVisible ? 'opacity-100' : 'opacity-0'} transition-opacity`}>
          {tacos.map((taco, idx) => (
            <div key={idx} className="bg-gray-900 rounded-lg overflow-hidden shadow-xl transform hover:scale-[1.01] transition-transform duration-300">
              <img
                loading="lazy"
                decoding="async"
                src={taco.image}
                alt={taco.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold">{taco.name}</h3>
                  <span className="text-yellow-400 font-bold">{taco.price}</span>
                </div>
                <p className="mt-2 text-gray-400">{taco.description}</p>

                <div className="mt-4 flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Flame key={i} className={`w-4 h-4 ${i < taco.spiceLevel ? 'text-red-500' : 'text-gray-600'}`} />
                  ))}
                </div>

                <button className="w-full mt-5 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-semibold py-2 rounded-md transform hover:scale-105 transition-all duration-300">
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
