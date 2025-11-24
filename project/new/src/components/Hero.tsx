// Hero.tsx
import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import newbg from '../assets/images/newbg.jpg';

import googleLogo from '../assets/images/google-logo.png';
import bingLogo from '../assets/images/bing-logo.png';
import yahooLogo from '../assets/images/yahoo-logo.png';
import duckGoLogo from '../assets/images/duck-go-logo.png';
import braveLogo from '../assets/images/brave-logo.png';
import operaLogo from '../assets/images/opera-logo.png';

export default function Hero() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const el = sectionRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: 'power3.out' },
      });

      tl.fromTo(
        el.querySelector('[data-hero-eyebrow]'),
        { autoAlpha: 0, y: 20 },
        { autoAlpha: 1, y: 0, duration: 0.5 }
      )
        .fromTo(
          el.querySelector('[data-hero-heading]'),
          { autoAlpha: 0, y: 40 },
          { autoAlpha: 1, y: 0, duration: 0.7 },
          '-=0.2'
        )
        .fromTo(
          el.querySelector('[data-hero-subcopy]'),
          { autoAlpha: 0, y: 30 },
          { autoAlpha: 1, y: 0, duration: 0.6 },
          '-=0.3'
        )
        .fromTo(
          el.querySelectorAll('[data-hero-cta]'),
          { autoAlpha: 0, y: 20 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.5,
            stagger: 0.1,
          },
          '-=0.3'
        )
        .fromTo(
          el.querySelector('[data-hero-marquee]'),
          { autoAlpha: 0, y: 10 },
          { autoAlpha: 1, y: 0, duration: 0.5 },
          '-=0.2'
        )
        .fromTo(
          el.querySelector('[data-hero-meta]'),
          { autoAlpha: 0 },
          { autoAlpha: 1, duration: 0.5 },
          '-=0.3'
        )
        .fromTo(
          el.querySelector('[data-hero-engines-title]'),
          { autoAlpha: 0, y: 10 },
          { autoAlpha: 1, y: 0, duration: 0.5 },
          '-=0.2'
        )
        .fromTo(
          el.querySelector('[data-hero-engine-logos]'),
          { autoAlpha: 0, y: 10 },
          { autoAlpha: 1, y: 0, duration: 0.5 },
          '-=0.3'
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen text-white flex items-center justify-center overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${newbg})` }}
    >
      {/* Overlay */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/70 to-black" />
        <div className="absolute -top-40 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-white/[0.08] blur-3xl" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-10 py-24 md:py-32 text-center">

        {/* Eyebrow */}
        <div className="mb-5" data-hero-eyebrow>
          <span className="text-white/60 text-[11px] md:text-xs tracking-[0.35em] uppercase">
            #1 Web & App Development Team
          </span>
        </div>

        {/* Heading */}
        <h1
          data-hero-heading
          className="text-3xl md:text-5xl lg:text-[3.3rem] font-extrabold mb-6 md:mb-7 leading-[1.05] tracking-[0.18em] uppercase"
        >
          Your Strategic Partner in
          <br className="hidden md:block" />
          Business Growth
        </h1>

        {/* Subcopy */}
        <p
          data-hero-subcopy
          className="text-[13px] md:text-sm lg:text-base text-white/70 max-w-3xl mx-auto mb-10 md:mb-12 leading-relaxed tracking-[0.12em] uppercase"
        >
          Focused on cleaner systems, smarter promotion, and a more organized structure that supports confident,
          sustainable business growth.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 mb-16 md:mb-24">

          {/* Primary CTA */}
          <button
            data-hero-cta
            onClick={() => scrollToSection('contact')}
            className="group relative w-full sm:w-auto uppercase tracking-[0.2em] text-[11px] md:text-xs font-semibold"
          >
            <span
              className="
                relative z-10 inline-flex items-center justify-center px-9 md:px-11 py-3.5
                bg-[#895bfd]/30 
                border border-[#895bfd]/40 
                backdrop-blur-md
                text-white
              "
            >
              Submit Inquiry
            </span>

            <span className="pointer-events-none absolute inset-0 border border-[#895bfd]/30" />
            <span className="pointer-events-none absolute inset-0 border border-[#895bfd]/50 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
          </button>

          {/* Secondary CTA */}
          <button
            data-hero-cta
            onClick={() => scrollToSection('contact')}
            className="group relative w-full sm:w-auto uppercase tracking-[0.2em] text-[11px] md:text-xs font-semibold"
          >
            <span className="relative z-10 inline-flex items-center justify-center gap-2 px-9 md:px-11 py-3.5 bg-transparent text-white">
              Book a call
              <span className="text-xs">→</span>
            </span>

            <span className="pointer-events-none absolute inset-0 border border-white/60 group-hover:border-white transition-colors duration-200" />
            <span className="pointer-events-none absolute inset-0 bg-white/0 group-hover:bg-white/5 transition-colors duration-200" />
          </button>
        </div>

        {/* Marquee */}
        <div
          data-hero-marquee
          className="relative py-4 border-t border-white/10 border-b border-white/10 overflow-hidden"
        >
          <div className="animate-marquee whitespace-nowrap">
            <span className="mx-8 text-[10px] md:text-[11px] tracking-[0.25em] uppercase text-white/40">
              Custom web development
            </span>
            <span className="mx-8 text-[10px] md:text-[11px] tracking-[0.25em] uppercase text-white/40">
              AI front desk reception
            </span>
            <span className="mx-8 text-[10px] md:text-[11px] tracking-[0.25em] uppercase text-white/40">
              Google Business profile & local SEO
            </span>
            <span className="mx-8 text-[10px] md:text-[11px] tracking-[0.25em] uppercase text-white/40">
              Conversion-focused landing pages
            </span>
            <span className="mx-8 text-[10px] md:text-[11px] tracking-[0.25em] uppercase text-white/40">
              Systems for lean teams
            </span>
          </div>
        </div>

        {/* Meta */}
        <div
          data-hero-meta
          className="mt-6 text-[10px] md:text-[11px] tracking-[0.3em] uppercase text-white/45"
        >
          Based in the USA. Trusted globally.
        </div>

        {/* Title Above Logos */}
        <h3
          data-hero-engines-title
          className="mt-10 md:mt-12 mb-6 text-white/60 text-[10px] md:text-xs tracking-[0.32em] uppercase"
        >
          Optimized Performance on Industry-Leading Search Engines
        </h3>

        {/* Logos */}
        <div
          data-hero-engine-logos
          className="flex flex-wrap items-center justify-center gap-10 md:gap-14"
        >
          <img src={googleLogo} alt="Google" className="h-7 md:h-9 opacity-80 hover:opacity-100 transition-opacity" />
          <img src={bingLogo} alt="Bing" className="h-12 md:h-14 opacity-80 hover:opacity-100 transition-opacity" />
          <img src={yahooLogo} alt="Yahoo" className="h-12 md:h-14 opacity-80 hover:opacity-100 transition-opacity" />
          <img src={duckGoLogo} alt="DuckDuckGo" className="h-20 md:h-24 opacity-80 hover:opacity-100 transition-opacity" />
          <img src={braveLogo} alt="Brave" className="h-16 md:h-20 opacity-80 hover:opacity-100 transition-opacity" />
          <img src={operaLogo} alt="Opera" className="h-16 md:h-20 opacity-80 hover:opacity-100 transition-opacity" />
        </div>

      </div>
    </section>
  );
}
