// src/components/Pricing.tsx
import React from "react";
import { Link } from "react-router-dom";

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="relative py-32 overflow-hidden">
      {/* floating decorative elements around the button */}
      <div className="pointer-events-none absolute inset-0">
        {/* faint moving dots */}
        <span className="absolute left-[15%] top-[20%] h-2 w-2 rounded-full bg-emerald-300/40 shadow-[0_0_12px_4px_rgba(16,185,129,0.3)] animate-ping" />
        <span className="absolute right-[18%] top-[35%] h-2 w-2 rounded-full bg-sky-300/40 shadow-[0_0_12px_4px_rgba(125,211,252,0.3)] animate-ping" />
        <span className="absolute left-[25%] bottom-[25%] h-1.5 w-1.5 rounded-full bg-fuchsia-300/40 shadow-[0_0_10px_3px_rgba(240,171,252,0.3)] animate-ping" />
        {/* slow spinning ring fragments */}
        <div className="absolute left-[10%] bottom-[15%] h-32 w-32 rounded-full border border-emerald-400/10 animate-[spin_50s_linear_infinite]" />
        <div className="absolute right-[12%] top-[10%] h-48 w-48 rounded-full border border-sky-400/10 animate-[spin_80s_linear_infinite_reverse]" />
        {/* soft glow streaks */}
        <span className="absolute left-[40%] top-[5%] h-1 w-32 rotate-45 bg-gradient-to-r from-emerald-400/20 via-white/10 to-transparent blur-sm animate-pulse" />
        <span className="absolute right-[35%] bottom-[10%] h-1 w-32 -rotate-45 bg-gradient-to-r from-fuchsia-400/20 via-white/10 to-transparent blur-sm animate-pulse" />
      </div>

      {/* button with entry animation */}
      <div className="relative flex justify-center px-6">
        <Link
          to="/pricing"
          aria-label="View pricing"
          className="group relative inline-flex items-center justify-center animate-buttonEntrance"
        >
          {/* gradient border and glass interior */}
          <span className="relative rounded-3xl p-[2px] bg-gradient-to-tr from-emerald-400/35 via-sky-400/25 to-fuchsia-400/35 shadow-[0_8px_40px_rgba(0,0,0,.35)]">
            <span className="block rounded-3xl bg-black/65 px-16 py-10 backdrop-blur-xl ring-1 ring-white/10 transition-transform duration-300 group-hover:scale-105 group-hover:rotate-[1deg]">
              <span className="block text-center text-[14px] tracking-[0.25em] text-emerald-300/85">
                Ready to level up?
              </span>
              <span className="mt-1 block text-center text-[2.25rem] font-bold tracking-tight text-white">
                View Pricing
              </span>
            </span>
          </span>

          {/* close sparkles */}
          <span className="pointer-events-none absolute -right-5 -top-3 h-2 w-2 rounded-full bg-white/90 shadow-[0_0_10px_3px_rgba(255,255,255,.6)] animate-ping" />
          <span className="pointer-events-none absolute -left-6 -bottom-4 h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_10px_3px_rgba(16,185,129,.6)] animate-ping" />

          {/* orbiting micro particles */}
          <span className="pointer-events-none absolute inset-0">
            <span className="absolute left-1/2 top-1/2 h-1 w-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-300 shadow-[0_0_6px_2px_rgba(125,211,252,.4)] animate-[spin_18s_linear_infinite] [transform-origin:7rem]" />
            <span className="absolute left-1/2 top-1/2 h-1 w-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-fuchsia-300 shadow-[0_0_6px_2px_rgba(240,171,252,.4)] animate-[spin_28s_linear_infinite_reverse] [transform-origin:9rem]" />
          </span>
        </Link>
      </div>

      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
        @keyframes buttonEntrance {
          0% { transform: scale(0.7) translateY(40px); opacity: 0; }
          50% { transform: scale(1.1) translateY(-8px); opacity: 1; }
          100% { transform: scale(1) translateY(0); opacity: 1; }
        }
        .animate-buttonEntrance {
          animation: buttonEntrance 1.2s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default Pricing;
