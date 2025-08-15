import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const principles = [
  {
    title: 'Performance First',
    belief: 'Form follows conversion.',
    description: 'Every design decision is validated by performance metrics.'
  },
  {
    title: 'Precision Crafted',
    belief: 'Details define excellence.',
    description: 'Obsessive attention to micro-interactions and user experience.'
  },
  {
    title: 'Future Proof',
    belief: 'Build for tomorrow, not just today.',
    description: 'Scalable architectures that grow with your business.'
  }
];

export const About = () => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [hoveredPrinciple, setHoveredPrinciple] = useState<number | null>(null);

  return (
    <section 
      ref={ref} 
      className="stone py-24 md:py-32" 
      id="about" 
      data-section="about"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-16">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="text-h2 mb-4">About & Principles</h2>
          <p className="text-secondary max-w-2xl mx-auto">
            Founded on the belief that exceptional web experiences drive real business results
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Portrait/Image Side */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="aspect-[4/5] rounded-2xl overflow-hidden relative">
              <img
                src="https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Craftsmanship"
                className="w-full h-full object-cover grayscale"
              />
              {/* Soft inner shadow */}
              <div className="absolute inset-0 shadow-inner-soft bg-gradient-to-t from-black/20 via-transparent to-transparent" />
            </div>
            
            {/* Floating accent */}
            <motion.div
              className="absolute -bottom-6 -right-6 glass p-6 rounded-xl"
              animate={{ y: [-4, 4, -4] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            >
              <div className="text-2xl font-bold mb-1">500+</div>
              <div className="text-sm text-secondary">Projects Delivered</div>
            </motion.div>
          </motion.div>

          {/* Principles Side */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          >
            {principles.map((principle, index) => (
              <motion.div
                key={principle.title}
                className="stone p-6 rounded-xl cursor-pointer relative overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.4 + index * 0.1,
                  ease: [0.22, 1, 0.36, 1] 
                }}
                onHoverStart={() => setHoveredPrinciple(index)}
                onHoverEnd={() => setHoveredPrinciple(null)}
                whileHover={{ y: -2 }}
              >
                {/* Chip background animation */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent"
                  initial={{ x: '-100%' }}
                  animate={{ 
                    x: hoveredPrinciple === index ? '0%' : '-100%'
                  }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                />

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-lg font-semibold">{principle.title}</h3>
                    <motion.div
                      className="w-2 h-2 bg-white/40 rounded-full"
                      animate={{
                        scale: hoveredPrinciple === index ? 1.5 : 1,
                        opacity: hoveredPrinciple === index ? 1 : 0.4,
                      }}
                      transition={{ duration: 0.2 }}
                    />
                  </div>
                  
                  <motion.div
                    className="overflow-hidden"
                    animate={{
                      height: hoveredPrinciple === index ? 'auto' : '0px',
                      opacity: hoveredPrinciple === index ? 1 : 0,
                    }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <div className="pb-3">
                      <p className="text-white/90 font-medium italic mb-2">
                        "{principle.belief}"
                      </p>
                      <p className="text-secondary text-sm">
                        {principle.description}
                      </p>
                    </div>
                  </motion.div>
                  
                  {hoveredPrinciple !== index && (
                    <p className="text-secondary text-sm">
                      {principle.description}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};