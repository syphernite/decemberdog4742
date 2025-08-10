// project/beachbumz/src/components/Navbar.tsx
import React, { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';

const logoUrl = import.meta.env.BASE_URL + 'beachbumz-logo.png';

const items = [
  { to: '/', label: 'Home' },
  { to: '/menu', label: 'Menu' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const linkCls = ({ isActive }: { isActive: boolean }) =>
    `px-3 py-2 rounded-md text-sm font-medium transition ${isActive ? 'text-turquoise underline underline-offset-4' : 'text-white/90 hover:text-white'}`;

  return (
    <header className={`fixed inset-x-0 top-0 z-50 ${scrolled ? 'bg-ocean-blue/95 backdrop-blur shadow-lg' : 'bg-ocean-blue/80 backdrop-blur'}`} style={{ height: '64px' }}>
      <div className="mx-auto max-w-6xl h-full px-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 min-w-0">
          <img src={logoUrl} alt="Beach Bumz Pub & Pizzaria" className="h-7 w-auto md:h-9 object-contain" />
          <div className="hidden sm:flex flex-col leading-tight">
            <span className="text-white font-extrabold tracking-wide text-sm md:text-base">BEACH BUMZ</span>
            <span className="text-turquoise text-[10px] md:text-xs">PUB & PIZZARIA</span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-2">
          {items.map(n => <NavLink key={n.to} to={n.to} className={linkCls}>{n.label}</NavLink>)}
          <a href="tel:+12527267800" className="ml-2 inline-flex items-center gap-2 rounded-full border border-white/20 px-3 py-1.5 text-sm font-semibold text-white/90 hover:bg-white/10">
            <Phone className="h-4 w-4" /> (252) 726-7800
          </a>
        </nav>

        <button className="md:hidden p-2 text-white" aria-label="Toggle menu" onClick={() => setOpen(v => !v)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>

      <div className={`md:hidden transition-[max-height] duration-300 overflow-hidden ${open ? 'max-h-80' : 'max-h-0'} bg-ocean-blue/95`}>
        <div className="px-4 pb-4 pt-2 grid gap-1">
          {items.map(n => (
            <NavLink key={n.to} to={n.to} className={({ isActive }) => `block rounded-md px-3 py-2 text-base ${isActive ? 'bg-white/10 text-turquoise' : 'text-white/90 hover:bg-white/10'}`}>
              {n.label}
            </NavLink>
          ))}
          <a href="tel:+12527267800" className="mt-1 rounded-md px-3 py-2 text-base text-white/90 hover:bg-white/10 inline-flex items-center gap-2">
            <Phone className="h-4 w-4" /> (252) 726-7800
          </a>
        </div>
      </div>
    </header>
  );
}
