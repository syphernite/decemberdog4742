import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export function Home() {
  const base = (import.meta as any).env.BASE_URL || '/';
  const logo = base + 'logo.png';

  return (
    <section className="relative min-h-[92svh] bg-ink overflow-hidden">
      <div className="absolute -inset-20 copper-gradient opacity-40 blur-3xl rounded-[100%]"></div>
      <div className="absolute inset-0 grain"></div>

      <div className="relative max-w-6xl mx-auto px-6 pt-20 pb-24 grid md:grid-cols-2 items-center gap-10">
        <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7 }} className="text-bone">
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-3 py-1 text-xs text-white/80">
            Mobile • Faith-driven • Community-first
          </div>
          <h1 className="mt-4 text-4xl md:text-6xl font-black leading-tight">
            Fresh fades with <span className="copper-text">Copperhead</span> precision
          </h1>
          <p className="mt-4 text-white/75 max-w-prose">
            Lawton’s mobile barbershop bringing the chair to you. Book on Booksy. Free community cut events featured on KSWO.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="https://booksy.com/en-us/1282324_copperhead-cutz_barber-shop_32141_lawton" target="_blank" rel="noreferrer" className="btn-shine px-5 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold">
              Book on Booksy
            </a>
            <Link to="/gallery" className="px-5 py-3 rounded-xl" style={{ backgroundColor: 'var(--copper-600)', color: 'white' }}>
              View Gallery
            </Link>
          </div>
          <div className="mt-10 grid grid-cols-3 gap-3">
            <div className="pole h-20 w-4 rounded-full"></div>
            <div className="pole h-20 w-4 rounded-full"></div>
            <div className="pole h-20 w-4 rounded-full"></div>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: .9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .8 }} className="relative">
          <div className="absolute -inset-8 rounded-[2rem] copper-gradient opacity-30 blur-2xl"></div>
          <div className="relative rounded-[2rem] overflow-hidden ring-1 ring-white/10">
            <img src={logo} alt="Copperhead Cutz logo" className="w-full h-full object-contain bg-black/60 p-6" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
