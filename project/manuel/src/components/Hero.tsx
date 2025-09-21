// src/components/Hero.tsx
import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export default function Hero() {
  const reduce = useReducedMotion();
  const [paused, setPaused] = useState(false);

  const BASE = import.meta.env.BASE_URL;
  const BG = `${BASE}images/truck-bg.jpg`;
  const TRUCK = `${BASE}images/truck.png`;
  const LOGO = `${BASE}images/logo.jpg`;

  const lane =
    'repeating-linear-gradient(90deg, rgba(234,179,8,1) 0 48px, transparent 48px 88px)';

  const glassBtn =
    'relative overflow-hidden font-semibold px-5 py-3 sm:px-6 sm:py-3 rounded-xl border border-white/40 bg-white/20 backdrop-blur-md text-white shadow-lg hover:bg-white/30 transition';
  const glassBtnDarkText =
    'relative overflow-hidden font-semibold px-5 py-3 sm:px-6 sm:py-3 rounded-xl border border-white/40 bg-white/20 backdrop-blur-md text-white shadow-lg hover:bg-white/30 transition';

  const Shiny = () => (
    <motion.span
      aria-hidden
      className="pointer-events-none absolute inset-0 rounded-xl"
      style={{
        background:
          'linear-gradient(120deg, transparent 0%, rgba(255,255,255,0.45) 45%, rgba(255,255,255,0.7) 50%, rgba(255,255,255,0.45) 55%, transparent 100%)',
        mixBlendMode: 'screen'
      }}
      initial={{ x: '-150%' }}
      animate={reduce ? {} : { x: ['-150%', '150%'] }}
      transition={reduce ? {} : { duration: 2.5, repeat: Infinity, ease: 'linear' }}
    />
  );

  return (
    <section className="relative overflow-hidden">
      {/* BG layer */}
      <div className="relative h-[58vh] sm:h-[72vh]" aria-hidden>
        <div
          className="absolute inset-0 bg-cover bg-center transform-gpu will-change-transform scale-[1.06]"
          style={{
            backgroundImage: `url(${BG})`,
            filter: 'blur(6px)',
            backgroundPosition: '10% 40%',
            backfaceVisibility: 'hidden'
          }}
        />
      </div>

      <div className="relative bg-neutral-900 h-[16vh] sm:h-[16.8vh]">
        <button
          onClick={() => setPaused((p) => !p)}
          className="hidden sm:inline-flex absolute top-3 right-3 z-40 items-center bg-white/15 text-white hover:bg-white/25 backdrop-blur-md border border-white/30 shadow px-3 py-1 rounded-full text-xs"
          aria-pressed={paused}
        >
          {paused ? 'Resume' : 'Pause'}
        </button>

        {/* lifted card; mobile raised slightly less */}
        <div className="absolute left-1/2 -translate-x-1/2 -translate-y-[22rem] sm:-translate-y-[21rem] z-30 w-full px-4 will-change-transform">
          <motion.div
            initial={reduce ? {} : { y: 24, opacity: 0 }}
            animate={
              reduce
                ? { opacity: 1 }
                : {
                    y: [0, -6, 0],
                    opacity: 1,
                    transition: { y: { duration: 4, repeat: Infinity, ease: 'easeInOut' } },
                  }
            }
            transition={{ opacity: { duration: 0.5 } }}
            className="relative mx-auto w-11/12 max-w-[92%] sm:max-w-4xl"
          >
            <div className="absolute -inset-[1px] rounded-[1.05rem] bg-gradient-to-r from-white/20 via-white/10 to-white/20 blur-[6px] pointer-events-none" />
            {/* Mobile: row with logo on right to reduce height; desktop unchanged */}
            <div className="relative rounded-2xl bg-white/12 backdrop-blur-xl shadow-2xl border border-white/25 ring-1 ring-white/10 p-5 sm:p-8 flex flex-row items-center justify-between gap-4 sm:gap-8">
              <motion.div
                aria-hidden
                className="pointer-events-none absolute -top-1/2 left-0 right-0 h-full rotate-12"
                initial={false}
                animate={reduce ? {} : { x: ['-20%', '120%'] }}
                transition={reduce ? {} : { duration: 2.8, repeat: Infinity, ease: 'linear' }}
                style={{
                  background:
                    'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.18) 50%, transparent 100%)',
                }}
              />

              {/* Text + buttons */}
              <div className="flex-1 min-w-0">
                <h1 className="font-display text-3xl sm:text-7xl leading-none tracking-tight text-white drop-shadow">
                  MANUEL FOOD TRUCK
                </h1>
                <p className="mt-2 sm:mt-4 text-base sm:text-2xl text-white/90">
                  Local, fresh, cooked hot and fast.
                </p>

                {/* Buttons narrower on mobile */}
                <div className="mt-4 sm:mt-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
                  <a href="tel:580-771-6373" className={`${glassBtn} w-[220px] sm:w-auto`}>
                    <Shiny />
                    📞 CALL NOW
                  </a>
                  <a href="#findus" className={`${glassBtnDarkText} w-[220px] sm:w-auto`}>
                    <Shiny />
                    📍 FIND US
                  </a>
                  <a
                    href="https://www.facebook.com/people/Manuel-Foods-Trucks/61578727127353/"
                    aria-label="Visit us on Facebook"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-[220px] sm:w-auto px-5 py-3 sm:px-6 sm:py-3 rounded-xl border border-blue-400 bg-blue-500/40 text-white shadow-lg hover:bg-blue-500/60 backdrop-blur-md [box-shadow:0_0_20px_rgba(59,130,246,.45)] transition"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M22 12.06C22 6.49 17.52 2 12 2S2 6.49 2 12.06c0 4.99 3.66 9.14 8.44 9.94v-7.03H7.9v-2.91h2.54V9.41c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.24.2 2.24.2v2.47h-1.26c-1.24 0-1.62.77-1.62 1.56v1.87h2.76l-.44 2.91h-2.32V22c4.78-.8 8.44-4.95 8.44-9.94z" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Logo moved to right; smaller on mobile */}
              <div className="flex-shrink-0 w-20 h-20 sm:w-40 sm:h-40 mx-0 rounded-full overflow-hidden border border-white/40 ring-2 ring-white/20 shadow-2xl">
                <img src={LOGO} alt="Manuel Food Truck Logo" className="w-full h-full object-cover" />
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="pointer-events-none absolute left-0 right-0 top-1/2 -translate-y-1/2 h-0.5 sm:h-0.75 w-full"
          style={{
            backgroundImage: lane,
            boxShadow: '0 0 6px rgba(234,179,8,0.35)',
            backgroundRepeat: 'repeat',
            backgroundSize: '136px 100%',
          }}
          animate={reduce || paused ? {} : { backgroundPositionX: ['0px', '-136px'] }}
          transition={reduce || paused ? {} : { duration: 0.8, ease: 'linear', repeat: Infinity }}
        />

        <motion.div
          className="absolute bottom-1.5 left-0 right-0 z-20 pointer-events-none hidden sm:block"
          initial={reduce ? { x: 0 } : { x: '-40%' }}
          animate={reduce || paused ? { x: 0 } : { x: '110%' }}
          transition={
            reduce || paused
              ? {}
              : { duration: 7.5, ease: 'linear', repeat: Infinity, repeatType: 'loop' }
          }
        >
          <div className="relative w-[25vw] max-w-[310px] mx-auto">
            <motion.img
              src={TRUCK}
              alt="Manuel Food Truck"
              className="w-full h-auto drop-shadow-[0_10px_20px_rgba(0,0,0,0.45)]"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            />
          </div>
        </motion.div>

        <div className="absolute left-0 right-0 bottom-[36px] z-40 pointer-events-auto block sm:hidden">
          <div className="relative w-[48vw] max-w-[260px] mx-auto">
            <img
              src={TRUCK}
              alt="Manuel Food Truck"
              className="w-full h-auto drop-shadow-[0_6px_14px_rgba(0,0,0,0.45)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
