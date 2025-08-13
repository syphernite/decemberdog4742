// src/components/Header.tsx
import React, { useState, useEffect, useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { clsx } from 'clsx';

type NavItem = { name: string; href: string };

const NAV: NavItem[] = [
  { name: 'Home', href: '/' },
  { name: 'Content', href: '/content' },
  { name: 'Services', href: '/collab' },
  { name: 'Shop', href: '/shop' },
  { name: 'Media Kit', href: '/media-kit' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const activeHref = useMemo(() => {
    const exact = NAV.find(n => n.href === location.pathname);
    if (exact) return exact.href;
    const nested = NAV.find(n => n.href !== '/' && location.pathname.startsWith(n.href));
    return nested?.href ?? '/';
  }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className={clsx(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled ? 'backdrop-blur-md bg-black/40 border-b border-white/10' : 'bg-transparent'
      )}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3" aria-label="Primary">
        <div className="flex items-center justify-between gap-4">
          {/* Brand */}
          <Link to="/" className="flex items-center gap-2">
            <div className="h-10 w-10 rounded-full bg-gradient-to-r from-neon-violet to-neon-cyan grid place-items-center">
              <span className="text-white font-bold text-lg">C</span>
            </div>
            <span className="text-white font-display text-xl tracking-wider">CREATOR EMPIRE</span>
          </Link>

          {/* Desktop segmented tabs */}
          <div className="hidden lg:flex items-center">
            <LayoutGroup id="primary-tabs">
              <div
                role="tablist"
                aria-label="Site sections"
                className="relative flex items-center gap-1 rounded-full p-1 bg-white/5 border border-white/10 backdrop-blur-md"
              >
                {NAV.map(item => {
                  const isActive = item.href === activeHref;
                  return (
                    <Link
                      key={item.name}
                      to={item.href}
                      role="tab"
                      aria-selected={isActive}
                      className={clsx(
                        'relative px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200',
                        isActive ? 'text-white' : 'text-gray-300 hover:text-white'
                      )}
                    >
                      {/* Active pill lives inside the active tab only */}
                      {isActive && (
                        <motion.span
                          layoutId="activePill"
                          className="absolute inset-0 rounded-full bg-white/10 ring-1 ring-white/15 shadow-[0_0_30px_rgba(59,130,246,0.25)]"
                          transition={{ type: 'spring', stiffness: 500, damping: 40 }}
                        />
                      )}
                      <span className="relative z-10">{item.name}</span>
                      {isActive && (
                        <motion.span
                          layoutId="activeUnderline"
                          className="relative z-10 block h-0.5 rounded-full bg-gradient-to-r from-neon-violet to-neon-cyan mt-1"
                          transition={{ type: 'spring', stiffness: 500, damping: 40 }}
                        />
                      )}
                    </Link>
                  );
                })}
              </div>
            </LayoutGroup>
          </div>

          {/* Right actions */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              to="/booking"
              className="glass-panel px-5 py-2 text-sm font-medium text-white hover:shadow-neon transition-all duration-300"
            >
              Book Collab
            </Link>
          </div>

          {/* Mobile burger */}
          <button
            type="button"
            className="lg:hidden inline-flex items-center justify-center rounded-md p-2.5 text-gray-300 hover:text-white"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <Bars3Icon className="h-6 w-6" />
          </button>
        </div>

        {/* Mobile drawer */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              key="mobile"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 lg:hidden"
            >
              <div className="absolute inset-0 bg-black/60" onClick={() => setMobileOpen(false)} />
              <motion.div
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'spring', damping: 30, stiffness: 300 }}
                className="ml-auto h-full w-full max-w-sm bg-neutral-900/95 backdrop-blur-md border-l border-white/10 p-6"
              >
                <div className="flex items-center justify-between">
                  <Link to="/" className="flex items-center gap-2" onClick={() => setMobileOpen(false)}>
                    <div className="h-8 w-8 rounded-full bg-gradient-to-r from-neon-violet to-neon-cyan grid place-items-center">
                      <span className="text-white font-bold">C</span>
                    </div>
                    <span className="text-white font-display text-lg">CREATOR</span>
                  </Link>
                  <button
                    type="button"
                    className="rounded-md p-2.5 text-gray-300 hover:text-white"
                    onClick={() => setMobileOpen(false)}
                    aria-label="Close menu"
                  >
                    <XMarkIcon className="h-6 w-6" />
                  </button>
                </div>

                <div className="mt-8 space-y-2">
                  {NAV.map(item => {
                    const isActive = item.href === activeHref;
                    return (
                      <Link
                        key={item.name}
                        to={item.href}
                        onClick={() => setMobileOpen(false)}
                        className={clsx(
                          'block px-4 py-3 rounded-xl transition-colors',
                          isActive
                            ? 'bg-white/10 text-white'
                            : 'text-gray-300 hover:text-white hover:bg-white/5'
                        )}
                      >
                        {item.name}
                      </Link>
                    );
                  })}

                  <Link
                    to="/booking"
                    onClick={() => setMobileOpen(false)}
                    className="block mt-4 glass-panel px-4 py-3 text-center text-base font-medium text-white"
                  >
                    Book Collab
                  </Link>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}
