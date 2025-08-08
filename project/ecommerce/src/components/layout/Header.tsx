import React from 'react';
import { motion } from 'framer-motion';
import { Search, ShoppingBag, User, Heart, Menu } from 'lucide-react';
import { Button } from '../ui/Button';
import { useStore } from '../../lib/store';
import { Link } from 'react-router-dom';

export function Header() {
  const { cart, setCartDrawerOpen, setSearchOpen, setMobileMenuOpen } = useStore();
  
  const itemCount = cart.items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <motion.header
      className="sticky top-0 z-50 w-full border-b border-champagne/20 bg-obsidian/80 backdrop-blur-lg"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 400, damping: 40 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu className="h-5 w-5" />
          </Button>

          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <motion.div
              className="text-2xl font-heading text-champagne"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 400, damping: 30 }}
            >
              OBSIDIAN
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link
              to="/collections"
              className="text-sm font-medium text-white/80 hover:text-champagne transition-colors"
            >
              Collections
            </Link>
            <Link
              to="/new-arrivals"
              className="text-sm font-medium text-white/80 hover:text-champagne transition-colors"
            >
              New Arrivals
            </Link>
            <Link
              to="/about"
              className="text-sm font-medium text-white/80 hover:text-champagne transition-colors"
            >
              About
            </Link>
            <Link
              to="/help"
              className="text-sm font-medium text-white/80 hover:text-champagne transition-colors"
            >
              Help
            </Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setSearchOpen(true)}
              className="text-white/80 hover:text-champagne"
            >
              <Search className="h-5 w-5" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              asChild
              className="text-white/80 hover:text-champagne"
            >
              <Link to="/wishlist">
                <Heart className="h-5 w-5" />
              </Link>
            </Button>

            <Button
              variant="ghost"
              size="icon"
              asChild
              className="text-white/80 hover:text-champagne"
            >
              <Link to="/account">
                <User className="h-5 w-5" />
              </Link>
            </Button>

            <Button
              variant="ghost"
              size="icon"
              onClick={() => setCartDrawerOpen(true)}
              className="relative text-white/80 hover:text-champagne"
            >
              <ShoppingBag className="h-5 w-5" />
              {itemCount > 0 && (
                <motion.span
                  className="absolute -top-1 -right-1 bg-champagne text-obsidian text-xs w-5 h-5 rounded-full flex items-center justify-center font-medium"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 600, damping: 30 }}
                >
                  {itemCount}
                </motion.span>
              )}
            </Button>
          </div>
        </div>
      </div>
    </motion.header>
  );
}