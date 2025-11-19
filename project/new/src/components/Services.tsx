// Services.tsx
import { useLayoutEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { services } from '../data/content';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const PILLAR_TYPES = ['Advisory', 'Automation', 'Visibility'];

export default function Services() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const el = sectionRef.current;
    if (!el) return;

    const cards = el.querySelectorAll('[data-service-card]');
    const header = el.querySelector('[data-services-header]');
    const body = el.querySelector('[data-services-body]');

    const ctx = gsap.context(() => {
      // Intro copy animation
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
            end: 'top 50%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Card stagger + slight float
      gsap.fromTo(
        cards,
        { autoAlpha: 0, y: 40, rotateX: 8 },
        {
          autoAlpha: 1,
          y: 0,
          rotateX: 0,
          duration: 0.9,
          ease: 'power3.out',
          stagger: 0.14,
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
    <section id="services" ref={sectionRef} className="relative bg-black py-24 md:py-28">
      {/* Background treatment */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(137,91,253,0.16),_transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(15,118,110,0.12),_transparent_55%)]" />
        <div className="absolute inset-0 opacity-25 mix-blend-soft-light bg-[linear-gradient(to_right,_rgba(255,255,255,0.08)_1px,_transparent_1px),linear-gradient(to_bottom,_rgba(255,255,255,0.06)_1px,_transparent_1px)] bg-[size:120px_120px]" />
      </div>

      <div className="relative max-w-[1200px] mx-auto px-6 md:px-8">
        {/* Header block */}
        <div className="mb-16 md:mb-20 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-4 py-1 mb-5">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            <span className="text-[10px] md:text-[11px] tracking-[0.3em] uppercase text-white/60">
              Built4You service architecture
            </span>
          </div>

          <h2
            data-services-header
            className="text-white text-3xl md:text-5xl font-semibold md:font-bold mb-5 tracking-tight leading-tight"
          >
            Systems that support
            <br />
            the business behind the brand.
          </h2>

          <p
            data-services-body
            className="text-white/60 text-sm md:text-lg max-w-2xl mx-auto leading-relaxed"
          >
            Each engagement plugs into one operating layer: advisory, automation, and everyday
            visibility working together so your operation feels sharper, more composed, and ready
            to scale without extra headcount.
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-3 text-[10px] md:text-[11px] tracking-[0.25em] uppercase text-white/40">
            <span className="rounded-full border border-white/15 bg-white/[0.03] px-3 py-1">
              Advisory
            </span>
            <span className="rounded-full border border-white/15 bg-white/[0.03] px-3 py-1">
              Automation
            </span>
            <span className="rounded-full border border-white/15 bg-white/[0.03] px-3 py-1">
              Visibility
            </span>
          </div>
        </div>

        {/* Grid wrapper */}
        <div className="relative">
          {/* subtle inner glow */}
          <div className="pointer-events-none absolute inset-0 rounded-2xl border border-white/10/0 bg-gradient-to-b from-white/5/0 via-white/5/10 to-white/5/0" />

          <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 rounded-2xl overflow-hidden">
            {services.map((service, index) => {
              const railLabel = PILLAR_TYPES[index % PILLAR_TYPES.length];

              return (
                <article
                  key={service.id}
                  data-service-card
                  className="group relative bg-black/95 border border-transparent p-7 md:p-8 transition-all duration-300 hover:bg-white/[0.03] hover:border-[#895bfd]/50 hover:shadow-[0_0_40px_rgba(137,91,253,0.35)]"
                >
                  {/* Top row: rail + index */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.02] px-3 py-1">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 group-hover:bg-emerald-300 transition-colors duration-200" />
                      <span className="text-[10px] tracking-[0.22em] uppercase text-white/55">
                        {railLabel}
                      </span>
                    </span>
                    <span className="text-[10px] tracking-[0.25em] uppercase text-white/35">
                      Pillar {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-white text-lg md:text-xl font-medium mb-3 tracking-tight">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-white/60 text-sm mb-7 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Bottom row */}
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="text-white/40 tracking-[0.18em] uppercase">
                      Built4You operating stack
                    </span>
                    <a
                      href={`#service-${service.slug}`}
                      className="inline-flex items-center gap-1 text-white/65 hover:text-white transition-colors duration-200"
                    >
                      <span className="text-[10px] tracking-[0.22em] uppercase">
                        View scope
                      </span>
                      <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform duration-200" />
                    </a>
                  </div>

                  {/* Hover glow / accent */}
                  <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute inset-x-6 -bottom-6 h-24 bg-gradient-to-t from-[#895bfd]/30 via-[#895bfd]/0 to-transparent blur-2xl" />
                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#895bfd]/60 to-transparent" />
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        <p className="mt-10 text-center text-white/40 text-[11px] md:text-xs tracking-[0.22em] uppercase">
          Advisory, automation, and visibility unified into one continuous client experience.
        </p>
      </div>
    </section>
  );
}
