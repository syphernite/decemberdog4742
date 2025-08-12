import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-20 p-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold text-white">
            Oli Wakefield <span className="text-orange-500">Fitness</span>
          </div>
          <div className="hidden md:flex space-x-8 text-white font-medium">
            <a href="#coaching" className="hover:text-orange-500 transition-colors cursor-pointer" onClick={() => scrollToSection('coaching')}>Coaching</a>
            <a href="#recipes" className="hover:text-orange-500 transition-colors cursor-pointer" onClick={() => scrollToSection('recipes')}>Recipes</a>
            <a href="#contact" className="hover:text-orange-500 transition-colors cursor-pointer" onClick={() => scrollToSection('contact')}>Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-6 animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Transform Your Body.<br />
          <span className="text-orange-500">Empower Your Mind.</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto leading-relaxed">
          Online fitness coaching, powerful mindset tools, and delicious recipes that make results stick.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button 
            onClick={() => scrollToSection('coaching')}
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full text-lg font-bold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl min-w-[280px]"
          >
            Start Your Coaching Journey
          </button>
          
          <button 
            onClick={() => scrollToSection('recipes')}
            className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-full text-lg font-bold transition-all duration-300 transform hover:scale-105 min-w-[200px]"
          >
            Explore Recipes
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <ChevronDown className="text-white w-8 h-8" />
      </div>
    </div>
  );
};

export default Hero;