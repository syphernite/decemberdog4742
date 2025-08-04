import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Menu', id: 'menu' },
    { name: 'Location', id: 'location' },
    { name: 'Gallery', id: 'gallery' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-warm border-b border-accent-100/20' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 py-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <h1 className={`text-3xl font-display font-bold transition-all duration-300 ${
              isScrolled ? 'text-primary-700 hover:text-accent-600' : 'text-white hover:text-accent-200'
            }`}>
              Thai Riverside
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-10">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative font-medium transition-all duration-300 group ${
                  isScrolled ? 'text-gray-700 hover:text-accent-600' : 'text-white/90 hover:text-accent-200'
                }`}
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-accent-400 to-warm-400 transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
            <a
              href="https://www.doordash.com/store/thai-riverside-24555226/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-accent-500 to-warm-500 hover:from-accent-600 hover:to-warm-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-warm"
            >
              Order Online
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className={`lg:hidden p-2 rounded-lg transition-all duration-300 ${
              isScrolled ? 'text-gray-700 hover:bg-accent-50' : 'text-white hover:bg-white/10'
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md shadow-warm border-b border-accent-100/20 py-6 animate-slide-up">
            <nav className="flex flex-col space-y-6 px-6">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-gray-700 hover:text-accent-600 transition-colors text-left font-medium py-2"
                >
                  {item.name}
                </button>
              ))}
              <a
                href="https://www.doordash.com/store/thai-riverside-24555226/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-accent-500 to-warm-500 hover:from-accent-600 hover:to-warm-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 text-center mt-4"
              >
                Order Online
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
