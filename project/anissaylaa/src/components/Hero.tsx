import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const scrollToMentorship = () => {
    const element = document.getElementById('mentorship');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)'
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 px-6 text-center max-w-4xl mx-auto">
        <div className="animate-fadeIn">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
            Hi, I'm Anissa 👋
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-12 leading-relaxed max-w-3xl mx-auto">
            I'm 19 and passionate about helping others budget, build wealth, and stay consistent. 
            I teach money habits that actually work.
          </p>
          
          <button 
            onClick={scrollToMentorship}
            className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg mb-12"
          >
            Join My Free Mentorship
          </button>
          
          <div className="animate-bounce">
            <ChevronDown className="w-8 h-8 text-white mx-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;