import React from 'react';
import { motion } from 'framer-motion';
import { PriceCard } from '../components/PriceCard';
import siteData from '../content/site.json';

export const Prices: React.FC = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-charcoal mb-4">Our Prices</h1>
          <p className="text-xl text-bone">
            Transparent pricing with no hidden fees. Quality cuts at fair prices.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {siteData.services.map((service, index) => (
            <PriceCard key={service.id} service={service} index={index} />
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-bone rounded-lg p-8 shadow-lg"
        >
          <h2 className="text-2xl font-bold text-charcoal mb-6 text-center">What's Included</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-copper mb-3">Every Service Includes:</h3>
              <ul className="space-y-2 text-bone">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-copper rounded-full"></div>
                  Professional consultation
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-copper rounded-full"></div>
                  Hot towel treatment
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-copper rounded-full"></div>
                  Styling and finishing
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-copper rounded-full"></div>
                  Clean-up and sanitization
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-copper mb-3">Payment Options:</h3>
              <ul className="space-y-2 text-bone">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-success rounded-full"></div>
                  Cash
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-success rounded-full"></div>
                  Credit/Debit Cards
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-success rounded-full"></div>
                  Venmo, CashApp, Zelle
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-success rounded-full"></div>
                  Apple Pay, Google Pay
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 p-4 bg-copper/10 rounded-lg">
            <p className="text-center text-copper font-semibold">
              All prices include $10 mobile service fee. 
              Additional travel charges may apply outside standard service area.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};