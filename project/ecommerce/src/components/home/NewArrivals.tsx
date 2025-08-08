import React from 'react';
import { motion } from 'framer-motion';
import { ProductCard } from '../product/ProductCard';
import { useQuery } from '@tanstack/react-query';
import { api } from '../../lib/api';

export function NewArrivals() {
  const { data: products = [] } = useQuery({
    queryKey: ['products'],
    queryFn: api.products.getAll,
  });

  // Get first 4 products as new arrivals
  const newArrivals = products.slice(0, 4);

  return (
    <section className="py-20 bg-obsidian">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-4 mb-12"
        >
          <h2 className="text-display font-heading text-champagne">
            New Arrivals
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Fresh from our atelier, these pieces represent the latest evolution 
            in our continuing exploration of volcanic glass artistry.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {newArrivals.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <button className="text-champagne hover:text-champagne/80 font-medium underline underline-offset-4">
            View All New Arrivals
          </button>
        </motion.div>
      </div>
    </section>
  );
}