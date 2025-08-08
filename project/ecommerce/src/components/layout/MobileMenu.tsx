import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/Button';
import { useStore } from '../../lib/store';

export function MobileMenu() {
  const { mobileMenuOpen, setMobileMenuOpen } = useStore();

  const menuItems = [
    { label: 'Home', href: '/' },
    { label: 'Collections', href: '/collections' },
    { label: 'New Arrivals', href: '/new-arrivals' },
    { label: 'About', href: '/about' },
    { label: 'Help', href: '/help' },
    { label: 'Account', href: '/account' },
    { label: 'Wishlist', href: '/wishlist' },
  ];

  return (
    <AnimatePresence>
      {mobileMenuOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-obsidian/80 backdrop-blur-sm z-50 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Menu */}
          <motion.div
            className="fixed top-0 left-0 h-full w-80 bg-onyx border-r border-champagne/20 z-50 md:hidden"
            initial={{ x: -320 }}
            animate={{ x: 0 }}
            exit={{ x: -320 }}
            transition={{ type: 'spring', stiffness: 400, damping: 40 }}
          >
            <div className="p-6">
              {/* Header */}
              <div className="flex items-center justify-between mb-8">
                <div className="text-xl font-heading text-champagne">OBSIDIAN</div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>

              {/* Menu Items */}
              <nav className="space-y-2">
                {menuItems.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      to={item.href}
                      className="block px-4 py-3 text-white/80 hover:text-champagne hover:bg-champagne/10 transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}