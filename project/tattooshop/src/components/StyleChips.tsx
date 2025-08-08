import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { staggerChildren, fadeUp } from '../utils/animations';

const StyleChips: React.FC = () => {
  const [ref, isInView] = useInView(0.2);
  
  const styles = [
    'Traditional',
    'Neo-traditional', 
    'Blackwork',
    'Fine Line',
    'Color Realism'
  ];

  return (
    <section ref={ref} className="py-20 bg-ink-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerChildren}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center"
        >
          <motion.h2
            variants={fadeUp}
            className="font-display font-bold text-3xl sm:text-4xl text-bone-100 mb-12"
          >
            Signature Styles
          </motion.h2>
          
          <motion.div
            variants={staggerChildren}
            className="flex flex-wrap justify-center gap-4"
          >
            {styles.map((style, index) => (
              <motion.div
                key={style}
                variants={fadeUp}
                whileHover={{
                  scale: 1.05,
                  boxShadow: '0 0 20px rgba(122, 15, 22, 0.2)',
                }}
                className="px-6 py-3 bg-stone-700 text-bone-100 rounded-small font-medium hover:bg-stone-600 transition-all duration-300 cursor-pointer border border-stone-600 hover:border-blood-600"
              >
                {style}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default StyleChips;