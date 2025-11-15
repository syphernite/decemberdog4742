// Metrics.tsx
import { useEffect, useState, useRef, useLayoutEffect } from 'react';
import { metrics } from '../data/content';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

function AnimatedCounter({ value, suffix }: { value: string; suffix: string }) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const numericValue = parseFloat(value.replace(/[^0-9.]/g, ''));
    const duration = 2000;
    const steps = 60;
    const increment = numericValue / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= numericValue) {
        setCount(numericValue);
        clearInterval(timer);
      } else {
        setCount(current);
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isVisible, value]);

  const displayValue = value.includes('.')
    ? count.toFixed(1)
    : Math.floor(count).toString();

  return (
    <div
      ref={ref}
      className="text-white text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight"
    >
      {displayValue}
      {suffix}
    </div>
  );
}

export default function Metrics() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const el = sectionRef.current;
    if (!el) return;

    const header = el.querySelector('[data-metrics-header]');
    const body = el.querySelector('[data-metrics-body]');
    const chips = el.querySelectorAll('[data-metrics-chip]');
    const cards = el.querySelectorAll('[data-metric-card]');

    const ctx = gsap.context(() => {
      // Intro copy
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

      // Small chips above metrics
      gsap.fromTo(
        chips,
        { autoAlpha: 0, y: 16 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.6,
          ease: 'power3.out',
          stagger: 0.08,
          scrollTrigger: {
            trigger: el,
            start: 'top 78%',
            end: 'top 60%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Metric cards
      gsap.fromTo(
        cards,
        { autoAlpha: 0, y: 40, scale: 0.96 },
        {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: 'power3.out',
          stagger: 0.12,
          scrollTrigger: {
            trigger: el,
            start: 'top 72%',
            end: 'top 40%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="results"
      ref={sectionRef}
      className="bg-black py-24 border-y border-white/10"
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-8">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-4 py-1 mb-5">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            <span className="text-[10px] md:text-[11px] tracking-[0.3em] uppercase text-white/60">
              Outcomes from live client work
            </span>
          </div>

          <h2
            data-metrics-header
            className="text-white text-3xl md:text-5xl font-semibold md:font-bold mb-4 tracking-tight leading-tight"
          >
            Numbers that reflect
            <br />
            calmer, stronger operations.
          </h2>

          <p
            data-metrics-body
            className="text-white/60 text-sm md:text-lg max-w-2xl mx-auto leading-relaxed"
          >
            Figures change by business, but the story repeats:
            smoother lead flow, clearer positioning, and platforms that quietly
            compound trust while teams stay lean.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12">
          {metrics.map((metric, index) => (
            <div
              key={index}
              data-metric-card
              className="relative text-center bg-white/[0.02] border border-white/10 rounded-xl px-4 py-8 md:py-9 overflow-hidden group"
            >
              {/* Soft halo */}
              <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute -inset-10 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.12),_transparent_60%)]" />
              </div>

              {/* Top chip */}
              <div
                data-metrics-chip
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-black/60 px-3 py-1 mb-4"
              >
                <span className="text-[10px] tracking-[0.22em] uppercase text-white/50">
                  Signal {String(index + 1).padStart(2, '0')}
                </span>
              </div>

              {/* Counter */}
              <AnimatedCounter value={metric.value} suffix={metric.suffix} />

              {/* Label */}
              <p className="text-white/60 text-[11px] md:text-xs mt-4 tracking-[0.22em] uppercase">
                {metric.label}
              </p>

              {/* Bottom microcopy */}
              <p className="mt-3 text-[10px] text-white/35 tracking-[0.18em] uppercase">
                Measured after implementation, not in theory.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
