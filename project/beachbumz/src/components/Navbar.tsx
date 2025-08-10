import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Waves, Phone } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/menu', label: 'Menu' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <nav className={`navbar-fixed fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-ocean-blue/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          <Link to="/" className="flex items-center space-x-2 group">
            <Waves className="h-8 w-8 text-turquoise group-hover:text-sunset-orange transition-colors duration-300" />
            <div className="flex flex-col">
              <span className="font-display text-xl md:text-2xl text-white group-hover:text-gradient transition-all duration-300">
                BEACH BUMZ
              </span>
              <span className="text-xs text-turquoise -mt-1">PUB & PIZZERIA</span>
            </div>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative font-medium transition-all duration-300 hover:text-turquoise ${
                  isActive(item.path) ? 'text-turquoise' : 'text-white'
                }`}
              >
                {item.label}
                {isActive(item.path) && (
                  <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-turquoise to-sunset-orange rounded-full"></span>
                )}
              </Link>
            ))}
            <a href="tel:252-726-7800" className="flex items-center space-x-2 text-white hover:text-turquoise transition-colors duration-300 bg-sunset-orange/20 hover:bg-sunset-orange/30 px-4 py-2 rounded-full">
              <Phone className="h-4 w-4" />
              <span className="font-semibold">(252) 726-7800</span>
            </a>
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white hover:text-turquoise transition-colors duration-300" aria-label="Toggle navigation menu">
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      <div className={`md:hidden transition-all duration-300 overflow-hidden ${
        isOpen ? 'max-h-96 bg-ocean-blue/95 backdrop-blur-md' : 'max-h-0'
      }`}>
        <div className="px-4 pt-2 pb-6 space-y-4">
          {navItems.map((item) => (
            <Link key={item.path} to={item.path} onClick={() => setIsOpen(false)} className={`block py-2 font-medium transition-all duration-300 hover:text-turquoise hover:pl-4 ${
              isActive(item.path) ? 'text-turquoise pl-4 border-l-2 border-turquoise' : 'text-white'
            }`}>
              {item.label}
            </Link>
          ))}
          <a href="tel:252-726-7800" className="flex items-center space-x-2 text-white hover:text-turquoise transition-colors duration-300 py-2">
            <Phone className="h-4 w-4" />
            <span className="font-semibold">(252) 726-7800</span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
