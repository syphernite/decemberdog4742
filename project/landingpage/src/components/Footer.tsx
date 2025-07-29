import React from 'react';
import { Link } from 'react-router-dom';
import { Code, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  const navigation = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const services = [
    'Web Development',
    'Mobile Design',
    'SEO Optimization',
    'E-commerce',
    'Maintenance',
  ];

  return (
    <footer className="bg-slate-900 dark:bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6 lg:col-span-2">
            <Link to="/" className="flex items-center space-x-3">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-blue-600 rounded-xl blur-lg opacity-30"></div>
                <div className="relative bg-gradient-to-r from-emerald-600 to-blue-600 p-2 rounded-xl">
                  <Code className="h-8 w-8 text-white" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold">Built4You</span>
                <span className="text-xs text-slate-400 font-medium tracking-wider">
                  WEB SOLUTIONS
                </span>
              </div>
            </Link>
            <p className="text-slate-300 max-w-md leading-relaxed">
              We create custom websites that help small businesses grow online. 
              Professional, fast, and built specifically for your success.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-emerald-400" />
                <span className="text-slate-300">(302) 551-7227</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-emerald-400" />
                <span className="text-slate-300">Remote & Local Services</span>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Navigation</h3>
            <ul className="space-y-2">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="text-slate-300 hover:text-emerald-400 transition-colors duration-200 text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-slate-300 text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-slate-400 text-sm">
              © {new Date().getFullYear()} Built4You. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <button className="text-slate-400 hover:text-emerald-400 text-sm transition-colors duration-200">
                Privacy Policy
              </button>
              <button className="text-slate-400 hover:text-emerald-400 text-sm transition-colors duration-200">
                Terms of Service
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
