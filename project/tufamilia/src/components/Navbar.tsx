import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Button from './Button';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Menu', path: '/menu' },
    { name: 'Reservations', path: '/reservations' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      {/* Talavera tile border */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-chili via-marigold to-nopal z-50"></div>
      
      <motion.nav
        className={`fixed top-1 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled ? 'bg-papel/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 100, damping: 20 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex-shrink-0">
              <motion.div 
                className="w-12 h-12 bg-gradient-to-br from-chili to-chili/80 rounded-lg flex items-center justify-center relative overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="absolute inset-0 bg-marigold/10"></div>
                <span className="text-papel font-display font-bold text-lg relative z-10">RF</span>
                <div className="absolute inset-1 border border-nopal/20 rounded-md"></div>
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className="relative px-3 py-2 text-sm font-medium text-charcoal hover:text-chili transition-colors group"
                  >
                    {item.name}
                    {location.pathname === item.path && (
                      <motion.div
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-marigold rounded-full"
                        layoutId="activeTab"
                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                      />
                    )}
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-marigold rounded-full scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Reserve Button */}
            <div className="hidden md:block">
              <Button as={Link} to="/reservations" variant="primary" size="sm">
                Reserve Table
              </Button>
            </div>

            {/* Mobile menu button */}
            <motion.button
              className="md:hidden p-2 rounded-lg text-charcoal hover:bg-chili/10 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              whileTap={{ scale: 0.95 }}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="md:hidden bg-papel/98 backdrop-blur-md border-t border-marigold/20"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
            >
              <div className="px-4 py-4 space-y-4">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      to={item.path}
                      className={`block px-4 py-2 text-base font-medium rounded-lg transition-colors ${
                        location.pathname === item.path
                          ? 'bg-chili text-papel'
                          : 'text-charcoal hover:bg-chili/10'
                      }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navItems.length * 0.1 }}
                  className="pt-4 border-t border-marigold/20"
                >
                  <Button as={Link} to="/reservations" variant="primary" className="w-full justify-center" onClick={() => setIsMobileMenuOpen(false)}>
                    Reserve Table
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
};

export default Navbar;