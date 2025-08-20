// src/pages/Select.tsx
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// Safe asset resolver for Vite public/ with subpaths
const asset = (p: string) => {
  const base = (import.meta as any).env?.BASE_URL ?? "/";
  return `${base}${p}`.replace(/\/{2,}/g, "/");
};

export default function Select() {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setShowLoader(false), 1400);
    return () => clearTimeout(t);
  }, []);

  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="relative h-screen w-full bg-[#0b1220] text-white overflow-hidden">
      {/* header */}
      <div className="absolute top-0 left-0 right-0 h-20 flex items-center justify-center pointer-events-none z-10">
        <div className="text-center">
          <h2 className="text-sm uppercase tracking-[0.25em] text-white/60">BST</h2>
          <p className="text-xs text-white/40">Select your experience</p>
        </div>
      </div>

      {/* full-height panel region */}
      <div className="absolute inset-0 pt-24 pb-24 px-4 md:p-0">
        <div className="h-full flex flex-col md:flex-row items-stretch gap-6 md:gap-0 overflow-hidden">
          <TriPanel
            index={0}
            hovered={hovered}
            setHovered={setHovered}
            title="Barber"
            to="/barber"
            image={`url(${asset("barber.png")})`}
            imageMobile={`url(${asset("barber-mobile.png")})`} // put in public/ if you have it
            accent="bg-emerald-400"
            blurb="Cuts, fades, grooming."
          />
          <TriPanel
            index={1}
            hovered={hovered}
            setHovered={setHovered}
            title="Sneakers"
            to="/sneakers"
            image={`url(${asset("shoes.png")})`}
            imageMobile={`url(${asset("shoes-mobile.png")})`}  // optional; defaults to desktop if missing
            accent="bg-indigo-400"
            blurb="Drops, trades, heat."
          />
          <TriPanel
            index={2}
            hovered={hovered}
            setHovered={setHovered}
            title="Clothing"
            to="/clothing"
            image={`url(${asset("staks.png")})`}
            imageMobile={`url(${asset("staks-mobile.png")})`}  // optional
            accent="bg-fuchsia-400"
            blurb="Fits, caps, essentials."
          />
        </div>
      </div>

      {/* Loader overlay */}
      <LoaderOverlay show={showLoader} />
    </div>
  );
}

function TriPanel({
  index,
  hovered,
  setHovered,
  title,
  to,
  image,
  imageMobile,
  accent,
  blurb,
}: {
  index: number;
  hovered: number | null;
  setHovered: (v: number | null) => void;
  title: string;
  to: string;
  image: string;        // css url(...)
  imageMobile?: string; // css url(...), falls back to image if not provided
  accent: string;
  blurb: string;
}) {
  const isActive = hovered === index;
  const someoneHovering = hovered !== null;
  const flexGrow = !someoneHovering ? 1 : isActive ? 1.6 : 0.8;
  const scale = !someoneHovering ? 1 : isActive ? 1.04 : 0.98;
  const opacity = !someoneHovering ? 1 : isActive ? 1 : 0.85;

  return (
    <div
      onMouseEnter={() => setHovered(index)}
      onMouseLeave={() => setHovered(null)}
      className={[
        "group relative overflow-hidden h-full",
        "flex items-center justify-center",
        "py-12 md:py-0",
        "rounded-2xl md:rounded-none",
        "border-t md:border-t-0 md:border-l border-white/5",
        "transition-all duration-500 ease-out will-change-transform",
      ].join(" ")}
      style={{ flexGrow, transform: `scale(${scale})`, opacity }}
    >
      {/* Desktop bg */}
      <div
        className="absolute inset-0 hidden md:block bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
        style={{ backgroundImage: image }}
      />
      {/* Mobile bg (falls back to desktop if no mobile provided) */}
      <div
        className="absolute inset-0 md:hidden bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
        style={{ backgroundImage: imageMobile ?? image }}
      />
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative w-full max-w-md px-6 sm:px-8 text-center text-white">
        <div className="mx-auto mb-6 h-1 w-12 rounded-full opacity-80" style={{ backgroundColor: "currentColor" }} />
        <h3 className="text-3xl font-extrabold tracking-tight mb-2">{title}</h3>
        <p className="text-white/80 mb-8">{blurb}</p>

        <Link
          to={to}
          className="inline-flex items-center gap-2 rounded-full px-5 py-3 font-semibold
                     bg-white/10 hover:bg-white/15 ring-1 ring-white/15
                     backdrop-blur-md transition-all"
        >
          Enter {title}
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="opacity-90">
            <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>

        <div className={`mx-auto mt-10 h-1.5 w-16 rounded-full ${accent}`} />
      </div>
    </div>
  );
}

function LoaderOverlay({ show }: { show: boolean }) {
  if (!show) return null;
  return (
    <div className="absolute inset-0 z-50 flex items-center justify-center bg-[#0b1220]">
      <style>{`
        @keyframes bstLoaderAnim {
          0%   { inset: 0 35px 35px 0; }
          12.5%{ inset: 0 35px 0 0; }
          25%  { inset: 35px 35px 0 0; }
          37.5%{ inset: 35px 0 0 0; }
          50%  { inset: 35px 0 0 35px; }
          62.5%{ inset: 0 0 0 35px; }
          75%  { inset: 0 0 35px 35px; }
          87.5%{ inset: 0 0 35px 0; }
          100% { inset: 0 35px 35px 0; }
        }
        .bst-animate { animation: bstLoaderAnim 2.5s infinite; }
        .bst-delay   { animation-delay: -1.25s; }
      `}</style>

      <div className="relative w-[65px] aspect-square">
        <span className="absolute rounded-[50px] bst-animate shadow-[inset_0_0_0_3px] shadow-gray-800/90 dark:shadow-gray-100/90" />
        <span className="absolute rounded-[50px] bst-animate bst-delay shadow-[inset_0_0_0_3px] shadow-gray-800/90 dark:shadow-gray-100/90" />
      </div>
    </div>
  );
}
