import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function LandingPage() {
  const [stage, setStage] = useState<"cover" | "transition" | "trifold">("cover");

  // After exit animation, reveal trifold
  useEffect(() => {
    if (stage === "transition") {
      const t = setTimeout(() => setStage("trifold"), 600);
      return () => clearTimeout(t);
    }
  }, [stage]);

  return (
    <div className="min-h-screen w-full bg-[#0b1220] text-white overflow-hidden">
      {/* COVER */}
      <section
        className={[
          "absolute inset-0 flex items-center justify-center",
          "transition-all duration-500",
          stage === "cover" ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none",
        ].join(" ")}
        aria-hidden={stage !== "cover"}
      >
        <div className="relative w-full max-w-3xl px-6">
          <div className="absolute -inset-8 bg-gradient-to-b from-cyan-500/10 to-fuchsia-500/10 blur-3xl rounded-3xl" />
          <div className="relative rounded-3xl bg-white/5 ring-1 ring-white/10 backdrop-blur-md p-10 text-center space-y-6">
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
              BST
            </h1>
            <p className="text-lg text-white/70">
              One brand. Three experiences.
            </p>

            <button
              onClick={() => setStage("transition")}
              className="mx-auto inline-flex items-center gap-2 rounded-full px-6 py-3 text-base font-semibold
                         bg-gradient-to-r from-cyan-500 to-fuchsia-500
                         hover:from-cyan-400 hover:to-fuchsia-400
                         focus:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-400
                         transition-transform active:scale-95"
            >
              Enter
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="opacity-90">
                <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            <p className="text-xs text-white/50">
              Continue to choose Barber • Sneakers • Clothing
            </p>
          </div>
        </div>
      </section>

      {/* TRIFOLD */}
      <section
        className={[
          "absolute inset-0 transition-opacity duration-500",
          stage === "trifold" ? "opacity-100" : "opacity-0 pointer-events-none",
        ].join(" ")}
        aria-hidden={stage !== "trifold"}
      >
        {/* header */}
        <div className="absolute top-0 left-0 right-0 h-20 flex items-center justify-center pointer-events-none">
          <div className="text-center">
            <h2 className="text-sm uppercase tracking-[0.25em] text-white/60">BST</h2>
            <p className="text-xs text-white/40">Select your experience</p>
          </div>
        </div>

        {/* three panels */}
        <div className="h-full grid grid-cols-1 md:grid-cols-3">
          <TriPanel
            title="Barber"
            to="/barber"
            gradient="from-emerald-400/20 to-teal-500/20"
            accent="bg-emerald-400"
            delay="0ms"
            blurb="Cuts, fades, grooming."
          />
          <TriPanel
            title="Sneakers"
            to="/sneakers"
            gradient="from-indigo-400/20 to-sky-500/20"
            accent="bg-indigo-400"
            delay="120ms"
            blurb="Drops, trades, heat."
          />
          <TriPanel
            title="Clothing"
            to="/clothing"
            gradient="from-fuchsia-400/20 to-rose-500/20"
            accent="bg-fuchsia-400"
            delay="240ms"
            blurb="Fits, caps, essentials."
          />
        </div>
      </section>
    </div>
  );
}

/** Single tri-fold panel */
function TriPanel({
  title,
  to,
  gradient,
  accent,
  delay,
  blurb,
}: {
  title: string;
  to: string;
  gradient: string;
  accent: string;
  delay: string;
  blurb: string;
}) {
  return (
    <div
      className={[
        "relative group overflow-hidden",
        "flex items-center justify-center",
        "border-t md:border-t-0 md:border-l border-white/5",
        "bg-[radial-gradient(65%_100%_at_50%_0%,rgba(255,255,255,0.06),rgba(0,0,0,0))]",
        "transition-transform",
      ].join(" ")}
      style={{ transitionDelay: delay }}
    >
      {/* soft gradient wash */}
      <div className={`absolute inset-0 bg-gradient-to-b ${gradient}`} />

      {/* hover glow */}
      <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute -inset-24 blur-3xl bg-white/10" />
      </div>

      <div className="relative w-full max-w-md px-8 text-center">
        <div className="mx-auto mb-6 h-1 w-12 rounded-full opacity-80" style={{ backgroundColor: "currentColor" }}>
          {/* spacer */}
        </div>

        <h3 className="text-3xl font-extrabold tracking-tight mb-2">{title}</h3>
        <p className="text-white/70 mb-8">{blurb}</p>

        <Link
          to={to}
          className={[
            "inline-flex items-center gap-2 rounded-full px-5 py-3 font-semibold",
            "bg-white/10 hover:bg-white/15 ring-1 ring-white/15",
            "backdrop-blur-md transition-all",
          ].join(" ")}
        >
          Enter {title}
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="opacity-90">
            <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </Link>

        {/* bottom accent bar */}
        <div className={`mx-auto mt-10 h-1.5 w-16 rounded-full ${accent}`} />
      </div>
    </div>
  );
}
