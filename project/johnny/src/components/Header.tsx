import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Instagram, Zap } from 'lucide-react';

type HeaderProps = {
  onOpenBooking: () => void;
};

const Header: React.FC<HeaderProps> = ({ onOpenBooking }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <header className="fixed top-0 w-full z-50 bg-black/95 backdrop-blur-md border-b border-gray-800/50 shadow-lg transition-all duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="inline-flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-yellow-300 to-yellow-500 shadow-[0_0_20px_rgba(234,179,8,0.35)]" />
            <span className="text-lg font-black tracking-wide">
              <span className="text-white">JOHNNY</span>
              <span className="text-yellow-400">INK</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition ${
                  isActive(item.href)
                    ? 'text-yellow-400 bg-white/5'
                    : 'text-white/80 hover:text-white hover:bg-white/5'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <button
              onClick={onOpenBooking}
              className="px-3 py-2 rounded-lg text-sm font-medium text-yellow-400 hover:bg-white/5 transition flex items-center gap-1"
            >
              <Zap size={16} /> Book
            </button>
          </nav>

          {/* Instagram + Menu */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-white/90 transition"
            >
              <Instagram size={18} />
              <span className="text-sm">Instagram</span>
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg bg-white/5 hover:bg-white/10 transition"
            onClick={() => setIsMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-gray-800/50 bg-black/95 backdrop-blur-md">
          <div className="max-w-6xl mx-auto px-4 py-3">
            <div className="flex flex-col gap-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition ${
                    isActive(item.href)
                      ? 'text-yellow-400 bg-white/5'
                      : 'text-white/80 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <button
                onClick={() => {
                  setIsMenuOpen(false);
                  onOpenBooking();
                }}
                className="mt-2 inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-yellow-400 text-black font-semibold hover:bg-yellow-300 transition"
              >
                <Zap size={16} /> Book
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
