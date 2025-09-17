import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { tokens } from '../../styles/tokens';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-100 border-t border-neutral-200">
      <div className={tokens.container}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="py-16 grid grid-cols-1 md:grid-cols-2 gap-12"
        >
          <div>
            <h3 className="text-2xl font-light text-neutral-900 mb-6 tracking-tight">SeoEcon</h3>
            <p className={`${tokens.text.body} max-w-md`}>
              Remote first. No office listed.
            </p>
          </div>
          
          <div className="md:text-right">
            <nav className="space-y-4">
              <Link 
                to="/" 
                className={`block ${tokens.button.ghost} md:inline-block`}
              >
                Home
              </Link>
              <Link 
                to="/contact" 
                className={`block ${tokens.button.ghost} md:inline-block`}
              >
                Contact
              </Link>
            </nav>
          </div>
        </motion.div>
        
        <div className="py-8 border-t border-neutral-200 text-center">
          <p className={tokens.text.caption}>
            &copy; 2025 SeoEcon. Demo website for portfolio purposes.
          </p>
        </div>
      </div>
    </footer>
  );
};