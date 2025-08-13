import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { clsx } from 'clsx';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Content', href: '/content' },
  { name: 'Services', href: '/collab' },
  { name: 'Shop', href: '/shop' },
  { name: 'Media Kit', href: '/media-kit' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={clsx(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled ? 'glass-panel py-2' : 'bg-transparent py-4'
      )}
    >
      <nav className="mx-auto max-w-7xl px-6 lg:px-8" aria-label="Top">
        <div className="flex w-full items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <div className="h-10 w-10 rounded-full bg-gradient-to-r from-neon-violet to-neon-cyan flex items-center justify-center">
                <span className="text-white font-bold text-lg">C</span>
              </div>
              <span className="text-white font-display text-xl tracking-wider">
                CREATOR
              </span>
            </Link>
          </div>

          <div className="hidden lg:flex lg:items-center lg:space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={clsx(
                  'relative px-3 py-2 text-sm font-medium transition-colors duration-200',
                  location.pathname === item.href
                    ? 'text-neon-violet'
                    : 'text-gray-300 hover:text-white'
                )}
              >
                {item.name}
                {location.pathname === item.href && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-neon-violet to-neon-cyan"
                  />
                )}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex lg:items-center lg:space-x-4">
            <Link
              to="/booking"
              className="glass-panel px-6 py-2 text-sm font-medium text-white hover:shadow-neon transition-all duration-300"
            >
              Book Collab
            </Link>
          </div>

          <div className="flex lg:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2.5 text-gray-300 hover:text-white"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 lg:hidden"
          >
            <div className="fixed inset-y-0 right-0 w-full max-w-sm glass-panel p-6">
              <div className="flex items-center justify-between">
                <Link to="/" className="flex items-center space-x-2">
                  <div className="h-8 w-8 rounded-full bg-gradient-to-r from-neon-violet to-neon-cyan flex items-center justify-center">
                    <span className="text-white font-bold">C</span>
                  </div>
                  <span className="text-white font-display text-lg">CREATOR</span>
                </Link>
                <button
                  type="button"
                  className="rounded-md p-2.5 text-gray-300 hover:text-white"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                  <Link
                    to="/booking"
                    className="block mt-4 glass-panel px-3 py-2 text-center text-base font-medium text-white"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Book Collab
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </nav>
    </motion.header>
  );
}