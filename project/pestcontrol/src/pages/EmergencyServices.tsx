import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Clock, Phone, Zap, Shield, AlertTriangle, CheckCircle } from 'lucide-react';

const EmergencyServices: React.FC = () => {
  const [countdown, setCountdown] = useState(60);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown((prev) => prev > 0 ? prev - 1 : 60);
    }, 1000);
    
    return () => clearInterval(interval);
  }, []);

  const handleCallNow = () => {
    window.location.href = 'tel:+1-555-STRIKE-1';
  };

  const emergencyServices = [
    {
      title: 'RODENT INVASION',
      description: 'Mice, rats, and other rodents eliminated within hours',
      response: '30-60 MIN',
      severity: 'HIGH',
      icon: '🐭'
    },
    {
      title: 'TERMITE SWARM',
      description: 'Immediate termite colony elimination and damage assessment',
      response: '45-90 MIN',
      severity: 'CRITICAL',
      icon: '🐛'
    },
    {
      title: 'WASP NEST',
      description: 'Dangerous wasp and hornet nest removal - same day',
      response: '20-45 MIN',
      severity: 'DANGER',
      icon: '🐝'
    },
    {
      title: 'BED BUG OUTBREAK',
      description: 'Complete bed bug heat treatment and elimination',
      response: '60-120 MIN',
      severity: 'URGENT',
      icon: '🛌'
    },
    {
      title: 'COCKROACH INFESTATION',
      description: 'Professional cockroach colony elimination treatment',
      response: '30-60 MIN',
      severity: 'HIGH',
      icon: '🪳'
    },
    {
      title: 'SPIDER CONTROL',
      description: 'Venomous spider removal and prevention treatment',
      response: '45-75 MIN',
      severity: 'URGENT',
      icon: '🕷️'
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'EMERGENCY CALL',
      description: 'Call our 24/7 hotline - we answer immediately',
      time: '0-2 MIN'
    },
    {
      step: '02',
      title: 'RAPID DISPATCH',
      description: 'Certified technician dispatched to your location',
      time: '2-15 MIN'
    },
    {
      step: '03',
      title: 'ON-SITE ARRIVAL',
      description: 'Professional assessment and immediate action plan',
      time: '30-60 MIN'
    },
    {
      step: '04',
      title: 'ELIMINATION',
      description: 'Advanced treatment methods eliminate pests fast',
      time: '30-120 MIN'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-strike-black to-strike-steel py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-headline font-bold text-4xl md:text-6xl text-white mb-6">
              EMERGENCY <span className="text-strike-red">RESPONSE</span>
            </h1>
            <p className="font-body text-xl text-gray-200 mb-8">
              Critical pest situations require immediate professional intervention
            </p>
            
            {/* Countdown Timer */}
            <div className="bg-strike-red border-4 border-white p-6 inline-block mb-8">
              <div className="flex items-center space-x-4">
                <Clock className="h-8 w-8 text-white animate-flash" />
                <div className="text-center">
                  <div className="font-headline font-bold text-4xl text-white">{countdown}</div>
                  <div className="font-body text-white text-sm">SECONDS TO DISPATCH</div>
                </div>
                <Zap className="h-8 w-8 text-white animate-flash" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Services Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="font-headline font-bold text-3xl md:text-4xl text-strike-black text-center mb-12">
            SAME-DAY <span className="text-strike-red">PEST REMOVAL</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {emergencyServices.map((service, index) => (
              <div
                key={service.title}
                className="bg-strike-black border-4 border-strike-red p-6 hover:bg-strike-red transition-all duration-300 group animate-zoom-in"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl">{service.icon}</span>
                  <span className={`px-3 py-1 text-xs font-headline font-bold ${
                    service.severity === 'CRITICAL' ? 'bg-red-600 text-white' :
                    service.severity === 'DANGER' ? 'bg-orange-500 text-white' :
                    service.severity === 'URGENT' ? 'bg-yellow-500 text-black' :
                    'bg-strike-red text-white'
                  }`}>
                    {service.severity}
                  </span>
                </div>
                
                <h3 className="font-headline font-bold text-white text-lg mb-3 group-hover:text-strike-black">
                  {service.title}
                </h3>
                <p className="font-body text-gray-300 group-hover:text-white mb-4">
                  {service.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="font-body font-bold text-strike-red group-hover:text-strike-black">
                    RESPONSE: {service.response}
                  </span>
                  <AlertTriangle className="h-5 w-5 text-strike-red group-hover:text-strike-black" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16 bg-strike-black">
        <div className="container mx-auto px-4">
          <h2 className="font-headline font-bold text-3xl md:text-4xl text-white text-center mb-12">
            RAPID TREATMENT <span className="text-strike-red">PROCESS</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div
                key={step.step}
                className="text-center group animate-slide-in"
                style={{animationDelay: `${index * 0.2}s`}}
              >
                <div className="bg-strike-red group-hover:bg-white border-4 border-strike-red w-20 h-20 flex items-center justify-center mx-auto mb-6 transition-all duration-300">
                  <span className="font-headline font-bold text-2xl text-white group-hover:text-strike-red">
                    {step.step}
                  </span>
                </div>
                
                <h3 className="font-headline font-bold text-white text-lg mb-3">
                  {step.title}
                </h3>
                <p className="font-body text-gray-300 mb-4">{step.description}</p>
                
                <div className="bg-white px-4 py-2 inline-block">
                  <span className="font-body font-bold text-strike-red">{step.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency CTA */}
      <section className="py-16 bg-strike-red relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute animate-pulse bg-white w-32 h-32 rounded-full -top-16 -left-16"></div>
          <div className="absolute animate-pulse bg-white w-24 h-24 rounded-full top-32 right-16"></div>
          <div className="absolute animate-pulse bg-white w-40 h-40 rounded-full -bottom-20 left-1/2"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="font-headline font-bold text-4xl md:text-5xl text-white mb-6">
            DON'T WAIT - PESTS WON'T
          </h2>
          <p className="font-body text-xl text-white mb-8 max-w-2xl mx-auto">
            Every minute counts when dealing with pest emergencies. Our rapid response team is standing by.
          </p>
          
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 justify-center">
            <button
              onClick={handleCallNow}
              className="bg-white hover:bg-strike-black border-4 border-white text-strike-red hover:text-white px-8 py-4 font-headline font-bold text-xl transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <Phone className="h-6 w-6" />
              <span>DISPATCH NOW</span>
            </button>
            
            <Link
              to="/contact"
              className="bg-transparent hover:bg-white border-4 border-white text-white hover:text-strike-red px-8 py-4 font-headline font-bold text-xl transition-all duration-300"
            >
              SCHEDULE SERVICE
            </Link>
          </div>
        </div>
      </section>

      {/* Fixed Emergency Button */}
      <div className="fixed bottom-0 left-0 right-0 bg-strike-red border-t-4 border-white p-4 z-40 md:hidden">
        <button
          onClick={handleCallNow}
          className="w-full bg-white hover:bg-strike-black text-strike-red hover:text-white border-2 border-white py-3 font-headline font-bold text-lg transition-all duration-300 flex items-center justify-center space-x-2"
        >
          <Phone className="h-5 w-5" />
          <span>EMERGENCY DISPATCH - CALL NOW</span>
        </button>
      </div>
    </div>
  );
};

export default EmergencyServices;