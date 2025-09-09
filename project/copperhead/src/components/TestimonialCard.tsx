import React from 'react';
import { Star } from 'lucide-react';
import { motion } from 'framer-motion';

interface TestimonialCardProps {
  name: string;
  text: string;
  rating: number;
  index?: number;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({ name, text, rating, index = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="bg-bone rounded-lg p-6 shadow-lg"
    >
      <div className="flex items-center gap-1 mb-3">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={16}
            className={`${i < rating ? 'text-yellow-400 fill-current' : 'text-bone'}`}
          />
        ))}
      </div>
      <blockquote className="text-charcoal mb-4 italic">"{text}"</blockquote>
      <cite className="text-copper font-semibold">— {name}</cite>
    </motion.div>
  );
};