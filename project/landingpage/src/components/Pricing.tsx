// src/components/Pricing.tsx
import React from "react";
import { Link } from "react-router-dom";

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="relative py-32">
      {/* Far-back background only */}
      <div className="pointer-events-none absolute inset-0 -z-20 opacity-40 blur-3xl">
        <div className="absolute -inset-48 animate-pulse bg-[radial-gradient(50rem_50rem_at_20%_30%,rgba(16,185,129,.28),transparent_60%),radial-gradient(60rem_60rem_at_80%_25%,rgba(56,189,248,.28),transparent_60%),radial-gradient(55rem_55rem_at_50%_85%,rgba(168,85,247,.24),transparent_60%)]" />
      </div>

      <div className="relative mx-auto flex max-w-6xl items-center justify-center px-6">
        <Link
          to="/pricing"
          aria-label="View pricing"
          className="group relative inline-block"
        >
          {/* Oversized button core (≈3x) */}
          <div
            className={[
              "relative isolate rounded-[2.5rem] px-24 py-20",
              "bg-black/70 ring-1 ring-white/10 backdrop-blur-md",
              "shadow-[0_0_40px_8px_rgba(16,185,129,.25),0_0_60px_16px_rgba(56,189,248,.15)]",
              "transition-transform duration-500",
              "group-hover:scale-[1.04] group-active:scale-[0.99]",
            ].join(" ")}
          >
            {/* Animated gradient border (under text via z-0) */}
            <span className="pointer-events-none -z-10 absolute inset-0 rounded-[2.5rem] p-[4px] [mask:linear-gradient(#000_0_0)_content-box,linear-gradient(#000_0_0)] [mask-composite:exclude] before:absolute before:inset-0 before:rounded-[2.5rem] before:bg-[linear-gradient(90deg,rgba(16,185,129,1),rgba(56,189,248,1),rgba(168,85,247,1),rgba(16,185,129,1))] before:bg-[length:300%_100%] before:animate-[bordershift_3.5s_linear_infinite]" />

            {/* Subtle inner glow (under text) */}
            <span className="pointer-events-none -z-10 absolute inset-0 rounded-[2.5rem] opacity-40 blur-2xl bg-[radial-gradient(closest-side,rgba(255,255,255,.10),transparent_70%)]" />

            {/* Edge halo rings (under text) */}
            <span className="pointer-events-none -z-10 absolute -inset-6 rounded-[3rem] blur-xl opacity-60 bg-[conic-gradient(from_0deg,rgba(16,185,129,.25),rgba(56,189,248,.25),rgba(168,85,247,.25),rgba(16,185,129,.25))] animate-[slowspin_12s_linear_infinite]" />

            {/* Text block is the only element above everything */}
            <div className="relative z-10 text-center select-none">
              <div className="text-2xl md:text-3xl tracking-[0.22em] text-emerald-300/90">
                READY TO LEVEL UP?
              </div>
              <div className="mt-3 text-6xl md:text-8xl font-extrabold tracking-tight text-white animate-[textpop_2.8s_ease-in-out_infinite]">
                VIEW PRICING
              </div>
            </div>

            {/* Corner sparkles anchored outside text zone (under text) */}
            <div className="pointer-events-none -z-10 absolute inset-0">
              <span className="absolute -left-8 -top-8 h-3 w-3 rounded-full bg-white/90 shadow-[0_0_18px_10px_rgba(255,255,255,.7)] animate-[blink_2.2s_ease-in-out_infinite]" />
              <span className="absolute -right-10 -bottom-10 h-3 w-3 rounded-full bg-emerald-300 shadow-[0_0_18px_10px_rgba(16,185,129,.7)] animate-[blink_2.8s_ease-in-out_infinite]" />
              <span className="absolute -right-10 -top-10 h-2 w-2 rounded-full bg-sky-300 shadow-[0_0_14px_8px_rgba(125,211,252,.7)] animate-[blink_3.1s_ease-in-out_infinite]" />
              <span className="absolute -left-10 -bottom-10 h-2 w-2 rounded-full bg-fuchsia-300 shadow-[0_0_14px_8px_rgba(240,171,252,.7)] animate-[blink_3.6s_ease-in-out_infinite]" />
            </div>
          </div>
        </Link>
      </div>

      {/* Local keyframes kept minimal and safe */}
      <style>{`
        @keyframes bordershift {
          0% { background-position: 0% 50%; }
          100% { background-position: 300% 50%; }
        }
        @keyframes slowspin { to { transform: rotate(360deg); } }
        @keyframes blink {
          0%, 100% { transform: scale(.85); opacity:.5; }
          50% { transform: scale(1.2); opacity:1; }
        }
        @keyframes textpop {
          0%, 100% { transform: translateZ(0) scale(1); text-shadow: 0 0 0 rgba(255,255,255,0); }
          50% { transform: translateZ(0) scale(1.02); text-shadow: 0 0 24px rgba(255,255,255,.35); }
        }
      `}</style>
    </section>
  );
};

export default Pricing;
