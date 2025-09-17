// src/components/Hero.tsx
import React from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { tokens } from "../styles/tokens";

export const Hero = () => {
  return (
    <section
      className={`${tokens.section} min-h-screen flex items-center justify-center text-center`}
    >
      <div className={tokens.container}>
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={tokens.heading.h1}
        >
          SEO That Drives Real Growth
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className={`${tokens.text.bodyLarge} mt-6 max-w-2xl mx-auto`}
        >
          We help businesses grow by improving visibility, driving organic
          traffic, and increasing conversions.
        </motion.p>
        <motion.a
          href="#contact"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-10 inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-6 py-3 font-medium text-white shadow-lg hover:bg-emerald-500"
        >
          Get Started
          <ArrowRight className="h-5 w-5" />
        </motion.a>
      </div>
    </section>
  );
};

export default Hero;
