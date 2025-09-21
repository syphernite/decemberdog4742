import React, { useEffect, useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const go = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setOpen(false);
  };

  const BASE = import.meta.env.BASE_URL;
  const LOGO = `${BASE}images/logo.jpg`;

  // Desktop: unchanged via sm: classes
  // Mobile: glass with black text, safe-area padding
  const headerBg = scrolled
    ? 'bg-white/80 shadow-lg backdrop-saturate-150'
    : 'bg-white/20 shadow-sm backdrop-saturate-150';

  const textColor = 'text-black';
  const hoverColor = 'hover:text-red-primary';

  return (
    <header className={`fixed top-0 left-0 right-0 z-[60] transition-all ${headerBg} pt-[env(safe-area-inset-top)]`}>
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Brand with logo */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-red-primary flex items-center justify-center ring-1 ring-white/30 shadow-lg overflow-hidden">
            <img src={LOGO} alt="Manuel Food Truck Logo" className="w-full h-full object-cover" />
          </div>
          <span className={`font-display tracking-wider ${textColor} text-lg sm:text-xl hidden sm:block`}>
            MANUEL FOOD TRUCK
          </span>
        </div>

        {/* Nav desktop (unchanged) */}
        <nav className="hidden md:flex items-center gap-8">
          <button onClick={() => go('menu-page')} className={`font-semibold ${textColor} ${hoverColor}`}>
            Menu
          </button>
          <button onClick={() => go('about')} className={`font-semibold ${textColor} ${hoverColor}`}>
            About
          </button>
          <button onClick={() => go('findus')} className={`font-semibold ${textColor} ${hoverColor}`}>
            Find Us
          </button>
          <a
            href="tel:580-771-6373"
            className="inline-flex items-center gap-2 bg-red-primary/90 hover:bg-red-dark text-white px-4 py-2 rounded-lg border-2 border-red-primary/60 ring-1 ring-white/20"
          >
            <Phone size={18} /> Call to Order
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-3 rounded-xl active:scale-[0.98]"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X className={textColor} /> : <Menu className={textColor} />}
        </button>
      </div>

      {/* Mobile drawer only (desktop unchanged) */}
      {open && (
        <motion.nav
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          className="md:hidden px-4 pb-4 bg-white/80 backdrop-saturate-150"
        >
          <div className="grid gap-3">
            <button onClick={() => go('menu-page')} className="text-left font-semibold text-black py-3">
              Menu
            </button>
            <button onClick={() => go('about')} className="text-left font-semibold text-black py-3">
              About
            </button>
            <button onClick={() => go('findus')} className="text-left font-semibold text-black py-3">
              Find Us
            </button>
            <a
              href="tel:580-771-6373"
              className="mt-2 inline-flex items-center justify-center gap-2 bg-red-primary/95 text-white px-5 py-3 rounded-xl"
            >
              <Phone size={18} /> Call to Order
            </a>
          </div>
        </motion.nav>
      )}
    </header>
  );
};

export default Header;
