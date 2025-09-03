import React from 'react';
import { motion } from 'framer-motion';
import Badge from './Badge';

interface DishCardProps {
  name: string;
  description: string;
  price: number;
  image?: string;
  tags?: string[];
  featured?: boolean;
}

const DishCard: React.FC<DishCardProps> = ({ 
  name, 
  description, 
  price, 
  image = '/images/placeholder-dish.jpg',
  tags = [],
  featured = false
}) => {
  return (
    <motion.div
      className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ y: -4 }}
    >
      <div className="relative">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-48 object-cover"
          loading="lazy"
        />
        {featured && (
          <div className="absolute top-3 right-3">
            <Badge variant="featured">Featured</Badge>
          </div>
        )}
        {tags.length > 0 && (
          <div className="absolute bottom-3 left-3 flex gap-2">
            {tags.map((tag, index) => (
              <Badge key={index} variant={tag as any}>
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </div>
      
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-semibold text-lg text-charcoal">{name}</h3>
          <span className="text-chili font-bold text-lg">${price.toFixed(2)}</span>
        </div>
        <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
};

export default DishCard;