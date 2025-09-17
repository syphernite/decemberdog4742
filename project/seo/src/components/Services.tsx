// src/components/Services.tsx
import React from "react";
import { MapPin, FileText, Settings } from "lucide-react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { tokens } from "../styles/tokens";

const services = [
  {
    icon: MapPin,
    title: "Local SEO",
    description:
      "Boost visibility in your area with optimized listings and geo-targeted strategies.",
  },
  {
    icon: FileText,
    title: "Content Strategy",
    description:
      "Engaging, keyword-rich content designed to attract, inform, and convert your audience.",
  },
  {
    icon: Settings,
    title: "Technical SEO",
    description:
      "Site speed, crawlability, and structure improvements that search engines love.",
  },
];

export const Services: React.FC = () => {
  const { elementRef, isVisible } = useScrollAnimation();

  return (
    <section id="services" className={tokens.section} ref={elementRef}>
      <div className={tokens.container}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className={tokens.heading.h2}>Our Services</h2>
          <p className={`${tokens.text.bodyLarge} mt-6 max-w-2xl mx-auto`}>
            Comprehensive solutions designed to cover every aspect of SEO and
            digital presence.
          </p>
        </motion.div>

        <div className="grid gap-12 md:grid-cols-3">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
              className="rounded-xl bg-neutral-900 p-8 shadow-lg border border-white/5"
            >
              <service.icon className="w-10 h-10 text-emerald-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">
                {service.title}
              </h3>
              <p className="text-neutral-400">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
