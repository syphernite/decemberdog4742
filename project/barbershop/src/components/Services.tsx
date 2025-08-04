import React from 'react';
import { Scissors, Sparkles, Users, Clock } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Scissors,
      name: 'Classic Haircut',
      description: 'Traditional cuts with modern styling',
      price: '$35',
      duration: '45 min',
      popular: false,
    },
    {
      icon: Sparkles,
      name: 'Signature Fade',
      description: 'Precision fades with sharp line-ups',
      price: '$45',
      duration: '60 min',
      popular: true,
    },
    {
      icon: Users,
      name: 'Beard Trim & Style',
      description: 'Professional beard grooming and shaping',
      price: '$25',
      duration: '30 min',
      popular: false,
    },
    {
      icon: Scissors,
      name: 'Kids Cut (12 & Under)',
      description: 'Patient, kid-friendly haircuts',
      price: '$28',
      duration: '30 min',
      popular: false,
    },
    {
      icon: Sparkles,
      name: 'Full Service',
      description: 'Haircut + beard trim + hot towel',
      price: '$65',
      duration: '90 min',
      popular: true,
    },
    {
      icon: Clock,
      name: 'Touch-Up',
      description: 'Quick clean-up between full cuts',
      price: '$20',
      duration: '20 min',
      popular: false,
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Services & 
            <span className="text-red-600"> Pricing</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional barbering services tailored to your style. 
            Quality cuts at fair prices with no hidden fees.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`relative group p-8 rounded-2xl transition-all duration-300 hover:scale-105 ${
                service.popular
                  ? 'bg-gradient-to-br from-red-50 to-blue-50 border-2 border-red-200 shadow-xl'
                  : 'bg-gray-50 border border-gray-200 hover:shadow-xl'
              }`}
            >
              {service.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-red-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}

              <div className={`inline-flex p-3 rounded-xl mb-6 ${
                service.popular ? 'bg-red-100' : 'bg-white'
              }`}>
                <service.icon className={`h-8 w-8 ${
                  service.popular ? 'text-red-600' : 'text-gray-600'
                }`} />
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {service.name}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              <div className="flex items-center justify-between">
                <div>
                  <div className={`text-3xl font-bold ${
                    service.popular ? 'text-red-600' : 'text-gray-900'
                  }`}>
                    {service.price}
                  </div>
                  <div className="text-sm text-gray-500">{service.duration}</div>
                </div>
                
                <button className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  service.popular
                    ? 'bg-red-600 text-white hover:bg-red-700 shadow-lg hover:shadow-red-600/25'
                    : 'bg-gray-900 text-white hover:bg-gray-800'
                }`}>
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-blue-50 border border-blue-200 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-xl font-bold text-blue-900 mb-4">
              💳 Payment & Policies
            </h3>
            <div className="grid md:grid-cols-2 gap-6 text-sm text-blue-800">
              <div>
                <strong>Accepted Payments:</strong> Cash, Venmo, CashApp, Zelle
              </div>
              <div>
                <strong>Cancellation:</strong> 24-hour notice required
              </div>
              <div>
                <strong>Late Policy:</strong> 15+ min late = reschedule
              </div>
              <div>
                <strong>No-Show Fee:</strong> 50% of service cost
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;