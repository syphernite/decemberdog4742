import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";

// Assets
const PNG = import.meta.env.BASE_URL + "beachbumz-logo.png";
const JPG = import.meta.env.BASE_URL + "beachbumz-logo.jpg";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/menu", label: "Menu" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [src, setSrc] = useState(PNG);
  const { pathname } = useLocation();

  useEffect(() => setOpen(false), [pathname]);

  const linkClass =
    ({ isActive }: { isActive: boolean }) =>
      `px-3 py-2 rounded-md text-sm font-medium transition ${
        isActive ? "text-turquoise underline underline-offset-4" : "text-white/90 hover:text-white"
      }`;

  const Credit = ({ className = "" }: { className?: string }) => (
    <div className={`text-xs text-white/60 hover:text-white transition ${className}`}>
      <a
        href="https://built4you.org"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1"
        aria-label="Built4You website"
      >
        <span>Made with</span>
        <span aria-hidden>❤️</span>
        <span>by</span>
        <span className="font-semibold text-ocean-blue">Built4You</span>
        <span aria-hidden>🐟</span>
      </a>
    </div>
  );

  return (
    <header className="fixed inset-x-0 top-0 z-50 h-16 md:h-20">
      {/* EXACT match to logo background: pure black */}
      <div className="absolute inset-0 bg-black" />

      <div className="relative mx-auto max-w-6xl h-full px-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 min-w-0">
          {/* Logo wrapped with same pure-black background */}
          <div className="bg-black">
            <img
              src={src}
              onError={() => setSrc(JPG)}
              alt="Beach Bumz Pub & Pizzaria"
              className="block h-8 w-auto md:h-10 object-contain m-0 p-0"
            />
          </div>
          <div className="hidden sm:flex flex-col leading-tight select-none">
            <span className="text-white font-extrabold tracking-wide text-sm md:text-base">BEACH BUMZ</span>
            <span className="text-turquoise text-[10px] md:text-xs">PUB & PIZZARIA</span>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-2">
          {NAV.map((n) => (
            <NavLink key={n.to} to={n.to} className={linkClass}>
              {n.label}
            </NavLink>
          ))}
          <a
            href="tel:+12527267800"
            className="ml-2 inline-flex items-center gap-2 rounded-md bg-white/10 px-3 py-1.5 text-sm font-semibold text-white/90 hover:bg-white/20"
          >
            <Phone className="h-4 w-4" />
            (252) 726-7800
          </a>

          {/* Desktop credit */}
          <Credit className="ml-3 hidden lg:block" />
        </nav>

        {/* Mobile burger */}
        <button
          aria-label="Open menu"
          onClick={() => setOpen(true)}
          className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-white/90 hover:bg-white/10"
        >
          <Menu className="h-6 w-6" />
        </button>

        {/* Mobile drawer */}
        <div className={`md:hidden fixed inset-0 z-50 transition ${open ? "pointer-events-auto" : "pointer-events-none"}`}>
          <div
            className={`absolute inset-0 bg-black/50 transition-opacity ${open ? "opacity-100" : "opacity-0"}`}
            onClick={() => setOpen(false)}
          />
          <div
            className={`absolute right-0 top-0 h-full w-72 bg-black text-white transform transition-transform ${
              open ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="flex items-center justify-between p-4 border-b border-white/10">
              <div className="flex items-center gap-2">
                <div className="bg-black">
                  <img src={src} onError={() => setSrc(JPG)} alt="Logo" className="h-8 w-auto block" />
                </div>
                <span className="font-semibold">BEACH BUMZ</span>
              </div>
              <button aria-label="Close menu" onClick={() => setOpen(false)} className="p-2 rounded-md hover:bg-white/10">
                <X className="h-6 w-6" />
              </button>
            </div>

            <nav className="p-2 flex flex-col h-[calc(100%-56px)]">
              <div className="flex-1">
                {NAV.map((n) => (
                  <NavLink key={n.to} to={n.to} className="block px-4 py-3 rounded-md hover:bg-white/10">
                    {n.label}
                  </NavLink>
                ))}
                <a
                  href="tel:+12527267800"
                  className="mt-1 rounded-md px-3 py-2 bg-white/10 text-white/90 hover:bg-white/20 inline-flex items-center gap-2"
                >
                  <Phone className="h-4 w-4" />
                  (252) 726-7800
                </a>
              </div>

              {/* Mobile credit pinned to bottom */}
              <div className="p-4 border-t border-white/10">
                <Credit />
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
