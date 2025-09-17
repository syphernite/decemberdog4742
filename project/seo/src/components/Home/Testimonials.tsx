import React from 'react';
import { Quote } from 'lucide-react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { tokens } from '../../styles/tokens';

const testimonials = [
  {
    text: 'Example testimonial - The strategic approach to our local SEO campaign transformed our online visibility and brought in qualified leads consistently.',
    author: 'Business Owner',
    company: 'Local Service Company',
  },
  {
    text: 'Example testimonial - The technical SEO audit revealed critical issues we never knew existed. The improvements made a significant difference.',
    author: 'Marketing Director',
    company: 'Technology Startup',
  },
  {
    text: 'Example testimonial - Their content cluster strategy helped us establish authority in our niche and capture high-value search traffic.',
    author: 'Founder',
    company: 'E-commerce Business',
  },
];

export const Testimonials: React.FC = () => {
  const { elementRef, isVisible } = useScrollAnimation();

  return (
    <section id="testimonials" className={tokens.section} ref={elementRef}>
      <div className={tokens.container}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className={tokens.heading.h2}>
            Client Testimonials
          </h2>
          <p className={`${tokens.text.bodyLarge} mt-6 max-w-2xl mx-auto`}>
            See what our clients say about working with us. (Example testimonials for demo purposes)
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`${tokens.card} p-8 group`}
            >
              <div className="w-12 h-12 bg-neutral-100 rounded-lg flex items-center justify-center mb-8 group-hover:bg-neutral-200 transition-colors duration-300">
                <Quote size={24} className="text-neutral-700" />
              </div>
              
              <p className={`${tokens.text.body} mb-8 leading-relaxed`}>
                "{testimonial.text}"
              </p>
              
              <div className="border-t border-neutral-200 pt-6">
                <p className={`${tokens.heading.h4} text-base`}>
                  {testimonial.author}
                </p>
                <p className={tokens.text.caption}>
                  {testimonial.company}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};