import React from 'react';
import { Scissors, Phone, Mail, MapPin, Instagram, Music } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-3 bg-red-600 rounded-full">
                <Scissors className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">Tony's Cuts</h3>
                <p className="text-gray-400">Premium Independent Barbering</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
              Bringing you premium barbering services with traditional techniques and modern style. 
              Every cut is crafted with precision and passion.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com/tonyscuts"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-3 rounded-full hover:bg-red-600 transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://tiktok.com/@tonyscuts"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-3 rounded-full hover:bg-red-600 transition-colors"
              >
                <Music className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection('#about')}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  About Me
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('#services')}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Services & Pricing
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('#gallery')}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Gallery
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('#booking')}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Book Appointment
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('#testimonials')}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Reviews
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-red-600 mt-1" />
                <div>
                  <div className="font-medium">Direct Line</div>
                  <div className="text-gray-300">(555) 123-4567</div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-red-600 mt-1" />
                <div>
                  <div className="font-medium">Email</div>
                  <div className="text-gray-300">tony@tonyscuts.com</div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-red-600 mt-1" />
                <div>
                  <div className="font-medium">Location</div>
                  <div className="text-gray-300">
                    Classic Cuts Barbershop<br />
                    123 Main Street<br />
                    Downtown, NY 12345
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2024 Tony's Cuts. All rights reserved.
            </div>
            <div className="text-gray-400 text-sm text-center md:text-right">
              Independent barber services • Not affiliated with Classic Cuts Barbershop
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-gray-800 rounded-xl">
            <div className="text-yellow-400 font-semibold text-sm mb-2">⚠️ Important Disclaimer</div>
            <p className="text-gray-300 text-xs leading-relaxed">
              Tony operates as an independent contractor providing barbering services. This website, 
              appointments, and services are not affiliated with, endorsed by, or representative of 
              Classic Cuts Barbershop or its management. All appointments and communications should be 
              made directly with Tony through the contact information provided on this website.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;