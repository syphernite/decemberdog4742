import React from 'react';
import { Heart, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Restaurant Info */}
          <div>
            <h3 className="text-2xl font-display font-bold mb-4">Thai Riverside</h3>
            <p className="text-gray-300 mb-4">
              Authentic Thai cuisine on the beautiful Holston River in Kingsport, TN.
            </p>
            <div className="flex items-center space-x-2 text-gray-300">
              <Heart className="w-4 h-4 text-red-400" />
              <span>Dog-friendly • Family-owned • Riverside dining</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#menu" className="text-gray-300 hover:text-white transition-colors">
                  Menu
                </a>
              </li>
              <li>
                <a href="#location" className="text-gray-300 hover:text-white transition-colors">
                  Location & Hours
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-gray-300 hover:text-white transition-colors">
                  Gallery
                </a>
              </li>
              <li>
                <a 
                  href="https://www.doordash.com/store/thai-riverside-24555226/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-400 hover:text-primary-300 transition-colors"
                >
                  Order Online
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-primary-400" />
                <span className="text-gray-300">1837 Netherland Inn Rd, Kingsport, TN</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-primary-400" />
                <a 
                  href="tel:+1423555-0123"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  (423) 765-1570
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Thai Riverside. All rights reserved. | 
            <span className="text-primary-400"> Made with love in Kingsport, TN</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
