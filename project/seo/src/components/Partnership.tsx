import React from 'react';
import { ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { tokens } from '../../styles/tokens';

export const Partnership: React.FC = () => {
  const { elementRef, isVisible } = useScrollAnimation();

  return (
    <section className={tokens.section} ref={elementRef}>
      <div className={tokens.container}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
          className={`${tokens.card} p-12 md:p-16 text-center`}
        >
          <div className="w-16 h-16 mx-auto mb-8 bg-neutral-100 rounded-lg flex items-center justify-center">
            <ExternalLink size={32} className="text-neutral-700" />
          </div>
          
          <h3 className={`${tokens.heading.h3} mb-6`}>
            Partnership Notice
          </h3>
          
          <p className={`${tokens.text.bodyLarge} max-w-2xl mx-auto`}>
            Site built by Built4You. This is a demo site used for portfolio and showcase.
          </p>
        </motion.div>
      </div>
    </section>
  );
};