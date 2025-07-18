import React from 'react';
import { ChevronDown, Sparkles } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-105"
        style={{
          backgroundImage: 'url("https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg")',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-primary-900/60"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-accent-400 rounded-full animate-float opacity-60"></div>
      <div className="absolute top-40 right-20 w-3 h-3 bg-warm-400 rounded-full animate-float opacity-40" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-40 left-20 w-1 h-1 bg-accent-300 rounded-full animate-float opacity-80" style={{ animationDelay: '2s' }}></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-5xl mx-auto">
        <div className="flex items-center justify-center mb-4 animate-fade-in">
          <Sparkles className="w-8 h-8 text-accent-400 mr-3 animate-pulse" />
          <span className="text-accent-300 font-medium tracking-wider uppercase text-sm">
            Kingsport's Premier Thai Experience
          </span>
          <Sparkles className="w-8 h-8 text-accent-400 ml-3 animate-pulse" />
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-8 animate-slide-up leading-tight">
          <span className="bg-gradient-to-r from-white via-accent-100 to-warm-200 bg-clip-text text-transparent">
            Authentic Thai Flavor
          </span>
          <br />
          <span className="text-3xl md:text-4xl lg:text-5xl text-river-200 font-light">
            on the Holston River
          </span>
        </h1>
        
        <div className="w-24 h-1 bg-gradient-to-r from-accent-400 to-warm-400 mx-auto mb-8 animate-shimmer relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
        </div>
        
        <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed animate-slide-up text-gray-100 font-light" style={{ animationDelay: '0.2s' }}>
          Authentic Thai Flavor on the Holston River
          <span className="block mt-2 text-lg text-gray-300">
            Cozy indoor dining • Dog-friendly patio • Bold, unforgettable flavors
          </span>
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <button
            onClick={() => scrollToSection('menu')}
            className="group relative bg-gradient-to-r from-accent-500 to-warm-500 hover:from-accent-600 hover:to-warm-600 text-white px-10 py-4 rounded-full text-lg font-semibold transition-all duration-500 transform hover:scale-105 hover:shadow-warm-lg overflow-hidden"
          >
            <span className="relative z-10">View Our Menu</span>
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
          
          <button
            onClick={() => scrollToSection('location')}
            className="group border-2 border-white/30 hover:border-accent-400 text-white hover:text-accent-100 px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 backdrop-blur-sm bg-white/10 hover:bg-white/20"
          >
            Find Us
          </button>
        </div>
      </div>

      {/* Ambient Light Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-warm-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/80 animate-bounce-subtle cursor-pointer hover:text-accent-300 transition-colors" onClick={() => scrollToSection('about')}>
        <div className="flex flex-col items-center">
          <span className="text-sm mb-2 font-light">Discover More</span>
          <ChevronDown size={28} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
