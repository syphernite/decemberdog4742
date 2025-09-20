// src/components/Hero.tsx
import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export default function Hero() {
  const reduce = useReducedMotion();
  const BASE = import.meta.env.BASE_URL;
  const BG = `${BASE}images/truck-bg.jpg`;
  const TRUCK = `${BASE}images/truck.png`;

  const drive = reduce
    ? {}
    : {
        x: ['-40%', '110%'],
        y: [0, -2, 0, 1, 0],
        rotate: ['-0.8deg', '0deg', '0.8deg', '0deg'],
      };

  return (
    <section className="relative overflow-hidden">
      {/* Bigger blurred background */}
      <div
        className="relative h-[60vh] bg-cover bg-center"
        style={{ backgroundImage: `url(${BG})`, filter: 'blur(10px)', transform: 'scale(1.08)' }}
        aria-hidden
      />

      {/* Shorter dark band (road stage) */}
      <div className="relative bg-neutral-900 h-[24vh] md:h-[28vh]">
        {/* Glass card floated ABOVE the band, raised slightly */}
        <div className="absolute left-1/2 -translate-x-1/2 -translate-y-28 md:-translate-y-40 z-30 w-full px-4">
          <div className="mx-auto w-full max-w-4xl rounded-2xl bg-white/85 backdrop-blur-md shadow-2xl border border-white/60 ring-1 ring-black/5 p-6 md:p-8">
            <h1 className="font-display text-5xl md:text-7xl leading-none tracking-tight text-black">
              MANUEL FOOD TRUCK
            </h1>
            <p className="mt-4 text-xl md:text-2xl text-black">
              Local, fresh, cooked hot and fast.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-4">
              <a
                href="tel:580-771-6373"
                className="bg-red-primary hover:bg-red-dark text-white font-semibold px-6 py-3 rounded-xl border-2 border-red-primary/70 shadow"
              >
                📞 CALL NOW
              </a>
              <a
                href="#findus"
                className="bg-white/95 text-black font-semibold px-6 py-3 rounded-xl border-2 border-black/10 shadow"
              >
                📍 FIND US
              </a>
            </div>
          </div>
        </div>

        {/* Dashed yellow centerline under the truck */}
        <div
          className="pointer-events-none absolute left-0 right-0 mx-auto h-1 md:h-1.5 w-full max-w-[960px] rounded"
          style={{
            bottom: '72px',
            background:
              'repeating-linear-gradient(90deg, rgba(234,179,8,1) 0 48px, transparent 48px 88px)',
            boxShadow: '0 0 12px rgba(234,179,8,0.35)',
          }}
        />

        {/* Truck loops along the bottom */}
        <motion.div
          className="absolute bottom-3 left-0 right-0 z-20 pointer-events-none"
          initial={reduce ? { x: 0 } : { x: '-40%' }}
          animate={drive}
          transition={reduce ? {} : { duration: 10, ease: 'linear', repeat: Infinity, repeatType: 'loop' }}
        >
          <div className="relative w-[50vw] max-w-[620px] mx-auto">
            <motion.img
              src={TRUCK}
              alt="Manuel Food Truck"
              className="w-full h-auto drop-shadow-[0_20px_40px_rgba(0,0,0,0.45)]"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
