import React, { useEffect, useState } from 'react';
import { Truck } from 'lucide-react';

const Hero = () => {
  const [animateTruck, setAnimateTruck] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimateTruck(true);
      setTimeout(() => setAnimateTruck(false), 20000);
    }, 25000);

    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/4393668/pexels-photo-4393668.jpeg"
          alt="Food truck serving customers"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Animated Food Truck */}
      <div className="absolute top-20 left-0 w-full h-16 overflow-hidden pointer-events-none">
        <Truck 
          className={`w-12 h-12 text-yellow-400 absolute top-2 ${animateTruck ? 'animate-truck' : '-translate-x-24'}`} 
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl text-white mb-6 animate-fade-in">
          <span className="bg-gradient-to-r from-red-400 to-yellow-400 bg-clip-text text-transparent">
            Bold Flavors
          </span>
          <br />
          <span className="text-white">on Wheels</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-200 mb-8 animate-slide-up font-body">
          Street Tacos with a Global Twist
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up">
          <button 
            onClick={() => scrollToSection('menu')}
            className="bg-gradient-to-r from-red-500 to-red-600 text-white px-8 py-4 rounded-full text-lg font-bold hover:from-red-600 hover:to-red-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            See the Menu
          </button>
          
          <button 
            onClick={() => scrollToSection('find-us')}
            className="bg-transparent border-2 border-yellow-400 text-yellow-400 px-8 py-4 rounded-full text-lg font-bold hover:bg-yellow-400 hover:text-gray-900 transform hover:scale-105 transition-all duration-300"
          >
            Find Us Today
          </button>
        </div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 bg-pattern opacity-30 pointer-events-none"></div>
    </section>
  );
};

export default Hero;