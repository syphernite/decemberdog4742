import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Car } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Results', path: '/results' }
  ];

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50`}
    >
      <div
        className={[
          'mx-auto max-w-7xl px-4 sm:px-6 lg:px-8',
          'mt-3',
        ].join(' ')}
      >
        <div
          className={[
            'flex items-center justify-between',
            'rounded-2xl',
            'transition-all duration-300',
            isScrolled ? 'bg-gray-900/85 backdrop-blur-xl border border-white/10 shadow-xl py-2 px-3' : 'bg-transparent py-3 px-3',
          ].join(' ')}
        >
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 text-xl font-bold">
            <motion.div whileHover={{ rotate: 8, scale: 1.02 }} transition={{ duration: 0.2 }}>
              <Car className="h-8 w-8 text-blue-500" />
            </motion.div>
            <span className="tracking-tight bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              Shine Xpress
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2">
            <div className="flex items-center gap-1 rounded-xl p-1">
              {navItems.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={[
                      'relative px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200',
                      isActive ? 'text-white' : 'text-gray-300 hover:text-white'
                    ].join(' ')}
                  >
                    <span className="relative z-10">{item.name}</span>
                    {isActive && (
                      <motion.span
                        layoutId="activePill"
                        className="absolute inset-0 rounded-lg bg-white/10"
                        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                      />
                    )}
                  </Link>
                );
              })}
            </div>

            <Link
              to="/services#book"
              className="ml-2 relative inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold text-white transition-transform duration-200 hover:scale-[1.03]"
            >
              <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-600 via-sky-500 to-indigo-600 opacity-90" />
              <span className="relative">Book Now</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden rounded-lg p-2 hover:bg-white/10 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-2 pb-3"
            >
              <div className="rounded-2xl bg-gray-900/90 backdrop-blur-xl border border-white/10 shadow-xl p-2">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={[
                      'block py-2 px-3 rounded-lg transition-colors duration-200',
                      location.pathname === item.path
                        ? 'text-white bg-white/10'
                        : 'text-gray-300 hover:text-white hover:bg-white/5'
                    ].join(' ')}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <Link
                  to="/services#book"
                  className="block mt-2 text-center rounded-xl py-2 font-medium text-white relative"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-600 via-sky-500 to-indigo-600 opacity-90" />
                  <span className="relative">Book Now</span>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
