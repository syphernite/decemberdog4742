// src/components/Hero.tsx
import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export default function Hero() {
  const reduce = useReducedMotion();
  const BASE = import.meta.env.BASE_URL;
  const BG = `${BASE}images/truck-bg.jpg`;
  const TRUCK = `${BASE}images/truck.png`;
  const LOGO = `${BASE}images/logo.jpg`;

  // road lane pattern
  const lane = 'repeating-linear-gradient(90deg, rgba(234,179,8,1) 0 48px, transparent 48px 88px)';

  // desktop/tablet truck timing: 1.5s off-screen between passes
  const DRIVE_DURATION = 10; // total loop
  const OFFSCREEN_GAP = 1.5; // seconds hidden off-screen
  const MOVE_FRACTION = (DRIVE_DURATION - OFFSCREEN_GAP) / DRIVE_DURATION; // 0.85

  return (
    <section className="relative overflow-hidden">
      {/* Taller background (expanded earlier by 20%) */}
      <div
        className="relative h-[72vh] bg-cover bg-center"
        style={{ backgroundImage: `url(${BG})`, filter: 'blur(10px)', transform: 'scale(1.08)' }}
        aria-hidden
      />

      {/* Taller road */}
      <div className="relative bg-neutral-900 h-[28.8vh] md:h-[33.6vh]">
        {/* Glass card with logo, lowered for taller hero */}
        <div className="absolute left-1/2 -translate-x-1/2 -translate-y-[18rem] md:-translate-y-[23rem] z-30 w-full px-4">
          <div className="mx-auto w-full max-w-4xl rounded-2xl bg-white/85 backdrop-blur-md shadow-2xl border border-white/60 ring-1 ring-black/5 p-6 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div className="flex-1">
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
            <div className="flex-shrink-0 w-40 h-40 md:w-48 md:h-48 mx-auto md:mx-0 rounded-full overflow-hidden border-4 border-red-primary shadow-xl">
              <img src={LOGO} alt="Manuel Food Truck Logo" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        {/* Conveyor-belt yellow centerline */}
        <motion.div
          className="pointer-events-none absolute left-0 right-0 top-1/2 -translate-y-1/2 h-1 md:h-1.5 w-full"
          style={{
            backgroundImage: lane,
            boxShadow: '0 0 12px rgba(234,179,8,0.35)',
            backgroundRepeat: 'repeat',
            backgroundSize: '136px 100%',
          }}
          animate={reduce ? {} : { backgroundPositionX: ['0px', '-136px'] }}
          transition={reduce ? {} : { duration: 0.8, ease: 'linear', repeat: Infinity }}
        />

        {/* Desktop/tablet truck: move, then stay off-screen 1.5s before reappearing */}
        <motion.div
          className="absolute bottom-3 left-0 right-0 z-20 pointer-events-none hidden sm:block"
          initial={reduce ? { x: 0 } : { x: '-40%' }}
          animate={
            reduce
              ? { x: 0 }
              : {
                  x: ['-40%', '110%', '110%'], // last keyframe holds off-screen to create the gap
                }
          }
          transition={
            reduce
              ? {}
              : {
                  duration: DRIVE_DURATION,
                  ease: 'linear',
                  times: [0, MOVE_FRACTION, 1], // move, then hold for OFFSCREEN_GAP
                  repeat: Infinity,
                }
          }
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

        {/* Mobile: static truck */}
        <div className="absolute left-0 right-0 bottom-[92px] z-20 pointer-events-none block sm:hidden">
          <div className="relative w-[68vw] max-w-[420px] mx-auto">
            <img
              src={TRUCK}
              alt="Manuel Food Truck"
              className="w-full h-auto drop-shadow-[0_12px_28px_rgba(0,0,0,0.45)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
