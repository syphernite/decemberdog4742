import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Scissors, Facebook, Instagram, Menu, X } from 'lucide-react';

export function Navigation() {
  const [open, setOpen] = useState(false);

  const nav = [
    { to: '/', label: 'Home' },
    { to: '/book', label: 'Book' },
    { to: '/prices', label: 'Prices' },
    { to: '/gallery', label: 'Gallery' },
    { to: '/freecuts', label: 'Free Cuts' },
    { to: '/contact', label: 'Contact' },
  ];

  const base = (import.meta as any).env.BASE_URL || '/';
  const logo = base + 'logo.png';

  return (
    <header className="sticky top-0 z-40 bg-ink/85 backdrop-blur border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center gap-4">
        {/* Logo + Brand */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="size-10 rounded-full overflow-hidden ring-2 ring-white/20">
            <img src={logo} alt="Copperhead Cutz" className="w-full h-full object-cover" />
          </div>
          <div className="font-bold tracking-wide text-bone">
            <span className="copper-text">Copperhead</span> Cutz
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="ml-auto hidden md:flex items-center gap-1">
          {nav.map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              className={({ isActive }) =>
                `px-3 py-2 rounded-xl text-sm transition ${
                  isActive ? 'bg-white/10 text-white' : 'text-white/70 hover:text-white hover:bg-white/5'
                }`
              }
            >
              {n.label}
            </NavLink>
          ))}
          <a
            href="https://www.facebook.com/copperheadcutz/"
            target="_blank"
            rel="noreferrer"
            className="p-2 text-white/70 hover:text-white"
            aria-label="Facebook"
          >
            <Facebook size={18} />
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noreferrer"
            className="p-2 text-white/70 hover:text-white"
            aria-label="Instagram"
          >
            <Instagram size={18} />
          </a>
          <a
            href="https://booksy.com/en-us/1282324_copperhead-cutz_barber-shop_32141_lawton"
            target="_blank"
            rel="noreferrer"
            className="ml-2 btn-shine px-3 py-2 rounded-xl bg-white/10 text-white hover:bg-white/15 flex items-center gap-2"
          >
            <Scissors size={16} /> Book
          </a>
        </nav>

        {/* Mobile Burger */}
        <button
          type="button"
          className="ml-auto md:hidden p-2 text-white/80 hover:text-white"
          aria-label="Toggle menu"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu Panel */}
      <div
        id="mobile-menu"
        className={`md:hidden border-t border-white/10 bg-ink/95 backdrop-blur transition-[max-height,opacity] duration-200 overflow-hidden ${
          open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 py-3">
          <div className="flex flex-col">
            {nav.map((n) => (
              <NavLink
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `px-2 py-3 rounded-lg text-sm ${
                    isActive ? 'bg-white/10 text-white' : 'text-white/80 hover:text-white hover:bg-white/5'
                  }`
                }
              >
                {n.label}
              </NavLink>
            ))}

            <div className="flex items-center gap-3 pt-3">
              <a
                href="https://www.facebook.com/copperheadcutz/"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-white/5 text-white/80 hover:text-white"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-white/5 text-white/80 hover:text-white"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://booksy.com/en-us/1282324_copperhead-cutz_barber-shop_32141_lawton"
                target="_blank"
                rel="noreferrer"
                className="ml-auto px-3 py-2 rounded-xl bg-white/10 text-white hover:bg-white/15 inline-flex items-center gap-2"
                onClick={() => setOpen(false)}
              >
                <Scissors size={16} /> Book
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
