import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const socialLinks = [
  { name: 'YouTube', href: '#', icon: '▶️' },
  { name: 'Instagram', href: '#', icon: '📷' },
  { name: 'TikTok', href: '#', icon: '🎵' },
  { name: 'Twitter', href: '#', icon: '🐦' },
];

const quickLinks = [
  { name: 'Content Hub', href: '/content' },
  { name: 'Book Services', href: '/collab' },
  { name: 'Digital Shop', href: '/shop' },
  { name: 'Media Kit', href: '/media-kit' },
];

export default function Footer() {
  return (
    <footer className="relative mt-24 glass-panel">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="h-10 w-10 rounded-full bg-gradient-to-r from-neon-violet to-neon-cyan flex items-center justify-center">
                <span className="text-white font-bold text-lg">C</span>
              </div>
              <span className="text-white font-display text-xl tracking-wider">
                CREATOR
              </span>
            </div>
            <p className="text-gray-400 text-sm">
              Premium content creation and brand partnerships that drive results.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Connect</h3>
            <div className="grid grid-cols-2 gap-2">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                >
                  <span>{social.icon}</span>
                  <span>{social.name}</span>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-400 text-sm mb-3">
              Get exclusive content and collab opportunities.
            </p>
            <div className="space-y-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-3 py-2 bg-onyx-800 border border-onyx-700 text-white text-sm focus:outline-none focus:border-neon-violet transition-colors duration-200"
              />
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-3 py-2 bg-gradient-to-r from-neon-violet to-neon-cyan text-white text-sm font-medium hover:shadow-neon transition-all duration-300"
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-onyx-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Creator. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link to="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}