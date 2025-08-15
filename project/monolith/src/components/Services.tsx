import { useInView } from 'framer-motion';
import { motion } from 'framer-motion';
import { useRef, useState } from 'react';
import { Code2, Zap, ArrowUpRight } from 'lucide-react';

const services = [
  {
    icon: Code2,
    title: 'Custom Development',
    value: 'Launch a custom site in days, not months.',
    outcomes: [
      'Bespoke design systems that scale',
      'Lightning-fast performance optimization',
      'SEO-first architecture from day one'
    ]
  },
  {
    icon: Zap,
    title: 'Speed Optimization',
    value: 'Your design system, built for speed and growth.',
    outcomes: [
      'Core Web Vitals perfection',
      'Advanced caching strategies',
      'Progressive enhancement patterns'
    ]
  },
  {
    icon: ArrowUpRight,
    title: 'Site Migrations',
    value: 'Migrations without chaos.',
    outcomes: [
      'Zero downtime transitions',
      'SEO preservation guaranteed',
      'Content integrity maintained'
    ]
  },
  {
    icon: Code2,
    title: 'Conversion Optimization',
    value: 'Design systems that convert visitors to customers.',
    outcomes: [
      'A/B tested interaction patterns',
      'Performance-driven UX decisions',
      'Analytics integration and insights'
    ]
  }
];

export const Services = () => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section 
      ref={ref} 
      className="py-24 md:py-32" 
      id="services" 
      data-section="services"
      style={{ background: 'var(--c-charcoal)' }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-16">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="text-h2 mb-4">Services</h2>
          <p className="text-secondary max-w-2xl mx-auto">
            Precision-crafted solutions that deliver measurable results
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="glass glass-hover p-8 relative overflow-hidden cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.08,
                ease: [0.22, 1, 0.36, 1] 
              }}
              whileHover={{ 
                y: -6,
                transition: { duration: 0.22 }
              }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
            >
              {/* Spotlight effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-radial from-white/5 via-transparent to-transparent"
                style={{
                  background: `radial-gradient(circle at ${hoveredIndex === index ? '50%' : '-50%'} 50%, rgba(255,255,255,0.05) 0%, transparent 70%)`
                }}
                animate={{
                  background: hoveredIndex === index 
                    ? 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.05) 0%, transparent 70%)'
                    : 'radial-gradient(circle at -50% 50%, rgba(255,255,255,0.05) 0%, transparent 70%)'
                }}
                transition={{ duration: 0.22 }}
              />

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-6">
                  <service.icon className="w-6 h-6 text-white/80" />
                  <motion.div
                    className="w-6 h-6 border border-white/20 rounded-full flex items-center justify-center"
                    whileHover={{ rotate: 45 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ArrowUpRight className="w-3 h-3" />
                  </motion.div>
                </div>

                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-secondary mb-6">{service.value}</p>
                
                <div className="w-full h-px bg-gradient-to-r from-white/10 to-transparent mb-6" />
                
                <div className="space-y-3">
                  {service.outcomes.map((outcome, outcomeIndex) => (
                    <motion.div
                      key={outcomeIndex}
                      className="flex items-start space-x-3 text-sm text-secondary"
                      initial={{ opacity: 0.6 }}
                      whileHover={{ opacity: 1 }}
                    >
                      <div className="w-1 h-1 bg-white/40 rounded-full mt-2 flex-shrink-0" />
                      <span>{outcome}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};