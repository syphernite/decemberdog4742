import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Phone, Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-sm shadow-lg' 
          : 'bg-white/90'
      }`}
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div 
            className="flex items-center space-x-3"
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-12 h-12 bg-red-primary rounded-full flex items-center justify-center border-2 border-silver-accent shadow-lg">
              <span className="text-white font-display text-lg">M</span>
            </div>
            <h1 className="text-black-deep font-display text-xl md:text-2xl tracking-wider hidden sm:block">
              MANUEL FOOD TRUCK
            </h1>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('menu')}
              className="text-black-deep hover:text-red-primary transition-colors font-body font-semibold"
            >
              Menu
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-black-deep hover:text-red-primary transition-colors font-body font-semibold"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('findus')}
              className="text-black-deep hover:text-red-primary transition-colors font-body font-semibold"
            >
              Find Us
            </button>
          </nav>

          {/* Call Button */}
          <div className="flex items-center space-x-4">
            <motion.a
              href="tel:580-771-6373"
              className="bg-red-primary hover:bg-red-dark text-white px-6 py-3 rounded-xl font-body font-bold flex items-center space-x-2 shadow-lg border-2 border-red-primary hover:shadow-xl transition-all animate-pulse-slow"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.2), 0 4px 12px rgba(199,20,24,0.3)'
              }}
            >
              <Phone size={18} />
              <span className="hidden sm:inline">Call to Order</span>
              <span className="sm:hidden">Call</span>
            </motion.a>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-black-deep hover:text-red-primary transition-colors"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 py-4 border-t border-silver-accent/20"
          >
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('menu')}
                className="text-black-deep hover:text-red-primary transition-colors font-body font-semibold text-left"
              >
                Menu
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-black-deep hover:text-red-primary transition-colors font-body font-semibold text-left"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('findus')}
                className="text-black-deep hover:text-red-primary transition-colors font-body font-semibold text-left"
              >
                Find Us
              </button>
            </div>
          </motion.nav>
        )}
      </div>
    </motion.header>
  );
};

export default Header;