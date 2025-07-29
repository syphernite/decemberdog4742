import React, { useEffect, useState } from 'react';
import { ArrowRight, Play } from 'lucide-react';

const Hero: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Parallax Background */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-slate-50 via-emerald-50 to-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900"
        style={{
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      />

      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-emerald-200/20 dark:bg-emerald-400/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-200/20 dark:bg-blue-400/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in-up">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
            Custom Websites for
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-blue-600">
              {' '}Small Businesses
            </span>
          </h1>

          <p className="text-xl sm:text-2xl text-slate-600 dark:text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Professional, fast-loading websites that grow your business.
            No templates, no compromises – just beautiful, custom web solutions built for you.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button
              onClick={() => scrollToSection('pricing')}
              className="relative group bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center space-x-2 overflow-hidden animate-slide-glow"
            >
              <span className="relative z-10">Get Started</span>
              <ArrowRight className="h-5 w-5 relative z-10 group-hover:translate-x-1 transition-transform duration-200" />
              <span className="absolute inset-0 bg-white/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </button>

            <button
              onClick={() => scrollToSection('why-choose-us')}
              className="group bg-white/80 dark:bg-slate-800/80 hover:bg-white dark:hover:bg-slate-800 text-slate-900 dark:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 border border-slate-200 dark:border-slate-700 hover:shadow-lg flex items-center space-x-2 backdrop-blur-sm"
            >
              <Play className="h-5 w-5" />
              <span>Learn More</span>
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-600 dark:text-emerald-400">50+</div>
              <div className="text-slate-600 dark:text-slate-400">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-600 dark:text-emerald-400">100%</div>
              <div className="text-slate-600 dark:text-slate-400">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-600 dark:text-emerald-400">7 Days</div>
              <div className="text-slate-600 dark:text-slate-400">Average Delivery</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
