import React from 'react';
import { Instagram, Facebook, Twitter, Truck, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Truck className="w-8 h-8 text-yellow-400 animate-bounce-slow" />
              <span className="font-heading text-2xl">Rolling Spice</span>
            </div>
            <p className="text-gray-400 font-body mb-4">
              Bringing the World to Your Plate
            </p>
            <p className="text-gray-400 font-body text-sm">
              Authentic fusion street tacos with bold global flavors, crafted fresh daily on our mobile kitchen.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg mb-4">Quick Links</h4>
            <nav className="space-y-2">
              {['Menu', 'Find Us', 'Catering', 'About', 'Contact'].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase().replace(' ', '-')}`}
                  className="block text-gray-400 hover:text-yellow-400 transition-colors duration-200 font-body"
                >
                  {link}
                </a>
              ))}
            </nav>
          </div>

          {/* Social & Contact */}
          <div>
            <h4 className="font-heading text-lg mb-4">Stay Connected</h4>
            <div className="flex space-x-4 mb-4">
              <a
                href="#"
                className="text-gray-400 hover:text-pink-400 transition-colors duration-200"
              >
                <Instagram className="w-6 h-6 hover:animate-bounce-slow" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
              >
                <Facebook className="w-6 h-6 hover:animate-bounce-slow" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-300 transition-colors duration-200"
              >
                <Twitter className="w-6 h-6 hover:animate-bounce-slow" />
              </a>
            </div>
            
            <div className="space-y-2 text-sm">
              <p className="text-gray-400 font-body">
                <strong>Phone:</strong> (123) 456-7890
              </p>
              <p className="text-gray-400 font-body">
                <strong>Email:</strong> hello@rollingspice.com
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm font-body mb-4 md:mb-0">
            © 2024 Rolling Spice. All rights reserved.
          </p>
          
          <div className="flex items-center space-x-2 text-sm text-gray-400">
            <span className="font-body">Made with</span>
            <Heart className="w-4 h-4 text-red-500 animate-bounce-slow" />
            <span className="font-body">for street food lovers</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;