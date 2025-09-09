import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Clock } from 'lucide-react';

interface PriceCardProps {
  service: {
    id: string;
    name: string;
    price: string;
    duration: string;
    description: string;
  };
  index?: number;
}

export const PriceCard: React.FC<PriceCardProps> = ({ service, index = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="bg-bone rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow"
    >
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-bold text-charcoal">{service.name}</h3>
        <span className="text-2xl font-bold text-copper">{service.price}</span>
      </div>
      
      {service.duration && (
        <div className="flex items-center gap-2 text-bone mb-3">
          <Clock size={16} />
          <span className="text-sm">{service.duration}</span>
        </div>
      )}
      
      <p className="text-bone mb-6">{service.description}</p>
      
      <Link
        to="/book"
        className="w-full bg-copper text-bone py-2 px-4 rounded-lg hover:bg-copper/90 transition-colors text-center block focus:outline-none focus:ring-2 focus:ring-copper focus:ring-offset-2"
      >
        Book Now
      </Link>
    </motion.div>
  );
};