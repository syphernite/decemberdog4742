import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, Users, Camera, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

const Services = () => {
  const services = [
    {
      id: 1,
      icon: Users,
      title: 'Portrait Sessions',
      description: 'Professional headshots, family portraits, and personal branding photography.',
      duration: '1-2 hours',
      price: 'Starting at $300',
      features: [
        '30+ edited photos',
        'Online gallery',
        'Print release',
        'Wardrobe consultation'
      ]
    },
    {
      id: 2,
      icon: Heart,
      title: 'Wedding Photography',
      description: 'Complete wedding day coverage capturing every precious moment.',
      duration: '8-12 hours',
      price: 'Starting at $2,000',
      features: [
        '500+ edited photos',
        'Engagement session',
        'Online gallery',
        'Print release',
        'Wedding album option'
      ]
    },
    {
      id: 3,
      icon: Camera,
      title: 'Event Photography',
      description: 'Corporate events, parties, celebrations, and special occasions.',
      duration: '2-6 hours',
      price: 'Starting at $150/hr',
      features: [
        'Unlimited photos',
        'Same-day preview',
        'Online gallery',
        'Professional editing'
      ]
    },
    {
      id: 4,
      icon: Clock,
      title: 'Product Photography',
      description: 'High-quality product shots for e-commerce, catalogs, and marketing.',
      duration: '2-4 hours',
      price: 'Starting at $75/product',
      features: [
        'Multiple angles',
        'Lifestyle shots',
        'White background',
        'Commercial license'
      ]
    }
  ];

  const addOns = [
    { name: 'Additional editing', price: '$25/photo' },
    { name: 'Rush delivery (24hrs)', price: '$100' },
    { name: 'Extended session time', price: '$100/hr' },
    { name: 'Second photographer', price: '$500/day' },
    { name: 'Professional hair & makeup', price: '$200' }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="py-16 px-4 bg-stone-50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-serif text-4xl md:text-5xl text-gray-900 mb-6">
              Services
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Professional photography services tailored to capture your unique story. 
              From intimate portraits to grand celebrations, I'm here to preserve your most important moments.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl font-medium text-gray-900">
                      {service.title}
                    </h3>
                  </div>
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="text-sm text-gray-500 mb-1">Duration</div>
                    <div className="font-medium text-gray-900">{service.duration}</div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="text-sm text-gray-500 mb-1">Investment</div>
                    <div className="font-medium text-gray-900">{service.price}</div>
                  </div>
                </div>

                <div className="mb-8">
                  <h4 className="font-medium text-gray-900 mb-3">What's Included:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-amber-600 rounded-full"></div>
                        <span className="text-sm text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex space-x-4">
                  <Link
                    to="/contact"
                    className="flex-1 bg-amber-600 text-white text-center py-3 rounded-lg hover:bg-amber-700 transition-colors font-medium"
                  >
                    Book Now
                  </Link>
                  <Link
                    to="/contact"
                    className="flex-1 border border-gray-300 text-gray-700 text-center py-3 rounded-lg hover:bg-gray-50 transition-colors font-medium inline-flex items-center justify-center space-x-2 group"
                  >
                    <span>Request Quote</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-serif text-3xl md:text-4xl text-gray-900 mb-4">
              Optional Add-ons
            </h2>
            <p className="text-gray-600">
              Enhance your photography experience with these additional services.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-lg p-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {addOns.map((addon, index) => (
                <div key={index} className="flex justify-between items-center py-3 border-b border-gray-100 last:border-b-0">
                  <span className="text-gray-700">{addon.name}</span>
                  <span className="font-medium text-gray-900">{addon.price}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-3xl md:text-4xl mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Let's discuss your vision and create something beautiful together. 
              I'd love to hear about your upcoming project.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center space-x-2 bg-amber-600 text-white px-8 py-3 rounded-full hover:bg-amber-700 transition-colors group"
            >
              <span>Get in Touch</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;