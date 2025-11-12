import { useEffect, useState } from 'react';
import { IceCream } from 'lucide-react';

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(id);
  }, []);

  const scrollToMenu = () => {
    const el = document.getElementById('menu');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
  <section className="relative h-screen overflow-hidden bg-gradient-to-b from-sky-400 via-cyan-300 to-blue-200">
      {/* gentle water layer */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="wave-animation"></div>
      </div>

      {/* hero content */}
  <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        {/* icon */}
        <div
          className={[
            'mb-6 animate-float transition-all duration-700',
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6',
          ].join(' ')}
          style={{ transitionDelay: '100ms' }}
        >
          <IceCream className="w-20 h-20 text-white drop-shadow-lg" strokeWidth={1.5} />
        </div>

        {/* headline */}
        <h1
          className={[
            'text-6xl md:text-8xl font-bold text-white mb-4 drop-shadow-2xl font-display tracking-tight transition-all duration-700',
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6',
          ].join(' ')}
          style={{ transitionDelay: '220ms' }}
        >
          Coastal Creamery & Crepes
        </h1>

        {/* subheading (moved down beneath CTA area previously) */}
        {/* We'll render it right below the headline to appear where the tagline used to be */}
        <div style={{ height: '1rem' }} />
        <p
          className={[
            'text-2xl md:text-4xl text-white/90 mb-8 drop-shadow-lg font-light transition-all duration-700',
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6',
          ].join(' ')}
          style={{ transitionDelay: '340ms' }}
        >
          Where the Sea Meets Sweet
        </p>

        {/* Menu CTA */}
        <div className={[mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6', 'transition-all duration-700'].join(' ')} style={{ transitionDelay: '520ms' }}>
          <button onClick={scrollToMenu} className="mt-4 inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-pink-400 to-rose-400 text-white font-semibold rounded-full shadow-lg hover:scale-105 transition-transform">
            <span className="text-lg">Menu</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"></path></svg>
          </button>
        </div>
      </div>

      {/* decorative bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" className="w-full fill-amber-50">
          <path d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"></path>
        </svg>
      </div>
    </section>
  );
}
