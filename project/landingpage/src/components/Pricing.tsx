import React from 'react';
import { Link } from 'react-router-dom';
import { Check, Star } from 'lucide-react';

const Pricing: React.FC = () => {
  const plans = [
    {
      name: 'Starter',
      price: '$350',
      duration: 'One-time',
      features: ['1-Page Website', 'Mobile-Responsive', 'Contact Form', 'Basic SEO'],
      popular: false,
    },
    {
      name: 'Pro',
      price: '$600',
      duration: 'One-time',
      features: ['Up to 5 Pages', 'Google Maps + Socials', 'Photo Gallery', 'Custom Domain Setup'],
      popular: false,
    },
    {
      name: 'Business',
      price: '$99',
      duration: '/mo',
      features: ['Unlimited Edits', 'Hosting & Domain Included', 'Monthly Reports', 'Priority Support'],
      popular: true,
    },
    {
      name: 'Custom',
      price: 'Quote Only',
      duration: '',
      features: ['Fully Custom Design', 'Integrations (Booking, Menu, Store)', 'Dedicated Manager'],
      popular: false,
    },
  ];

  const addons = [
    { name: 'Extra Page', price: '$50 per page' },
    { name: 'Logo Design', price: '$75 one-time' },
    { name: 'Hosting Only', price: '$15/mo' },
    { name: 'Rush Delivery (48 hrs)', price: '+$100' },
  ];

  return (
    <section id="pricing" className="py-20 bg-slate-50 dark:bg-slate-800">
      max-w-[900px] mx-auto px-4 sm:px-6 lg:px-4 xl:px-2
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Pricing Plans
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white dark:bg-slate-900 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden ${
                plan.popular ? 'ring-2 ring-emerald-500 scale-105' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-emerald-500 to-blue-500 text-white text-center py-2 text-sm font-semibold">
                  <Star className="inline h-4 w-4 mr-1" />
                  Most Popular
                </div>
              )}

              <div className={`p-8 ${plan.popular ? 'pt-16' : ''}`}>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">{plan.name}</h3>

                <div className="mb-6">
                  <span className="text-3xl font-bold text-slate-900 dark:text-white">{plan.price}</span>
                  {plan.duration && (
                    <span className="text-slate-600 dark:text-slate-300 ml-2">{plan.duration}</span>
                  )}
                </div>

                <ul className="space-y-4">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="h-5 w-5 text-emerald-500 mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-slate-600 dark:text-slate-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
            Optional Add-Ons
          </h3>
          <div className="max-w-2xl mx-auto">
            <table className="w-full text-left border-t border-slate-300 dark:border-slate-700 mt-6">
              <thead>
                <tr>
                  <th className="py-2 pr-4 text-slate-600 dark:text-slate-400">Add-On</th>
                  <th className="py-2 text-slate-600 dark:text-slate-400">Price</th>
                </tr>
              </thead>
              <tbody>
                {addons.map((addon, index) => (
                  <tr key={index} className="border-t border-slate-200 dark:border-slate-700">
                    <td className="py-3 pr-4 text-slate-800 dark:text-slate-200">{addon.name}</td>
                    <td className="py-3 text-slate-800 dark:text-slate-200">{addon.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-slate-600 dark:text-slate-400 mb-4">
            All plans include free consultations and revisions during development.
          </p>
          <Link
            to="/contact"
            className="text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 font-semibold transition-colors duration-200"
          >
            Need something custom? Let&apos;s talk →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
