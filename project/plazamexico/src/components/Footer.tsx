import React, { useState } from 'react';
import { Facebook, Instagram } from 'lucide-react';
import { motion } from 'framer-motion';
import siteData from '../content/site.json';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate newsletter signup
    setIsSubmitted(true);
    setEmail('');
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal text-white">
      <div className="bg-papel-picado">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand */}
            <div>
              <h3 className="font-heading text-2xl text-gold mb-4">{siteData.name}</h3>
              <p className="text-gray-300 mb-4">{siteData.tagline}</p>
              <div className="flex space-x-4">
                <a
                  href={siteData.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-gold transition-colors"
                >
                  <Facebook size={24} />
                </a>
                <a
                  href={siteData.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-gold transition-colors"
                >
                  <Instagram size={24} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="/" className="text-gray-300 hover:text-white transition-colors">Home</a></li>
                <li><a href="/menu" className="text-gray-300 hover:text-white transition-colors">Menu</a></li>
                <li><a href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
                <li><a href="/public/menu.pdf" className="text-gray-300 hover:text-white transition-colors">Download Menu</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-semibold text-lg mb-4">Contact</h4>
              <div className="space-y-2 text-gray-300">
                <p>{siteData.address}</p>
                <p>
                  <a href={`tel:${siteData.phone}`} className="hover:text-white transition-colors">
                    {siteData.phone}
                  </a>
                </p>
                <p>
                  <a href={`mailto:${siteData.email}`} className="hover:text-white transition-colors">
                    {siteData.email}
                  </a>
                </p>
              </div>
            </div>

            {/* Hours & Newsletter */}
            <div>
              <h4 className="font-semibold text-lg mb-4">Hours</h4>
              <div className="space-y-2 text-gray-300 text-sm mb-6">
                {siteData.hours.map((schedule, index) => (
                  <div key={index} className="flex justify-between">
                    <span>{schedule.day}</span>
                    <span>{schedule.open} - {schedule.close}</span>
                  </div>
                ))}
              </div>

              {/* Newsletter */}
              <h4 className="font-semibold text-lg mb-4">Stay Updated</h4>
              <form onSubmit={handleNewsletterSubmit} className="space-y-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  required
                  className="w-full px-3 py-2 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-gold"
                />
                <motion.button
                  type="submit"
                  disabled={isSubmitted}
                  className="w-full bg-chili text-white py-2 rounded hover:bg-chili/90 transition-colors disabled:opacity-50"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isSubmitted ? 'Thanks!' : 'Subscribe'}
                </motion.button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 py-4">
        <div className="container mx-auto px-4 text-center text-gray-400 text-sm">
          <p>&copy; {currentYear} {siteData.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;