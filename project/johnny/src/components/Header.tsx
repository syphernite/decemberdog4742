import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Instagram, Zap, Phone, MapPin } from 'lucide-react';

type HeaderProps = {
  onOpenBooking: () => void;
};

/** Monochrome SVG logo: tattoo needle + ink drop + subtle sparks (no letters) */
function JohnnyLogo({ size = 32 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      aria-label="Tattoo logo"
      role="img"
      className="drop-shadow-[0_2px_8px_rgba(0,0,0,0.35)]"
    >
      {/* Badge background */}
      <circle
        cx="24"
        cy="24"
        r="20"
        fill="rgba(255,255,255,0.06)"
        stroke="rgba(255,255,255,0.28)"
        strokeWidth="2"
      />

      {/* Needle shaft */}
      <path
        d="M24 12 L24 30"
        stroke="white"
        strokeWidth="2.8"
        strokeLinecap="round"
        fill="none"
      />
      {/* Needle tip (triangle) */}
      <path
        d="M22 28 L24 33 L26 28 Z"
        fill="white"
        opacity="0.95"
      />

      {/* Ink drop */}
      <path
        d="M24 36
           q 3 -3 0 -6
           q -3 3 0 6 Z"
        fill="white"
        opacity="0.9"
      />

      {/* Subtle sparks (fine-line highlights) */}
      <path d="M18 16 L21 16" stroke="white" strokeWidth="1.4" strokeLinecap="round" opacity="0.7" />
      <path d="M27 20 L30 20" stroke="white" strokeWidth="1.2" strokeLinecap="round" opacity="0.55" />
      <path d="M17 22 L19 22" stroke="white" strokeWidth="1.2" strokeLinecap="round" opacity="0.55" />
    </svg>
  );
}

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
    <header className="fixed top-0 w-full z-50 bg-gradient-to-b from-black/95 to-black/80 backdrop-blur-md border-b border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between gap-3">
          {/* Brand */}
          <Link to="/" className="inline-flex items-center gap-2">
            <JohnnyLogo size={32} />
            <span className="text-lg font-black tracking-wide text-white">Johnny</span>
          </Link>

          {/* Desktop nav */}
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
              className="px-3 py-2 rounded-lg text-sm font-semibold text-white bg-yellow-400/10 hover:bg-yellow-400/20 border border-yellow-400/30 transition flex items-center gap-1"
              title="Book"
            >
              <Zap size={16} className="text-yellow-400" /> Book
            </button>
          </nav>

          {/* Right contact */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:4045555555"
              className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-white/90 transition border border-white/10"
            >
              <Phone size={16} />
              <span className="text-sm">(404) 555-5555</span>
            </a>
            <div className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 text-white/80 border border-white/10">
              <MapPin size={16} />
              <span className="text-sm">Atlanta, GA</span>
            </div>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-white/90 transition border border-white/10"
            >
              <Instagram size={18} />
              <span className="text-sm">Instagram</span>
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg bg-white/5 hover:bg-white/10 transition"
            onClick={() => setIsMenuOpen((v) => !v)}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-white/10 bg-black/95 backdrop-blur-md">
          <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col gap-1">
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
            <a
              href="tel:4045555555"
              className="mt-2 inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-white/90 transition border border-white/10"
            >
              <Phone size={16} /> (404) 555-5555
            </a>
            <div className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 text-white/80 border border-white/10">
              <MapPin size={16} /> Atlanta, GA
            </div>
            <button
              onClick={() => {
                setIsMenuOpen(false);
                onOpenBooking();
              }}
              className="inline-flex items-center gap-2 px-3 py-2 mt-1 rounded-lg bg-yellow-400 text-white font-semibold hover:bg-yellow-300 transition shadow-[0_0_16px_rgba(234,179,8,0.25)]"
            >
              <Zap size={16} /> Book
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
