import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-ink-800 border-t border-stone-700/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="font-display font-bold text-xl text-bone-100 mb-4">
              BRICKHOUSE INK
            </h3>
            <p className="text-stone-400 mb-4 max-w-md">
              Professional tattoo studio specializing in custom work, traditional and modern styles. 
              Licensed artists, sterile setup, walk-ins welcome.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-stone-400 hover:text-blood-600 transition-colors"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-stone-400 hover:text-blood-600 transition-colors"
                aria-label="Follow us on Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-bone-100 mb-4">Quick Links</h4>
            <nav className="space-y-2">
              <Link to="/artists" className="block text-stone-400 hover:text-blood-600 transition-colors">
                Artists
              </Link>
              <Link to="/portfolio" className="block text-stone-400 hover:text-blood-600 transition-colors">
                Portfolio
              </Link>
              <Link to="/services" className="block text-stone-400 hover:text-blood-600 transition-colors">
                Services & Pricing
              </Link>
              <Link to="/aftercare" className="block text-stone-400 hover:text-blood-600 transition-colors">
                Aftercare Guide
              </Link>
              <Link to="/booking" className="block text-stone-400 hover:text-blood-600 transition-colors">
                Book Session
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display font-semibold text-bone-100 mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-stone-400 mt-0.5 flex-shrink-0" />
                <p className="text-stone-400 text-sm">
                  123 Brick Lane<br />
                  Downtown District<br />
                  City, ST 12345
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-stone-400 flex-shrink-0" />
                <a 
                  href="tel:+15551234567" 
                  className="text-stone-400 hover:text-blood-600 transition-colors text-sm"
                >
                  (555) 123-4567
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-stone-400 flex-shrink-0" />
                <a 
                  href="mailto:info@brickhouseink.com" 
                  className="text-stone-400 hover:text-blood-600 transition-colors text-sm"
                >
                  info@brickhouseink.com
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-stone-400 mt-0.5 flex-shrink-0" />
                <div className="text-stone-400 text-sm">
                  <p>Mon-Sat: 12pm - 9pm</p>
                  <p>Sun: 12pm - 6pm</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-stone-700/30 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-stone-500 text-sm">
              © 2024 Brickhouse Ink. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-stone-500 hover:text-stone-400 text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-stone-500 hover:text-stone-400 text-sm transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;