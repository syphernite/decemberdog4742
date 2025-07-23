import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

const FinalCTA = () => {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-green-900/20"></div>
      
      {/* Animated particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-green-400 rounded-full animate-ping"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${1 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>
      
      {/* Flowing light patterns */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-green-400/10 to-transparent animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-l from-transparent via-purple-400/10 to-transparent animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="mb-8">
          <Sparkles className="w-16 h-16 text-green-400 mx-auto mb-6 animate-pulse" />
        </div>
        
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-teal-400 to-blue-400 neon-glow">
          Let's Build Your Online Empire
        </h2>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
          Ready to transform your vision into a stunning digital reality? Let's create something extraordinary together.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button className="group relative inline-flex items-center px-10 py-5 text-xl font-bold text-black bg-gradient-to-r from-green-400 to-teal-400 rounded-full overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-green-500/50 hover:scale-105 glow-button">
            <span className="relative z-10 flex items-center">
              Book Your Free Demo
              <ArrowRight className="ml-3 w-6 h-6 transition-transform group-hover:translate-x-1" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-green-300 to-teal-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
          
          <button className="group relative inline-flex items-center px-10 py-5 text-xl font-bold text-green-400 bg-transparent border-2 border-green-400 rounded-full overflow-hidden transition-all duration-300 hover:bg-green-400 hover:text-black hover:shadow-2xl hover:shadow-green-500/50 hover:scale-105">
            <span className="relative z-10 flex items-center">
              View Our Work
            </span>
          </button>
        </div>
        
        <div className="mt-16 pt-8 border-t border-white/10">
          <p className="text-gray-500 text-sm">
            © 2024 BUILT4YOU. Crafting digital excellence since day one.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;