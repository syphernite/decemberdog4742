import React from 'react';
import { Zap, Smartphone, Search, Palette } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: "Speed",
    description: "Lightning-fast loading times that keep your visitors engaged.",
    animation: "animate-pulse"
  },
  {
    icon: Smartphone,
    title: "Mobile-First",
    description: "Designed for mobile, optimized for all devices.",
    animation: "animate-bounce"
  },
  {
    icon: Search,
    title: "SEO Ready",
    description: "Built with search engine optimization in mind.",
    animation: "animate-pulse"
  },
  {
    icon: Palette,
    title: "Fully Custom",
    description: "Tailored designs that reflect your unique brand.",
    animation: "animate-bounce"
  }
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/10 to-transparent"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">
            Why Choose Us
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            We combine cutting-edge technology with creative excellence to deliver exceptional results.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group text-center p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-lg border border-white/10 hover:border-green-400/50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-green-500/20"
            >
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-teal-400 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className={`w-10 h-10 text-black ${feature.animation}`} />
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-green-400/20 to-teal-400/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-green-300 transition-colors duration-300">
                {feature.title}
              </h3>
              
              <p className="text-gray-300 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;