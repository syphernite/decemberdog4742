// src/components/Galaxy.tsx
import React, { useEffect, useRef } from "react";

/**
 * Drop-in replacement for the old WebGL galaxy.
 * - Matches Entry screen visuals (emerald/blue radial glows + soft particles).
 * - No external deps (removes `ogl`), great for Lighthouse.
 * - Respects prefers-reduced-motion.
 * - Scales with parent; wrap it in a relative container (it already is).
 */

type GalaxyProps = React.HTMLAttributes<HTMLDivElement> & {
  /** kept for compatibility; unused but safe */
  focal?: [number, number];
  rotation?: [number, number];
  starSpeed?: number;
  density?: number;
  hueShift?: number;
  disableAnimation?: boolean;
  speed?: number;
  mouseInteraction?: boolean;
  glowIntensity?: number;
  saturation?: number;
  mouseRepulsion?: boolean;
  twinkleIntensity?: number;
  rotationSpeed?: number;
  repulsionStrength?: number;
  autoCenterRepulsion?: number;
  transparent?: boolean;
};

function GradientParticlesCanvas({
  className = "",
  style
}: {
  className?: string;
  style?: React.CSSProperties;
}) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const particlesRef = useRef<
    Array<{ x: number; y: number; r: number; vx: number; vy: number; c: string; a: number }>
  >([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const DPR = Math.min(window.devicePixelRatio || 1, 2);
    const COLORS = ["#34d399", "#38bdf8"]; // emerald-400, sky-400
    const MAX_ALPHA = 0.55;
    const MIN_ALPHA = 0.15;

    let width = 0;
    let height = 0;

    function initParticles() {
      const area = width * height;
      // Density similar to Entry.tsx
      const target = prefersReduced ? 0 : Math.min(180, Math.max(40, Math.round(area / 20000)));
      const arr: typeof particlesRef.current = [];
      for (let i = 0; i < target; i++) {
        const r = Math.random() * 1.9 + 0.6;
        const speed = Math.random() * 0.12 + 0.04;
        const angle = Math.random() * Math.PI * 2;
        arr.push({
          x: Math.random() * width,
          y: Math.random() * height,
          r,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          c: COLORS[(Math.random() * COLORS.length) | 0],
          a: Math.random() * (MAX_ALPHA - MIN_ALPHA) + MIN_ALPHA
        });
      }
      particlesRef.current = arr;
    }

    function resize() {
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = Math.floor(width * DPR);
      canvas.height = Math.floor(height * DPR);
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
      initParticles();
    }

    function step() {
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      ctx.clearRect(0, 0, w, h);

      // Subtle vignette glows, same vibe as Entry
      const grdTop = ctx.createRadialGradient(w / 2, h * 0.15, 20, w / 2, h * 0.15, Math.max(w, h));
      grdTop.addColorStop(0, "rgba(0,0,0,0.25)");
      grdTop.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = grdTop;
      ctx.fillRect(0, 0, w, h);

      const grdBottom = ctx.createRadialGradient(w / 2, h * 0.9, 20, w / 2, h * 0.9, Math.max(w, h));
      grdBottom.addColorStop(0, "rgba(0,0,0,0.2)");
      grdBottom.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = grdBottom;
      ctx.fillRect(0, 0, w, h);

      for (const p of particlesRef.current) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < -4) p.x = w + 4;
        if (p.x > w + 4) p.x = -4;
        if (p.y < -4) p.y = h + 4;
        if (p.y > h + 4) p.y = -4;

        ctx.globalAlpha = p.a;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.c;
        ctx.fill();
      }
      ctx.globalAlpha = 1;

      rafRef.current = requestAnimationFrame(step);
    }

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);
    resize();

    if (!prefersReduced) rafRef.current = requestAnimationFrame(step);

    return () => {
      ro.disconnect();
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return <canvas ref={canvasRef} className={className} style={style} aria-hidden="true" />;
}

export default function Galaxy({
  className = "",
  style,
  ..._compatProps
}: GalaxyProps) {
  return (
    <div className={`relative w-full h-full ${className}`} style={style}>
      {/* base */}
      <div className="absolute inset-0 bg-black" />

      {/* match Entry.tsx emerald/blue radial glows */}
      <div className="absolute inset-0 bg-[radial-gradient(900px_500px_at_50%_15%,rgba(16,185,129,0.18),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(900px_500px_at_50%_85%,rgba(56,189,248,0.14),transparent_60%)]" />

      {/* soft particles */}
      <GradientParticlesCanvas className="absolute inset-0 h-full w-full" />
    </div>
  );
}
