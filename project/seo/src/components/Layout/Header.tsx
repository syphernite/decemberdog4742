import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { tokens } from '../../styles/tokens';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const showDemoBadge = import.meta.env.VITE_SHOW_DEMO_BADGE === 'true';

  const navItems = [
    { name: 'Services', href: '/#services' },
    { name: 'Why', href: '/#why' },
    { name: 'Testimonials', href: '/#testimonials' },
    { name: 'Contact', href: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    if (href.startsWith('/#')) {
      const id = href.substring(2);
      if (location.pathname === '/') {
        const element = document.getElementById(id);
        element?.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.location.href = href;
      }
    }
    setIsMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md border-b border-neutral-200 shadow-sm' 
          : 'bg-transparent'
      }`}
    >
      {showDemoBadge && (
        <div className="absolute top-4 right-4 z-10 bg-neutral-900 text-white px-3 py-1 rounded text-xs font-medium">
          Demo
        </div>
      )}
      
      <div className={tokens.container}>
        <div className="flex items-center justify-between h-20">
          <Link 
            to="/" 
            className="text-2xl font-light text-neutral-900 hover:text-neutral-600 transition-colors tracking-tight"
          >
            SeoEcon
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-12">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-neutral-600 hover:text-neutral-900 transition-colors font-medium tracking-wide focus:outline-none focus:text-neutral-900"
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-neutral-600 hover:text-neutral-900 transition-colors focus:outline-none focus:text-neutral-900"
            aria-label="Toggle navigation menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden bg-white border-t border-neutral-200"
            >
              <div className="py-6 space-y-4">
                {navItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className="block w-full text-left px-4 py-3 text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50 rounded transition-colors font-medium focus:outline-none focus:text-neutral-900 focus:bg-neutral-50"
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};