import React, { useEffect, useRef, useState } from 'react';
import { Calendar, Clock, Star } from 'lucide-react';

// Request compressed, reasonable width images
const imgUrl = (u: string) => (u.includes('?') ? u : `${u}?auto=compress&cs=tinysrgb&w=1200`);

const Specials = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  const specials = [
    {
      title: "Taco Tuesday Madness",
      description: "Buy 2 tacos, get the 3rd for $5. Every Tuesday from 11 AM to 9 PM",
      image: imgUrl("https://images.pexels.com/photos/2456435/pexels-photo-2456435.jpeg"),
      tag: "Weekly Special",
      time: "Tuesdays 11 AM – 9 PM",
      rating: 4.9
    },
    {
      title: "Weekend Fiesta Platter",
      description: "Family-size platter with 12 tacos + 4 sides. Limited Fri–Sun.",
      image: imgUrl("https://images.pexels.com/photos/533918/pexels-photo-533918.jpeg"),
      tag: "Limited Time",
      time: "Fri–Sun",
      rating: 4.8
    },
    {
      title: "Late Night Crunch",
      description: "After 9 PM menu with crispy favorites and secret sauces.",
      image: imgUrl("https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg"),
      tag: "Night Special",
      time: "Daily after 9 PM",
      rating: 4.7
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => e.isIntersecting && setIsVisible(true)),
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return; // don't start slider until visible
    const id = window.setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % specials.length);
    }, 4500);
    return () => window.clearInterval(id);
  }, [isVisible, specials.length]);

  return (
    <section
      id="specials"
      ref={sectionRef}
      className={`py-20 bg-gray-950 transition-opacity ${isVisible ? 'opacity-100' : 'opacity-0'}`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">Specials</h2>
          <p className="mt-3 text-gray-400">Fresh deals you don’t want to miss</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Feature carousel */}
          <div className="lg:col-span-2">
            {/* NOTE: set a fixed height so absolute slides have a box to fill */}
            <div className="relative overflow-hidden rounded-2xl h-96">
              {specials.map((sp, idx) => (
                <div
                  key={sp.title}
                  className={`absolute inset-0 transition-opacity duration-700 ${idx === currentSlide ? 'opacity-100' : 'opacity-0'}`}
                >
                  <img
                    loading="lazy"
                    decoding="async"
                    src={sp.image}
                    alt={sp.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/10" />
                  <div className="absolute bottom-0 p-6">
                    <span className="inline-block px-3 py-1 text-xs rounded-full bg-yellow-500 text-black font-semibold">{sp.tag}</span>
                    <h3 className="text-2xl font-bold mt-3">{sp.title}</h3>
                    <p className="text-gray-200 mt-1">{sp.description}</p>
                    <div className="flex items-center gap-4 mt-3 text-sm text-gray-300">
                      <span className="inline-flex items-center gap-1"><Clock className="w-4 h-4" /> {sp.time}</span>
                      <span className="inline-flex items-center gap-1"><Star className="w-4 h-4 text-yellow-400" /> {sp.rating}</span>
                    </div>
                  </div>
                </div>
              ))}
              {/* Dots */}
              <div className="absolute bottom-4 right-4 flex gap-2">
                {specials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentSlide(i)}
                    className={`w-2.5 h-2.5 rounded-full ${i === currentSlide ? 'bg-white' : 'bg-white/40'}`}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Upcoming / calendar card */}
          <div className="bg-gray-900 rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <Calendar className="w-5 h-5 text-yellow-400" />
              <h4 className="text-xl font-semibold">Upcoming</h4>
            </div>
            <ul className="space-y-4">
              {specials.map((sp) => (
                <li key={sp.title} className="flex gap-3">
                  <img
                    loading="lazy"
                    decoding="async"
                    src={sp.image}
                    alt={sp.title}
                    className="w-16 h-16 object-cover rounded-md flex-shrink-0"
                  />
                  <div>
                    <p className="font-medium">{sp.title}</p>
                    <p className="text-sm text-gray-400">{sp.time}</p>
                  </div>
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              className="mt-6 inline-flex items-center justify-center w-full rounded-md bg-yellow-500 text-black font-semibold py-2 hover:scale-[1.02] transition"
            >
              Book the Truck
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Specials;
