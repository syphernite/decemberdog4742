// src/pages/Entry.tsx
import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { gsap } from "gsap";
import { Instagram, Phone } from "lucide-react";

const NEWSLETTER_FORMSPREE = "https://formspree.io/f/xandrywk";

function GradientParticles() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const particlesRef = useRef<any[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;
    const DPR = Math.min(window.devicePixelRatio || 1, 2);
    const COLORS = ["#34d399", "#38bdf8"];
    let width = 0, height = 0;
    function resize() {
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = Math.floor(width * DPR);
      canvas.height = Math.floor(height * DPR);
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
    }
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);
    return () => ro.disconnect();
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" aria-hidden="true" />;
}

function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubmitting(true);
    try {
      await fetch(NEWSLETTER_FORMSPREE, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ formName: "Newsletter", email }),
      });
      setDone(true);
    } catch {
      setSubmitting(false);
    }
  };

  if (done) {
    return (
      <div className="mx-auto w-full max-w-xl rounded-2xl border border-white/20 bg-white/5 p-4 text-center text-sm text-emerald-300">
        Subscribed.
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="mx-auto flex w-full max-w-xl flex-col gap-3 sm:flex-row">
      <div className="w-full flex-1 rounded-xl p-[2px] bg-gradient-to-r from-emerald-600 to-blue-600">
        <input
          type="email"
          name="email"
          required
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full rounded-[10px] bg-black/60 px-4 py-3 text-white placeholder-slate-400 outline-none"
        />
      </div>
      <button
        type="submit"
        disabled={submitting}
        className="rounded-xl bg-gradient-to-r from-emerald-600 to-blue-600 px-6 py-3 font-semibold text-white shadow-2xl transition hover:opacity-95 disabled:opacity-60"
      >
        {submitting ? "Joining..." : "Join newsletter"}
      </button>
    </form>
  );
}

export default function Entry() {
  const navigate = useNavigate();
  const rootRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLButtonElement>(null);
  const rocketRef = useRef<HTMLSpanElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  const handleEnter = () => navigate("/home");

  return (
    <section ref={rootRef} className="relative min-h-svh w-full overflow-hidden bg-black text-white">
      <div className="entry-bg pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-black" />
      </div>
      <GradientParticles />
      <div className="relative z-10 flex min-h-svh flex-col items-center justify-center px-6 scale-[0.85] origin-top">
        <div ref={logoRef} className="select-none text-center">
          <h1 className="text-[12vw] leading-none font-extrabold md:text-8xl">
            Built
            <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">4</span>
            You
          </h1>
          <p className="mt-3 text-base text-slate-300 md:text-lg">Custom sites. Fast results.</p>
        </div>

        <div className="mt-10 md:mt-12">
          <button
            ref={ctaRef}
            onClick={handleEnter}
            className="flex items-center gap-3 rounded-[24px] bg-gradient-to-r from-emerald-600 to-blue-600 px-10 py-4 text-lg font-bold text-white shadow-2xl transition hover:opacity-95 md:px-12 md:py-5 md:text-xl"
          >
            Launch <span ref={rocketRef}>🚀</span>
          </button>
        </div>

        <div className="mt-4 text-center space-y-4">
          <button className="rounded-2xl border border-white/20 bg-white/5 px-6 py-4 text-base font-semibold text-white">
            Want a Free site?
          </button>
          <div className="flex justify-center gap-3">
            <a href="https://www.instagram.com/built4youonline" target="_blank" className="rounded-2xl border border-white/20 bg-white/5 p-3">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="tel:5805076262" className="rounded-2xl border border-white/20 bg-white/5 p-3">
              <Phone className="h-5 w-5" />
            </a>
          </div>
        </div>

        {/* Newsletter closer */}
        <div className="mt-6 w-full px-2 sm:px-0">
          <div className="mx-auto w-full max-w-2xl text-center">
            <h3 className="mb-3 text-base font-semibold text-slate-200 md:text-lg">
            </h3>
            <Newsletter />
            <p className="mt-2 text-xs text-slate-400">No spam. Unsubscribe anytime.</p>
          </div>
        </div>
      </div>
      <div ref={overlayRef} className="pointer-events-none absolute inset-0 bg-black opacity-0" />
    </section>
  );
}
