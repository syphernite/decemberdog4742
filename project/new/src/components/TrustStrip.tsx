// TrustStrip.tsx
import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function TrustStrip() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const el = sectionRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { autoAlpha: 0, y: 40 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 80%',
            end: 'top 50%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-black border-y border-white/10 py-16 md:py-24"
    >
      <div className="max-w-5xl mx-auto px-6 md:px-8">
        {/* Eyebrow */}
        <div className="text-center mb-6">
          <p className="text-[11px] md:text-xs tracking-[0.3em] uppercase text-white/50">
            Preview of the build environment
          </p>
        </div>

        {/* Image / video placeholder frame */}
        <div className="relative rounded-3xl border border-white/12 bg-gradient-to-b from-white/[0.04] via-black to-black overflow-hidden shadow-[0_0_120px_rgba(0,0,0,0.9)]">
          <div className="absolute inset-0 pointer-events-none">
            {/* subtle vignette */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.18),_transparent_55%)] opacity-60" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(0,0,0,0.8),_transparent_55%)]" />
          </div>

          {/* Aspect wrapper for placeholder media */}
          <div className="relative aspect-[16/9]">
            {/* Faux “image” surface */}
            <div className="absolute inset-[10%] rounded-[22px] border border-white/10 bg-[linear-gradient(135deg,#18181b,#020617)] overflow-hidden">
              {/* Soft floor reflection stripes */}
              <div className="absolute inset-0 opacity-60 bg-[radial-gradient(circle_at_20%_0%,rgba(255,255,255,0.12),transparent_55%),radial-gradient(circle_at_80%_100%,rgba(15,23,42,0.85),transparent_60%)]" />
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-[linear-gradient(to_top,rgba(0,0,0,0.85),transparent)]" />

              {/* Centerline + label to indicate placeholder */}
              <div className="relative h-full flex flex-col items-center justify-center gap-4">
                <div className="h-px w-24 bg-white/20" />
                <p className="text-[11px] tracking-[0.28em] uppercase text-white/60">
                  Cinematic hero / case study slot
                </p>
                <p className="max-w-md text-center text-xs text-white/45 leading-relaxed">
                  Drop in a looped reel, product shot, or environment render here to mirror
                  the studio feel of the main hero.
                </p>
                <div className="h-px w-24 bg-white/20" />
              </div>
            </div>

            {/* Top-left tag */}
            <div className="absolute top-5 left-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/60 px-3 py-1 backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              <span className="text-[10px] tracking-[0.22em] uppercase text-white/60">
                Studio viewport placeholder
              </span>
            </div>

            {/* Bottom-right microcopy */}
            <div className="absolute bottom-5 right-6 text-[10px] tracking-[0.24em] uppercase text-white/40">
              Replace with final footage · 1920×1080
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
