// src/pages/Entry.tsx
import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { gsap } from "gsap";
import { Instagram, Phone } from "lucide-react";

/** Tiny gradient particles */
function GradientParticles() {
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
    const COLORS = ["#34d399", "#38bdf8"];
    const MAX_ALPHA = 0.55;
    const MIN_ALPHA = 0.15;

    let width = 0;
    let height = 0;

    function resize() {
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = Math.floor(width * DPR);
      canvas.height = Math.floor(height * DPR);
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
      initParticles();
    }

    function initParticles() {
      const area = width * height;
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
          a: Math.random() * (MAX_ALPHA - MIN_ALPHA) + MIN_ALPHA,
        });
      }
      particlesRef.current = arr;
    }

    function step() {
      ctx.clearRect(0, 0, width, height);

      const grdTop = ctx.createRadialGradient(
        width / 2,
        height * 0.15,
        20,
        width / 2,
        height * 0.15,
        Math.max(width, height)
      );
      grdTop.addColorStop(0, "rgba(0,0,0,0.25)");
      grdTop.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = grdTop;
      ctx.fillRect(0, 0, width, height);

      const grdBottom = ctx.createRadialGradient(
        width / 2,
        height * 0.9,
        20,
        width / 2,
        height * 0.9,
        Math.max(width, height)
      );
      grdBottom.addColorStop(0, "rgba(0,0,0,0.2)");
      grdBottom.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = grdBottom;
      ctx.fillRect(0, 0, width, height);

      for (const p of particlesRef.current) {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < -4) p.x = width + 4;
        if (p.x > width + 4) p.x = -4;
        if (p.y < -4) p.y = height + 4;
        if (p.y > height + 4) p.y = -4;

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

  return <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" aria-hidden="true" />;
}

/** Modal for “Want a free site?” */
function FreeSiteModal({
  open,
  onClose,
  onSuccessRedirect,
}: {
  open: boolean;
  onClose: () => void;
  onSuccessRedirect: () => void;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const checkRef = useRef<SVGPathElement>(null);
  const [business, setBusiness] = useState("");
  const [phone, setPhone] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    if (open) document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  useEffect(() => {
    if (!open) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardRef.current,
        { y: 18, opacity: 0, scale: 0.98 },
        { y: 0, opacity: 1, scale: 1, duration: 0.3, ease: "power2.out" }
      );
    });
    return () => ctx.revert();
  }, [open]);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!business.trim() || !phone.trim()) return;
    setSubmitting(true);
    try {
      const res = await fetch("https://formspree.io/f/xyzdqejn", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ formName: "Entry Free Site Modal", business, phone }),
      });
      if (!res.ok) throw new Error("submit failed");

      setDone(true);
      if (checkRef.current) {
        const length = checkRef.current.getTotalLength();
        gsap.set(checkRef.current, { strokeDasharray: length, strokeDashoffset: length });
        gsap.to(checkRef.current, { strokeDashoffset: 0, duration: 0.6, ease: "power2.out" });
        gsap.fromTo(
          checkRef.current,
          { scale: 0.9, opacity: 0.8 },
          { scale: 1, opacity: 1, duration: 0.3, ease: "power2.out", delay: 0.1 }
        );
      }
      setTimeout(() => {
        onClose();
        onSuccessRedirect();
      }, 2500);
    } catch {
      setSubmitting(false);
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" aria-modal="true" role="dialog">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <div
        ref={cardRef}
        className="relative z-10 w-full max-w-3xl rounded-2xl border border-white/10 bg-neutral-900/90 p-6 text-white shadow-2xl"
      >
        {!done ? (
          <>
            <div className="mb-6">
              <h3 className="text-2xl font-bold">
<<<<<<< Updated upstream
                Get a <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">Free</span> Website
              </h3>
              <p className="mt-1 text-sm text-slate-300">Just pay hosting!</p>
=======
                Get a <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">Free</span> website
              </h3>
              <p className="mt-1 text-sm text-slate-300">Just pay hosting.</p>
>>>>>>> Stashed changes
            </div>

            <form onSubmit={submit} className="mt-2 flex flex-col gap-3 md:flex-row">
              <input
                type="text"
                name="business"
                value={business}
                onChange={(e) => setBusiness(e.target.value)}
                placeholder="Business name"
                className="w-full flex-1 rounded-xl border border-white/10 bg-black/60 px-4 py-3 text-white placeholder-slate-400 outline-none focus:ring-2 focus:ring-emerald-400"
                required
              />
              <input
                type="tel"
                name="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Phone number"
                className="w-full flex-1 rounded-xl border border-white/10 bg-black/60 px-4 py-3 text-white placeholder-slate-400 outline-none focus:ring-2 focus:ring-emerald-400"
                required
              />
              <button
                type="submit"
                disabled={submitting}
                className="rounded-xl bg-emerald-600 px-6 py-3 font-semibold text-white transition hover:bg-emerald-500 disabled:opacity-60"
              >
                {submitting ? "Submitting..." : "Submit"}
              </button>
            </form>

            <button
              onClick={onClose}
              className="absolute right-3 top-3 rounded-full p-2 text-slate-300 hover:bg-white/10"
              aria-label="Close"
              type="button"
            >
              ✕
            </button>
          </>
        ) : (
          <div className="flex flex-col items-center justify-center py-12">
            <svg width="84" height="84" viewBox="0 0 84 84" className="mb-4">
              <circle cx="42" cy="42" r="40" fill="none" stroke="#10B981" strokeWidth="3" className="opacity-30" />
              <path
                ref={checkRef}
                d="M22 44 L36 56 L62 28"
                fill="none"
                stroke="#10B981"
                strokeWidth="6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <div className="text-lg font-semibold text-emerald-400">Submitted</div>
          </div>
        )}
      </div>
    </div>
  );
}

