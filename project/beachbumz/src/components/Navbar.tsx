import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);          // close on route change
    window.scrollTo({ top: 0 }); // always go top on new page
  }, [location.pathname]);

  const navItem = (to: string, label: string) => (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `relative px-2 py-1 font-medium transition-colors ${
          isActive ? "text-turquoise" : "text-white/90 hover:text-turquoise"
        }`
      }
    >
      {label}
    </NavLink>
  );

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-all ${
        isScrolled ? "bg-[#0a0f16]/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
      role="navigation"
      aria-label="Main"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex h-16 md:h-18 items-center justify-between">
          <Link to="/" className="flex items-center gap-3 shrink-0">
            <img
              src="/beachbumz-logo.png"
              alt="Beach Bumz"
              className="nav-logo block h-7 sm:h-8 w-auto"
            />
            <div className="hidden sm:flex flex-col leading-none">
              <span className="font-display text-lg text-white">BEACH BUMZ</span>
              <span className="text-[10px] tracking-wide text-turquoise/90">PUB & PIZZERIA</span>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-6">
            {navItem("/", "Home")}
            {navItem("/menu", "Menu")}
            {navItem("/about", "About")}
            {navItem("/contact", "Contact")}
            <a
              href="tel:252-726-7800"
              className="inline-flex items-center rounded-full border border-white/15 px-3 py-1 text-white hover:text-turquoise"
            >
              <Phone className="mr-2 h-4 w-4" />
              (252) 726-7800
            </a>
          </div>

          <button
            aria-label="Toggle navigation"
            onClick={() => setIsOpen((v) => !v)}
            className="md:hidden text-white"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-[max-height] duration-300 ${
          isOpen ? "max-h-72" : "max-h-0"
        } bg-[#0a0f16]/95 backdrop-blur`}
      >
        <div className="px-4 py-3 flex flex-col gap-2">
          <NavLink to="/" className="py-2 text-white/90" onClick={() => setIsOpen(false)}>
            Home
          </NavLink>
          <NavLink to="/menu" className="py-2 text-white/90" onClick={() => setIsOpen(false)}>
            Menu
          </NavLink>
          <NavLink to="/about" className="py-2 text-white/90" onClick={() => setIsOpen(false)}>
            About
          </NavLink>
          <NavLink to="/contact" className="py-2 text-white/90" onClick={() => setIsOpen(false)}>
            Contact
          </NavLink>
          <a href="tel:252-726-7800" className="py-2 text-white/90">
            (252) 726-7800
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
