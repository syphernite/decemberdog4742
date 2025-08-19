import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";

type Stage = "cover" | "swoosh" | "trifold";

export default function LandingPage() {
  const [stage, setStage] = useState<Stage>("cover");
  const [hovered, setHovered] = useState<number | null>(null);

  // advance from swoosh to trifold
  useEffect(() => {
    if (stage === "swoosh") {
      const t = setTimeout(() => setStage("trifold"), 1400);
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
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">BST</h1>
            <p className="text-lg text-white/70">One brand. Three experiences.</p>
            <button
              onClick={() => setStage("swoosh")}
              className="mx-auto inline-flex items-center gap-2 rounded-full px-6 py-3 text-base font-semibold
                         bg-gradient-to-r from-cyan-500 to-fuchsia-500
                         hover:from-cyan-400 hover:to-fuchsia-400
                         focus:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-400
                         transition-transform active:scale-95"
            >
              Enter
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="opacity-90">
                <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <p className="text-xs text-white/50">Continue to choose Barber • Sneakers • Clothing</p>
          </div>
        </div>
      </section>

      {/* SWOOSH / DISINTEGRATE FX */}
      {stage === "swoosh" && <SwooshFX />}

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

        {/* panels */}
        <div className="h-full flex flex-col md:flex-row">
          <TriPanel
            index={0}
            hovered={hovered}
            setHovered={setHovered}
            title="Barber"
            to="/barber"
            gradient="from-emerald-400/20 to-teal-500/20"
            accent="bg-emerald-400"
            blurb="Cuts, fades, grooming."
          />
          <TriPanel
            index={1}
            hovered={hovered}
            setHovered={setHovered}
            title="Sneakers"
            to="/sneakers"
            gradient="from-indigo-400/20 to-sky-500/20"
            accent="bg-indigo-400"
            blurb="Drops, trades, heat."
          />
          <TriPanel
            index={2}
            hovered={hovered}
            setHovered={setHovered}
            title="Clothing"
            to="/clothing"
            gradient="from-fuchsia-400/20 to-rose-500/20"
            accent="bg-fuchsia-400"
            blurb="Fits, caps, essentials."
          />
        </div>
      </section>
    </div>
  );
}

/* ---- COLOR PALETTE (match trifold) ---- */
const COLORS = {
  emerald: "#34d399",
  teal: "#14b8a6",
  indigo: "#6366f1",
  sky: "#38bdf8",
  fuchsia: "#e879f9",
  rose: "#fb7185",
  white: "#ffffff",
};

/* ---- FX COMPONENT (intense, colorful) ---- */
function SwooshFX() {
  // dust particles in 3 color families
  const dust = useMemo(() => {
    const palette = [
      COLORS.emerald,
      COLORS.teal,
      COLORS.indigo,
      COLORS.sky,
      COLORS.fuchsia,
      COLORS.rose,
      COLORS.white,
    ];
    return Array.from({ length: 180 }).map((_, i) => {
      const x = 35 + Math.random() * 30; // vw
      const y = 28 + Math.random() * 44; // vh
      const tx = (Math.random() * 2 - 1) * (30 + Math.random() * 60); // vw
      const ty = (Math.random() * 2 - 1) * (18 + Math.random() * 36); // vh
      const size = 3 + Math.random() * 9; // px
      const rot = Math.random() * 360;
      const delay = 80 + Math.random() * 700; // ms
      const dur = 700 + Math.random() * 600; // ms
      const color = palette[(i + Math.floor(Math.random() * 5)) % palette.length];
      const blur = Math.random() < 0.35 ? 6 : 2;
      const alpha = 0.45 + Math.random() * 0.4;
      return { i, x, y, tx, ty, size, rot, delay, dur, color, blur, alpha };
    });
  }, []);

  // glass shards (rectangles) streaking out
  const shards = useMemo(() => {
    const palette = [COLORS.emerald, COLORS.indigo, COLORS.fuchsia, COLORS.white];
    return Array.from({ length: 24 }).map((_, i) => {
      const x = 45 + Math.random() * 10;
      const y = 35 + Math.random() * 30;
      const length = 40 + Math.random() * 120; // px
      const width = 2 + Math.random() * 5; // px
      const angle = -20 + Math.random() * 40; // deg
      const tx = (Math.random() * 2 - 1) * 55; // vw
      const ty = (Math.random() * 2 - 1) * 28; // vh
      const delay = 0 + Math.random() * 200; // ms
      const dur = 800 + Math.random() * 700;
      const color = palette[i % palette.length];
      const alpha = 0.25 + Math.random() * 0.5;
      return { i, x, y, length, width, angle, tx, ty, delay, dur, color, alpha };
    });
  }, []);

  // concentric color rings
  const rings = useMemo(() => {
    const palette = [COLORS.emerald, COLORS.indigo, COLORS.fuchsia];
    return palette.map((c, i) => ({
      i,
      color: c,
      delay: 120 + i * 120,
      dur: 900 + i * 150,
      start: 18 + i * 6, // vw radius
      end: 60 + i * 8,
      alpha: 0.18,
    }));
  }, []);

  return (
    <div className="absolute inset-0 z-50 pointer-events-none">
      {/* keyframes */}
      <style>{`
        @keyframes sweep {
          0% { transform: translateX(-130%) skewX(-10deg); opacity: .9; }
          60% { opacity: .65; }
          100% { transform: translateX(130%) skewX(-10deg); opacity: 0; }
        }
        @keyframes sweepC {
          0% { transform: translateX(-140%) skewX(-14deg); opacity: .75; }
          100% { transform: translateX(140%) skewX(-14deg); opacity: 0; }
        }
        @keyframes dust {
          0%   { transform: translate(0,0) rotate(0deg) scale(1); opacity: var(--a); filter: blur(var(--blur)); }
          100% { transform: translate(var(--tx), var(--ty)) rotate(var(--rot)) scale(.5); opacity: 0; filter: blur(calc(var(--blur) + 2px)); }
        }
        @keyframes shard {
          0%   { transform: translate(0,0) rotate(var(--ang)); opacity: var(--a); }
          100% { transform: translate(var(--tx), var(--ty)) rotate(calc(var(--ang) + 15deg)); opacity: 0; }
        }
        @keyframes ring {
          0%   { width: 0vw; height: 0vw; opacity: var(--a); }
          100% { width: var(--end)vw; height: var(--end)vw; opacity: 0; }
        }
        @keyframes flash {
          0% { opacity: 0; }
          12% { opacity: .35; }
          100% { opacity: 0; }
        }
        @keyframes bloom {
          0% { filter: blur(0px) brightness(1); }
          40% { filter: blur(3px) brightness(1.4); }
          100% { filter: blur(0px) brightness(1); }
        }
      `}</style>

      {/* global bloom/flash */}
      <div className="absolute inset-0 bg-white/5 animate-[flash_1100ms_ease-out_forwards] mix-blend-screen" />
      <div className="absolute inset-0 animate-[bloom_1400ms_ease-out_forwards]" />

      {/* colored sweeping bars */}
      <div
        className="absolute inset-y-0 -left-1/3 w-2/3 bg-gradient-to-r from-transparent via-emerald-300/40 to-transparent blur-2xl"
        style={{ animation: "sweep 900ms ease-in forwards" }}
      />
      <div
        className="absolute inset-y-0 -left-1/4 w-3/4 bg-gradient-to-r from-transparent via-indigo-300/35 to-transparent blur-[40px]"
        style={{ animation: "sweepC 1050ms 60ms ease-in forwards" }}
      />
      <div
        className="absolute inset-y-0 -left-1/5 w-3/4 bg-gradient-to-r from-transparent via-fuchsia-300/30 to-transparent blur-[50px]"
        style={{ animation: "sweepC 1150ms 120ms ease-in forwards" }}
      />

      {/* concentric rings from center */}
      {rings.map((r) => (
        <div
          key={`ring-${r.i}`}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border"
          style={{
            borderColor: r.color,
            opacity: r.alpha,
            width: 0,
            height: 0,
            // @ts-ignore
            "--end": r.end,
            // @ts-ignore
            "--a": r.alpha,
            animation: `ring ${r.dur}ms ${r.delay}ms cubic-bezier(.16,.84,.44,1) forwards`,
          }}
        />
      ))}

      {/* shards */}
      {shards.map((s) => (
        <span
          key={`shard-${s.i}`}
          className="absolute block"
          style={{
            left: `${s.x}vw`,
            top: `${s.y}vh`,
            width: `${s.length}px`,
            height: `${s.width}px`,
            background: `linear-gradient(90deg, ${s.color} 0%, rgba(255,255,255,.8) 70%, transparent 100%)`,
            borderRadius: `${s.width}px`,
            opacity: s.alpha,
            filter: "blur(1px)",
            transformOrigin: "left center",
            // @ts-ignore
            "--tx": `${s.tx}vw`,
            // @ts-ignore
            "--ty": `${s.ty}vh`,
            // @ts-ignore
            "--ang": `${s.angle}deg`,
            // @ts-ignore
            "--a": s.alpha,
            animation: `shard ${s.dur}ms ${s.delay}ms ease-out forwards`,
          }}
        />
      ))}

      {/* dust particles */}
      {dust.map((p) => (
        <span
          key={`p-${p.i}`}
          className="absolute rounded-full"
          style={{
            left: `${p.x}vw`,
            top: `${p.y}vh`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            backgroundColor: p.color,
            opacity: p.alpha,
            filter: `blur(${p.blur}px)`,
            border: p.size > 8 ? "1px solid rgba(255,255,255,0.35)" : "none",
            boxShadow: p.size > 7 ? `0 0 ${Math.max(6, p.size)}px ${p.color}` : "none",
            // @ts-ignore
            "--tx": `${p.tx}vw`,
            // @ts-ignore
            "--ty": `${p.ty}vh`,
            // @ts-ignore
            "--rot": `${p.rot}deg`,
            // @ts-ignore
            "--blur": `${p.blur}px`,
            // @ts-ignore
            "--a": p.alpha,
            animation: `dust ${p.dur}ms ${p.delay}ms cubic-bezier(.2,.7,.1,1) forwards`,
          }}
        />
      ))}
    </div>
  );
}

/* ---- TRIFOLD PANEL ---- */
function TriPanel({
  index,
  hovered,
  setHovered,
  title,
  to,
  gradient,
  accent,
  blurb,
}: {
  index: number;
  hovered: number | null;
  setHovered: (v: number | null) => void;
  title: string;
  to: string;
  gradient: string;
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
        "relative overflow-hidden",
        "flex items-center justify-center",
        "border-t md:border-t-0 md:border-l border-white/5",
        "bg-[radial-gradient(65%_100%_at_50%_0%,rgba(255,255,255,0.06),rgba(0,0,0,0))]",
        "transition-all duration-500 ease-out will-change-transform",
      ].join(" ")}
      style={{
        flexGrow,
        transform: `scale(${scale})`,
        opacity,
      }}
    >
      <div className={`pointer-events-none absolute inset-0 bg-gradient-to-b ${gradient}`} />

      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-500"
        style={{ opacity: isActive ? 1 : 0 }}
      >
        <div className="absolute -inset-24 blur-3xl bg-white/10" />
      </div>

      <div className="relative w-full max-w-md px-8 text-center">
        <div className="mx-auto mb-6 h-1 w-12 rounded-full opacity-80" style={{ backgroundColor: "currentColor" }} />
        <h3 className="text-3xl font-extrabold tracking-tight mb-2">{title}</h3>
        <p className="text-white/70 mb-8">{blurb}</p>

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
