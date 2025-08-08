import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, Calendar } from 'lucide-react';

const Navigation: React.FC = () => {
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
    { path: '/', label: 'Home' },
    { path: '/artists', label: 'Artists' },
    { path: '/portfolio', label: 'Portfolio' },
    { path: '/services', label: 'Services' },
    { path: '/aftercare', label: 'Aftercare' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <>
      <motion.nav
        initial={false}
        animate={{
          height: isScrolled ? '60px' : '80px',
          backgroundColor: isScrolled ? 'rgba(10, 10, 11, 0.95)' : 'rgba(10, 10, 11, 0.8)',
        }}
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b border-stone-700/30"
        transition={{ duration: 0.3, ease: 'easeOut' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex items-center justify-between h-full">
            <Link to="/" className="flex items-center space-x-2">
              <motion.div
                animate={{
                  scale: isScrolled ? 0.9 : 1,
                }}
                transition={{ duration: 0.3 }}
                className="font-display font-bold text-xl text-bone-100"
              >
                BRICKHOUSE INK
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-sm font-medium transition-colors hover:text-blood-600 ${
                    location.pathname === item.path
                      ? 'text-blood-600 border-b border-blood-600'
                      : 'text-bone-100'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                to="/booking"
                className="inline-flex items-center px-4 py-2 bg-blood-600 text-bone-100 rounded-small font-medium hover:bg-blood-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blood-600 focus:ring-offset-2 focus:ring-offset-ink-900"
              >
                <Calendar className="w-4 h-4 mr-2" />
                Book Session
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 text-bone-100 hover:text-blood-600"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-0 right-0 bg-ink-800 border-b border-stone-700/30 backdrop-blur-md"
          >
            <div className="px-4 py-4 space-y-3">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`block py-2 text-sm font-medium transition-colors hover:text-blood-600 ${
                    location.pathname === item.path
                      ? 'text-blood-600'
                      : 'text-bone-100'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                to="/booking"
                className="block w-full text-center px-4 py-2 mt-4 bg-blood-600 text-bone-100 rounded-small font-medium hover:bg-blood-700 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Book Session
              </Link>
            </div>
          </motion.div>
        )}
      </motion.nav>

      {/* Mobile Floating Book Button */}
      <div className="fixed bottom-6 right-6 z-40 md:hidden">
        <Link
          to="/booking"
          className="flex items-center justify-center w-14 h-14 bg-blood-600 text-bone-100 rounded-full shadow-lg hover:bg-blood-700 transition-colors glow-accent"
        >
          <Calendar className="w-6 h-6" />
        </Link>
      </div>
    </>
  );
};

export default Navigation;