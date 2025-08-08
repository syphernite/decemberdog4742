import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Award } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import { sweepOnce, slideInLeft } from '../utils/animations';

const TrustBadges: React.FC = () => {
  const [ref, isInView] = useInView(0.3);

  const badges = [
    {
      icon: Shield,
      title: 'Sterile Setup',
      description: 'Hospital-grade sterilization for every session'
    },
    {
      icon: Award,
      title: 'Licensed Artists',
      description: 'State-certified professionals with years of experience'
    }
  ];

  return (
    <section ref={ref} className="py-20 bg-ink-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {badges.map((badge, index) => (
            <motion.div
              key={badge.title}
              variants={slideInLeft}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              transition={{ delay: index * 0.2 }}
              className="relative group"
            >
              <motion.div
                variants={sweepOnce}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                transition={{ delay: index * 0.3 + 0.5 }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-stone-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
                style={{
                  backgroundSize: '200% 100%',
                }}
              />
              
              <div className="relative p-8 bg-stone-800/50 rounded-medium border border-stone-700 backdrop-blur-sm">
                <badge.icon className="w-12 h-12 text-blood-600 mb-4" />
                <h3 className="font-display font-semibold text-xl text-bone-100 mb-2">
                  {badge.title}
                </h3>
                <p className="text-stone-400">
                  {badge.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;