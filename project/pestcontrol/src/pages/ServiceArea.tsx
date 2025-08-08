import React from 'react';
import { MapPin, Phone, Clock, CheckCircle } from 'lucide-react';

const ServiceArea: React.FC = () => {
  const handleCallNow = () => {
    window.location.href = 'tel:+1-555-STRIKE-1';
  };

  const serviceCities = [
    'Downtown District',
    'Riverside Commercial',
    'Maple Heights',
    'Oak Valley',
    'Pine Ridge',
    'Cedar Springs',
    'Willow Creek',
    'Sunset Hills',
    'Mountain View',
    'Lake Shore',
    'Forest Glen',
    'Prairie Point',
    'Brookside',
    'Heritage Park',
    'Golden Gate',
    'Silver Lake',
    'Copper Canyon',
    'Iron Bridge',
    'Stone Ridge',
    'Crystal Bay'
  ];

  const responseZones = [
    {
      zone: 'PRIORITY ZONE A',
      areas: ['Downtown District', 'Riverside Commercial', 'Maple Heights', 'Oak Valley'],
      responseTime: '15-30 MIN',
      color: 'bg-red-600',
      description: 'Immediate emergency response for high-density areas'
    },
    {
      zone: 'ZONE B',
      areas: ['Pine Ridge', 'Cedar Springs', 'Willow Creek', 'Sunset Hills'],
      responseTime: '30-45 MIN',
      color: 'bg-orange-500',
      description: 'Rapid response for suburban residential areas'
    },
    {
      zone: 'ZONE C',
      areas: ['Mountain View', 'Lake Shore', 'Forest Glen', 'Prairie Point'],
      responseTime: '45-60 MIN',
      color: 'bg-yellow-500',
      description: 'Standard response for extended service areas'
    },
    {
      zone: 'EXTENDED ZONE',
      areas: ['Brookside', 'Heritage Park', 'Golden Gate', 'Silver Lake'],
      responseTime: '60-90 MIN',
      color: 'bg-blue-500',
      description: 'Extended coverage with guaranteed same-day service'
    }
  ];

  return (
    <div className="pt-8">
      {/* Header */}
      <section className="bg-gradient-to-r from-strike-black to-strike-steel py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-headline font-bold text-4xl md:text-6xl text-white mb-6">
            RAPID <span className="text-strike-red">DEPLOYMENT ZONES</span>
          </h1>
          <p className="font-body text-xl text-gray-200 max-w-3xl mx-auto">
            Strategic positioning ensures emergency response within 90 minutes 
            anywhere in our service territory.
          </p>
        </div>
      </section>

      {/* Service Area Map */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="font-headline font-bold text-3xl md:text-4xl text-strike-black text-center mb-12">
            COVERAGE <span className="text-strike-red">MAP</span>
          </h2>
          
          {/* Map Placeholder */}
          <div className="max-w-6xl mx-auto mb-12">
            <div className="bg-gradient-to-br from-strike-black via-strike-steel to-strike-black border-4 border-strike-red aspect-video flex items-center justify-center relative overflow-hidden">
              {/* Map Background Pattern */}
              <div className="absolute inset-0 opacity-20">
                <div className="grid grid-cols-8 grid-rows-6 h-full">
                  {Array.from({ length: 48 }, (_, i) => (
                    <div
                      key={i}
                      className={`border border-gray-600 ${
                        Math.random() > 0.7 ? 'bg-strike-red' : 
                        Math.random() > 0.5 ? 'bg-orange-500' : 
                        Math.random() > 0.3 ? 'bg-yellow-500' : 'bg-blue-500'
                      }`}
                    />
                  ))}
                </div>
              </div>
              
              <div className="text-center text-white relative z-10">
                <MapPin className="h-24 w-24 mx-auto mb-6 text-strike-red" />
                <h3 className="font-headline font-bold text-3xl mb-4">
                  STRATEGIC COVERAGE AREA
                </h3>
                <p className="font-body text-lg text-gray-200">
                  20+ Service Cities • Multiple Response Zones • GPS Tracked Fleet
                </p>
              </div>
            </div>
          </div>

          {/* Response Zones */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {responseZones.map((zone, index) => (
              <div
                key={zone.zone}
                className="bg-strike-black border-4 border-strike-red p-6 animate-zoom-in"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className={`${zone.color} px-4 py-2 mb-4 inline-block`}>
                  <span className="font-headline font-bold text-white text-sm">
                    {zone.zone}
                  </span>
                </div>
                
                <div className="flex items-center space-x-2 mb-4">
                  <Clock className="h-5 w-5 text-strike-red" />
                  <span className="font-headline font-bold text-white text-lg">
                    {zone.responseTime}
                  </span>
                </div>
                
                <p className="font-body text-gray-300 text-sm mb-4">
                  {zone.description}
                </p>
                
                <div className="space-y-2">
                  {zone.areas.map((area) => (
                    <div key={area} className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-strike-red flex-shrink-0" />
                      <span className="font-body text-white text-sm">{area}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Service Cities */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="font-headline font-bold text-3xl md:text-4xl text-strike-black text-center mb-12">
            COMPLETE SERVICE <span className="text-strike-red">COVERAGE</span>
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-4 gap-4">
              {serviceCities.map((city, index) => (
                <div
                  key={city}
                  className="bg-white border-2 border-strike-black hover:border-strike-red hover:bg-strike-black hover:text-white transition-all duration-300 p-4 text-center group animate-slide-in"
                  style={{animationDelay: `${index * 0.05}s`}}
                >
                  <MapPin className="h-5 w-5 text-strike-red group-hover:text-white mx-auto mb-2" />
                  <span className="font-body font-bold text-sm">
                    {city}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Coverage Guarantee */}
      <section className="py-16 bg-strike-black">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-headline font-bold text-3xl md:text-4xl text-white mb-8">
            SERVICE AREA <span className="text-strike-red">GUARANTEE</span>
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-strike-red p-6 mb-4 inline-block">
                  <Clock className="h-12 w-12 text-white" />
                </div>
                <h3 className="font-headline font-bold text-white text-xl mb-3">
                  RESPONSE TIME GUARANTEE
                </h3>
                <p className="font-body text-gray-300">
                  We guarantee arrival within posted response times for your zone or your service is free.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-strike-red p-6 mb-4 inline-block">
                  <MapPin className="h-12 w-12 text-white" />
                </div>
                <h3 className="font-headline font-bold text-white text-xl mb-3">
                  COVERAGE EXPANSION
                </h3>
                <p className="font-body text-gray-300">
                  Don't see your area? We're rapidly expanding coverage. Call to check availability.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-strike-red p-6 mb-4 inline-block">
                  <Phone className="h-12 w-12 text-white" />
                </div>
                <h3 className="font-headline font-bold text-white text-xl mb-3">
                  EMERGENCY DISPATCH
                </h3>
                <p className="font-body text-gray-300">
                  24/7 emergency hotline connects you directly to our dispatch center for immediate response.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Dispatch CTA */}
      <section className="py-16 bg-strike-red relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <MapPin className="h-96 w-96 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse" />
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="font-headline font-bold text-4xl md:text-5xl text-white mb-6">
            IN OUR SERVICE AREA?
          </h2>
          <p className="font-body text-xl text-white mb-8 max-w-3xl mx-auto">
            Emergency pest situations don't wait. Get immediate professional response 
            anywhere in our coverage zone.
          </p>
          
          <div className="bg-white border-4 border-white p-6 inline-block mb-8">
            <div className="font-headline font-bold text-strike-red text-2xl mb-2">
              DISPATCH NOW
            </div>
            <div className="font-body text-strike-black">
              GPS tracking • Real-time updates • Guaranteed arrival
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 justify-center">
            <button
              onClick={handleCallNow}
              className="bg-white hover:bg-strike-black border-4 border-white text-strike-red hover:text-white px-8 py-4 font-headline font-bold text-xl transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <Phone className="h-6 w-6" />
              <span>EMERGENCY: (555) STRIKE-1</span>
            </button>
            
            <button
              onClick={() => window.location.href = '/contact'}
              className="bg-transparent hover:bg-white border-4 border-white text-white hover:text-strike-red px-8 py-4 font-headline font-bold text-xl transition-all duration-300"
            >
              CHECK MY AREA
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceArea;