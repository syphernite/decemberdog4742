import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Scissors, Facebook, Instagram } from 'lucide-react';

export function Navigation() {
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
        <Link to="/" className="flex items-center gap-3 group">
          <div className="size-10 rounded-full overflow-hidden ring-2 ring-white/20">
            <img src={logo} alt="Copperhead Cutz" className="w-full h-full object-cover" />
          </div>
          <div className="font-bold tracking-wide text-bone">
            <span className="copper-text">Copperhead</span> Cutz
          </div>
        </Link>
        <nav className="ml-auto hidden md:flex items-center gap-1">
          {nav.map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              className={({ isActive }) =>
                `px-3 py-2 rounded-xl text-sm transition ${isActive ? 'bg-white/10 text-white' : 'text-white/70 hover:text-white hover:bg:white/5'}`
              }
            >
              {n.label}
            </NavLink>
          ))}
          <a href="https://www.facebook.com/copperheadcutz/" target="_blank" rel="noreferrer" className="p-2 text-white/70 hover:text-white">
            <Facebook size={18} />
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" className="p-2 text-white/70 hover:text-white">
            <Instagram size={18} />
          </a>
          <a href="https://booksy.com/en-us/1282324_copperhead-cutz_barber-shop_32141_lawton" target="_blank" rel="noreferrer" className="ml-2 btn-shine px-3 py-2 rounded-xl bg-white/10 text-white hover:bg-white/15 flex items-center gap-2">
            <Scissors size={16} /> Book
          </a>
        </nav>
      </div>
    </header>
  );
}
