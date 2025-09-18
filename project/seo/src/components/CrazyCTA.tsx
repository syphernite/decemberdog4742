// src/components/CrazyCTA.tsx
import React, { useCallback, useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

/**
 * A loud, magnetic, animated CTA with confetti-on-click.
 * - Magnetic tilt toward cursor
 * - Animated gradient glow + pulse ring
 * - Shine sweep
 * - Confetti burst on click
 * - Uses <Link> for client-side routing
 */
export default function CrazyCTA({
  to,
  label = "Start now",
}: {
  to: string;
  label?: string;
}) {
  const nav = useNavigate();
  const wrapRef = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);
  const [hovered, setHovered] = useState(false);

  // Magnetic tilt
  const onMouseMove = useCallback((e: React.MouseEvent) => {
    if (!btnRef.current) return;
    const r = btnRef.current.getBoundingClientRect();
    const cx = r.left + r.width / 2;
    const cy = r.top + r.height / 2;
    const dx = (e.clientX - cx) / (r.width / 2);
    const dy = (e.clientY - cy) / (r.height / 2);
    const tiltX = (-dy * 6).toFixed(2);
    const tiltY = (dx * 8).toFixed(2);
    btnRef.current.style.transform = `perspective(600px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) translateZ(0)`;
    const shine = btnRef.current.querySelector<HTMLElement>("[data-shine]");
    if (shine) {
      const x = ((dx + 1) / 2) * 100;
      shine.style.background = `radial-gradient(600px 180px at ${x}% -20%, rgba(255,255,255,0.5), transparent 60%)`;
    }
  }, []);
  const resetTilt = useCallback(() => {
    if (!btnRef.current) return;
    btnRef.current.style.transform = "perspective(600px) rotateX(0deg) rotateY(0deg) translateZ(0)";
  }, []);

  // Confetti burst
  const confetti = useCallback(() => {
    const host = wrapRef.current;
    if (!host) return;
    const canvas = document.createElement("canvas");
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const rect = host.getBoundingClientRect();
    const w = rect.width;
    const h = rect.height;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    canvas.style.width = `${w}px`;
    canvas.style.height = `${h}px`;
    canvas.style.position = "absolute";
    canvas.style.left = "0";
    canvas.style.top = "0";
    canvas.style.pointerEvents = "none";
    host.appendChild(canvas);
    const ctx = canvas.getContext("2d")!;
    ctx.scale(dpr, dpr);

    const colors = ["#10b981", "#22d3ee", "#6366f1", "#f59e0b", "#ef4444", "#a78bfa"];
    const pieces = Array.from({ length: 80 }).map(() => ({
      x: w / 2,
      y: h / 2,
      r: Math.random() * 6 + 3,
      a: Math.random() * Math.PI * 2,
      v: Math.random() * 6 + 4,
      g: 0.12 + Math.random() * 0.12,
      color: colors[(Math.random() * colors.length) | 0],
      spin: (Math.random() - 0.5) * 0.2,
      life: 800 + Math.random() * 400,
    }));

    let start = performance.now();
    function frame(t: number) {
      const dt = t - start;
      ctx.clearRect(0, 0, w, h);
      pieces.forEach((p) => {
        p.x += Math.cos(p.a) * p.v;
        p.y += Math.sin(p.a) * p.v + p.g * (dt / 16);
        p.a += p.spin;
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.a);
        ctx.fillStyle = p.color;
        ctx.fillRect(-p.r / 2, -p.r / 2, p.r, p.r);
        ctx.restore();
      });
      if (dt < 1000) requestAnimationFrame(frame);
      else host.removeChild(canvas);
    }
    requestAnimationFrame(frame);
  }, []);

  // Keyboard and click behavior
  const onClick = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();
      confetti();
      // slight delay to let confetti start
      setTimeout(() => nav(to), 120);
    },
    [confetti, nav, to]
  );

  useEffect(() => {
    return () => resetTilt();
  }, [resetTilt]);

  return (
    <div
      ref={wrapRef}
      className="relative inline-block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => {
        setHovered(false);
        resetTilt();
      }}
      onMouseMove={onMouseMove}
    >
      {/* Glow + pulse ring */}
      <div
        className={[
          "absolute -inset-3 rounded-full blur-xl transition-opacity duration-300",
          hovered ? "opacity-100" : "opacity-70",
          "bg-[conic-gradient(from_180deg_at_50%_50%,#22d3ee, #6366f1, #10b981, #22d3ee)]",
          "animate-[spin_6s_linear_infinite]",
        ].join(" ")}
        aria-hidden
      />
      <div className="absolute inset-0 rounded-full ring-2 ring-white/30 animate-ping opacity-40" aria-hidden />

      {/* Button */}
      <button
        ref={btnRef}
        onClick={onClick}
        className={[
          "relative isolate rounded-full px-10 py-4 font-semibold text-white select-none",
          "bg-gradient-to-r from-emerald-500 to-indigo-500",
          "shadow-[0_10px_30px_rgba(99,102,241,0.35)]",
          "active:scale-[0.98] transition-transform duration-150",
          "focus:outline-none focus-visible:ring-4 focus-visible:ring-indigo-300/50",
        ].join(" ")}
        aria-label={label}
      >
        <span className="relative z-10">{label}</span>
        {/* Shine */}
        <span
          data-shine
          className="pointer-events-none absolute inset-0 rounded-full"
          aria-hidden
        />
        {/* Inner highlight */}
        <span
          className="pointer-events-none absolute inset-[2px] rounded-full bg-white/10"
          aria-hidden
        />
      </button>

      {/* Small orbiting badges */}
      <span
        className="absolute -right-10 top-1/2 -translate-y-1/2 text-[10px] font-semibold uppercase tracking-wide bg-black text-white px-2 py-1 rounded-full shadow-sm
                   animate-[orbit_10s_linear_infinite]"
        aria-hidden
      >
        Instant audit
      </span>
      <span
        className="absolute -left-12 top-1/2 -translate-y-1/2 text-[10px] font-semibold uppercase tracking-wide bg-black text-white px-2 py-1 rounded-full shadow-sm
                   animate-[orbit_12s_linear_infinite_reverse]"
        aria-hidden
      >
        No risk
      </span>

      {/* Local styles */}
      <style>{`
        @keyframes orbit {
          0% { transform: translate(-50%, -50%) rotate(0deg) translateX(70px) rotate(0deg); }
          100% { transform: translate(-50%, -50%) rotate(360deg) translateX(70px) rotate(-360deg); }
        }
        @keyframes orbit_reverse {
          0% { transform: translate(50%, -50%) rotate(0deg) translateX(70px) rotate(0deg); }
          100% { transform: translate(50%, -50%) rotate(-360deg) translateX(70px) rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
