import React from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  background?: 'default' | 'white' | 'pattern';
}

const Section: React.FC<SectionProps> = ({ 
  children, 
  className = '', 
  id,
  background = 'default' 
}) => {
  const backgroundClass = {
    'default': 'bg-crema',
    'white': 'bg-white',
    'pattern': 'bg-crema bg-papel-picado'
  }[background];

  return (
    <motion.section
      id={id}
      className={`py-16 ${backgroundClass} ${className}`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      {children}
    </motion.section>
  );
};

export default Section;