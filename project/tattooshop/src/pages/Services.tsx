import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { DollarSign, Clock, Shield, Zap, Skull, Heart, Star, AlertTriangle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useInView } from '../hooks/useInView';
import { staggerChildren, fadeUp, glitchIn, bloodDrip, rotateIn } from '../utils/animations';

interface Service {
  id: string;
  name: string;
  description: string;
  price: string;
  duration: string;
  icon: React.ComponentType<any>;
  features: string[];
}

interface PricingTier {
  size: string;
  price: string;
  duration: string;
  description: string;
}

const Services: React.FC = () => {
  const [ref, isInView] = useInView(0.1);
  const [selectedService, setSelectedService] = useState<string>('custom');

  const services: Service[] = [
    {
      id: 'custom',
      name: 'Custom Tattoos',
      description: 'Original artwork designed specifically for you',
      price: '$150-250/hr',
      duration: '2-8 hours',
      icon: Skull,
      features: [
        'Personal consultation',
        'Custom design creation',
        'Unlimited revisions',
        'Premium ink & equipment',
        'Aftercare kit included'
      ]
    },
    {
      id: 'flash',
      name: 'Flash Tattoos',
      description: 'Pre-designed pieces ready to ink',
      price: '$80-200',
      duration: '30min-2hrs',
      icon: Zap,
      features: [
        'Quick turnaround',
        'Walk-ins welcome',
        'Proven designs',
        'Same day completion',
        'Basic aftercare included'
      ]
    },
    {
      id: 'coverup',
      name: 'Cover-ups',
      description: 'Transform old tattoos into new masterpieces',
      price: '$200-300/hr',
      duration: '3-10 hours',
      icon: Shield,
      features: [
        'Expert consultation',
        'Color analysis',
        'Strategic design',
        'Multiple sessions',
        'Guaranteed results'
      ]
    },
    {
      id: 'touchup',
      name: 'Touch-ups',
      description: 'Refresh and restore existing work',
      price: '$100-150/hr',
      duration: '1-3 hours',
      icon: Heart,
      features: [
        'Color restoration',
        'Line sharpening',
        'Detail enhancement',
        'Quick healing',
        'Warranty included'
      ]
    }
  ];

  const pricingTiers: PricingTier[] = [
    {
      size: 'Small (2-3 inches)',
      price: '$80-150',
      duration: '30min-1hr',
      description: 'Simple designs, minimal detail'
    },
    {
      size: 'Medium (4-6 inches)',
      price: '$150-300',
      duration: '1-3hrs',
      description: 'Moderate detail, some shading'
    },
    {
      size: 'Large (7-10 inches)',
      price: '$300-600',
      duration: '3-6hrs',
      description: 'Complex designs, full color'
    },
    {
      size: 'Extra Large (10+ inches)',
      price: '$600+',
      duration: '6+ hrs',
      description: 'Sleeve work, multiple sessions'
    }
  ];

  return (
    <div className="min-h-screen bg-ink-900 pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-ink-800 film-grain rain-overlay">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            variants={glitchIn}
            initial="hidden"
            animate="visible"
            className="relative mb-6"
          >
            <DollarSign className="w-16 h-16 mx-auto mb-4 text-blood-600 animate-pulse-glow" />
            <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-bone-100 text-glow-white">
              SERVICES & <span className="text-blood-600 text-glow animate-pulse-glow">PRICING</span>
            </h1>
            <motion.div
              variants={bloodDrip}
              initial="hidden"
              animate="visible"
              transition={{ delay: 1 }}
              className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-1 h-8 bg-blood-600 opacity-60"
            />
          </motion.div>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.4 }}
            className="text-xl text-stone-400 max-w-3xl mx-auto font-gothic"
          >
            ⚡ Professional ink work with transparent pricing ⚡
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section ref={ref} className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerChildren}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
          >
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                variants={rotateIn}
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 5,
                  boxShadow: '0 0 30px rgba(122, 15, 22, 0.4)'
                }}
                className={`relative p-6 rounded-large border-2 cursor-pointer transition-all duration-300 ${
                  selectedService === service.id
                    ? 'bg-blood-600/20 border-blood-600 text-glow'
                    : 'bg-stone-800/50 border-stone-700 hover:border-blood-600'
                }`}
                onClick={() => setSelectedService(service.id)}
              >
                <service.icon className="w-12 h-12 text-blood-600 mb-4 animate-pulse-glow" />
                <h3 className="font-display font-bold text-xl text-bone-100 mb-2">
                  {service.name}
                </h3>
                <p className="text-stone-400 text-sm mb-4">
                  {service.description}
                </p>
                <div className="space-y-2">
                  <div className="flex items-center text-blood-600 font-semibold">
                    <DollarSign className="w-4 h-4 mr-1" />
                    {service.price}
                  </div>
                  <div className="flex items-center text-stone-400 text-sm">
                    <Clock className="w-4 h-4 mr-1" />
                    {service.duration}
                  </div>
                </div>
                {selectedService === service.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="mt-4 pt-4 border-t border-blood-600/30"
                  >
                    <ul className="space-y-1 text-xs text-stone-300">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center">
                          <Star className="w-3 h-3 mr-2 text-blood-600" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </motion.div>

          {/* Pricing Table */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="bg-stone-800/50 rounded-large p-8 border border-stone-700 backdrop-blur-sm"
          >
            <h2 className="font-display font-bold text-2xl text-bone-100 mb-6 text-center text-glow-white">
              💀 SIZE-BASED PRICING 💀
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {pricingTiers.map((tier, index) => (
                <motion.div
                  key={tier.size}
                  variants={fadeUp}
                  transition={{ delay: index * 0.1 }}
                  className="p-4 bg-ink-900/50 rounded-medium border border-stone-600 hover:border-blood-600 transition-colors"
                >
                  <h3 className="font-gothic font-semibold text-bone-100 mb-2">
                    {tier.size}
                  </h3>
                  <div className="text-blood-600 font-bold text-lg mb-1">
                    {tier.price}
                  </div>
                  <div className="text-stone-400 text-sm mb-2">
                    {tier.duration}
                  </div>
                  <p className="text-stone-300 text-xs">
                    {tier.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Important Notes */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="mt-12 bg-blood-600/10 border border-blood-600/30 rounded-large p-6"
          >
            <div className="flex items-center mb-4">
              <AlertTriangle className="w-6 h-6 text-blood-600 mr-3 animate-pulse" />
              <h3 className="font-display font-bold text-xl text-bone-100">
                IMPORTANT POLICIES
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-stone-300">
              <div>
                <h4 className="font-semibold text-bone-100 mb-2">Deposits & Booking</h4>
                <ul className="space-y-1">
                  <li>• $50 minimum deposit required</li>
                  <li>• Deposit applied to final cost</li>
                  <li>• 24hr cancellation policy</li>
                  <li>• Must be 18+ with valid ID</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-bone-100 mb-2">What's Included</h4>
                <ul className="space-y-1">
                  <li>• Sterile equipment & setup</li>
                  <li>• Premium ink & needles</li>
                  <li>• Aftercare instructions</li>
                  <li>• Touch-up within 30 days</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="text-center mt-16"
          >
            <Link
              to="/booking"
              className="inline-flex items-center px-12 py-4 bg-blood-600 text-bone-100 rounded-large font-bold text-xl hover:bg-blood-700 transition-all duration-300 glow-accent animate-pulse-glow hover:animate-shake"
            >
              <Skull className="w-6 h-6 mr-3 animate-bounce" />
              START BOOKING NOW
              <Zap className="w-6 h-6 ml-3 animate-pulse" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;