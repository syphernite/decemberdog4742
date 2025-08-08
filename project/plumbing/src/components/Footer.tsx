import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Droplet } from 'lucide-react';

const Footer = () => {
  const serviceAreas = [
    'Downtown', 'Riverside', 'Oakwood', 'Pine Valley', 'Sunset Hills', 'Maple Grove'
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="bg-blue-600 p-2 rounded-lg">
                <Droplet className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold">FlowRight Plumbing</span>
            </Link>
            <p className="text-gray-300 mb-4">
              Your trusted local plumbing experts, serving the community with quality, 
              reliable plumbing services for over 20 years.
            </p>
            <div className="flex items-center space-x-2 text-gray-300">
              <MapPin className="h-4 w-4" />
              <span>Licensed & Insured • #PL-12345</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-blue-400 transition-colors">Home</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-blue-400 transition-colors">Services</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-blue-400 transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-blue-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Service Areas</h3>
            <ul className="space-y-2">
              {serviceAreas.map((area) => (
                <li key={area} className="text-gray-300">{area}</li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-blue-400" />
                <a href="tel:+1-555-FLOWPRO" className="text-gray-300 hover:text-blue-400 transition-colors">
                  (555) FLOW-PRO
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-blue-400" />
                <a href="mailto:info@flowrightplumbing.com" className="text-gray-300 hover:text-blue-400 transition-colors">
                  info@flowrightplumbing.com
                </a>
              </div>
              <div className="flex items-start space-x-2">
                <Clock className="h-4 w-4 text-blue-400 mt-1" />
                <div className="text-gray-300">
                  <p>24/7 Emergency Service</p>
                  <p className="text-sm">Mon-Fri: 7AM-6PM</p>
                  <p className="text-sm">Sat-Sun: 8AM-4PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            &copy; 2024 FlowRight Plumbing. All rights reserved. | 
            <span className="ml-2">Licensed, Bonded & Insured</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;