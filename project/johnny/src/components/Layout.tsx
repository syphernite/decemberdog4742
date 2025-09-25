import React, { useEffect, useMemo, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { X, ExternalLink } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

/** Keep this in sync with the main padding below */
const HEADER_OFFSET = 72; // tighter offset (header height + thin breathing room)

const BookingModal: React.FC<{ open: boolean; onClose: () => void }> = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm">
      <div className="mx-4 w-full max-w-md rounded-2xl bg-neutral-900 border border-white/10 shadow-xl">
        <div className="p-5">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-xl font-bold text-white">Booking</h3>
            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-white transition"
            >
              <X size={18} />
            </button>
          </div>
          <p className="text-sm text-white/70 mb-4">
            This is a placeholder booking action. Replace with your Calendly or custom link.
          </p>
          <a
            href="#"
            className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-yellow-400 text-white font-semibold py-2.5 hover:bg-yellow-300 transition"
          >
            <ExternalLink size={16} />
            Continue
          </a>
        </div>
      </div>
    </div>
  );
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [revealDone, setRevealDone] = useState(true); // overlay off (saves vertical room)
  const location = useLocation();

  // Force top-of-page on refresh and route change
  useEffect(() => {
    try {
      if ('scrollRestoration' in window.history) {
        // @ts-ignore
        window.history.scrollRestoration = 'manual';
      }
    } catch {}
  }, []);

  useEffect(() => {
    // If there's a hash, scroll to element with header offset. Otherwise, go to top.
    const hash = location.hash;
    if (hash) {
      const el = document.querySelector(hash) as HTMLElement | null;
      if (el) {
        const rect = el.getBoundingClientRect();
        const absoluteTop = window.scrollY + rect.top;
        window.scrollTo({ top: Math.max(absoluteTop - HEADER_OFFSET, 0), behavior: 'smooth' });
        return;
      }
    }
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [location.pathname, location.hash]);

  // Optional reveal overlay (disabled by default)
  const overlayStyle = useMemo<React.CSSProperties>(() => ({
    position: 'fixed',
    inset: 0,
    display: revealDone ? 'none' : 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 80,
    pointerEvents: 'none',
    background: 'transparent',
  }), [revealDone]);

  useEffect(() => {
    if (revealDone) return;
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      setRevealDone(true);
      return;
    }
    const timeout = setTimeout(() => setRevealDone(true), 900);
    return () => clearTimeout(timeout);
  }, [revealDone]);

  return (
    <div className="min-h-screen bg-[#090c12] text-white overflow-x-hidden">
      {/* Initial reveal overlay (disabled) */}
      <div style={overlayStyle} />

      <Header onOpenBooking={() => setBookingOpen(true)} />

      {/* Tighter top padding to account for fixed header */}
      <main className="pt-18 md:pt-[72px]">{children}</main>

      <Footer onOpenBooking={() => setBookingOpen(true)} />

      <BookingModal open={bookingOpen} onClose={() => setBookingOpen(false)} />
    </div>
  );
};

export default Layout;
