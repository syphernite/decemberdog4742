import React from 'react';
import { Monitor, Smartphone, Zap } from 'lucide-react';

const services = [
  {
    icon: Monitor,
    title: "Custom Web Pages",
    description: "Bespoke websites tailored to your brand with cutting-edge design and functionality."
  },
  {
    icon: Smartphone,
    title: "Mobile Optimization",
    description: "Responsive designs that look stunning and perform flawlessly on all devices."
  },
  {
    icon: Zap,
    title: "Fast Hosting",
    description: "Lightning-fast hosting solutions with 99.9% uptime guarantee and global CDN."
  }
];

const WhatWeDo = () => {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">
            What We Do
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            We create digital experiences that captivate, convert, and exceed expectations.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-white/20 hover:border-green-400/50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-green-500/20 glass-card"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-green-400/10 to-teal-400/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-teal-400 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-black" />
                </div>
                
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-green-300 transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-gray-300 leading-relaxed">
                  {service.description}
                </p>
              </div>
              
              <div className="absolute top-4 right-4 w-2 h-2 bg-green-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;