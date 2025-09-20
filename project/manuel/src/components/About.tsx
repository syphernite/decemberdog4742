// src/components/About.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { Truck, Sparkles, ThumbsUp } from 'lucide-react';

type Feature = {
  icon: React.ComponentType<{ size?: number; className?: string }>;
  title: string;
  description: string;
};

const FEATURES: Feature[] = [
  {
    icon: Truck,
    title: 'Made to Order',
    description: 'Hot off the truck. Food cooked when you order.',
  },
  {
    icon: Sparkles,
    title: 'Clean + Consistent',
    description: 'Tight process. Same quality every time.',
  },
  {
    icon: ThumbsUp,
    title: 'Friendly Service',
    description: 'Local crew. Straightforward and fast.',
  },
];

const About = () => {
  return (
    <motion.section
      id="about"
      className="bg-neutral-50"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.4 }}
    >
      <div className="container mx-auto px-4 pt-24 md:pt-28 pb-16">
        {/* Glass card to match hero; standalone like menu */}
        <div className="mx-auto w-full max-w-5xl rounded-2xl bg-white/85 backdrop-blur-md shadow-2xl border border-white/60 ring-1 ring-black/5 p-6 md:p-10">
          {/* Heading */}
          <motion.div
            initial={{ y: 24, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-6 md:mb-8 text-center"
          >
            <h2 className="font-display text-5xl md:text-7xl font-normal text-black-deep tracking-tight">
              ABOUT MANUEL
            </h2>
            <p className="font-body text-lg md:text-xl text-black mt-4">
              Local, fresh, cooked hot and fast. No fuss.
            </p>
          </motion.div>

          {/* Short intro */}
          <motion.p
            initial={{ y: 16, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="font-body text-gray-700 leading-relaxed max-w-3xl mx-auto text-center mb-10"
          >
            Family-operated food truck serving generous portions with simple, bold flavors.
            You get hot meals fast, made with care, at fair prices.
          </motion.p>

          {/* Features */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              show: { opacity: 1, transition: { staggerChildren: 0.08 } },
            }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {FEATURES.map((f, i) => (
              <motion.div
                key={f.title}
                variants={{
                  hidden: { y: 20, opacity: 0 },
                  show: { y: 0, opacity: 1, transition: { duration: 0.4 } },
                }}
                whileHover={{ y: -4 }}
                className="rounded-xl bg-white shadow-lg border border-gray-200 p-6 text-center hover:shadow-2xl hover:border-red-primary/30 transition"
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-red-primary/15 flex items-center justify-center">
                  <f.icon size={28} className="text-red-primary" />
                </div>
                <h3 className="font-body font-semibold text-black-deep">{f.title}</h3>
                <p className="font-body text-gray-600 mt-2">{f.description}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Micro-stats row (simple, independent, congruent styling) */}
          <motion.div
            initial={{ y: 16, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center"
          >
            {[
              { k: 'Made Fresh', v: 'Every Order' },
              { k: 'Serving', v: 'Lawton, OK' },
              { k: 'Call', v: '580-771-6373' },
            ].map((s) => (
              <div key={s.k} className="rounded-lg border border-black/10 bg-white p-4">
                <div className="text-sm text-gray-600">{s.k}</div>
                <div className="font-display text-xl text-black-deep">{s.v}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
