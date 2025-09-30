import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import {
  ShieldCheck,
  CheckCircle2,
  MapPin,
  Sparkles,
  Car,
  Droplets,
  Instagram
} from 'lucide-react';
import BeforeAfterSlider from '../components/BeforeAfterSlider';
import TestimonialCard from '../components/TestimonialCard';

const IG_URL = 'https://www.instagram.com/chromecousins_detailing/';

const Home: React.FC = () => {
  const [heroRef, heroInView] = useInView({ threshold: 0.12, triggerOnce: true });
  const [servicesRef, servicesInView] = useInView({ threshold: 0.12, triggerOnce: true });
  const [testimonialsRef, testimonialsInView] = useInView({ threshold: 0.12, triggerOnce: true });

  const trustBadges = [
    { icon: MapPin, title: 'Texas Mobile', description: 'We come to you anywhere local' },
    { icon: ShieldCheck, title: 'Fully Insured', description: 'Professional and protected' },
    { icon: CheckCircle2, title: 'Quality First', description: 'Satisfaction guaranteed' }
  ];

  const services = [
    { icon: Sparkles, title: 'Interior Detailing', description: 'Steam, shampoo, leather and plastic care, odor refresh' },
    { icon: Car, title: 'Exterior Detailing', description: 'Foam wash, decon, clay, wheels & tires dressed' },
    { icon: Droplets, title: 'Paint Protection', description: 'Machine polish with sealant or ceramic upgrade' }
  ];

  const testimonials = [
    {
      name: 'Alyssa M.',
      rating: 5,
      text: 'They pulled up to my driveway and made my SUV look brand new. Zero hassle and super friendly.',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2'
    },
    {
      name: 'Devon R.',
      rating: 5,
      text: 'Interior deep clean was insane. Stains gone, plastics conditioned, everything looks crisp.',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2'
    },
    {
      name: 'María C.',
      rating: 5,
      text: 'Great communication and the ceramic makes water fly off the paint. Worth it.',
      image: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2'
    }
  ];

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="overflow-hidden bg-black text-white">
      {/* Minimal, safe inline styles (no @import) */}
      <style>{`
        @keyframes redPulse {
          0%,100% { box-shadow: 0 0 0 rgba(239,68,68,0); }
          50% { box-shadow: 0 0 32px rgba(239,68,68,.35); }
        }
        .cc-cta-glow { animation: redPulse 3s ease-in-out infinite; }
        .cc-card { background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08); }
        .cc-card-hover:hover { background: rgba(255,255,255,0.07); }
        .chrome-text {
          background: linear-gradient(180deg,#f5f5f5 0%,#cfcfcf 22%,#ffffff 40%,#9e9e9e 60%,#e5e5e5 78%,#bdbdbd 100%);
          -webkit-background-clip: text; background-clip: text; color: transparent;
          text-shadow: 0 2px 24px rgba(255,255,255,.08);
        }
        .diagonal-overlay::before{
          content:""; position:absolute; inset:0;
          background:
            linear-gradient(120deg, rgba(255,31,31,.18), transparent 40%),
            repeating-linear-gradient(120deg, transparent 0 16px, rgba(255,255,255,.03) 16px 32px);
          pointer-events:none;
        }
      `}</style>

      {/* HERO */}
      <section ref={heroRef} className="relative min-h-[100svh] flex items-center justify-center">
        <img
          src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1920&auto=format&fit=crop"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/65 to-black/90 diagonal-overlay" />

        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={heroInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="relative z-10 mx-auto max-w-5xl px-4 text-center"
        >
          <p className="inline-flex items-center gap-2 text-sm text-white/85 mb-4">
            <a href={IG_URL} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:opacity-90">
              <Instagram size={16} /> @chromecousins_detailing
            </a>
          </p>

          <h1 className="leading-none tracking-tight">
            <span className="chrome-text block text-[48px] md:text-[88px]">CHROME COUSINS</span>
            <span className="block mt-2 text-2xl md:text-4xl font-extrabold text-white/90">
              Mobile Detailing • Texas
            </span>
          </h1>

          <p className="mt-6 text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
            Interior & exterior detailing with paint protection. We bring power, water, and pro-grade products directly to your driveway.
          </p>

          <div className="mt-9 flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/services" className="bg-red-600 hover:bg-red-500 text-black px-10 py-4 rounded-xl text-lg font-extrabold transition-all cc-cta-glow">
              Get a Quote
            </Link>
            <Link to="/results" className="px-10 py-4 rounded-xl text-lg font-semibold border border-white/15 bg-white/5 hover:bg-white/10 transition-all">
              See Results
            </Link>
          </div>

          <div className="mt-6 text-white/80 text-sm">
            $60 Basic • $40 Interior/Exterior • $120 Premium — DM to book
          </div>
        </motion.div>
      </section>

      {/* TRUST */}
      <section className="py-14 bg-black">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
          {trustBadges.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center rounded-2xl cc-card cc-card-hover p-6"
            >
              <b.icon className="h-10 w-10 text-red-500 mx-auto mb-3" />
              <h3 className="text-lg font-semibold">{b.title}</h3>
              <p className="text-white/70">{b.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* BEFORE / AFTER */}
      <section className="py-16 bg-zinc-950">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ y: 24, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <h2 className="text-4xl font-extrabold">See the Difference</h2>
            <p className="text-white/70 mt-2">Swipe to compare before and after</p>
          </motion.div>
          <BeforeAfterSlider />
        </div>
      </section>

      {/* SERVICES */}
      <section ref={servicesRef} className="py-16 bg-black">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ y: 24, opacity: 0 }}
            animate={servicesInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-extrabold">Core Services</h2>
            <p className="text-white/70 mt-2">Simple packages with upgrade paths</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ y: 24, opacity: 0 }}
                animate={servicesInView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.55, delay: i * 0.08 }}
                whileHover={{ y: -4 }}
                className="rounded-2xl cc-card cc-card-hover p-6"
              >
                <s.icon className="h-12 w-12 text-red-500 mb-3" />
                <h3 className="text-xl font-bold">{s.title}</h3>
                <p className="text-white/75">{s.description}</p>
                <div className="mt-5">
                  <Link to="/services" className="inline-block text-red-300 hover:text-red-200 font-semibold">
                    View details
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section ref={testimonialsRef} className="py-16 bg-zinc-950">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ y: 24, opacity: 0 }}
            animate={testimonialsInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-extrabold">Happy Drivers</h2>
            <p className="text-white/70 mt-2">Real reviews from our clients</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div key={t.name} initial={{ y: 24, opacity: 0 }} animate={testimonialsInView ? { y: 0, opacity: 1 } : {}} transition={{ duration: 0.55, delay: i * 0.08 }}>
                <TestimonialCard {...t} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICE AREA */}
      <section className="py-16 bg-black">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-extrabold">Service Area</h2>
            <p className="text-white/70 mt-2">Texas-based mobile detailing within about a 25-mile local radius</p>
          </div>

          <div className="max-w-2xl mx-auto rounded-2xl cc-card p-8">
            <div className="aspect-[16/9] rounded-xl bg-zinc-900 flex items-center justify-center">
              <MapPin className="h-14 w-14 text-red-500" />
            </div>
            <div className="text-center mt-5">
              <p className="text-lg font-semibold">Local radius about 25 miles</p>
              <p className="text-white/70">Travel fees may apply beyond 15 miles</p>
            </div>
          </div>

          <div className="text-center mt-8">
            <a href={IG_URL} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition">
              <Instagram size={18} /> Follow on Instagram
            </a>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;
