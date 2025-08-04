import React from 'react';
import { Star, Scissors } from 'lucide-react';

const Hero = () => {
  const scrollToBooking = () => {
    const element = document.querySelector('#booking');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-600 via-blue-700 to-red-800">
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="absolute top-10 left-10 animate-spin-slow">
          <div className="w-16 h-16 border-4 border-white border-t-transparent rounded-full opacity-20"></div>
        </div>
        <div className="absolute bottom-20 right-20 animate-bounce">
          <Scissors className="h-12 w-12 text-white opacity-20" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="mb-8">
          <div className="inline-flex items-center space-x-2 bg-white bg-opacity-10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <Star className="h-5 w-5 text-yellow-400 fill-current" />
            <span className="text-white font-medium">Premium Barbering</span>
          </div>
        </div>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          Tony's
          <span className="block text-red-300">Signature Cuts</span>
        </h1>

        <p className="text-xl sm:text-2xl text-white mb-8 max-w-2xl mx-auto leading-relaxed">
          Premium barbering with traditional techniques and modern style. 
          <span className="block mt-2 text-lg opacity-90">Where every cut tells a story.</span>
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          <button
            onClick={scrollToBooking}
            className="group bg-red-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-red-700 hover:scale-105 shadow-2xl hover:shadow-red-600/25"
          >
            Book Your Cut
            <span className="ml-2 group-hover:translate-x-1 inline-block transition-transform">→</span>
          </button>
          
          <button
            onClick={() => document.querySelector('#gallery')?.scrollIntoView({ behavior: 'smooth' })}
            className="group bg-white bg-opacity-20 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-opacity-30 border border-white border-opacity-30"
          >
            View Gallery
          </button>
        </div>

        <div className="mt-12 flex items-center justify-center space-x-8 text-white">
          <div className="text-center">
            <div className="text-2xl font-bold">5+</div>
            <div className="text-sm opacity-80">Years Experience</div>
          </div>
          <div className="w-px h-12 bg-white opacity-30"></div>
          <div className="text-center">
            <div className="text-2xl font-bold">500+</div>
            <div className="text-sm opacity-80">Happy Clients</div>
          </div>
          <div className="w-px h-12 bg-white opacity-30"></div>
          <div className="text-center">
            <div className="text-2xl font-bold">4.9</div>
            <div className="text-sm opacity-80">Rating</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;