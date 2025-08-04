import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Zap } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { name: 'TikTok', icon: '📱', url: 'https://tiktok.com/@anissaylaa' },
    { name: 'Instagram', icon: '📸', url: 'https://instagram.com/anissaylaa' },
    { name: 'YouTube', icon: '🎥', url: 'https://youtube.com/@anissaylaa' },
    { name: 'Discord', icon: '💬', url: 'https://discord.gg/anissaylaa' },
  ];

  return (
    <footer className="relative z-10 bg-dark-card/50 backdrop-blur-sm border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Zap className="h-6 w-6 text-cyber-pink" />
              <span className="text-xl font-bold bg-gradient-to-r from-cyber-pink to-cyber-teal bg-clip-text text-transparent">
                @anissaylaa
              </span>
            </div>
            <p className="text-gray-400">
              Empowering Gen Z to build wealth online. Not a guru. Just a girl who figured it out.
            </p>
            <a
              href="https://whop.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-cyber-pink to-cyber-purple px-6 py-2 rounded-full text-white font-semibold text-sm hover:shadow-lg hover:shadow-cyber-pink/25 transition-all duration-300"
            >
              Join A&Y Profit Lab FREE
            </a>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <div className="space-y-2">
              <a href="/" className="block text-gray-400 hover:text-cyber-teal transition-colors">
                Home
              </a>
              <a href="/about" className="block text-gray-400 hover:text-cyber-teal transition-colors">
                About
              </a>
              <a href="/profit-lab" className="block text-gray-400 hover:text-cyber-teal transition-colors">
                Profit Lab
              </a>
              <a href="/contact" className="block text-gray-400 hover:text-cyber-teal transition-colors">
                Contact
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Follow Me</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 bg-dark-bg/50 border border-gray-700 rounded-lg flex items-center justify-center text-lg hover:border-cyber-pink/50 transition-colors"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
            <div className="text-sm text-gray-400">
              <p>📧 hello@anissaylaa.com</p>
              <p>💬 Join 3,000+ in Discord</p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Anissa Aylaa. All rights reserved.
            </div>
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-cyber-pink fill-current animate-pulse" />
              <span>by</span>
              <span className="text-cyber-teal font-semibold">Built4You</span>
            </div>
          </div>
        </div>

        {/* Floating gradient bar */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-64 h-1 bg-gradient-to-r from-cyber-pink via-cyber-teal to-cyber-gold rounded-full opacity-50 animate-pulse"></div>
      </div>
    </footer>
  );
};

export default Footer;