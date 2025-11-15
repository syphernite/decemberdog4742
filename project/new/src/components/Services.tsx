// Services.tsx
import { useLayoutEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { services } from '../data/content';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

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
    <section id="services" ref={sectionRef} className="bg-black py-24">
      <div className="max-w-[1200px] mx-auto px-6 md:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-4 py-1 mb-5">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            <span className="text-[10px] md:text-[11px] tracking-[0.3em] uppercase text-white/60">
              Built4You service suite
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
            Each offer is designed as part of one continuous rail: strategy, automation,
            and day-to-day visibility working together so your operation feels sharper,
            more composed, and ready to scale without extra headcount.
          </p>
        </div>

        {/* Staggered grid with subtle seams */}
        <div className="relative">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.06),_transparent_60%)]" />
          <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 rounded-xl overflow-hidden">
            {services.map((service, index) => (
              <article
                key={service.id}
                data-service-card
                className="group relative bg-black/95 border border-white/10 p-7 md:p-8 transition-all duration-300 hover:bg-white/[0.03] hover:border-white/30"
              >
                {/* Capsule + index */}
                <div className="flex items-center justify-between mb-5">
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.02] px-3 py-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-white/70 group-hover:bg-emerald-400 transition-colors duration-200" />
                    <span className="text-[10px] tracking-[0.2em] uppercase text-white/50">
                      Pillar {String(index + 1).padStart(2, '0')}
                    </span>
                  </span>
                  <span className="text-[10px] tracking-[0.2em] uppercase text-white/35">
                    Built4You
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

                {/* Bottom row: microcopy + arrow */}
                <div className="flex items-center justify-between text-[11px]">
                  <span className="text-white/40 tracking-[0.18em] uppercase">
                    Part of your long-term operating stack
                  </span>
                  <a
                    href={`#service-${service.slug}`}
                    className="inline-flex items-center gap-1 text-white/60 hover:text-white transition-colors duration-200"
                  >
                    <span className="text-[10px] tracking-[0.22em] uppercase">
                      View scope
                    </span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform duration-200" />
                  </a>
                </div>

                {/* Subtle glow on hover */}
                <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute inset-x-6 -bottom-6 h-24 bg-gradient-to-t from-white/12 to-transparent blur-2xl" />
                </div>
              </article>
            ))}
          </div>
        </div>

        <p className="mt-10 text-center text-white/40 text-[11px] md:text-xs tracking-[0.22em] uppercase">
          Advisory, automation, and promotion working as one continuous experience.
        </p>
      </div>
    </section>
  );
}
