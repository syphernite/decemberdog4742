import React from 'react';
import { Instagram, Zap } from 'lucide-react';

type FooterProps = {
  onOpenBooking: () => void;
};

const Footer: React.FC<FooterProps> = ({ onOpenBooking }) => {
  return (
    <footer className="relative bg-gradient-to-br from-gray-900 to-black border-t border-gray-800/50 overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at center, rgba(255,255,255,0.1) 0%, transparent 100%)`,
          }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <div className="text-xl font-black tracking-wide">
              <span className="text-white">JOHNNY</span>
              <span className="text-yellow-400">INK</span>
            </div>
            <p className="text-white/60 mt-1">
              Clean linework. Smooth shading. Custom designs.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-white/90 transition"
            >
              <Instagram size={18} />
              <span className="text-sm">Instagram</span>
            </a>
            <button
              onClick={onOpenBooking}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-yellow-400 text-black font-semibold hover:bg-yellow-300 transition shadow-[0_0_16px_rgba(234,179,8,0.25)]"
            >
              <Zap size={18} /> Book
            </button>
          </div>
        </div>
        <div className="mt-8 border-t border-white/10 pt-6 text-sm text-white/50">
          <span>
            © {new Date().getFullYear()} Johnny Ink. Built by{' '}
            <a
              href="https://built4you.org"
              target="_blank"
              rel="noreferrer"
              className="underline decoration-dotted underline-offset-2 hover:text-white"
            >
              Built4You
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
