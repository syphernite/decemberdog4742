import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { menuItems, getItemsByCategory } from '../data/menuData';
import { Star } from 'lucide-react';

const Menu = () => {
  const [activeTab, setActiveTab] = useState<'combos' | 'burgers-sides'>('combos');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const currentItems = getItemsByCategory(activeTab);

  return (
    <motion.section 
      id="menu" 
      className="py-20 bg-white"
      initial={{ clipPath: 'inset(0 0 100% 0)' }}
      whileInView={{ clipPath: 'inset(0 0 0% 0)' }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-5xl md:text-7xl font-normal text-black-deep mb-4 tracking-tight">
            OUR MENU
          </h2>
          <p className="font-body text-xl text-gray-600 max-w-2xl mx-auto">
            Fresh ingredients, bold flavors, generous portions
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-100 rounded-xl p-2 shadow-lg">
            <button
              onClick={() => setActiveTab('combos')}
              className={`px-8 py-4 rounded-lg font-body font-bold text-lg transition-all ${
                activeTab === 'combos'
                  ? 'bg-red-primary text-white shadow-lg'
                  : 'text-gray-600 hover:text-red-primary hover:bg-white'
              }`}
            >
              COMBOS
            </button>
            <button
              onClick={() => setActiveTab('burgers-sides')}
              className={`px-8 py-4 rounded-lg font-body font-bold text-lg transition-all ${
                activeTab === 'burgers-sides'
                  ? 'bg-red-primary text-white shadow-lg'
                  : 'text-gray-600 hover:text-red-primary hover:bg-white'
              }`}
            >
              BURGERS & SIDES
            </button>
          </div>
        </div>

        {/* Menu Items */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
          >
            {currentItems.map((item) => (
              <motion.div
                key={item.id}
                variants={itemVariants}
                whileHover={{ 
                  y: -4, 
                  rotateY: 2,
                  scale: 1.02,
                  transition: { duration: 0.2 } 
                }}
                className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-2xl hover:border-red-primary/30 transition-all duration-300 cursor-pointer group"
              >
                {/* Image placeholder */}
                <div className="h-48 bg-gradient-to-br from-red-primary/5 to-red-primary/10 relative overflow-hidden">
                  {item.featured && (
                    <div className="absolute top-4 right-4 bg-red-primary text-white px-3 py-1 rounded-full text-sm font-bold flex items-center space-x-1">
                      <Star size={14} fill="currentColor" />
                      <span>POPULAR</span>
                    </div>
                  )}
                  {/* Food icon placeholder */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-24 h-24 bg-red-primary/10 rounded-full flex items-center justify-center">
                      <span className="text-4xl">
                        {item.category === 'combos' ? '🍛' : '🍔'}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-body font-bold text-lg text-black-deep group-hover:text-red-primary transition-colors leading-tight">
                      {item.name}
                    </h3>
                    <span className="font-display text-xl font-normal text-red-primary ml-4 flex-shrink-0">
                      {item.price}
                    </span>
                  </div>
                  <p className="text-gray-600 font-body text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Call to Action */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-16"
        >
          <motion.a
            href="tel:580-771-6373"
            className="bg-red-primary hover:bg-red-dark text-white px-10 py-5 rounded-xl font-body font-bold text-xl shadow-2xl border-2 border-red-primary hover:shadow-2xl transition-all inline-flex items-center space-x-3 animate-pulse-slow"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
              boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.2), 0 8px 24px rgba(199,20,24,0.4)'
            }}
          >
            <span>CALL TO ORDER: 580-771-6373</span>
          </motion.a>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Menu;