import React from 'react';
import { motion } from 'framer-motion';
import { Flame, Users, Clock } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Flame,
      title: 'Fresh Wok Heat',
      description: 'Every dish cooked fresh to order with authentic wok techniques'
    },
    {
      icon: Users,
      title: 'Big Portions',
      description: 'Generous servings that satisfy your hunger and your wallet'
    },
    {
      icon: Clock,
      title: 'Family Operated',
      description: 'Local family business serving the community with pride'
    }
  ];

  return (
    <motion.section 
      id="about" 
      className="py-20 bg-gray-50"
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
          <h2 className="font-display text-5xl md:text-7xl font-normal text-black-deep mb-6 tracking-tight">
            ABOUT MANUEL
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="font-body text-xl md:text-2xl text-gray-700 leading-relaxed mb-8">
              We're not just another food truck. Manuel Food Truck brings you authentic taste with 
              the speed and convenience you need. Fresh ingredients, generous portions, and the kind 
              of care that only comes from a family business.
            </p>
            <p className="font-body text-lg text-gray-600 leading-relaxed">
              From our signature combo fried rice to our juicy burgers, every item is prepared with 
              fresh ingredients and attention to detail. We believe good food brings people together.
            </p>
          </div>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-xl text-center shadow-lg border border-gray-200 hover:border-red-primary/30 hover:shadow-xl transition-all duration-300"
            >
              <div className="w-16 h-16 bg-red-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <feature.icon size={32} className="text-white" />
              </div>
              <h3 className="font-display text-xl font-normal text-black-deep mb-3 tracking-wide">
                {feature.title}
              </h3>
              <p className="font-body text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Order Tickets Animation */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-black-deep p-6 rounded-xl shadow-2xl"
        >
          <div className="flex items-center justify-center space-x-4 overflow-hidden">
            <motion.div
              animate={{ x: [0, -8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="bg-white p-4 rounded-lg shadow-lg transform rotate-2 min-w-32"
            >
              <div className="text-xs font-body font-bold text-black-deep mb-1">ORDER #47</div>
              <div className="text-xs text-gray-600">Combo Chicken</div>
              <div className="text-xs text-red-primary font-bold">$12.99</div>
            </motion.div>
            <motion.div
              animate={{ x: [0, -4, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              className="bg-white p-4 rounded-lg shadow-lg transform -rotate-1 min-w-32"
            >
              <div className="text-xs font-body font-bold text-black-deep mb-1">ORDER #48</div>
              <div className="text-xs text-gray-600">Cheeseburger</div>
              <div className="text-xs text-red-primary font-bold">$9.99</div>
            </motion.div>
            <motion.div
              animate={{ x: [0, -6, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="bg-white p-4 rounded-lg shadow-lg transform rotate-1 min-w-32"
            >
              <div className="text-xs font-body font-bold text-black-deep mb-1">ORDER #49</div>
              <div className="text-xs text-gray-600">Combo Shrimp</div>
              <div className="text-xs text-red-primary font-bold">$14.99</div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;