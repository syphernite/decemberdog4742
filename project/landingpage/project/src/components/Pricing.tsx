import React from 'react';
import { Check, Star } from 'lucide-react';

const Pricing: React.FC = () => {
  const plans = [
    {
      name: 'Starter',
      price: '$1,200',
      duration: 'one-time',
      description: 'Perfect for small businesses getting started online',
      features: [
        'Up to 5 pages',
        'Mobile responsive design',
        'Contact form integration',
        'Basic SEO optimization',
        'Social media links',
        '30 days support',
      ],
      popular: false,
    },
    {
      name: 'Standard',
      price: '$2,500',
      duration: 'one-time',
      description: 'Ideal for established businesses looking to grow',
      features: [
        'Up to 10 pages',
        'Custom design & branding',
        'Advanced contact forms',
        'SEO optimization',
        'Analytics integration',
        'Content management system',
        '60 days support',
      ],
      popular: true,
    },
    {
      name: 'Premium',
      price: '$4,500',
      duration: 'one-time',
      description: 'Complete solution for businesses ready to scale',
      features: [
        'Unlimited pages',
        'E-commerce functionality',
        'Custom integrations',
        'Advanced SEO & analytics',
        'Performance optimization',
        'Training & documentation',
        '90 days support',
        'Priority updates',
      ],
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="py-20 bg-slate-50 dark:bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            No hidden fees, no monthly subscriptions. Just honest pricing for quality work.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
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
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                  {plan.name}
                </h3>
                
                <p className="text-slate-600 dark:text-slate-300 mb-6">
                  {plan.description}
                </p>
                
                <div className="mb-8">
                  <span className="text-4xl font-bold text-slate-900 dark:text-white">
                    {plan.price}
                  </span>
                  <span className="text-slate-600 dark:text-slate-300 ml-2">
                    {plan.duration}
                  </span>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="h-5 w-5 text-emerald-500 mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-slate-600 dark:text-slate-300">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg hover:shadow-xl'
                    : 'bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-900 dark:text-white'
                }`}>
                  Get Started
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-slate-600 dark:text-slate-400 mb-4">
            All plans include free consultations and revisions during development.
          </p>
          <button className="text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 font-semibold">
            Need something custom? Let's talk →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;