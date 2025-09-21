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

  return (
    <section className="relative overflow-hidden">
      {/* Background focused left to show truck on mobile */}
      <div
        className="relative h-[58vh] sm:h-[72vh] bg-cover bg-center"
        style={{
          backgroundImage: `url(${BG})`,
          filter: 'blur(6px)',
          backgroundPosition: '10% 40%',
        }}
        aria-hidden
      />

      <div className="relative bg-neutral-900 h-[16vh] sm:h-[16.8vh]">
        {/* Desktop pause button on road */}
        <button
          onClick={() => setPaused((p) => !p)}
          className="hidden sm:inline-flex absolute top-3 right-3 z-40 bg-white/90 hover:bg-white text-black font-medium px-3 py-1 rounded-full border border-black/15 shadow text-xs"
          aria-pressed={paused}
        >
          {paused ? 'Resume' : 'Pause'}
        </button>

        {/* Hero card: mobile 15% narrower and higher */}
        <div className="absolute left-1/2 -translate-x-1/2 -translate-y-[23rem] sm:-translate-y-[21rem] z-30 w-full px-4">
          <div className="relative mx-auto w-11/12 max-w-[85%] sm:max-w-4xl rounded-2xl bg-white/85 backdrop-blur-md shadow-2xl border border-white/60 ring-1 ring-black/5 p-5 sm:p-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 sm:gap-8">
            <div className="flex-1">
              <h1 className="font-display text-4xl sm:text-7xl leading-none tracking-tight text-black">
                MANUEL FOOD TRUCK
              </h1>
              <p className="mt-3 sm:mt-4 text-lg sm:text-2xl text-black">
                Local, fresh, cooked hot and fast.
              </p>
              <div className="mt-5 sm:mt-6 flex flex-col sm:flex-row gap-3 sm:gap-4">
                <a
                  href="tel:580-771-6373"
                  className="bg-white text-black font-semibold px-5 py-3 sm:px-6 sm:py-3 rounded-xl border-2 border-black/20 shadow text-center hover:bg-gray-100"
                >
                  📞 CALL NOW
                </a>
                <a
                  href="#findus"
                  className="bg-white/95 text-black font-semibold px-5 py-3 sm:px-6 sm:py-3 rounded-xl border-2 border-black/10 shadow text-center"
                >
                  📍 FIND US
                </a>
              </div>
            </div>

            <div className="flex-shrink-0 w-24 h-24 sm:w-40 sm:h-40 mx-auto sm:mx-0 rounded-full overflow-hidden border-4 border-red-primary shadow-xl">
              <img src={LOGO} alt="Manuel Food Truck Logo" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        {/* Yellow lane */}
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

        {/* Desktop truck unchanged */}
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

        {/* Mobile static truck bigger and lower */}
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