export default function Entry() {
  const navigate = useNavigate();
  const rootRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLButtonElement>(null);
  const rocketRef = useRef<HTMLSpanElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const [freeOpen, setFreeOpen] = useState(false);

  useEffect(() => {
    if (!rootRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(".entry-bg", { opacity: 0 }, { opacity: 1, duration: 0.9, ease: "power2.out" });
      gsap.fromTo(logoRef.current, { y: 18, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, ease: "power2.out", delay: 0.1 });
      gsap.fromTo(ctaRef.current, { y: 14, opacity: 0, scale: 0.9 }, { y: 0, opacity: 1, scale: 1, duration: 0.7, ease: "power2.out", delay: 0.25 });
    }, rootRef);
    return () => ctx.revert();
  }, []);

  const handleEnter = () => {
    const tl = gsap.timeline();
    tl.to(ctaRef.current, { scale: 0.96, duration: 0.08, ease: "power1.out" })
      .to(rocketRef.current, { y: -220, x: 120, rotation: -25, scale: 1.2, duration: 0.6, ease: "power2.in" }, "<")
      .to(ctaRef.current, { scale: 1, duration: 0.12, ease: "power1.inOut" }, "<0.15")
      .to(logoRef.current, { opacity: 0.75, duration: 0.2, ease: "power1.out" }, "<")
      .to(overlayRef.current, { opacity: 1, duration: 0.45, ease: "power2.inOut" })
      .add(() => navigate("/home"));
  };

  return (
    <section ref={rootRef} className="relative min-h-svh w-full overflow-hidden bg-black text-white" aria-label="Entry screen">
      {/* Backdrop layers */}
      <div className="entry-bg pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-black" />
        <div className="absolute inset-0 bg-[radial-gradient(900px_500px_at_50%_15%,rgba(16,185,129,0.18),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(900px_500px_at_50%_85%,rgba(56,189,248,0.14),transparent_60%)]" />
      </div>

      {/* Gradient-matched tiny particles */}
      <div className="pointer-events-none absolute inset-0 -z-0">
        <GradientParticles />
      </div>

      {/* Content */}
      <div className="relative z-10 flex min-h-svh flex-col items-center justify-center px-6">
        <div ref={logoRef} className="select-none text-center">
          <h1 className="text-[12vw] leading-none font-extrabold tracking-tight md:text-8xl">
            Built
            <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">4</span>
            You
          </h1>
          <p className="mt-3 text-slate-300 text-base md:text-lg">Custom sites. Fast results.</p>
        </div>

        {/* Launch button with rocket */}
        <div className="mt-14">
          <div className="relative inline-block overflow-hidden rounded-[24px]">
            <div className="pointer-events-none absolute -bottom-3 right-[-250%] h-1/2 w-[300%] rounded-full opacity-70 bg-gradient-to-r from-emerald-600 to-blue-600 animate-star-bottom" />
            <div className="pointer-events-none absolute -top-3 left-[-250%] h-1/2 w-[300%] rounded-full opacity-70 bg-gradient-to-r from-emerald-600 to-blue-600 animate-star-top" />
            <button
              ref={ctaRef}
              onClick={handleEnter}
              className="relative z-[1] flex items-center gap-3 rounded-[24px] border border-[#222] bg-gradient-to-r from-emerald-600 to-blue-600 px-12 py-5 text-xl font-bold text-white shadow-2xl transition hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-black"
              aria-label="Enter site"
            >
              Launch
              <span ref={rocketRef} className="inline-block select-none will-change-transform">🚀</span>
            </button>
          </div>
        </div>

        {/* Secondary CTA and social/phone */}
        <div className="mt-8 text-center space-y-4">
          <div>
            <button
              onClick={() => setFreeOpen(true)}
              className="rounded-2xl border border-white/15 bg-white/5 px-6 py-4 text-base font-semibold text-white backdrop-blur-sm transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-black"
            >
              Want a Free site?
            </button>
            <div className="mt-2 text-xs text-slate-400"></div>
          </div>

          <div className="flex justify-center gap-4">
            <a
              href="https://www.instagram.com/built4youonline?igsh=MWJ6MmViMmlzemsyOA=="
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-6 py-4 text-base font-semibold text-white backdrop-blur-sm transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-black"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href="tel:5805076262"
              className="flex items-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-6 py-4 text-base font-semibold text-white backdrop-blur-sm transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-black"
            >
              <Phone className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Fade overlay for route transition */}
      <div ref={overlayRef} className="pointer-events-none absolute inset-0 bg-black opacity-0" aria-hidden="true" />

      {/* Modal */}
      <FreeSiteModal open={freeOpen} onClose={() => setFreeOpen(false)} onSuccessRedirect={() => navigate("/")} />
    </section>
  );
}
