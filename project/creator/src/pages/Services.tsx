import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckIcon, ClockIcon, UsersIcon, CurrencyDollarIcon } from '@heroicons/react/24/outline';
import { services } from '../data/sampleData';

export default function Services() {
  const [selectedService, setSelectedService] = useState<any>(null);

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-display font-black mb-4">
            <span className="gradient-text">COLLABORATION</span>
            <br />
            SERVICES
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Premium brand partnership solutions designed to maximize your ROI and create authentic connections with audiences
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="glass-panel p-6 group cursor-pointer"
              onClick={() => setSelectedService(service)}
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-display font-bold text-white mb-3">
                {service.title}
              </h3>
              <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                {service.description}
              </p>

              {/* Deliverables */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-neon-violet mb-2 flex items-center">
                  <CheckIcon className="h-4 w-4 mr-2" />
                  Deliverables
                </h4>
                <ul className="space-y-1">
                  {service.deliverables.map((item: string, i: number) => (
                    <li key={i} className="text-xs text-gray-400 flex items-center">
                      <span className="w-1 h-1 bg-neon-cyan rounded-full mr-2" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Timeline */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-neon-cyan mb-2 flex items-center">
                  <ClockIcon className="h-4 w-4 mr-2" />
                  Timeline
                </h4>
                <p className="text-xs text-gray-400">{service.timeline}</p>
              </div>

              {/* Usage Rights */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-neon-magenta mb-2 flex items-center">
                  <UsersIcon className="h-4 w-4 mr-2" />
                  Usage Rights
                </h4>
                <p className="text-xs text-gray-400">{service.usageRights}</p>
              </div>

              {/* Starting Rate */}
              <div className="flex justify-between items-center pt-4 border-t border-onyx-800">
                <div className="flex items-center text-neon-violet">
                  <CurrencyDollarIcon className="h-4 w-4 mr-1" />
                  <span className="text-sm font-semibold">Starting at</span>
                </div>
                <div className="text-lg font-display font-bold text-white">
                  {service.startingRate}
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full mt-4 py-3 bg-gradient-to-r from-neon-violet to-neon-cyan text-white font-medium hover:shadow-neon transition-all duration-300"
              >
                Request Proposal
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 text-center glass-panel p-12"
        >
          <h2 className="text-3xl md:text-4xl font-display font-black mb-4">
            Ready to <span className="gradient-text">Collaborate?</span>
          </h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Let's create something amazing together. Book a discovery call to discuss your project and get a custom proposal.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 bg-gradient-to-r from-neon-violet to-neon-cyan text-white font-medium hover:shadow-neon-strong transition-all duration-300"
            >
              Schedule Discovery Call
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="glass-panel px-8 py-4 text-white font-medium hover:shadow-neon transition-all duration-300"
            >
              Download Media Kit
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}