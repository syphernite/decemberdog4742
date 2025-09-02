import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-charcoal text-papel relative overflow-hidden">
      {/* Talavera border */}
      <div className="h-1 bg-gradient-to-r from-chili via-marigold to-nopal"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <motion.div
            className="col-span-1 lg:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-chili to-chili/80 rounded-lg flex items-center justify-center mr-4">
                <span className="text-papel font-display font-bold text-lg">RF</span>
              </div>
              <div>
                <h3 className="text-xl font-display font-bold text-marigold">Robert Familia</h3>
                <p className="text-sm text-papel/80">Sabor Auténtico</p>
              </div>
            </div>
            <p className="text-papel/80 mb-6 max-w-md">
              Experience the authentic flavors of Mexico with our fire-grilled specialties, 
              heirloom recipes, and warm familia welcome.
            </p>
            
            {/* Newsletter */}
            <div className="space-y-4">
              <h4 className="font-semibold text-marigold">Stay Connected</h4>
              <div className="flex max-w-md">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-2 bg-papel/10 border border-papel/20 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-chili text-papel placeholder-papel/60"
                />
                <button className="px-6 py-2 bg-chili hover:bg-chili/90 rounded-r-lg transition-colors">
                  🌶️
                </button>
              </div>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="font-semibold text-marigold mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <MapPin size={16} className="text-chili mr-3" />
                <p className="text-sm text-papel/80">123 Mesa Street<br />Santa Fe, NM 87501</p>
              </div>
              <div className="flex items-center">
                <Phone size={16} className="text-chili mr-3" />
                <p className="text-sm text-papel/80">(505) 555-TACO</p>
              </div>
              <div className="flex items-center">
                <Mail size={16} className="text-chili mr-3" />
                <p className="text-sm text-papel/80">hola@robertfamilia.com</p>
              </div>
            </div>
          </motion.div>

          {/* Hours */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h4 className="font-semibold text-marigold mb-4">Hours</h4>
            <div className="space-y-2 text-sm text-papel/80">
              <div className="flex justify-between">
                <span>Mon - Thu</span>
                <span>11am - 10pm</span>
              </div>
              <div className="flex justify-between">
                <span>Fri - Sat</span>
                <span>11am - 11pm</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday</span>
                <span>10am - 9pm</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-papel/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-papel/60 mb-4 md:mb-0">
            © 2024 Robert Familia Restaurant. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-papel/60 hover:text-marigold transition-colors">Privacy</a>
            <a href="#" className="text-papel/60 hover:text-marigold transition-colors">Terms</a>
            <a href="#" className="text-papel/60 hover:text-marigold transition-colors">Careers</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;