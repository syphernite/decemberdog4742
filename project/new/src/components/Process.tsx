// Process.tsx
import { useLayoutEffect, useRef } from 'react';
import { processSteps } from '../data/content';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function Process() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const el = sectionRef.current;
    if (!el) return;

    const items = el.querySelectorAll('[data-process-step]');
    const header = el.querySelector('[data-process-header]');
    const body = el.querySelector('[data-process-body]');

    const ctx = gsap.context(() => {
      // Header intro
      gsap.fromTo(
        [header, body],
        { autoAlpha: 0, y: 30 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          stagger: 0.12,
          scrollTrigger: {
            trigger: el,
            start: 'top 80%',
            end: 'top 55%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Cards / steps
      gsap.fromTo(
        items,
        { autoAlpha: 0, y: 40, rotateX: 6 },
        {
          autoAlpha: 1,
          y: 0,
          rotateX: 0,
          duration: 0.9,
          ease: 'power3.out',
          stagger: 0.12,
          scrollTrigger: {
            trigger: el,
            start: 'top 75%',
            end: 'top 30%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="process"
      ref={sectionRef}
      className="relative bg-black py-24 md:py-28 border-t border-white/10"
    >
      {/* Background treatments */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(137,91,253,0.16),_transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(15,118,110,0.12),_transparent_55%)]" />
        <div className="absolute inset-0 opacity-20 mix-blend-soft-light bg-[linear-gradient(to_right,_rgba(255,255,255,0.06)_1px,_transparent_1px),linear-gradient(to_bottom,_rgba(255,255,255,0.05)_1px,_transparent_1px)] bg-[size:140px_140px]" />
      </div>

      <div className="relative max-w-[1200px] mx-auto px-6 md:px-8">
        {/* Header block */}
        <div className="text-center mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-4 py-1 mb-5">
            <span className="h-1.5 w-1.5 rounded-full bg-[#895bfd]" />
            <span className="text-[10px] md:text-[11px] tracking-[0.3em] uppercase text-white/60">
              Built4You delivery blueprint
            </span>
          </div>

          <h2
            data-process-header
            className="text-white text-3xl md:text-5xl font-semibold md:font-bold mb-5 tracking-tight leading-tight"
          >
            A calm, structured way
            <br />
            to move from idea to live.
          </h2>

          <p
            data-process-body
            className="text-white/60 text-sm md:text-lg max-w-2xl mx-auto leading-relaxed"
          >
            One rhythm for every engagement. We align the strategy, map the system, design it,
            ship it, and then keep it tuned while you run the business.
          </p>
        </div>

        {/* Timeline rail + cards */}
        <div className="relative mt-6">
          {/* Horizontal rail on desktop */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-white/14 to-transparent pointer-events-none" />

          {/* Vertical rail on mobile */}
          <div className="md:hidden absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-white/16 to-transparent pointer-events-none" />

          <div className="relative grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-6">
            {processSteps.map((step, index) => {
              const stepIndex = index + 1;
              const isFirst = stepIndex === 1;
              const isLast = stepIndex === processSteps.length;

              return (
                <div
                  key={step.id}
                  data-process-step
                  className="relative flex justify-center"
                >
                  {/* Connector dots (desktop) */}
                  <div className="hidden md:block absolute -top-6 left-1/2 -translate-x-1/2">
                    <div className="h-2.5 w-2.5 rounded-full bg-white/70 shadow-[0_0_14px_rgba(255,255,255,0.6)]" />
                  </div>

                  {/* Card */}
                  <div
                    className="
                      relative w-full
                      rounded-2xl border border-white/12 bg-white/[0.03]
                      backdrop-blur-md
                      px-5 py-6 md:px-6 md:py-7
                      transition-all duration-300
                      hover:border-[#895bfd]/60 hover:bg-white/[0.05]
                      hover:shadow-[0_0_40px_rgba(137,91,253,0.35)]
                    "
                  >
                    {/* Step badge + phase label */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="inline-flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full border border-white/35 flex items-center justify-center text-[10px] tracking-[0.22em] uppercase text-white/80 bg-black/60">
                          {String(stepIndex).padStart(2, '0')}
                        </div>
                        <span className="hidden md:inline-block text-[10px] tracking-[0.26em] uppercase text-white/40">
                          {isFirst
                            ? 'Foundation'
                            : isLast
                            ? 'Ongoing'
                            : 'Build phase'}
                        </span>
                      </div>

                      <span className="text-[10px] tracking-[0.26em] uppercase text-white/38">
                        Step {stepIndex}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-white text-base md:text-lg font-medium mb-3 tracking-tight">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="text-white/60 text-sm leading-relaxed">
                      {step.description}
                    </p>

                    {/* Bottom accent */}
                    <div className="mt-5 flex items-center justify-between text-[10px]">
                      <span className="text-white/35 tracking-[0.22em] uppercase">
                        {isFirst
                          ? 'Where we clarify'
                          : isLast
                          ? 'Where we refine'
                          : 'Where we build'}
                      </span>
                      <span className="text-white/50 tracking-[0.22em] uppercase">
                        Built4You
                      </span>
                    </div>

                    {/* Glow on hover */}
                    <div className="pointer-events-none absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute inset-x-4 -bottom-8 h-20 bg-gradient-to-t from-[#895bfd]/35 via-transparent to-transparent blur-2xl" />
                    </div>

                    {/* Mobile rail node */}
                    <div className="md:hidden absolute -top-5 left-1/2 -translate-x-1/2">
                      <div className="h-2 w-2 rounded-full bg-white/80 shadow-[0_0_12px_rgba(255,255,255,0.7)]" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <p className="mt-12 text-center text-white/40 text-[11px] md:text-xs tracking-[0.22em] uppercase">
          Clear scope, calm build, confident launch — with an operator-friendly system at the end.
        </p>
      </div>
    </section>
  );
}
