import { useRef, useEffect, useState } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { Lightbulb, Palette, Code, BarChart3, TrendingUp } from 'lucide-react';

const processSteps = [
  {
    id: 'discover',
    title: 'Discover',
    description: 'Scope clearly. Understand the challenge.',
    detail: 'Deep dive into your business goals, user needs, and technical requirements.',
    icon: Lightbulb,
  },
  {
    id: 'design',
    title: 'Design',
    description: 'Create with precision. Form follows function.',
    detail: 'Craft interfaces that are both beautiful and conversion-focused.',
    icon: Palette,
  },
  {
    id: 'build',
    title: 'Build',
    description: 'Build fast. Code for performance.',
    detail: 'Develop with cutting-edge technologies optimized for speed and scale.',
    icon: Code,
  },
  {
    id: 'prove',
    title: 'Prove',
    description: 'Prove value in days. Measure what matters.',
    detail: 'Launch with comprehensive analytics to track real business impact.',
    icon: BarChart3,
  },
  {
    id: 'scale',
    title: 'Scale',
    description: 'Scale confidently. Grow without limits.',
    detail: 'Ongoing optimization and feature development as you expand.',
    icon: TrendingUp,
  },
];

export const Process = () => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  });
  
  const spineProgress = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section 
      ref={ref} 
      className="py-24 md:py-32" 
      id="process" 
      data-section="process"
      style={{ background: 'var(--c-charcoal)' }}
    >
      <div className="max-w-4xl mx-auto px-6 md:px-16">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="text-h2 mb-4">Our Process</h2>
          <p className="text-secondary max-w-2xl mx-auto">
            A proven methodology that delivers results consistently
          </p>
        </motion.div>

        <div className="relative">
          {/* Spine line */}
          <div className="absolute left-8 md:left-12 top-0 bottom-0 w-px bg-white/10">
            <motion.div
              className="w-full bg-white/40"
              style={{ height: spineProgress }}
              transition={{ ease: [0.22, 1, 0.36, 1] }}
            />
          </div>

          <div className="space-y-16">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.id}
                className="relative flex items-start"
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  ease: [0.22, 1, 0.36, 1] 
                }}
              >
                {/* Node */}
                <motion.div
                  className="absolute left-6 md:left-10 w-4 h-4 stone rounded-full border-2 border-white/20 flex items-center justify-center"
                  whileInView={{ 
                    scale: [1, 1.2, 1],
                    borderColor: ['rgba(255,255,255,0.2)', 'rgba(255,255,255,0.6)', 'rgba(255,255,255,0.2)']
                  }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-2 h-2 bg-white/60 rounded-full" />
                </motion.div>

                {/* Content */}
                <motion.div
                  className="ml-20 md:ml-24 glass p-8 rounded-xl w-full"
                  whileInView={{ y: 0, opacity: 1 }}
                  initial={{ y: 20, opacity: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    y: -2,
                    backdropFilter: 'blur(12px)',
                  }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <step.icon className="w-5 h-5 text-white/80" />
                      <span className="text-micro text-white/60">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-white/90 mb-3">{step.description}</p>
                  <p className="text-secondary text-sm">{step.detail}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};