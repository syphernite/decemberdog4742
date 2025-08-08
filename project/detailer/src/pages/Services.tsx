import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { CheckCircle, Phone, MessageSquare, Instagram, Clock, MapPin, Zap } from 'lucide-react';
import BookingForm from '../components/BookingForm';

const Services: React.FC = () => {
  const [packagesRef, packagesInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [formRef, formInView] = useInView({ threshold: 0.1, triggerOnce: true });
  
  useEffect(() => {
    // Handle anchor navigation
    const hash = window.location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, []);

  const packages = [
    {
      name: 'Basic',
      prices: { sedan: 149, suv: 169, truck: 189 },
      features: [
        'Exterior wash & dry',
        'Interior vacuum',
        'Dashboard & console cleaning',
        'Window cleaning (interior)',
        'Tire shine'
      ],
      popular: false
    },
    {
      name: 'Deluxe',
      prices: { sedan: 199, suv: 229, truck: 259 },
      features: [
        'Everything in Basic',
        'Clay bar treatment',
        'Wax application',
        'Interior conditioning',
        'Door jamb cleaning',
        'Wheel cleaning'
      ],
      popular: true
    },
    {
      name: 'Ultimate',
      prices: { sedan: 299, suv: 329, truck: 369 },
      features: [
        'Everything in Deluxe',
        'Paint correction (minor)',
        'Premium wax/sealant',
        'Complete interior detail',
        'Engine bay cleaning',
        'Headlight restoration'
      ],
      popular: false
    },
    {
      name: 'Ceramic',
      prices: { sedan: 599, suv: 699, truck: 799 },
      features: [
        'Everything in Ultimate',
        'Professional ceramic coating',
        '2-year protection warranty',
        'Hydrophobic finish',
        'UV protection',
        'Enhanced gloss'
      ],
      popular: false
    }
  ];

  const addOns = [
    { name: 'Pet Hair Removal', price: 35, description: 'Deep vacuum and lint brush treatment' },
    { name: 'Glass Coating', price: 99, description: 'Hydrophobic coating for all windows' },
    { name: 'Engine Bay Detail', price: 75, description: 'Complete engine compartment cleaning' },
    { name: 'Headlight Restoration', price: 65, description: 'Remove oxidation and restore clarity' },
    { name: 'Odor Treatment', price: 85, description: 'Ozone treatment for persistent odors' }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-20"
    >
      {/* Header */}
      <section className="py-16 bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Packages and Booking</h1>
            <div className="bg-blue-600 text-white px-8 py-4 rounded-lg inline-flex items-center space-x-3 text-lg font-semibold mb-8">
              <Zap className="h-6 w-6" />
              <span>No water or power? We bring our own.</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Packages Grid */}
      <section id="packages" ref={packagesRef} className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={packagesInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Choose Your Package</h2>
            <p className="text-xl text-gray-400">Professional detailing delivered to your location</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.name}
                initial={{ y: 30, opacity: 0 }}
                animate={packagesInView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-all duration-200 ${
                  pkg.popular ? 'ring-2 ring-blue-500' : ''
                }`}
                whileHover={{ y: -5 }}
              >
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                <h3 className="text-2xl font-bold mb-4 text-center">{pkg.name}</h3>
                
                <div className="text-center mb-6">
                  <div className="text-sm text-gray-400 mb-2">Starting at</div>
                  <div className="text-3xl font-bold text-blue-500 mb-2">
                    ${pkg.prices.sedan}
                  </div>
                  <div className="text-sm text-gray-400">
                    Sedan: ${pkg.prices.sedan} | SUV: ${pkg.prices.suv} | Truck: ${pkg.prices.truck}
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => {
                    const formElement = document.getElementById('book');
                    if (formElement) {
                      formElement.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors duration-200"
                >
                  Book Mobile Detail
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="py-16 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Add-On Services</h2>
            <p className="text-xl text-gray-400">Customize your detail with additional services</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {addOns.map((addon, index) => (
              <motion.div
                key={addon.name}
                initial={{ y: 30, opacity: 0 }}
                animate={packagesInView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className="bg-gray-900 p-6 rounded-lg hover:bg-gray-700 transition-colors duration-200"
                whileHover={{ y: -3 }}
              >
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-lg font-semibold">{addon.name}</h3>
                  <span className="text-xl font-bold text-blue-500">+${addon.price}</span>
                </div>
                <p className="text-gray-400 text-sm">{addon.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section id="book" ref={formRef} className="py-16 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={formInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Book Your Mobile Detail</h2>
            <p className="text-xl text-gray-400">Schedule your appointment and we'll come to you</p>
          </motion.div>

          <BookingForm packages={packages} addOns={addOns} />
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <Phone className="h-12 w-12 text-blue-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Call Us</h3>
              <a 
                href="tel:555-123-7463" 
                className="text-blue-500 hover:text-blue-400 text-lg font-medium"
              >
                (555) 123-SHINE
              </a>
            </div>

            <div className="text-center">
              <MessageSquare className="h-12 w-12 text-blue-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Text Us</h3>
              <a 
                href="sms:555-123-7463" 
                className="text-blue-500 hover:text-blue-400 text-lg font-medium"
              >
                (555) 123-SHINE
              </a>
            </div>

            <div className="text-center">
              <Clock className="h-12 w-12 text-blue-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Business Hours</h3>
              <p className="text-gray-400">Mon-Sat: 8AM-6PM</p>
              <p className="text-gray-400">Sunday: By Appointment</p>
            </div>

            <div className="text-center">
              <Instagram className="h-12 w-12 text-blue-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Follow Us</h3>
              <div className="space-x-4">
                <a href="#" className="text-blue-500 hover:text-blue-400">Instagram</a>
                <a href="#" className="text-blue-500 hover:text-blue-400">TikTok</a>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-gray-900 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4 text-center">Service Policies</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <h4 className="font-semibold mb-2 text-blue-500">Deposit Policy</h4>
                <p className="text-sm text-gray-400">50% deposit required to secure appointment</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-blue-500">Service Radius</h4>
                <p className="text-sm text-gray-400">25-mile radius from metro area</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-blue-500">Weather Policy</h4>
                <p className="text-sm text-gray-400">Services rescheduled for severe weather</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Services;