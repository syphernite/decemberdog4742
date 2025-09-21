// src/components/Footer.tsx
import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  const BASE = import.meta.env.BASE_URL;
  const LOGO = `${BASE}images/logo.jpg`;

  // Weekly hours moved here
  const HOURS: { day: string; time: string }[] = [
    { day: 'Mon', time: 'Closed' },
    { day: 'Tue', time: '11:30 AM – 8:00 PM' },
    { day: 'Wed', time: '11:30 AM – 8:00 PM' },
    { day: 'Thu', time: '11:30 AM – 8:00 PM' },
    { day: 'Fri', time: '11:30 AM – 8:00 PM' },
    { day: 'Sat', time: '11:30 AM – 8:00 PM' },
    { day: 'Sun', time: 'Closed' },
  ];

  return (
    <footer className="bg-black-deep text-white py-14 sm:py-16">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-8">
          {/* HOURS (added) */}
          <motion.div
            initial={{ y: 24, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="max-w-xl mx-auto"
          >
            <h3 className="font-display text-2xl sm:text-3xl tracking-wide mb-4">
              HOURS
            </h3>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm sm:text-base text-gray-200">
              {HOURS.map(({ day, time }) => (
                <div key={day} className="flex justify-between border-b border-white/10 py-2 col-span-2">
                  <span className="font-body text-gray-300">{day}</span>
                  <span className="font-body">{time}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Facebook only */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex justify-center"
          >
            <motion.a
              href="https://www.facebook.com/people/Manuel-Foods-Trucks/61578727127353/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center transition-transform"
              style={{ background: 'linear-gradient(135deg,#1877f2 0%,#3b5998 100%)' }}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.96 }}
              aria-label="Facebook"
            >
              <span className="text-white text-2xl sm:text-3xl font-bold leading-none">f</span>
            </motion.a>
          </motion.div>

          {/* Logo + Name */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex items-center justify-center space-x-3 sm:space-x-4"
          >
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-red-primary rounded-full flex items-center justify-center border-2 border-silver-accent overflow-hidden">
              <img src={LOGO} alt="Manuel Food Truck Logo" className="w-full h-full object-cover" />
            </div>
            <div className="text-left">
              <h2 className="font-display text-xl sm:text-3xl font-normal tracking-wider">
                MANUEL FOOD TRUCK
              </h2>
              <p className="font-body text-gray-400 text-sm sm:text-base">Fresh • Fast • Local</p>
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
            <p className="font-body text-gray-500 text-xs sm:text-sm">
              © 2025 Manuel Food Truck. All rights reserved.
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
