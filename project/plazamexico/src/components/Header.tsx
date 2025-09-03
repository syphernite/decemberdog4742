import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import siteData from '../content/site.json';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Menu', href: '/menu' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-sm shadow-lg py-2' 
        : 'bg-transparent py-4'
    }`}>
      <nav className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link 
          to="/" 
          className="text-2xl md:text-3xl font-heading font-bold text-chili hover:text-chili/80 transition-colors"
        >
          {siteData.name}
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={`font-medium transition-colors ${
                isActive(item.href)
                  ? 'text-chili border-b-2 border-chili'
                  : 'text-charcoal hover:text-chili'
              }`}
            >
              {item.name}
            </Link>
          ))}
          
          {/* Call Now Button */}
          <a
            href={`tel:${siteData.phone}`}
            className="bg-chili text-white px-6 py-2 rounded-full hover:bg-chili/90 transition-colors flex items-center space-x-2"
          >
            <Phone size={18} />
            <span>Call Now</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden text-charcoal hover:text-chili transition-colors"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-200"
          >
            <div className="container mx-auto px-4 py-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block py-3 font-medium transition-colors ${
                    isActive(item.href)
                      ? 'text-chili'
                      : 'text-charcoal hover:text-chili'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <a
                href={`tel:${siteData.phone}`}
                className="inline-flex items-center space-x-2 bg-chili text-white px-6 py-2 rounded-full hover:bg-chili/90 transition-colors mt-4"
              >
                <Phone size={18} />
                <span>Call Now</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;