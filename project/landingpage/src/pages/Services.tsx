// src/pages/Services.tsx
import React from "react";
import { motion } from "framer-motion";
import {
  Code,
  Smartphone,
  Search,
  ShoppingCart,
  Zap,
  Shield,
  BarChart,
  Headphones,
} from "lucide-react";

const Services: React.FC = () => {
  const services = [
    {
      icon: Code,
      title: "Custom Web Development",
      description: "Bespoke websites built with modern stacks.",
      features: ["React & Next.js", "Custom CMS", "API Integration", "Performance"],
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: Smartphone,
      title: "Mobile-First Design",
      description: "Responsive UIs that shine on any device.",
      features: ["PWAs", "Touch Optimization", "Cross-Browser", "Accessibility"],
      gradient: "from-emerald-500 to-teal-500",
    },
    {
      icon: Search,
      title: "SEO Optimization",
      description: "Technical and on-page SEO that ranks.",
      features: ["Technical SEO", "Local SEO", "Content Strategy", "Analytics"],
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: ShoppingCart,
      title: "E-commerce Solutions",
      description: "Stores with secure payments and UX that converts.",
      features: ["Stripe", "Inventory", "Checkout", "Promos"],
      gradient: "from-orange-500 to-red-500",
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Sub-2s loads and strong Core Web Vitals.",
      features: ["CWV", "Image Optimization", "CDN", "Caching"],
      gradient: "from-yellow-500 to-orange-500",
    },
    {
      icon: Shield,
      title: "Security & Maintenance",
      description: "Hardened setups and ongoing care.",
      features: ["SSL", "Monitoring", "Updates", "Backups"],
      gradient: "from-indigo-500 to-purple-500",
    },
    {
      icon: BarChart,
      title: "Analytics & Reporting",
      description: "Measure what matters and iterate.",
      features: ["GA4", "Conversion Tracking", "Reports", "ROI"],
      gradient: "from-green-500 to-emerald-500",
    },
    {
      icon: Headphones,
      title: "Ongoing Support",
      description: "Responsive help and training on demand.",
      features: ["Priority Support", "Training", "Docs", "Phone & Email"],
      gradient: "from-pink-500 to-rose-500",
    },
  ];

  return (
    <main className="min-h-screen bg-transparent text-white">
      {/* Hero */}
      <section className="px-4 sm:px-6 lg:px-8 pt-20 pb-8">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center gap-4">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            Our Services
          </h1>
          <p className="max-w-2xl text-base sm:text-lg text-slate-200/90">
            Comprehensive web solutions designed to grow your business.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {services.map((service, i) => (
              <motion.article
                key={service.title}
                className="group bg-white/10 dark:bg-slate-800/50 p-8 rounded-3xl border border-white/10 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08, duration: 0.6 }}
                whileHover={{ y: -8 }}
              >
                <div className="flex items-center justify-center mb-6">
                  <div
                    className={`p-4 bg-gradient-to-r ${service.gradient} rounded-2xl shadow-lg group-hover:scale-110 transition-transform`}
                  >
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 text-center">
                  {service.title}
                </h3>
                <p className="text-slate-200 text-center mb-6">{service.description}</p>

                <ul className="space-y-2">
                  {service.features.map((f) => (
                    <li
                      key={f}
                      className="text-sm text-slate-200/80 flex items-center"
                    >
                      <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full mr-3" />
                      {f}
                    </li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Services;
