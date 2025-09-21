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

  const headerBg = scrolled
    ? 'bg-white/80 shadow-lg backdrop-saturate-150'
    : 'bg-white/20 shadow-sm backdrop-saturate-150';

  const textColor = 'text-black';
  const glassBtn =
    'font-semibold px-4 py-2 rounded-lg bg-white/20 backdrop-blur-md border border-white/40 hover:bg-white/30 transition-colors';

  const callBtn =
    'inline-flex items-center gap-2 px-5 py-2 rounded-lg text-white font-bold bg-gradient-to-r from-red-500 via-red-600 to-red-700 shadow-[0_0_20px_rgba(255,0,0,0.5)] hover:shadow-[0_0_25px_rgba(255,0,0,0.7)] transition-all';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[60] transition-all ${headerBg} pt-[env(safe-area-inset-top)]`}
    >
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-red-primary flex items-center justify-center ring-1 ring-white/30 shadow-lg overflow-hidden">
            <img src={LOGO} alt="Manuel Food Truck Logo" className="w-full h-full object-cover" />
          </div>
          <span className={`font-display tracking-wider ${textColor} text-lg sm:text-xl hidden sm:block`}>
            MANUEL FOOD TRUCK
          </span>
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          <button onClick={() => go('menu-page')} className={`${glassBtn}`}>
            Menu
          </button>
          <button onClick={() => go('findus')} className={`${glassBtn}`}>
            Find Us
          </button>
          <a href="tel:580-771-6373" className={callBtn}>
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

      {/* Mobile drawer */}
      {open && (
        <motion.nav
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          className="md:hidden px-4 pb-4 bg-white/80 backdrop-saturate-150 backdrop-blur-md"
        >
          <div className="grid gap-3">
            <button onClick={() => go('menu-page')} className={`${glassBtn} text-left`}>
              Menu
            </button>
            <button onClick={() => go('findus')} className={`${glassBtn} text-left`}>
              Find Us
            </button>
            <a href="tel:580-771-6373" className={`${callBtn} justify-center`}>
              <Phone size={18} /> Call to Order
            </a>
          </div>
        </motion.nav>
      )}
    </header>
  );
};

export default Header;
