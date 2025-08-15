import { useInView } from 'framer-motion';
import { motion } from 'framer-motion';
import { useRef } from 'react';

const stats = [
  { label: 'Sites Shipped', value: '120+', proof: 'Projects completed' },
  { label: 'Faster LCP', value: '38%', proof: 'On relaunches' },
  { label: 'Avg Turnaround', value: '14 days', proof: 'From concept to live' },
  { label: 'Client Retention', value: '94%', proof: 'Long-term partnerships' },
];

export const ProofStrip = () => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <section 
      ref={ref} 
      className="stone py-16 md:py-20" 
      data-section="proof"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, y: 8 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.08,
                ease: [0.22, 1, 0.36, 1] 
              }}
            >
              <motion.div
                className="text-2xl md:text-3xl font-bold mb-2"
                whileHover={{ 
                  scale: 1.01,
                  letterSpacing: '1px',
                }}
                transition={{ 
                  duration: 0.2,
                  ease: [0.22, 1, 0.36, 1] 
                }}
              >
                {stat.value}
              </motion.div>
              <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-2" />
              <div className="text-sm text-secondary font-medium">
                {stat.label}
              </div>
              <div className="text-xs text-secondary/60 mt-1">
                {stat.proof}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};