import React from 'react';
import { CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { tokens } from '../../styles/tokens';

const reasons = [
  'Data-driven strategies with transparent reporting and regular performance updates to track your progress.',
  'Comprehensive audits identifying technical issues, content gaps, and optimization opportunities.',
  'Custom optimization plans tailored to your industry, competition, and business objectives.',
];

export const Why: React.FC = () => {
  const { elementRef, isVisible } = useScrollAnimation();

  return (
    <section id="why" className={tokens.section} ref={elementRef}>
      <div className={tokens.container}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className={tokens.heading.h2}>
            Why Choose SeoEcon
          </h2>
          <p className={`${tokens.text.bodyLarge} mt-6 max-w-2xl mx-auto`}>
            Our proven process delivers consistent results through strategic planning and meticulous execution.
          </p>
        </motion.div>
        
        <div className="max-w-4xl mx-auto space-y-12">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -40 }}
              animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="flex items-start gap-6 group"
            >
              <div className="flex-shrink-0 w-8 h-8 bg-neutral-900 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <CheckCircle size={20} className="text-white" />
              </div>
              <p className={`${tokens.text.bodyLarge} leading-relaxed`}>
                {reason}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};