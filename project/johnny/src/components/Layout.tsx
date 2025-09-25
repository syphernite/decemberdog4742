import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Instagram, ExternalLink, Zap, Droplet } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

type BookingModalProps = {
  open: boolean;
  onClose: () => void;
};

const BookingModal: React.FC<BookingModalProps> = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
    >
      <div className="mx-4 w-full max-w-md rounded-2xl bg-neutral-900 border border-white/10 shadow-xl">
        <div className="p-5">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-xl font-bold text-white">Booking Link</h3>
            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-white"
              aria-label="Close booking modal"
            >
              <X size={18} />
            </button>
          </div>
          <p className="text-gray-300 mb-6">insert your booking link here</p>
          <div className="flex justify-end">
            <button
              onClick={onClose}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-yellow-400 text-black font-semibold hover:bg-yellow-300 transition-colors"
            >
              <ExternalLink size={18} />
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [bookingOpen, setBookingOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (href: string) => location.pathname === href;

  const openBooking = () => setBookingOpen(true);
  const closeBooking = () => setBookingOpen(false);

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-black/95 backdrop-blur-md border-b border-gray-800/50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            {/* Logo */}
            <Link
              to="/"
              className="group flex items-center space-x-3 text-3xl font-black text-white hover:text-yellow-400 transition-all duration-300"
            >
              <div className="p-2 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                <Zap className="text-black" size={24} />
              </div>
              <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent group-hover:from-yellow-300 group-hover:to-yellow-500 transition-all duration-300">
                Tattoo Johnny ATL
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-10">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`relative text-xl font-bold transition-all duration-300 hover:text-yellow-400 group ${
                    isActive(item.href) ? 'text-yellow-400' : 'text-gray-300'
                  }`}
                >
                  <span className="relative z-10">{item.name}</span>
                  <div
                    className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-yellow-400 to-yellow-600 transform origin-left transition-transform duration-300 ${
                      isActive(item.href)
                        ? 'scale-x-100'
                        : 'scale-x-0 group-hover:scale-x-100'
                    }`}
                  />
                </Link>
              ))}
            </nav>

            {/* Actions (Desktop) */}
            <div className="hidden md:flex items-center space-x-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
              >
                <Instagram size={20} />
                <span className="text-sm">Instagram</span>
              </a>
              <button
                type="button"
                onClick={openBooking}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-yellow-400 text-black font-semibold hover:bg-yellow-300 transition-colors"
              >
                <ExternalLink size={18} />
                Book Now
              </button>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 text-white hover:text-yellow-400 hover:bg-yellow-400/10 rounded-xl transition-all duration-300 transform hover:scale-110"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/98 backdrop-blur-md border-t border-gray-800/50 animate-slide-down">
            <div className="px-6 py-8 space-y-6">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block text-2xl font-bold transition-all duration-300 transform hover:translate-x-2 ${
                    isActive(item.href)
                      ? 'text-yellow-400'
                      : 'text-gray-300 hover:text-yellow-400'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}

              {/* Mobile actions */}
              <div className="pt-2 flex items-center gap-4">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-gray-700 text-gray-300 hover:text-white"
                >
                  <Instagram size={18} />
                  Instagram
                </a>
                <button
                  type="button"
                  onClick={() => {
                    setIsMenuOpen(false);
                    openBooking();
                  }}
                  className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-yellow-400 text-black font-semibold hover:bg-yellow-300"
                >
                  <ExternalLink size={18} />
                  Book
                </button>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="pt-24">{children}</main>

      {/* Footer */}
      <footer className="relative bg-gradient-to-br from-gray-900 to-black border-t border-gray-800/50 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
            <div className="text-gray-400 text-lg">
              © {new Date().getFullYear()} Tattoo Johnny ATL. All rights reserved.
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
              <a
                href="https://instagram.com/tattoojohnnyatl"
                target="_blank"
                rel="noopener noreferrer"
                className="group text-gray-400 hover:text-yellow-400 transition-all duration-300 flex items-center space-x-3 transform hover:scale-105"
              >
                <div className="p-2 bg-gray-800 rounded-full group-hover:bg-yellow-400/10 transition-colors duration-300">
                  <Instagram size={24} />
                </div>
                <span className="text-lg font-medium">@tattoojohnnyatl</span>
              </a>

              <button
                type="button"
                onClick={openBooking}
                className="group text-gray-400 hover:text-yellow-400 transition-all duration-300 flex items-center space-x-3 transform hover:scale-105"
              >
                <div className="p-2 bg-gray-800 rounded-full group-hover:bg-yellow-400/10 transition-colors duration-300">
                  <ExternalLink size={24} />
                </div>
                <span className="text-lg font-medium">Book Now</span>
              </button>
            </div>
          </div>

          {/* Build credit (cleaned up) */}
          <div className="mt-8 pt-6 border-t border-gray-800/60 flex items-center justify-center text-sm text-gray-400">
            <span className="inline-flex items-center gap-2">
              <span className="hidden sm:inline">made with</span>
              <Droplet size={16} className="text-yellow-400" aria-hidden="true" />
              <span>by</span>
              <a
                href="https://built4you.org"
                target="_blank"
                rel="noreferrer"
                className="font-semibold text-yellow-400 hover:text-yellow-300 underline underline-offset-4"
              >
                Built4You
              </a>
            </span>
          </div>
        </div>
      </footer>

      {/* Global booking modal */}
      <BookingModal open={bookingOpen} onClose={closeBooking} />
    </div>
  );
};

export default Layout;
