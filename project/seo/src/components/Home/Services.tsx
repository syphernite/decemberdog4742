import React from 'react';
import { MapPin, FileText, Settings } from 'lucide-react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { tokens } from '../../styles/tokens';

const services = [
  {
    icon: MapPin,
    title: 'Local SEO',
    description: 'Dominate local search results with targeted optimization strategies that connect you with nearby customers actively searching for your services.',
  },
  {
    icon: FileText,
    title: 'Content Clusters',
    description: 'Build topical authority through strategic content clusters that establish your expertise and capture high-intent search traffic.',
  },
  {
    icon: Settings,
    title: 'Technical SEO',
    description: 'Optimize your website\'s technical foundation for superior crawlability, indexing, and user experience across all devices.',
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
          <h2 className={tokens.heading.h2}>
            Our Services
          </h2>
          <p className={`${tokens.text.bodyLarge} mt-6 max-w-2xl mx-auto`}>
            Comprehensive SEO solutions designed to boost your visibility and drive qualified traffic to your business.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`${tokens.card} ${tokens.cardHover} p-8 group`}
            >
              <div className="w-16 h-16 bg-neutral-100 rounded-lg flex items-center justify-center mb-8 group-hover:bg-neutral-200 transition-colors duration-300">
                <service.icon size={32} className="text-neutral-700" />
              </div>
              
              <h3 className={`${tokens.heading.h3} mb-6`}>
                {service.title}
              </h3>
              
              <p className={tokens.text.body}>
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};