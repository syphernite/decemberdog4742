import React from 'react';
import { Coffee, Heart, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-coffee-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Coffee className="h-8 w-8 text-amber-400" />
              <span className="text-2xl font-bold">River Roast Café</span>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
              Where every cup tells a story of community, quality, and craftsmanship 
              in the heart of downtown Portland.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-amber-400 transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-amber-400 transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-amber-400 transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-300 hover:text-amber-400 transition-colors">Home</a></li>
              <li><a href="#menu" className="text-gray-300 hover:text-amber-400 transition-colors">Menu</a></li>
              <li><a href="#visit" className="text-gray-300 hover:text-amber-400 transition-colors">Visit Us</a></li>
              <li><a href="#events" className="text-gray-300 hover:text-amber-400 transition-colors">Events</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-amber-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Visit Us</h4>
            <div className="space-y-2 text-gray-300">
              <p>123 Main Street<br />Downtown Portland, OR 97201</p>
              <p>Phone: (555) 123-4567</p>
              <p>Email: hello@riverroastcafe.com</p>
            </div>
          </div>
        </div>

        <div className="border-t border-coffee-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-sm">
            © 2024 River Roast Café. All rights reserved.
          </p>
          <p className="text-gray-300 text-sm flex items-center mt-4 md:mt-0">
            Made with <Heart className="h-4 w-4 mx-1 text-red-400" /> for our community
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;