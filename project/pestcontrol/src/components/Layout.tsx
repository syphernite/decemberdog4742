import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Shield, Menu, X } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
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

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/emergency-services', label: 'Emergency Services' },
    { path: '/pest-library', label: 'Pest Library' },
    { path: '/pricing', label: 'Plans & Pricing' },
    { path: '/about', label: 'About' },
    { path: '/reviews', label: 'Reviews' },
    { path: '/service-area', label: 'Service Area' },
    { path: '/contact', label: 'Contact' },
  ];

  const handleCallNow = () => {
    window.location.href = 'tel:+1-555-STRIKE-1';
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-strike-black shadow-lg py-2' : 'bg-strike-black/90 py-4'
      }`}>
        <div className="container mx-auto px-4 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Shield className="h-8 w-8 text-strike-red" />
            <span className="font-headline font-bold text-xl text-white">
              STRIKEFORCE
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-3 py-2 text-sm font-body font-medium transition-colors relative ${
                  location.pathname === item.path
                    ? 'text-white border-b-2 border-strike-red'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Emergency Hotline */}
          <div className="flex items-center space-x-4">
            <button
              onClick={handleCallNow}
              className="hidden md:flex items-center space-x-2 bg-strike-red hover:bg-white hover:text-strike-red border-2 border-strike-red text-white px-4 py-2 transition-all duration-300 font-body font-bold animate-pulse-glow"
            >
              <Phone className="h-4 w-4" />
              <span>24/7 HOTLINE</span>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden text-white"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-strike-black border-t border-strike-red">
            <nav className="container mx-auto px-4 py-4 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-3 py-2 text-base font-body font-medium transition-colors ${
                    location.pathname === item.path
                      ? 'text-strike-red'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <button
                onClick={handleCallNow}
                className="flex items-center space-x-2 bg-strike-red text-white px-4 py-3 w-full justify-center font-body font-bold mt-4"
              >
                <Phone className="h-4 w-4" />
                <span>CALL NOW - 24/7</span>
              </button>
            </nav>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="pt-16">
        {children}
      </main>

      {/* Emergency Float Button */}
      <button
        onClick={handleCallNow}
        className="fixed bottom-6 right-6 bg-strike-red hover:bg-strike-black border-2 border-strike-red text-white p-4 shadow-lg transition-all duration-300 z-40 animate-flash lg:hidden"
      >
        <Phone className="h-6 w-6" />
      </button>

      {/* Footer */}
      <footer className="bg-strike-black text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Shield className="h-6 w-6 text-strike-red" />
                <span className="font-headline font-bold text-lg">STRIKEFORCE</span>
              </div>
              <p className="text-gray-300 font-body text-sm">
                Emergency pest control services available 24/7 for residential and commercial properties.
              </p>
            </div>
            
            <div>
              <h4 className="font-headline font-bold text-sm mb-4 text-strike-red">SERVICES</h4>
              <ul className="space-y-2 text-sm font-body text-gray-300">
                <li>Emergency Response</li>
                <li>Rodent Control</li>
                <li>Termite Treatment</li>
                <li>Bed Bug Elimination</li>
              </ul>
            </div>

            <div>
              <h4 className="font-headline font-bold text-sm mb-4 text-strike-red">CONTACT</h4>
              <ul className="space-y-2 text-sm font-body text-gray-300">
                <li>24/7 Emergency: (555) STRIKE-1</li>
                <li>info@strikeforcepest.com</li>
                <li>Licensed & Insured</li>
              </ul>
            </div>

            <div>
              <h4 className="font-headline font-bold text-sm mb-4 text-strike-red">EMERGENCY DISPATCH</h4>
              <button
                onClick={handleCallNow}
                className="bg-strike-red hover:bg-white hover:text-strike-red border-2 border-strike-red text-white px-6 py-3 font-body font-bold transition-all duration-300 w-full"
              >
                CALL NOW
              </button>
            </div>
          </div>
          
          <div className="border-t border-strike-steel mt-8 pt-8 text-center text-sm font-body text-gray-400">
            © 2025 StrikeForce Pest Defense. All rights reserved. Licensed pest control professionals.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;