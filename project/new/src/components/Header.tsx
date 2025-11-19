// Header.tsx
import { useState, useEffect, useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const headerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useLayoutEffect(() => {
    const el = headerRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { y: -40, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.7,
          ease: 'power3.out',
        }
      );
    }, el);

    return () => ctx.revert();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      ref={headerRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? 'bg-black/90 backdrop-blur-md border-b border-white/10'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="border-t border-white/100" />
      <div className="max-w-[1320px] mx-auto px-4 md:px-8 py-4 md:py-5">
        <div className="flex items-center justify-between gap-4 group">
          {/* Logo */}
          <button
            onClick={() => scrollToSection('top')}
            className="text-white font-semibold text-base md:text-lg tracking-[0.2em] uppercase hover:text-gray-300 transition-colors duration-200"
          >
            Built4You
          </button>

          {/* Middle Pill Nav */}
          <div className="hidden md:flex flex-1 justify-center">
            <nav className="inline-flex items-center gap-1 rounded-full border border-white/15 bg-white/5 px-2 py-1 backdrop-blur-md">
              {['services', 'projects', 'results', 'process', 'faq', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="px-4 py-2 text-[11px] tracking-[0.18em] uppercase text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-colors duration-200"
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </button>
              ))}
            </nav>
          </div>

          {/* Right Buttons */}
          <div className="hidden md:flex items-center gap-4">
            {/* Start Project — GLASS TINT (#895bfd) */}
            <button
              onClick={() => scrollToSection('contact')}
              className="
                group relative rounded-full overflow-hidden
                px-6 py-2
                text-[11px] tracking-[0.2em] uppercase font-medium
                text-white
                bg-[#895bfd]/30
                border border-[#895bfd]/40
                backdrop-blur-md
                hover:border-[#895bfd]/60 hover:bg-[#895bfd]/40
                transition-all duration-200
              "
            >
              {/* Hover glow */}
              <span
                className="
                  pointer-events-none absolute inset-0 rounded-full
                  border border-[#895bfd]/50 
                  opacity-0 group-hover:opacity-100 
                  transition-opacity duration-200
                "
              />

              <span className="relative z-10">Start Project</span>
            </button>

            {/* Client Dashboard — sheen stays the same */}
            <a
              href="https://dashboard.built4you.org"
              className="
                relative rounded-full px-6 py-2
                text-[11px] tracking-[0.2em] uppercase font-medium
                text-white bg-black/40
                border border-white/20
                hover:border-white/40 hover:bg-black/60
                transition-all duration-200 overflow-hidden
              "
            >
              <span className="pointer-events-none absolute inset-0 bg-gradient-to-r from-white/[0.05] via-white/[0.1] to-white/[0.05] opacity-20" />

              <span
                className="
                  pointer-events-none absolute top-0 bottom-0 w-1/2
                  bg-white/40 blur-sm
                  -translate-x-full
                  group-hover:animate-[sheen_1.2s_ease-in-out]
                "
              />

              <span className="relative z-10">Client Login</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
