import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Instagram, ExternalLink, Zap } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/johnny' },
    { name: 'Portfolio', href: '/johnny/portfolio' },
    { name: 'Contact', href: '/johnny/contact' },
  ];

  const isActive = (href: string) => {
    if (href === '/johnny') {
      return location.pathname === '/johnny' || location.pathname === '/';
    }
    return location.pathname === href;
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-black/95 backdrop-blur-md border-b border-gray-800/50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            {/* Logo */}
            <Link to="/johnny" className="group flex items-center space-x-3 text-3xl font-black text-white hover:text-yellow-400 transition-all duration-300">
              <div className="p-2 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                <Zap className="text-black" size={24} />
              </div>
              <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent group-hover:from-yellow-300 group-hover:to-yellow-500 transition-all duration-300">
                Tattoo Johnny ATL
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-10">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`relative text-xl font-bold transition-all duration-300 hover:text-yellow-400 group ${
                    isActive(item.href)
                      ? 'text-yellow-400'
                      : 'text-gray-300'
                  }`}
                >
                  <span className="relative z-10">{item.name}</span>
                  <div className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-yellow-400 to-yellow-600 transform origin-left transition-transform duration-300 ${
                    isActive(item.href) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`}></div>
                </Link>
              ))}
            </nav>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 text-white hover:text-yellow-400 hover:bg-yellow-400/10 rounded-xl transition-all duration-300 transform hover:scale-110"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/98 backdrop-blur-md border-t border-gray-800/50 animate-slide-down">
            <div className="px-6 py-8 space-y-6">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block text-2xl font-bold transition-all duration-300 transform hover:translate-x-2 ${
                    isActive(item.href) ? 'text-yellow-400' : 'text-gray-300 hover:text-yellow-400'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="pt-24">
        {children}
      </main>

      {/* Footer */}
      <footer className="relative bg-gradient-to-br from-gray-900 to-black border-t border-gray-800/50 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
            <div className="text-gray-400 text-lg">
              © {new Date().getFullYear()} Tattoo Johnny ATL. All rights reserved.
            </div>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-8">
              <a
                href="https://instagram.com/tattoojohnnyatl"
                target="_blank"
                rel="noopener noreferrer"
                className="group text-gray-400 hover:text-yellow-400 transition-all duration-300 flex items-center space-x-3 transform hover:scale-105"
              >
                <div className="p-2 bg-gray-800 rounded-full group-hover:bg-yellow-400/10 transition-colors duration-300">
                  <Instagram size={24} />
                </div>
                <span className="text-lg font-medium">@tattoojohnnyatl</span>
              </a>
              
              <a
                href="https://tattoo-johnny.square.site"
                target="_blank"
                rel="noopener noreferrer"
                className="group text-gray-400 hover:text-yellow-400 transition-all duration-300 flex items-center space-x-3 transform hover:scale-105"
              >
                <div className="p-2 bg-gray-800 rounded-full group-hover:bg-yellow-400/10 transition-colors duration-300">
                  <ExternalLink size={24} />
                </div>
                <span className="text-lg font-medium">Book Now</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;