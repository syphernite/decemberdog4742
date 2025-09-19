import React from 'react';
import { MapPin, Phone, Clock } from 'lucide-react';
import { businessConfig } from '../config/business';

export default function Footer() {
  const quickLinks = [
    { label: 'Menu', href: '#' },
    { label: 'Events', href: '#' },
    { label: 'Photos', href: '#' },
    { label: 'Visit', href: '#' }
  ];

  return (
    <footer className="bg-charcoal border-t border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold text-xl mb-4">TimeOut Tavern</h3>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 mt-0.5 text-amber-500" />
                <div>
                  <p>{businessConfig.address}</p>
                </div>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-amber-500" />
                <a 
                  href={businessConfig.phoneLink}
                  className="hover:text-amber-500 transition-colors duration-200 ease-in-out hover:underline"
                >
                  {businessConfig.phone}
                </a>
              </div>
              <div className="flex items-center">
                <Clock className="w-5 h-5 mr-3 text-amber-500" />
                <span>Mon-Thu 11AM-12AM</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-gray-300 hover:text-amber-500 transition-colors duration-200 ease-in-out hover:underline"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* About */}
          <div>
            <h4 className="text-white font-semibold mb-4">About Us</h4>
            <p className="text-gray-300 mb-4">
              {businessConfig.tagline}
            </p>
            <div className="flex space-x-4">
              <a 
                href={businessConfig.socialLinks.facebook}
                className="text-gray-300 hover:text-amber-500 transition-colors duration-200 ease-in-out hover:underline"
              >
                Follow us on Facebook
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p className="mb-2">Veteran owned • Family friendly</p>
          <p className="text-sm">
            Menu items and prices subject to change. Call for current specials.
          </p>
          <p className="text-sm mt-2">
            Site by Built4You
          </p>
        </div>
      </div>
    </footer>
  );
}