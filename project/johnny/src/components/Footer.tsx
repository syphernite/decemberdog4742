import React from 'react';
import { Instagram, Zap, Phone, MapPin } from 'lucide-react';

/** Monochrome SVG logo: tattoo needle + ink drop + subtle sparks (no letters) */
function JohnnyLogo({ size = 28 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      aria-label="Tattoo logo"
      role="img"
      className="drop-shadow-[0_2px_8px_rgba(0,0,0,0.35)]"
    >
      <circle
        cx="24"
        cy="24"
        r="20"
        fill="rgba(255,255,255,0.06)"
        stroke="rgba(255,255,255,0.28)"
        strokeWidth="2"
      />

      <path
        d="M24 12 L24 30"
        stroke="white"
        strokeWidth="2.8"
        strokeLinecap="round"
        fill="none"
      />
      <path d="M22 28 L24 33 L26 28 Z" fill="white" opacity="0.95" />
      <path d="M24 36 q 3 -3 0 -6 q -3 3 0 6 Z" fill="white" opacity="0.9" />

      <path d="M18 16 L21 16" stroke="white" strokeWidth="1.4" strokeLinecap="round" opacity="0.7" />
      <path d="M27 20 L30 20" stroke="white" strokeWidth="1.2" strokeLinecap="round" opacity="0.55" />
      <path d="M17 22 L19 22" stroke="white" strokeWidth="1.2" strokeLinecap="round" opacity="0.55" />
    </svg>
  );
}

type FooterProps = {
  onOpenBooking: () => void;
};

const Footer: React.FC<FooterProps> = ({ onOpenBooking }) => {
  return (
    <footer className="relative bg-gradient-to-br from-[#0b0f17] to-black border-t border-white/10 overflow-hidden">
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 50% 30%, rgba(255,255,255,0.1) 0%, transparent 60%)`,
          }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="flex items-center gap-3">
            <JohnnyLogo size={28} />
            <div>
              <div className="text-xl font-black tracking-wide text-white">Johnny</div>
              <p className="text-white/60">Clean linework. Smooth shading. Custom designs.</p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="tel:4045555555"
              className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-white/90 transition border border-white/10"
            >
              <Phone size={16} />
              <span className="text-sm">(404) 555-5555</span>
            </a>
            <div className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 text-white/80 border border-white/10">
              <MapPin size={16} />
              <span className="text-sm">Atlanta, GA</span>
            </div>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-white/90 transition border border-white/10"
            >
              <Instagram size={18} />
              <span className="text-sm">Instagram</span>
            </a>
            <button
              onClick={onOpenBooking}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-yellow-400 text-white font-semibold hover:bg-yellow-300 transition shadow-[0_0_16px_rgba(234,179,8,0.25)]"
            >
              <Zap size={18} /> Book
            </button>
          </div>
        </div>

        <div className="mt-8 border-t border-white/10 pt-6 text-sm text-white/50">
          <span>
            © {new Date().getFullYear()} Johnny. Built by{' '}
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
