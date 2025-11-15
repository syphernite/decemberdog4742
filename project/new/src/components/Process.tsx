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

    const ctx = gsap.context(() => {
      gsap.fromTo(
        items,
        { autoAlpha: 0, y: 40 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          stagger: 0.12,
          scrollTrigger: {
            trigger: el,
            start: 'top 75%',
            end: 'top 35%',
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
      className="bg-black py-24 border-t border-white/10"
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-8">
        <div className="text-center mb-16">
          <p className="text-white/50 text-[11px] md:text-xs tracking-[0.3em] uppercase mb-4">
            A simple way to move from idea to live
          </p>
          <h2 className="text-white text-3xl md:text-5xl font-semibold md:font-bold mb-6 tracking-tight leading-tight">
            Time to upgrade
            <br />
            how your business shows up.
          </h2>
          <p className="text-white/60 text-sm md:text-lg max-w-2xl mx-auto leading-relaxed">
            We keep the process clear. Strategy first, then design and build, then launch and
            support. Websites, AI reception, and local visibility all follow the same simple
            flow.
          </p>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute top-12 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/12 to-transparent" />

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-10 md:gap-8 relative">
            {processSteps.map((step, index) => (
              <div key={step.id} data-process-step className="relative">
                <div className="flex flex-col items-start md:items-center text-left md:text-center">
                  <div className="mb-5 md:mb-6">
                    <div className="flex items-center gap-3 md:flex-col md:gap-2">
                      <div className="w-9 h-9 rounded-full border border-white/30 flex items-center justify-center text-[11px] tracking-[0.2em] uppercase text-white/70 bg-black">
                        {String(index + 1).padStart(2, '0')}
                      </div>
                      <div className="h-px w-8 md:hidden bg-white/10" />
                    </div>
                  </div>

                  <h3 className="text-white text-base md:text-lg font-medium mb-3 tracking-wide">
                    {step.title}
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <p className="mt-10 text-center text-white/40 text-[11px] md:text-xs tracking-[0.22em] uppercase">
          Clear scope, clear communication, clear launch.
        </p>
      </div>
    </section>
  );
}
