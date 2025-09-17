// src/components/Testimonials.tsx
import React from "react";
import { Quote } from "lucide-react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { tokens } from "../styles/tokens";

const testimonials = [
  {
    text: "Built4You transformed our online presence. We saw immediate improvement in traffic and leads.",
    author: "Sarah L.",
  },
  {
    text: "Professional team, fast turnaround, and great results. Highly recommend them.",
    author: "Michael B.",
  },
  {
    text: "The design is clean, mobile-friendly, and perfectly matches our brand.",
    author: "Emily R.",
  },
];

export const Testimonials: React.FC = () => {
  const { elementRef, isVisible } = useScrollAnimation();

  return (
    <section id="testimonials" className={tokens.section} ref={elementRef}>
      <div className={tokens.container}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className={tokens.heading.h2}>What Our Clients Say</h2>
        </motion.div>

        <div className="grid gap-12 md:grid-cols-3">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
              className="rounded-xl bg-neutral-900 p-6 shadow-lg border border-white/5"
            >
              <Quote className="w-8 h-8 text-emerald-400 mb-4" />
              <p className={`${tokens.text.bodyLarge} mb-4 text-neutral-300`}>
                “{t.text}”
              </p>
              <p className="text-sm font-medium text-neutral-400">— {t.author}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
