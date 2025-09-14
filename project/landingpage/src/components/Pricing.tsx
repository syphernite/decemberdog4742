// src/components/Pricing.tsx
import React from "react";
import { Link } from "react-router-dom";

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="relative py-24">
      {/* FX backdrop */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -inset-40 blur-3xl opacity-40 animate-pulse bg-[radial-gradient(circle_at_30%_20%,rgba(16,185,129,.35),transparent_40%),radial-gradient(circle_at_70%_30%,rgba(56,189,248,.35),transparent_45%),radial-gradient(circle_at_50%_80%,rgba(168,85,247,.3),transparent_40%)]" />
        <div className="absolute left-1/2 top-1/2 h-[80vmin] w-[80vmin] -translate-x-1/2 -translate-y-1/2 rounded-full border border-emerald-300/20 [mask-image:radial-gradient(closest-side,black,transparent)]">
          <div className="absolute inset-0 rounded-full border border-sky-300/20 animate-[spin_14s_linear_infinite]" />
          <div className="absolute inset-6 rounded-full border border-fuchsia-300/20 animate-[spin_20s_linear_infinite_reverse]" />
        </div>
      </div>

      <div className="relative mx-auto flex max-w-4xl items-center justify-center px-6">
        <Link
          to="/pricing"
          aria-label="View pricing"
          className="group relative inline-flex items-center justify-center"
        >
          {/* Outer glow ring */}
          <span className="absolute inset-0 rounded-2xl bg-gradient-to-r from-emerald-500 via-sky-500 to-fuchsia-500 opacity-70 blur-xl transition-opacity duration-500 group-hover:opacity-100" />
          {/* Button core */}
          <span className="relative rounded-2xl bg-black/70 px-10 py-6 ring-1 ring-white/10 backdrop-blur-md transition-transform duration-300 group-hover:scale-105">
            {/* Shimmer */}
            <span className="pointer-events-none absolute inset-0 overflow-hidden rounded-2xl">
              <span className="absolute -inset-1 bg-[conic-gradient(from_0deg,transparent_0deg,rgba(16,185,129,.25)_60deg,transparent_120deg)] animate-[spin_2.5s_linear_infinite]" />
            </span>

            {/* Text + sparkles */}
            <span className="relative block text-center">
              <span className="block text-[13px] tracking-widest text-emerald-300/80">
                READY TO LEVEL UP?
              </span>
              <span className="mt-1 block text-3xl font-extrabold tracking-tight text-white">
                VIEW PRICING
              </span>

              {/* Sparkle bursts */}
              <span className="pointer-events-none absolute -right-6 -top-3 h-3 w-3 rounded-full bg-white/80 opacity-80 [box-shadow:0_0_12px_4px_rgba(255,255,255,0.6)] animate-ping" />
              <span className="pointer-events-none absolute -left-7 -bottom-4 h-2 w-2 rounded-full bg-emerald-300/90 opacity-80 [box-shadow:0_0_10px_4px_rgba(110,231,183,0.6)] animate-ping" />
            </span>
          </span>

          {/* Orbiting particles */}
          <span className="pointer-events-none absolute -inset-2">
            <span className="absolute left-1/2 top-1/2 h-1 w-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-300 shadow-[0_0_12px_4px_rgba(16,185,129,0.6)] animate-[spin_6s_linear_infinite] [transform-origin:6.5rem]" />
            <span className="absolute left-1/2 top-1/2 h-1 w-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-300 shadow-[0_0_12px_4px_rgba(125,211,252,0.6)] animate-[spin_9s_linear_infinite_reverse] [transform-origin:9rem]" />
            <span className="absolute left-1/2 top-1/2 h-[2px] w-[2px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-fuchsia-300 shadow-[0_0_10px_4px_rgba(240,171,252,0.6)] animate-[spin_12s_linear_infinite] [transform-origin:11.5rem]" />
          </span>
        </Link>
      </div>

      {/* Local keyframes */}
      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
        @keyframes spin_reverse { to { transform: rotate(-360deg); } }
      `}</style>
    </section>
  );
};

export default Pricing;
