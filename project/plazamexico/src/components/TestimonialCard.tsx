import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  text: string;
  rating: number;
  date?: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ name, text, rating, date }) => {
  return (
    <motion.div
      className="bg-white p-6 rounded-xl shadow-md"
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="flex items-center mb-4">
        <div className="flex text-gold">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={16}
              fill={i < rating ? "currentColor" : "none"}
              className={i < rating ? "text-gold" : "text-gray-300"}
            />
          ))}
        </div>
        <span className="ml-2 text-sm text-gray-500">
          {date && new Date(date).toLocaleDateString()}
        </span>
      </div>
      
      <p className="text-gray-700 mb-4 italic">"{text}"</p>
      
      <div className="font-semibold text-charcoal">{name}</div>
    </motion.div>
  );
};

export default TestimonialCard;