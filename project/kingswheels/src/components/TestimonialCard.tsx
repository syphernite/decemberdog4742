import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  rating: number;
  text: string;
  image: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ name, rating, text, image }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white text-gray-900 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200"
    >
      <div className="flex items-center mb-4">
        <img
          src={image}
          alt={name}
          className="w-12 h-12 rounded-full object-cover mr-4"
        />
        <div>
          <h4 className="font-semibold">{name}</h4>
          <div className="flex text-yellow-400">
            {[...Array(rating)].map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-current" />
            ))}
          </div>
        </div>
      </div>
      <p className="text-gray-700 italic">"{text}"</p>
    </motion.div>
  );
};

export default TestimonialCard;