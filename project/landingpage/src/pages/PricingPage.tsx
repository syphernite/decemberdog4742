import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Check, ArrowRight, Star, Zap, Globe, ShoppingCart } from 'lucide-react';

const PricingPage = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  const plans = [
    {
      name: "Starter",
      icon: <Star className="h-8 w-8 text-blue-600" />,
      description: "Perfect for new businesses getting started online",
      monthlyPrice: 299,
      yearlyPrice: 2990,
      setup: "1-3 business days",
      popular: false,
      features: [
        "Single-page custom website",
        "Mobile-optimized design",
        "Fast hosting included",
        "SSL certificate",
        "Contact form integration",
        "Basic SEO setup",
        "30 days support"
      ]
    },
    {
      name: "Professional",
      icon: <Globe className="h-8 w-8 text-purple-600" />,
      description: "Ideal for established businesses ready to grow",
      monthlyPrice: 599,
      yearlyPrice: 5990,
      setup: "3-7 business days",
      popular: true,
      features: [
        "Up to 10 custom pages",
        "Advanced custom design",
        "Premium hosting included",
        "Advanced SEO optimization",
        "Google Analytics setup",
        "Blog/CMS integration",
        "Social media integration",
        "90 days support",
        "Monthly performance reports"
      ]
    },
    {
      name: "eCommerce",
      icon: <ShoppingCart className="h-8 w-8 text-green-600" />,
      description: "Complete online store with payment processing",
      monthlyPrice: 899,
      yearlyPrice: 8990,
      setup: "7-14 business days",
      popular: false,
      features: [
        "Unlimited product pages",
        "Shopping cart & checkout",
        "Payment gateway integration",
        "Inventory management",
        "Order management system",
        "Customer accounts",
        "Advanced analytics",
        "Email marketing setup",
        "6 months priority support",
        "Conversion optimization"
      ]
    }
  ];

  const addOns = [
    { name: "Advanced SEO Package", price: 199, description: "Comprehensive SEO audit and optimization" },
    { name: "Email Marketing Setup", price: 149, description: "Automated email sequences and newsletter" },
    { name: "Appointment Booking System", price: 179, description: "Online scheduling with calendar sync" },
    { name: "Live Chat Integration", price: 89, description: "Real-time customer support widget" },
    { name: "Advanced Analytics", price: 129, description: "Detailed insights and custom reports" },
    { name: "Additional Pages (each)", price: 99, description: "Extra custom pages beyond plan limits" }
  ];

  return (
    <div className="pt-16 lg:pt-20">
      {/* Header */}
      <section className="bg-gradient-to-br from-blue-50 to-purple-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Simple, Transparent Pricing
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 mb-8"
          >
            Everything you need to succeed online. No hidden fees, no surprises.
          </motion.p>

          {/* Billing Toggle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex items-center justify-center mb-12"
          >
            <span className={`mr-3 ${billingCycle === 'monthly' ? 'text-gray-900 font-semibold' : 'text-gray-500'}`}>
              Monthly
            </span>
            <button
              onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
              className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white shadow-lg transition-transform ${
                  billingCycle === 'yearly' ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`ml-3 ${billingCycle === 'yearly' ? 'text-gray-900 font-semibold' : 'text-gray-500'}`}>
              Yearly
            </span>
            {billingCycle === 'yearly' && (
              <span className="ml-2 bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full font-medium">
                Save 17%
              </span>
            )}
          </motion.div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative bg-white rounded-2xl border-2 p-8 ${
                  plan.popular
                    ? 'border-blue-500 ring-4 ring-blue-100'
                    : 'border-gray-200 hover:border-gray-300'
                } transition-all duration-300 hover:shadow-xl`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <div className="flex justify-center mb-4">{plan.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-6">{plan.description}</p>
                  
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-gray-900">
                      ${billingCycle === 'monthly' ? plan.monthlyPrice : Math.floor(plan.yearlyPrice / 12)}
                    </span>
                    <span className="text-gray-500 ml-2">
                      /{billingCycle === 'monthly' ? 'month' : 'month'}
                    </span>
                  </div>
                  
                  {billingCycle === 'yearly' && (
                    <p className="text-sm text-green-600 font-medium">
                      Billed annually (${plan.yearlyPrice})
                    </p>
                  )}
                  
                  <p className="text-sm text-gray-500 mt-2">Setup: {plan.setup}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center ${
                    plan.popular
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg transform hover:scale-105'
                      : 'bg-gray-900 text-white hover:bg-gray-800'
                  }`}
                >
                  Choose {plan.name}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Optional Add-Ons</h2>
            <p className="text-xl text-gray-600">
              Enhance your website with these powerful features
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {addOns.map((addon, index) => (
              <motion.div
                key={addon.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-lg font-semibold text-gray-900">{addon.name}</h3>
                  <span className="text-xl font-bold text-blue-600">${addon.price}</span>
                </div>
                <p className="text-gray-600">{addon.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "What's included in hosting?",
                answer: "Our hosting includes premium servers, SSL certificates, daily backups, 99.9% uptime guarantee, and 24/7 monitoring."
              },
              {
                question: "Can I upgrade my plan later?",
                answer: "Absolutely! You can upgrade to any higher plan at any time. We'll credit your existing plan and bill you the difference."
              },
              {
                question: "Do you provide ongoing support?",
                answer: "Yes! All plans include support for technical issues, minor updates, and maintenance. Support duration varies by plan."
              },
              {
                question: "What if I need a custom domain?",
                answer: "We'll help you set up your custom domain (yourbusiness.com) at no extra charge. Domain registration fees apply separately."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 p-6 rounded-lg"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Choose your plan and let's build something amazing together.
            </p>
            <Link
              to="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105 inline-flex items-center"
            >
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PricingPage;