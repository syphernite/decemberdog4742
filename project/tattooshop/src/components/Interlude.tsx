import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { fadeUp } from '../utils/animations';

const Interlude: React.FC = () => {
  const [ref, isInView] = useInView(0.4);

  return (
    <section ref={ref} className="py-32 bg-ink-800 relative overflow-hidden">
      {/* Subtle animated background elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            opacity: [0.1, 0.3, 0.1],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-1/4 left-1/4 w-32 h-32 bg-stone-700/20 rounded-full blur-xl"
        />
        <motion.div
          animate={{
            opacity: [0.1, 0.2, 0.1],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2,
          }}
          className="absolute bottom-1/3 right-1/3 w-24 h-24 bg-blood-600/10 rounded-full blur-xl"
        />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-stone-500 to-transparent mx-auto mb-8" />
          
          <blockquote className="font-display font-medium text-2xl sm:text-3xl md:text-4xl text-bone-100 leading-tight italic">
            "You bring the story,<br />
            <span className="text-blood-600">we bring the line."</span>
          </blockquote>
          
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-stone-500 to-transparent mx-auto mt-8" />
        </motion.div>
      </div>
    </section>
  );
};

export default Interlude;