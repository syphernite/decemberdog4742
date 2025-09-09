import { motion } from 'framer-motion'
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, Instagram, MapPin } from 'lucide-react';
import siteData from '../content/site.json';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal text-bone">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand & Mission */}
          <div>
            <h3 className="text-2xl font-bold text-copper mb-4">Copperhead Cuts</h3>
            <p className="text-bone mb-4">
              Professional mobile barber service bringing quality cuts directly to you.
              Convenience without compromise.
            </p>
          </div>

          {/* Service Area */}
          <div>
            <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <MapPin size={20} />
              Service Area
            </h4>
            <div className="grid grid-cols-2 gap-1 text-sm text-bone">
              {siteData.serviceArea.map((area) => (
                <span key={area}>{area}</span>
              ))}
            </div>
            <p className="text-sm text-bone mt-2">
              Within {siteData.business.radius} of {siteData.business.city}
            </p>
          </div>

          {/* Contact & Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Get in Touch</h4>
            <div className="space-y-3">
              <a
                href={`tel:${siteData.business.phone}`}
                className="flex items-center gap-2 text-bone hover:text-copper transition-colors"
              >
                <Phone size={16} />
                {siteData.business.phone}
              </a>
              <a
                href={`mailto:${siteData.business.email}`}
                className="flex items-center gap-2 text-bone hover:text-copper transition-colors"
              >
                <Mail size={16} />
                {siteData.business.email}
              </a>
              <a
                href={siteData.business.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-bone hover:text-copper transition-colors"
              >
                <Instagram size={16} />
                @copperheadcuts
              </a>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <nav className="flex flex-wrap gap-6 text-sm text-bone">
              <Link to="/" className="hover:text-copper transition-colors">Home</Link>
              <Link to="/prices" className="hover:text-copper transition-colors">Prices</Link>
              <Link to="/gallery" className="hover:text-copper transition-colors">Gallery</Link>
              <Link to="/book" className="hover:text-copper transition-colors">Book</Link>
              <Link to="/free-cuts" className="hover:text-copper transition-colors">Free Cuts</Link>
              <Link to="/contact" className="hover:text-copper transition-colors">Contact</Link>
            </nav>
            <p className="text-sm text-bone mt-4 sm:mt-0">
              © {currentYear} Copperhead Cuts. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};