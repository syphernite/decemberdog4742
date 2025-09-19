import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { businessConfig } from '../config/business';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export default function Header({ currentPage, onNavigate }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'menu', label: 'Menu' },
    { id: 'events', label: 'Events' },
    { id: 'photos', label: 'Photos' },
    { id: 'visit', label: 'Visit' }
  ];

  return (
    <>
      <header className={`fixed top-0 w-full z-50 transition-all duration-200 ease-in-out ${
        isScrolled ? 'bg-charcoal/95 backdrop-blur-md shadow-lg border-b border-gray-700' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <button
              onClick={() => onNavigate('home')}
              className="text-white font-bold text-xl hover:text-amber-500 transition-colors duration-200 ease-in-out"
            >
              TimeOut Tavern
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  className={`text-sm font-medium transition-colors duration-200 ease-in-out hover:underline ${
                    currentPage === item.id
                      ? 'text-amber-500'
                      : 'text-white hover:text-amber-500'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {/* Call Button - Desktop */}
            <a
              href={businessConfig.phoneLink}
              className="hidden md:flex items-center bg-amber-500 text-charcoal px-4 py-2 rounded-lg font-medium hover:shadow-lg hover:shadow-amber-500/30 transition-all duration-200 ease-in-out"
            >
              <Phone className="w-4 h-4 mr-2" />
              Call Now
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-white p-2"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden bg-charcoal/95 backdrop-blur-md border-t border-gray-700">
              <nav className="py-4 space-y-2">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      onNavigate(item.id);
                      setIsMenuOpen(false);
                    }}
                    className={`block w-full text-left px-4 py-2 text-sm font-medium transition-colors duration-200 ease-in-out ${
                      currentPage === item.id
                        ? 'text-amber-500 bg-slate-850/50'
                        : 'text-white hover:text-amber-500 hover:bg-slate-850/50'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Floating Call Button - Mobile */}
      <a
        href={businessConfig.phoneLink}
        className="fixed bottom-6 right-6 md:hidden bg-amber-500 text-charcoal p-4 rounded-full shadow-lg hover:shadow-amber-500/30 transition-all duration-200 ease-in-out z-40"
        aria-label="Call TimeOut Tavern"
      >
        <Phone className="w-6 h-6" />
      </a>
    </>
  );
}