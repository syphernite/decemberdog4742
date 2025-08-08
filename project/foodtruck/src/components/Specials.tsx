import React, { useEffect, useRef, useState } from 'react';
import { Calendar, Clock, Star } from 'lucide-react';

const Specials = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  const specials = [
    {
      title: "Taco Tuesday Madness",
      description: "Buy 2 tacos, get the 3rd for $5. Every Tuesday from 11 AM to 9 PM",
      image: "https://images.pexels.com/photos/2456435/pexels-photo-2456435.jpeg",
      tag: "Weekly Special",
      day: "Tuesday"
    },
    {
      title: "Weekend Warrior Combo",
      description: "3 tacos + drink + churros for $25. Perfect for your weekend adventures",
      image: "https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg",
      tag: "Weekend Deal",
      day: "Sat & Sun"
    },
    {
      title: "Late Night Fuel",
      description: "After 8 PM special: 2 tacos + loaded nachos for $18",
      image: "https://images.pexels.com/photos/5639266/pexels-photo-5639266.jpeg",
      tag: "Night Special",
      day: "Daily"
    }
  ];

  const events = [
    {
      title: "Metro Food Festival",
      date: "March 15-17",
      location: "Downtown Park",
      description: "Join us for the biggest food festival of the year!"
    },
    {
      title: "Spring Music Festival",
      date: "April 8-10",
      location: "Riverside Amphitheater",
      description: "Great music, great food, great vibes!"
    },
    {
      title: "Taste of the City",
      date: "May 20-22",
      location: "City Center Plaza",
      description: "Celebrating local flavors and international fusion"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % specials.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [specials.length]);

  return (
    <section ref={sectionRef} id="specials" className="py-20 bg-gray-100 relative overflow-hidden">
      <div className="absolute inset-0 bg-pattern opacity-10"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`font-heading text-4xl md:text-5xl text-gray-900 mb-4 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            Specials & <span className="text-red-600">Events</span>
          </h2>
          <p className={`text-xl text-gray-600 max-w-3xl mx-auto font-body ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
            Don't miss out on our rotating specials and upcoming festival appearances
          </p>
        </div>

        {/* Specials Slider */}
        <div className={`mb-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <h3 className="font-heading text-2xl text-gray-900 mb-8 text-center">Current Specials</h3>
          
          <div className="relative max-w-4xl mx-auto">
            <div className="overflow-hidden rounded-2xl shadow-2xl">
              {specials.map((special, index) => (
                <div
                  key={index}
                  className={`transition-transform duration-500 ease-in-out ${
                    index === currentSlide ? 'translate-x-0' : 
                    index < currentSlide ? '-translate-x-full' : 'translate-x-full'
                  } ${index !== currentSlide ? 'absolute inset-0' : ''}`}
                >
                  <div className="relative h-80 md:h-96">
                    <img
                      src={special.image}
                      alt={special.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>
                    
                    <div className="absolute bottom-0 left-0 right-0 p-8">
                      <div className="flex items-center justify-between mb-4">
                        <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                          {special.tag}
                        </span>
                        <span className="bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-sm font-bold">
                          {special.day}
                        </span>
                      </div>
                      
                      <h4 className="font-heading text-2xl md:text-3xl text-white mb-2">
                        {special.title}
                      </h4>
                      <p className="text-gray-200 font-body text-lg max-w-2xl">
                        {special.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Slider Dots */}
            <div className="flex justify-center space-x-2 mt-6">
              {specials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide ? 'bg-red-600' : 'bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Upcoming Events */}
        <div className={`${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
          <h3 className="font-heading text-2xl text-gray-900 mb-8 text-center">Upcoming Events</h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {events.map((event, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg card-hover"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex items-center space-x-2 mb-4">
                  <Calendar className="w-5 h-5 text-red-600" />
                  <span className="font-bold text-red-600 font-body">{event.date}</span>
                </div>
                
                <h4 className="font-heading text-xl text-gray-900 mb-2">{event.title}</h4>
                
                <div className="flex items-center space-x-2 mb-3">
                  <Clock className="w-4 h-4 text-gray-500" />
                  <span className="text-gray-600 font-body text-sm">{event.location}</span>
                </div>
                
                <p className="text-gray-600 font-body text-sm mb-4">{event.description}</p>
                
                <button className="w-full bg-gradient-to-r from-yellow-400 to-red-500 text-white py-2 rounded-lg font-bold hover:from-yellow-500 hover:to-red-600 transform hover:scale-105 transition-all duration-300">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Specials;