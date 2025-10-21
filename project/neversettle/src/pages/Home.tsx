import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Zap, TrendingUp, Users, Award, ArrowRight, Play } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

export default function Home() {
  const [currentSlogan, setCurrentSlogan] = useState(0);
  const slogans = ['Fuel Your Best Life.', "Lawton's Energy Starts Here.", 'Drink. Move. Repeat.'];

  useEffect(() => {
    const t = setInterval(() => setCurrentSlogan((p) => (p + 1) % slogans.length), 3000);
    return () => clearInterval(t);
  }, []);

  // Replace numeric stats with features (keeps same grid footprint later)
  const features = [
    { id: 'flavor', title: 'Interactive Flavor Wheel', desc: 'Tap to spin and discover your next shake or tea.', icon: Award },
    { id: 'builder', title: 'Custom Shake Builder', desc: 'Pick protein, flavors, and boosters — live macros update.', icon: TrendingUp },
    { id: 'loyalty', title: 'Loyalty & Perks', desc: 'Digital punch card and VIP rewards for regulars.', icon: Users },
  ];

  const favorites = [
    {
      name: 'Tropical Thunder',
      category: 'Signature Shake',
      image:
        'https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
      macros: { cal: 240, protein: 24 },
    },
    {
      name: 'Electric Energy',
      category: 'Loaded Tea',
      image:
        'https://images.pexels.com/photos/4342957/pexels-photo-4342957.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
      macros: { cal: 24, protein: 0 },
    },
    {
      name: 'Blueberry Bliss',
      category: 'Protein Waffle',
      image:
        'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
      macros: { cal: 320, protein: 28 },
    },
  ];

  const socials = [
    { label: 'Instagram', href: 'https://instagram.com/NeverSettleNutrition' },
    { label: 'Facebook', href: 'https://facebook.com/NeverSettleNutrition' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* HERO — same structure as Bolt */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_20%_20%,rgba(16,185,129,.25),transparent_40%),radial-gradient(circle_at_80%_0%,rgba(6,182,212,.25),transparent_40%)]" />
          <div className="absolute -top-24 -left-24 w-[500px] h-[500px] bg-emerald-500/20 blur-3xl rounded-full" />
          <div className="absolute -bottom-24 -right-24 w-[500px] h-[500px] bg-cyan-500/20 blur-3xl rounded-full" />
        </div>

        <div className="max-w-7xl mx-auto px-6 pt-24 pb-16">
          <motion.h1
            className="text-5xl md:text-7xl font-black leading-tight tracking-tight text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Never Settle Nutrition
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-gray-300 max-w-2xl"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            {slogans[currentSlogan]}
          </motion.p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <motion.a
              href="/menu"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-semibold shadow-lg shadow-emerald-500/40"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              See Menu <ArrowRight className="w-4 h-4" />
            </motion.a>

            <motion.a
              href="https://erikatoepfer.goherbalife.com/Catalog/Home/Index/en-US"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-800/60 border border-emerald-400/40 text-white font-semibold backdrop-blur-md"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Herbalife Catalog
            </motion.a>

            <motion.a
              href="https://linktr.ee/NeverSettleNutrition"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-800/60 border border-cyan-400/40 text-white font-semibold backdrop-blur-md"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              All Links
            </motion.a>
          </div>
        </div>

        <div className="relative h-16">
          {[...Array(30)].map((_, i) => (
            <motion.span
              key={i}
              className="absolute w-1 h-1 bg-emerald-400 rounded-full"
              style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
              animate={{ opacity: [0, 1, 0], scale: [0, 1.5, 0] }}
              transition={{ duration: 2 + Math.random() * 2, repeat: Infinity, delay: Math.random() * 2 }}
            />
          ))}
        </div>
      </section>

      {/* FAVORITES — unchanged */}
      <AnimatedSection className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">Favorites</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {favorites.map((item, i) => (
              <motion.div
                key={item.name}
                className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl overflow-hidden border border-emerald-500/20"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <motion.img src={item.image} alt={item.name} className="w-full h-full object-cover" initial={{ scale: 1.05 }} whileHover={{ scale: 1 }} />
                </div>
                <div className="p-6">
                  <p className="text-emerald-400 text-sm tracking-wide">{item.category}</p>
                  <h3 className="text-white text-2xl font-semibold">{item.name}</h3>
                  <div className="mt-4 flex items-center gap-4 text-sm text-gray-300">
                    <span>{item.macros.cal} cal</span>
                    <span>•</span>
                    <span>{item.macros.protein}g protein</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* FEATURES — replaces numeric stats, same grid footprint */}
      <AnimatedSection className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((f, i) => (
              <motion.div
                key={f.id}
                className="bg-gradient-to-br from-slate-800/50 to-slate-900/40 backdrop-blur-xl p-8 rounded-2xl border border-emerald-500/20 shadow-xl"
                whileHover={{ scale: 1.03 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <f.icon className="w-12 h-12 text-emerald-400 mb-4" />
                <h3 className="text-2xl font-semibold text-white mb-2">{f.title}</h3>
                <p className="text-gray-400">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* “Feel the Vibe” heading kept; reviews grid removed */}
      <AnimatedSection className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-12">
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">Feel the Vibe</span>
          </h2>
        </div>
      </AnimatedSection>

      {/* CTA / Socials — unchanged */}
      <AnimatedSection className="py-16 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-3 text-gray-300">
            <Play className="w-5 h-5 text-emerald-400" />
            <span>See what we’re up to</span>
          </div>
          <div className="flex items-center gap-4">
            {socials.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noreferrer" className="text-gray-300 hover:text-emerald-400 transition-colors">
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}

// Keep for any other section that might still use it
function CountUp({ end = 0, duration = 1200 }: { end?: number; duration?: number }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const steps = 60;
    const inc = Math.ceil(end / steps);
    const timer = setInterval(() => {
      setCount((c) => {
        const next = c + inc;
        if (next >= end) {
          clearInterval(timer);
          return end;
        }
        return next;
      });
    }, duration / steps);
    return () => clearInterval(timer);
  }, [end]);
  return <>{count.toLocaleString()}</>;
}
