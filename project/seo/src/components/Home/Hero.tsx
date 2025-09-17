import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { tokens } from '../../styles/tokens';

export const Hero: React.FC = () => {
  return (
    <section className={`${tokens.section} min-h-screen flex items-center`}>
      <div className={tokens.container}>
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className={tokens.heading.h1}>
              Strategic SEO
              <br />
              <span className="text-neutral-600">for Growth</span>
            </h1>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className={`${tokens.text.bodyLarge} mt-8 mb-12 max-w-2xl`}
          >
            Transform your online presence with data-driven SEO strategies that deliver measurable growth. 
            Our comprehensive approach covers every aspect of search optimization.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link 
              to="/contact"
              className={`inline-flex items-center gap-3 ${tokens.button.primary} group`}
            >
              Get Started Today
              <ArrowRight 
                size={20} 
                className="group-hover:translate-x-1 transition-transform duration-200" 
              />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};