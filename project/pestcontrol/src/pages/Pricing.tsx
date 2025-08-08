import React from 'react';
import { CheckCircle, Zap, Shield, Clock } from 'lucide-react';

const Pricing: React.FC = () => {
  const handleCallNow = () => {
    window.location.href = 'tel:+1-555-STRIKE-1';
  };

  const packages = [
    {
      name: 'ONE-TIME EMERGENCY',
      description: 'Immediate pest elimination for critical situations',
      price: '$89-299',
      priceNote: 'Based on severity',
      urgency: 'SAME DAY',
      features: [
        'Emergency dispatch within 1 hour',
        'Complete pest elimination',
        'Treatment of affected areas',
        '30-day guarantee',
        'Follow-up inspection',
        'Written treatment report'
      ],
      cta: 'DISPATCH NOW',
      popular: false,
      color: 'border-strike-red bg-strike-black'
    },
    {
      name: 'QUARTERLY DEFENSE',
      description: 'Proactive protection with regular treatments',
      price: '$79',
      priceNote: 'Per quarterly visit',
      urgency: 'PREVENTION',
      features: [
        'Comprehensive property inspection',
        'Interior & exterior treatment',
        'Seasonal pest prevention',
        'Unlimited emergency calls',
        'Free re-treatments if needed',
        '24/7 hotline access',
        'Digital service reports'
      ],
      cta: 'START PROTECTION',
      popular: true,
      color: 'border-strike-red bg-strike-red'
    },
    {
      name: 'YEAR-ROUND PROTECTION',
      description: 'Maximum security with monthly monitoring',
      price: '$49',
      priceNote: 'Per monthly visit',
      urgency: 'MAXIMUM DEFENSE',
      features: [
        'Monthly property monitoring',
        'Advanced treatment methods',
        'Pest trend reporting',
        'Priority emergency response',
        'Seasonal strategy adjustments',
        'Integrated pest management',
        'Property protection warranty',
        'Pest activity alerts'
      ],
      cta: 'MAXIMUM DEFENSE',
      popular: false,
      color: 'border-strike-red bg-strike-black'
    }
  ];

  const addOns = [
    { service: 'Termite Inspection', price: '$75' },
    { service: 'Mosquito Treatment', price: '$125' },
    { service: 'Rodent Exclusion', price: '$200+' },
    { service: 'Attic Cleanup', price: '$300+' },
    { service: 'Crawl Space Treatment', price: '$150+' }
  ];

  return (
    <div className="pt-8">
      {/* Header */}
      <section className="bg-gradient-to-r from-strike-black to-strike-steel py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-headline font-bold text-4xl md:text-6xl text-white mb-6">
            COMBAT <span className="text-strike-red">PACKAGES</span>
          </h1>
          <p className="font-body text-xl text-gray-200 max-w-3xl mx-auto mb-8">
            Choose your level of protection. From emergency response to total property defense.
          </p>
          
          <div className="bg-strike-red border-4 border-white p-4 inline-block">
            <span className="font-headline font-bold text-white text-lg">
              ALL PLANS INCLUDE 100% SATISFACTION GUARANTEE
            </span>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div
                key={pkg.name}
                className={`relative ${pkg.color} border-4 transition-all duration-300 hover:scale-105 animate-zoom-in`}
                style={{animationDelay: `${index * 0.2}s`}}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-white text-strike-red px-4 py-2 font-headline font-bold text-sm border-2 border-strike-red">
                      MOST POPULAR
                    </span>
                  </div>
                )}

                <div className="p-8">
                  {/* Package Header */}
                  <div className="text-center mb-8">
                    <h3 className="font-headline font-bold text-2xl text-white mb-2">
                      {pkg.name}
                    </h3>
                    <p className="font-body text-gray-300 mb-6">
                      {pkg.description}
                    </p>
                    
                    <div className="mb-4">
                      <span className="font-headline font-bold text-5xl text-white">
                        {pkg.price}
                      </span>
                      <div className="font-body text-gray-300 text-sm">
                        {pkg.priceNote}
                      </div>
                    </div>

                    <div className="bg-white px-4 py-2 inline-block">
                      <span className="font-headline font-bold text-strike-red">
                        {pkg.urgency}
                      </span>
                    </div>
                  </div>

                  {/* Features List */}
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-strike-red mt-0.5 flex-shrink-0" />
                        <span className="font-body text-white text-sm">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <button
                    onClick={handleCallNow}
                    className={`w-full py-4 font-headline font-bold text-lg transition-all duration-300 ${
                      pkg.popular
                        ? 'bg-white hover:bg-strike-black text-strike-red hover:text-white border-2 border-white'
                        : 'bg-strike-red hover:bg-white text-white hover:text-strike-red border-2 border-strike-red'
                    }`}
                  >
                    {pkg.cta}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-On Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="font-headline font-bold text-3xl md:text-4xl text-strike-black text-center mb-12">
            ADDITIONAL <span className="text-strike-red">SERVICES</span>
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-strike-black border-4 border-strike-red p-8">
              <div className="grid md:grid-cols-2 gap-6">
                {addOns.map((addon, index) => (
                  <div
                    key={addon.service}
                    className="flex items-center justify-between p-4 bg-gray-900 hover:bg-strike-red transition-all duration-300 group"
                  >
                    <span className="font-body text-white group-hover:text-white">
                      {addon.service}
                    </span>
                    <span className="font-headline font-bold text-strike-red group-hover:text-white">
                      {addon.price}
                    </span>
                  </div>
                ))}
              </div>
              
              <div className="text-center mt-8">
                <p className="font-body text-gray-300 mb-6">
                  All services can be added to any protection plan or booked individually
                </p>
                <button
                  onClick={handleCallNow}
                  className="bg-strike-red hover:bg-white border-4 border-strike-red text-white hover:text-strike-red px-8 py-4 font-headline font-bold text-lg transition-all duration-300"
                >
                  CUSTOMIZE MY PLAN
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Propositions */}
      <section className="py-16 bg-strike-black">
        <div className="container mx-auto px-4">
          <h2 className="font-headline font-bold text-3xl md:text-4xl text-white text-center mb-12">
            WHY INVEST IN <span className="text-strike-red">PROTECTION</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group">
              <Zap className="h-16 w-16 text-strike-red mx-auto mb-4 group-hover:text-white transition-colors duration-300" />
              <h3 className="font-headline font-bold text-white text-xl mb-4">
                RAPID RESPONSE
              </h3>
              <p className="font-body text-gray-300">
                Emergency situations require immediate action. Every hour counts when dealing with pest invasions.
              </p>
            </div>
            
            <div className="text-center group">
              <Shield className="h-16 w-16 text-strike-red mx-auto mb-4 group-hover:text-white transition-colors duration-300" />
              <h3 className="font-headline font-bold text-white text-xl mb-4">
                GUARANTEED RESULTS
              </h3>
              <p className="font-body text-gray-300">
                We eliminate pests completely or return until the job is done. Your satisfaction is guaranteed.
              </p>
            </div>
            
            <div className="text-center group">
              <Clock className="h-16 w-16 text-strike-red mx-auto mb-4 group-hover:text-white transition-colors duration-300" />
              <h3 className="font-headline font-bold text-white text-xl mb-4">
                PREVENTION SAVES
              </h3>
              <p className="font-body text-gray-300">
                Regular treatment costs far less than emergency repairs and health complications from infestations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency CTA */}
      <section className="py-12 bg-strike-red">
        <div className="container mx-auto px-4 text-center">
          <h3 className="font-headline font-bold text-white text-3xl mb-4">
            NEED IMMEDIATE SERVICE?
          </h3>
          <p className="font-body text-white text-lg mb-6 max-w-2xl mx-auto">
            Don't wait for quotes. Get immediate pest elimination now and discuss pricing with our technician on-site.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 justify-center">
            <button
              onClick={handleCallNow}
              className="bg-white hover:bg-strike-black border-4 border-white text-strike-red hover:text-white px-8 py-4 font-headline font-bold text-xl transition-all duration-300"
            >
              EMERGENCY DISPATCH
            </button>
            <button
              onClick={() => window.location.href = '/contact'}
              className="bg-transparent hover:bg-white border-4 border-white text-white hover:text-strike-red px-8 py-4 font-headline font-bold text-xl transition-all duration-300"
            >
              GET QUOTE
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;