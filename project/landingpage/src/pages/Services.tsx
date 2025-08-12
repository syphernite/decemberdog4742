// src/pages/Services.tsx
import React from "react";
import { motion } from "framer-motion";
import { Code, Smartphone, Search, ShoppingCart, Zap, Shield, BarChart, Headphones } from "lucide-react";
import { GlowArea, GlowCard } from "../components/Glow";

const Services: React.FC = () => {
  const services = [
    { icon: Code, title: "Custom Web Development", description: "Bespoke websites built with modern stacks.", features: ["React & Next.js", "Custom CMS", "API Integration", "Performance"], gradient: "from-blue-500 to-cyan-500" },
    { icon: Smartphone, title: "Mobile-First Design", description: "Responsive UIs that shine on any device.", features: ["PWAs", "Touch Optimization", "Cross-Browser", "Accessibility"], gradient: "from-emerald-500 to-teal-500" },
    { icon: Search, title: "SEO Optimization", description: "Technical and on-page SEO that ranks.", features: ["Technical SEO", "Local SEO", "Content Strategy", "Analytics"], gradient: "from-purple-500 to-pink-500" },
    { icon: ShoppingCart, title: "E-commerce Solutions", description: "Stores with secure payments and UX that converts.", features: ["Stripe", "Inventory", "Checkout", "Promos"], gradient: "from-orange-500 to-red-500" },
    { icon: Zap, title: "Performance Optimization", description: "Sub-2s loads and strong Core Web Vitals.", features: ["CWV", "Image Optimization", "CDN", "Caching"], gradient: "from-yellow-500 to-orange-500" },
    { icon: Shield, title: "Security & Maintenance", description: "Hardened setups and ongoing care.", features: ["SSL", "Monitoring", "Updates", "Backups"], gradient: "from-indigo-500 to-purple-500" },
    { icon: BarChart, title: "Analytics & Reporting", description: "Measure what matters and iterate.", features: ["GA4", "Conversion Tracking", "Reports", "ROI"], gradient: "from-green-500 to-emerald-500" },
    { icon: Headphones, title: "Ongoing Support", description: "Responsive help and training on demand.", features: ["Priority Support", "Training", "Docs", "Phone & Email"], gradient: "from-pink-500 to-rose-500" },
  ];

  return (
    <section className="relative z-10 py-24 bg-transparent">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center mb-20" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">Our Services</h1>
          <p className="text-xl text-slate-200 max-w-3xl mx-auto">Comprehensive web solutions designed to grow your business.</p>
        </motion.div>

        <GlowArea glowColor="132,0,255">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 items-stretch">
            {services.map((s, i) => (
              <motion.div key={s.title} className="h-full" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08, duration: 0.6 }}>
                <GlowCard className="p-8 h-full flex flex-col">
                  <div className="flex items-center justify-center mb-6">
                    <div className={`p-4 bg-gradient-to-r ${s.gradient} rounded-2xl shadow-lg`}><s.icon className="h-8 w-8 text-white" /></div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 text-center">{s.title}</h3>
                  <p className="text-slate-200 text-center mb-6">{s.description}</p>
                  <ul className="space-y-2 mt-auto">
                    {s.features.map((f) => (
                      <li key={f} className="text-sm text-slate-200/80 flex items-center">
                        <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full mr-3" /> {f}
                      </li>
                    ))}
                  </ul>
                </GlowCard>
              </motion.div>
            ))}
          </div>
        </GlowArea>
      </div>
    </section>
  );
};

export default Services;
