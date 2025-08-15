import { useRef, useState } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { X, ExternalLink } from 'lucide-react';

const caseStudies = [
  {
    id: 1,
    client: 'TechFlow',
    sector: 'SaaS Platform',
    cover: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
    summary: 'Complete redesign and development of enterprise SaaS platform',
    kpis: [
      { label: 'Conversion Rate', value: '+127%' },
      { label: 'Page Load Speed', value: '1.2s' },
      { label: 'User Engagement', value: '+89%' }
    ],
    tech: ['React', 'TypeScript', 'Node.js', 'PostgreSQL'],
    testimonial: '"The team delivered beyond our expectations. Our metrics speak for themselves."'
  },
  {
    id: 2,
    client: 'Aurora Design',
    sector: 'Creative Agency',
    cover: 'https://images.pexels.com/photos/326508/pexels-photo-326508.jpeg?auto=compress&cs=tinysrgb&w=800',
    summary: 'Brand-forward portfolio site with advanced animations',
    kpis: [
      { label: 'Site Performance', value: '98' },
      { label: 'Mobile Score', value: '100' },
      { label: 'SEO Rating', value: '96' }
    ],
    tech: ['Next.js', 'Framer Motion', 'Tailwind', 'Vercel'],
    testimonial: '"Absolutely stunning work. Our clients are consistently impressed."'
  },
  {
    id: 3,
    client: 'FinanceCore',
    sector: 'Financial Services',
    cover: 'https://images.pexels.com/photos/590041/pexels-photo-590041.jpeg?auto=compress&cs=tinysrgb&w=800',
    summary: 'Secure financial dashboard with real-time data visualization',
    kpis: [
      { label: 'Security Score', value: 'A+' },
      { label: 'Data Accuracy', value: '99.9%' },
      { label: 'User Adoption', value: '+156%' }
    ],
    tech: ['Vue.js', 'D3.js', 'Express', 'MongoDB'],
    testimonial: '"Rock-solid platform that our users trust completely."'
  }
];

export const CaseStudies = () => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [selectedCase, setSelectedCase] = useState<typeof caseStudies[0] | null>(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  const openCase = (caseStudy: typeof caseStudies[0]) => {
    setScrollPosition(window.scrollY);
    setSelectedCase(caseStudy);
    document.body.style.overflow = 'hidden';
  };

  const closeCase = () => {
    setSelectedCase(null);
    document.body.style.overflow = 'auto';
    window.scrollTo(0, scrollPosition);
  };

  return (
    <>
      <section 
        ref={ref} 
        className="stone py-24 md:py-32" 
        id="work" 
        data-section="work"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="text-h2 mb-4">Recent Work</h2>
            <p className="text-secondary max-w-2xl mx-auto">
              Case studies that demonstrate our commitment to performance and results
            </p>
          </motion.div>

          <div className="flex overflow-x-auto snap-x snap-mandatory gap-8 pb-4 -mx-6 px-6 md:-mx-16 md:px-16">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.id}
                className="flex-none w-80 md:w-96 stone rounded-xl overflow-hidden snap-start cursor-pointer group"
                initial={{ opacity: 0, x: 40 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  ease: [0.22, 1, 0.36, 1] 
                }}
                onClick={() => openCase(study)}
                whileHover={{ y: -4 }}
              >
                <div className="aspect-[4/3] relative overflow-hidden">
                  <motion.img
                    src={study.cover}
                    alt={study.client}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    whileHover={{ scale: 1.05 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="text-micro text-white/80 mb-2">{study.sector}</div>
                    <div className="text-xl font-semibold text-white">{study.client}</div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-secondary mb-4">{study.summary}</p>
                  <div className="flex items-center text-sm text-white/60">
                    <span>View Case Study</span>
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {selectedCase && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCase}
          >
            <motion.div
              className="glass max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-2xl"
              initial={{ y: 24, opacity: 0, scale: 0.96 }}
              animate={{ 
                y: 0, 
                opacity: 1, 
                scale: 1,
                transition: {
                  type: 'spring',
                  damping: 25,
                  stiffness: 200
                }
              }}
              exit={{ 
                y: 24, 
                opacity: 0, 
                scale: 0.96,
                transition: { duration: 0.2 }
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <button
                  onClick={closeCase}
                  className="absolute top-6 right-6 z-10 glass p-2 rounded-full hover:bg-white/10 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="aspect-[2/1] relative overflow-hidden rounded-t-2xl">
                  <img
                    src={selectedCase.cover}
                    alt={selectedCase.client}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-8 left-8">
                    <div className="text-micro text-white/80 mb-2">{selectedCase.sector}</div>
                    <div className="text-3xl font-bold text-white mb-2">{selectedCase.client}</div>
                    <p className="text-white/90">{selectedCase.summary}</p>
                  </div>
                </div>

                <div className="p-8">
                  <div className="grid md:grid-cols-3 gap-8 mb-8">
                    {selectedCase.kpis.map((kpi, index) => (
                      <motion.div
                        key={kpi.label}
                        className="text-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 + index * 0.1 }}
                      >
                        <motion.div 
                          className="text-3xl font-bold mb-2"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ 
                            delay: 0.4 + index * 0.1,
                            type: 'spring',
                            damping: 15
                          }}
                        >
                          {kpi.value}
                        </motion.div>
                        <div className="text-secondary text-sm">{kpi.label}</div>
                      </motion.div>
                    ))}
                  </div>

                  <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8" />

                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-lg font-semibold mb-4">Technology Stack</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedCase.tech.map((tech, index) => (
                          <span 
                            key={tech}
                            className="stone px-3 py-1 rounded-full text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-4">Client Feedback</h4>
                      <blockquote className="text-secondary italic">
                        {selectedCase.testimonial}
                      </blockquote>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};