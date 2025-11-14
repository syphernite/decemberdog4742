import { useState, useEffect } from 'react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled ? 'bg-black/95 backdrop-blur-sm' : 'bg-transparent'
      }`}
    >
      <div className="border-t border-white/100" />
      <div className="max-w-[1320px] mx-auto px-8 py-5">
        <div className="flex items-center justify-between">
          <div className="text-white font-bold text-xl tracking-wider">
            KOVSK
          </div>

          <nav className="hidden md:flex items-center gap-12 text-sm">
            <button
              onClick={() => scrollToSection('services')}
              className="text-white hover:text-gray-300 transition-colors duration-200 tracking-wide"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="text-white hover:text-gray-300 transition-colors duration-200 tracking-wide"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection('results')}
              className="text-white hover:text-gray-300 transition-colors duration-200 tracking-wide"
            >
              Results
            </button>
            <button
              onClick={() => scrollToSection('process')}
              className="text-white hover:text-gray-300 transition-colors duration-200 tracking-wide"
            >
              Process
            </button>
            <button
              onClick={() => scrollToSection('faq')}
              className="text-white hover:text-gray-300 transition-colors duration-200 tracking-wide"
            >
              FAQ
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-white hover:text-gray-300 transition-colors duration-200 tracking-wide"
            >
              Contact
            </button>
          </nav>

          <button
            onClick={() => scrollToSection('contact')}
            className="hidden md:block bg-white text-black px-6 py-2 text-sm font-medium tracking-wide hover:bg-gray-200 transition-all duration-200"
          >
            Start Project
          </button>
        </div>
      </div>
    </header>
  );
}
