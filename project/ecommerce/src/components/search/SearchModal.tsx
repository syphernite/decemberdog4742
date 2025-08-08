import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X } from 'lucide-react';
import { Button } from '../ui/Button';
import { useStore } from '../../lib/store';

export function SearchModal() {
  const { searchOpen, setSearchOpen } = useStore();

  return (
    <AnimatePresence>
      {searchOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-obsidian/90 backdrop-blur-sm z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSearchOpen(false)}
          />

          {/* Modal */}
          <motion.div
            className="fixed inset-0 z-50 flex items-start justify-center pt-20"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 400, damping: 30 }}
          >
            <div className="w-full max-w-2xl mx-4 bg-onyx border border-champagne/20 shadow-luxury">
              {/* Search Input */}
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white/40" />
                <input
                  type="text"
                  placeholder="Search for products, collections..."
                  className="w-full bg-transparent border-0 py-6 pl-12 pr-16 text-lg text-white placeholder-white/40 focus:outline-none"
                  autoFocus
                />
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2"
                  onClick={() => setSearchOpen(false)}
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>

              {/* Results */}
              <div className="border-t border-champagne/20 p-6">
                <div className="text-center text-white/60 py-8">
                  <p>Start typing to search...</p>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}