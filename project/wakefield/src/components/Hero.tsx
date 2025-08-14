import React from 'react';
import { ChevronDown } from 'lucide-react';

// Use BASE_URL so it works locally and on GitHub Pages
const VIDEO_SRC = import.meta.env.BASE_URL + 'media/oli-hero.mp4';
const POSTER_SRC = import.meta.env.BASE_URL + 'media/oli-hero-poster.jpg';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          className="h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster={POSTER_SRC}
        >
          <source src={VIDEO_SRC} type="video/mp4" />
        </video>

        {/* Overlay: dark + baby-blue tint */}
        <div className="absolute inset-0 bg-black/50" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-sky-400/25 via-transparent to-transparent" />
      </div>

      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-20 p-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold text-white">
            Oli Wakefield <span className="text-sky-400">Fitness</span>
          </div>
          <div className="hidden md:flex space-x-8 text-white font-medium">
            <a
              href="#coaching"
              className="hover:text-sky-300 transition-colors cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('coaching');
              }}
            >
              Coaching
            </a>
            <a
              href="#recipes"
              className="hover:text-sky-300 transition-colors cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('recipes');
              }}
            >
              Recipes
            </a>
            <a
              href="#contact"
              className="hover:text-sky-300 transition-colors cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('contact');
              }}
            >
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-6 animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Transform Your Body.
          <br />
          <span className="text-sky-400">Empower Your Mind.</span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto leading-relaxed">
          Online fitness coaching, powerful mindset tools, and delicious recipes that make results stick.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button
            onClick={() => scrollToSection('coaching')}
            className="bg-sky-500 hover:bg-sky-600 text-white px-8 py-4 rounded-full text-lg font-bold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl min-w-[280px]"
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
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <ChevronDown className="text-white w-8 h-8" />
      </div>

      {/* No-JS fallback image */}
      <noscript>
        <style>{`.hero-fallback{background-image:url('${POSTER_SRC}');background-size:cover;background-position:center}`}</style>
        <div className="hero-fallback absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 bg-gradient-to-tr from-sky-400/25 via-transparent to-transparent" />
        </div>
      </noscript>
    </div>
  );
};

export default Hero;
