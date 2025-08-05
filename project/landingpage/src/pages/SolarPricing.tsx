// src/pages/SolarPricing.tsx
import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { Check } from 'lucide-react';

const plans = [
  {
    id: 'basic',
    name: 'Basic',
    price: '$350',
    frequency: 'One-time',
    features: ['1-Page Website', 'Mobile-Responsive', 'Contact Form', 'Basic SEO'],
  },
  {
    id: 'pro',
    name: 'Pro',
    price: '$600',
    frequency: 'One-time',
    features: ['Up to 5 Pages', 'Google Maps + Socials', 'Photo Gallery', 'Custom Domain Setup'],
  },
  {
    id: 'business',
    name: 'Business',
    price: '$129',
    frequency: '/mo',
    features: ['Unlimited Edits', 'Hosting + Domain', 'Monthly Reports', 'Priority Support'],
  },
  {
    id: 'business-pro',
    name: 'Business Pro',
    price: '$199',
    frequency: '/mo',
    features: ['Advanced Integrations', '2x Strategy Calls', 'Same-Day Edits', 'VIP Support'],
  },
  {
    id: 'custom',
    name: 'Custom',
    price: 'Quote Only',
    frequency: '',
    features: ['Fully Custom Design', 'Menu / Store Integration', 'Dedicated Manager'],
  },
];

const SolarPricing: React.FC = () => {
  const location = useLocation();
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const idToScroll = location.state?.scrollTo;
    if (idToScroll && containerRef.current) {
      const target = containerRef.current.querySelector(`#${idToScroll}`);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  }, [location.state]);

  return (
    <section className="relative min-h-screen py-20 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
      <h1 className="text-4xl font-extrabold text-center mb-12">Our Pricing Universe</h1>
      <div ref={containerRef} className="relative flex flex-wrap items-center justify-center gap-12 px-8">
        {plans.map((plan, i) => (
          <div
            key={i}
            id={plan.id}
            className={`relative w-72 h-72 bg-slate-800 border-2 border-emerald-400 rounded-full shadow-lg flex flex-col justify-center items-center text-center transition-transform duration-300 hover:scale-110 ${
              location.state?.scrollTo === plan.id ? 'ring-4 ring-emerald-500 scale-110' : ''
            }`}
          >
            <h2 className="text-xl font-bold mb-1">{plan.name}</h2>
            <p className="text-3xl font-extrabold text-emerald-400 mb-2">{plan.price}</p>
            <p className="text-sm text-slate-300 mb-3">{plan.frequency}</p>
            <ul className="text-sm space-y-1 px-4">
              {plan.features.map((feature, index) => (
                <li key={index} className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400" /> {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SolarPricing;
