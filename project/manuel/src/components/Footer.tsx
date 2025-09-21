// src/components/Footer.tsx
import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  const BASE = import.meta.env.BASE_URL;
  const LOGO = `${BASE}images/logo.jpg`; // business logo in red circle

  return (
    <footer className="bg-black-deep text-white py-16">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-8">
          {/* Main CTA */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="font-display text-3xl md:text-4xl font-normal tracking-wide">
              READY TO ORDER?
            </h3>
            <motion.a
              href="tel:580-771-6373"
              className="inline-block bg-red-primary hover:bg-red-dark text-white px-12 py-6 rounded-xl font-body font-bold text-2xl md:text-3xl shadow-2xl border-2 border-red-primary hover:shadow-2xl transition-all animate-pulse-slow"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.2), 0 8px 24px rgba(199,20,24,0.4)',
              }}
            >
              580-771-6373
            </motion.a>
          </motion.div>

          {/* Facebook link as blue gradient circle with white F */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex justify-center"
          >
            <motion.a
              href="https://www.facebook.com/people/Manuel-Foods-Trucks/61578727127353/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 rounded-full flex items-center justify-center transition-colors"
              style={{
                background: 'linear-gradient(135deg,#1877f2 0%,#3b5998 100%)',
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <span className="text-white text-3xl font-bold leading-none">f</span>
            </motion.a>
          </motion.div>

          {/* Logo and Name */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex items-center justify-center space-x-4"
          >
            <div className="w-16 h-16 bg-red-primary rounded-full flex items-center justify-center border-2 border-silver-accent overflow-hidden">
              <img
                src={LOGO}
                alt="Manuel Food Truck Logo"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-left">
              <h2 className="font-display text-2xl md:text-3xl font-normal tracking-wider">
                MANUEL FOOD TRUCK
              </h2>
              <p className="font-body text-gray-400">Fresh • Fast • Local</p>
            </div>
          </motion.div>

          {/* Copyright */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="pt-8 border-t border-gray-800 space-y-2"
          >
            <p className="font-body text-gray-500 text-sm">
              © 2025 Manuel Food Truck. All rights reserved.
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
