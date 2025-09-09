import { openSMS } from '../lib/sms'
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/prices', label: 'Prices' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/book', label: 'Book' },
    { path: '/free-cuts', label: 'Free Cuts' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 bg-bone shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-copper">Copperhead Cuts</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-copper ${
                  isActive(link.path)
                    ? 'text-copper bg-copper/10'
                    : 'text-charcoal hover:text-copper hover:bg-copper/5'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/book"
              className="btn-ghost"
            >
              Book a Cut
            </Link>
            <a
              href="tel:+1-555-0100"
              className="btn-ghost"
            >
              <Phone size={16} />
              Text to Book
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md text-charcoal hover:bg-copper/5 focus:outline-none focus:ring-2 focus:ring-copper"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-bone border-t border-copper/20"
          >
            <div className="px-4 py-4 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    isActive(link.path)
                      ? 'text-copper bg-copper/10'
                      : 'text-charcoal hover:text-copper hover:bg-copper/5'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-4 space-y-2">
                <Link
                  to="/book"
                  onClick={() => setIsOpen(false)}
                  className="btn-ghost"
                >
                  Book a Cut
                </Link>
                <a
                  href="tel:+1-555-0100"
                  className="btn-ghost"
                >
                  <Phone size={16} />
                  Text to Book
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};