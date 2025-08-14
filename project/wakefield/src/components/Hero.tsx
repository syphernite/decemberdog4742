import React, { useEffect, useRef, useState } from 'react';
import { ChevronDown } from 'lucide-react';

const VER = 'v2';
const MP4    = import.meta.env.BASE_URL + `media/oli-hero.mp4?${VER}`;
const POSTER = import.meta.env.BASE_URL + 'media/oli-hero-poster.jpg';

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)');
    const update = () => setIsDesktop(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const handleEnded = () => v.pause();
    v.loop = isDesktop;
    if (isDesktop) {
      v.removeEventListener('ended', handleEnded);
      if (v.paused) v.play().catch(() => {});
    } else {
      v.addEventListener('ended', handleEnded);
    }
    return () => v.removeEventListener('ended', handleEnded);
  }, [isDesktop]);

  const scrollToSection = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <div className="relative h-screen flex items-start md:items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          className="h-full w-full object-cover"
          autoPlay
          muted
          playsInline
          preload="auto"
          poster={POSTER}
          onError={(e) => console.error('Hero video failed:', (e.target as HTMLVideoElement).currentSrc)}
        >
          <source src={MP4} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/60 md:bg-black/50" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-sky-400/25 via-transparent to-transparent" />
      </div>

      {/* Navigation (now owns the top space) */}
      <nav className="absolute top-0 left-0 right-0 z-20 p-4 md:p-6 bg-gradient-to-b from-black/60 to-transparent">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold text-white">
            Oli Wakefield <span className="text-sky-400">Fitness</span>
          </div>
          <div className="hidden md:flex space-x-8 text-white font-medium">
            <a href="#coaching" className="hover:text-sky-300" onClick={(e) => { e.preventDefault(); scrollToSection('coaching'); }}>Coaching</a>
            <a href="#recipes"  className="hover:text-sky-300" onClick={(e) => { e.preventDefault(); scrollToSection('recipes'); }}>Recipes</a>
            <a href="#contact"  className="hover:text-sky-300" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-6 pt-28 md:pt-0 animate-fade-in">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
          Transform Your Body.
          <br />
          <span className="text-sky-400 drop-shadow-lg">Empower Your Mind.</span>
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl text-white mb-12 max-w-3xl mx-auto leading-relaxed drop-shadow-lg">
          Online fitness coaching, powerful mindset tools, and delicious recipes that make results stick.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button
            onClick={() => scrollToSection('coaching')}
            className="bg-sky-500 hover:bg-sky-600 text-white px-8 py-4 rounded-full text-lg font-bold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl min-w-[280px] drop-shadow-lg"
          >
            Start Your Coaching Journey
          </button>

          <button
            onClick={() => scrollToSection('recipes')}
            className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-full text-lg font-bold transition-all duration-300 transform hover:scale-105 min-w-[200px] drop-shadow-lg"
          >
            Explore Recipes
          </button>
        </div>
      </div>

      {/* Scroll Indicator (hidden on mobile) */}
      <div className="hidden md:block absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <ChevronDown className="text-white w-8 h-8 drop-shadow-lg" />
      </div>
    </div>
  );
};

export default Hero;
