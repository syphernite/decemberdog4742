import React from 'react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-onyx border-t border-champagne/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-heading text-champagne">OBSIDIAN</h3>
            <p className="text-sm text-white/60">
              Luxury jewelry crafted from volcanic glass and precious metals.
            </p>
            <div className="flex space-x-4">
              <div className="text-xs text-white/40">Payments accepted:</div>
              <div className="flex space-x-2">
                <div className="bg-white/10 p-1 text-xs">VISA</div>
                <div className="bg-white/10 p-1 text-xs">MC</div>
                <div className="bg-white/10 p-1 text-xs">AMEX</div>
                <div className="bg-white/10 p-1 text-xs">PAYPAL</div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-champagne">Shop</h4>
            <nav className="space-y-2">
              <Link to="/collections" className="block text-sm text-white/60 hover:text-champagne">
                All Collections
              </Link>
              <Link to="/new-arrivals" className="block text-sm text-white/60 hover:text-champagne">
                New Arrivals
              </Link>
              <Link to="/sale" className="block text-sm text-white/60 hover:text-champagne">
                Sale
              </Link>
              <Link to="/gift-cards" className="block text-sm text-white/60 hover:text-champagne">
                Gift Cards
              </Link>
            </nav>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-champagne">Support</h4>
            <nav className="space-y-2">
              <Link to="/help" className="block text-sm text-white/60 hover:text-champagne">
                Help Center
              </Link>
              <Link to="/shipping-returns" className="block text-sm text-white/60 hover:text-champagne">
                Shipping & Returns
              </Link>
              <Link to="/size-guide" className="block text-sm text-white/60 hover:text-champagne">
                Size Guide
              </Link>
              <Link to="/contact" className="block text-sm text-white/60 hover:text-champagne">
                Contact Us
              </Link>
            </nav>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-champagne">Newsletter</h4>
            <p className="text-sm text-white/60">
              Subscribe for exclusive previews and early access.
            </p>
            <div className="space-y-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-transparent border border-champagne/20 px-3 py-2 text-sm focus:border-champagne/50 focus:outline-none"
              />
              <button className="w-full bg-champagne text-obsidian py-2 px-4 text-sm font-medium hover:bg-champagne/90">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-champagne/20 mt-8 pt-8 text-center">
          <p className="text-sm text-white/40">
            © 2024 Obsidian Luxury. All rights reserved.
          </p>
          <div className="mt-4 space-x-6">
            <Link to="/privacy" className="text-xs text-white/40 hover:text-champagne">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-xs text-white/40 hover:text-champagne">
              Terms of Service
            </Link>
            <Link to="/accessibility" className="text-xs text-white/40 hover:text-champagne">
              Accessibility
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}