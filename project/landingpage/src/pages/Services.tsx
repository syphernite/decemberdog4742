import React from 'react';
import { motion } from 'framer-motion';
import { Code, Smartphone, Search, ShoppingCart, Zap, Shield, BarChart, Headphones } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: Code,
      title: 'Custom Web Development',
      description: 'Bespoke websites built from scratch using the latest technologies and best practices.',
      features: ['React & Next.js', 'Custom CMS', 'API Integration', 'Performance Optimization'],
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Smartphone,
      title: 'Mobile-First Design',
      description: 'Responsive designs that look perfect on every device, from mobile to desktop.',
      features: ['Progressive Web Apps', 'Touch Optimization', 'Cross-Browser Testing', 'Accessibility'],
      gradient: 'from-emerald-500 to-teal-500',
    },
    {
      icon: Search,
      title: 'SEO Optimization',
      description: 'Get found on Google with our comprehensive SEO strategies and technical optimization.',
      features: ['Technical SEO', 'Local SEO', 'Content Strategy', 'Analytics Setup'],
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      icon: ShoppingCart,
      title: 'E-commerce Solutions',
      description: 'Complete online stores with secure payment processing and inventory management.',
      features: ['Stripe Integration', 'Inventory Management', 'Order Processing', 'Customer Accounts'],
      gradient: 'from-orange-500 to-red-500',
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Lightning-fast websites that load in under 2 seconds and rank higher on Google.',
      features: ['Core Web Vitals', 'Image Optimization', 'CDN Setup', 'Caching Strategies'],
      gradient: 'from-yellow-500 to-orange-500',
    },
    {
      icon: Shield,
      title: 'Security & Maintenance',
      description: 'Keep your website secure and up-to-date with our ongoing maintenance services.',
      features: ['SSL Certificates', 'Security Monitoring', 'Regular Updates', 'Backup Solutions'],
      gradient: 'from-indigo-500 to-purple-500',
    },
    {
      icon: BarChart,
      title: 'Analytics & Reporting',
      description: 'Track your success with detailed analytics and monthly performance reports.',
      features: ['Google Analytics', 'Conversion Tracking', 'Performance Reports', 'ROI Analysis'],
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      icon: Headphones,
      title: 'Ongoing Support',
      description: 'Get help when you need it with our responsive support and training services.',
      features: ['Priority Support', 'Training Sessions', 'Documentation', 'Phone & Email'],
      gradient: 'from-pink-500 to-rose-500',
    },
  ];

  return (
    <div className="py-24 bg-white dark:bg-slate-900">
      <div className="w-full max-w-[720px] mx-auto px-4 sm:px-4">

        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Our Services
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Comprehensive web solutions designed to grow your business and establish your online presence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="group bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-slate-100 dark:border-slate-700"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              whileHover={{ y: -10 }}
            >
              <div className="flex items-center justify-center mb-6">
                <div className={`p-4 bg-gradient-to-r ${service.gradient} rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="h-8 w-8 text-white" />
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 text-center">
                {service.title}
              </h3>
              
              <p className="text-slate-600 dark:text-slate-300 text-center mb-6 leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="text-sm text-slate-500 dark:text-slate-400 flex items-center">
                    <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-3" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;