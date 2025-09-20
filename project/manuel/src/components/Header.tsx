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

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all ${
        scrolled ? 'bg-white/95 shadow-lg backdrop-blur' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-red-primary flex items-center justify-center ring-1 ring-white/30 shadow-lg">
            <span className="text-white font-display">M</span>
          </div>
          <span className="font-display tracking-wider text-black-deep text-xl hidden sm:block">
            MANUEL FOOD TRUCK
          </span>
        </div>

        {/* Nav desktop */}
        <nav className="hidden md:flex items-center gap-8">
          <button onClick={() => go('menu')} className="font-semibold hover:text-red-primary">
            Menu
          </button>
          <button onClick={() => go('about')} className="font-semibold hover:text-red-primary">
            About
          </button>
          <button onClick={() => go('findus')} className="font-semibold hover:text-red-primary">
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
        <button className="md:hidden p-2 rounded-lg hover:bg-white/60" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <motion.nav
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          className="md:hidden px-4 pb-4"
        >
          <div className="grid gap-2">
            <button onClick={() => go('menu')} className="text-left font-semibold">
              Menu
            </button>
            <button onClick={() => go('about')} className="text-left font-semibold">
              About
            </button>
            <button onClick={() => go('findus')} className="text-left font-semibold">
              Find Us
            </button>
            <a
              href="tel:580-771-6373"
              className="mt-2 inline-flex items-center gap-2 bg-red-primary/90 text-white px-4 py-2 rounded-lg"
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
