// src/components/Navbar.tsx
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/shop" },
    { name: "Catalog", path: "/catalog" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
  ];

  const logoUrl = `${import.meta.env.BASE_URL}logo.jpg`;

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-3">
        <div
          className={[
            "flex items-center justify-between rounded-2xl transition-all duration-300",
            isScrolled
              ? "bg-black/80 backdrop-blur-xl border border-white/10 shadow-xl py-2 px-3"
              : "bg-transparent py-3 px-3",
          ].join(" ")}
        >
          {/* Brand */}
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src={logoUrl}
              alt="Kings Wheels logo"
              className="h-9 w-9 rounded-md ring-1 ring-white/10 object-cover"
              loading="eager"
              fetchpriority="high"
            />
            <div className="leading-none">
              <div className="text-xl font-extrabold bg-gradient-to-r from-zinc-100 via-zinc-300 to-zinc-100 bg-clip-text text-transparent">
                Kings Wheels
              </div>
              <div className="text-[11px] text-white/60 mt-[2px] group-hover:text-white/80 transition-colors">
                Lawton, OK
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2">
            <div className="flex items-center gap-1 rounded-xl p-1">
              {navItems.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    aria-current={isActive ? "page" : undefined}
                    className={[
                      "relative px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200",
                      isActive ? "text-white" : "text-white/70 hover:text-white",
                    ].join(" ")}
                  >
                    <span className="relative z-10">{item.name}</span>
                    {isActive && (
                      <motion.span
                        layoutId="activePill"
                        className="absolute inset-0 rounded-lg bg-white/10"
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      />
                    )}
                  </Link>
                );
              })}
            </div>

            <Link
              to="/contact"
              className="ml-2 relative inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold text-black transition-transform duration-200 hover:scale-[1.03]"
            >
              <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-zinc-200 via-slate-100 to-zinc-200 opacity-95" />
              <span className="relative">Visit or Call</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden rounded-lg p-2 hover:bg-white/10 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-2 pb-3"
            >
              <div className="rounded-2xl bg-black/85 backdrop-blur-xl border border-white/10 shadow-xl p-2">
                {navItems.map((item) => {
                  const isActive = location.pathname === item.path;
                  return (
                    <Link
                      key={item.path}
                      to={item.path}
                      className={[
                        "block py-2 px-3 rounded-lg transition-colors duration-200",
                        isActive ? "text-white bg-white/10" : "text-white/80 hover:text-white hover:bg-white/5",
                      ].join(" ")}
                    >
                      {item.name}
                    </Link>
                  );
                })}
                <Link
                  to="/contact"
                  className="block mt-2 text-center rounded-xl py-2 font-medium text-black relative overflow-hidden"
                >
                  <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-zinc-200 via-slate-100 to-zinc-200" />
                  <span className="relative">Visit or Call</span>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
