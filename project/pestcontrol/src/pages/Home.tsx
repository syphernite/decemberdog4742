import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Clock, Shield, Target, Activity, Zap } from 'lucide-react';

const Home: React.FC = () => {
  const handleCallNow = () => {
    window.location.href = 'tel:+1-555-STRIKE-1';
  };

  const pestCategories = [
    { name: 'Rodents', icon: '🐭', urgency: 'HIGH' },
    { name: 'Termites', icon: '🐛', urgency: 'CRITICAL' },
    { name: 'Cockroaches', icon: '🪳', urgency: 'HIGH' },
    { name: 'Bed Bugs', icon: '🛌', urgency: 'URGENT' },
    { name: 'Wasps', icon: '🐝', urgency: 'DANGER' },
  ];

  const whyChooseUs = [
    {
      icon: Shield,
      title: 'GUARANTEED RESULTS',
      desc: 'We eliminate pests or we return until they\'re gone'
    },
    {
      icon: Clock,
      title: 'UNDER 1 HOUR',
      desc: 'Emergency dispatch in under 60 minutes'
    },
    {
      icon: Target,
      title: 'PRECISION STRIKE',
      desc: 'Advanced treatment methods that work fast'
    },
    {
      icon: Activity,
      title: 'BIOHAZARD SAFE',
      desc: 'EPA certified treatments safe for families'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-strike-black via-strike-steel to-strike-black flex items-center">
        <div className="absolute inset-0 bg-black/40"></div>
        
        {/* Hero Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-repeat" 
               style={{backgroundImage: "url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\"><polygon points=\"0,0 50,25 100,0 100,100 0,100\" fill=\"%23B20000\"/></svg>')", backgroundSize: '100px 100px'}}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <h1 className="font-headline font-bold text-4xl md:text-6xl lg:text-7xl text-white mb-6 animate-slide-in">
              BUGS, RODENTS, AND INFESTATIONS — 
              <span className="text-strike-red block">ELIMINATED IN HOURS</span>
            </h1>
            
            <p className="font-body text-xl md:text-2xl text-gray-200 mb-8 animate-slide-in" style={{animationDelay: '0.2s'}}>
              Available 24/7 for Residential & Commercial Properties
            </p>

            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-12 animate-slide-in" style={{animationDelay: '0.4s'}}>
              <button
                onClick={handleCallNow}
                className="bg-strike-red hover:bg-white hover:text-strike-red border-4 border-strike-red text-white px-8 py-4 font-headline font-bold text-lg transition-all duration-300 flex items-center justify-center space-x-2 animate-pulse-glow"
              >
                <Phone className="h-5 w-5" />
                <span>CALL NOW - WE'RE ON THE WAY</span>
              </button>
              
              <Link
                to="/contact"
                className="bg-transparent hover:bg-strike-red border-4 border-white text-white hover:border-strike-red px-8 py-4 font-headline font-bold text-lg transition-all duration-300"
              >
                BOOK EMERGENCY SERVICE
              </Link>
            </div>

            {/* Emergency Banner */}
            <div className="bg-strike-red border-4 border-white p-4 animate-flash">
              <div className="flex items-center justify-center space-x-4">
                <Zap className="h-6 w-6 text-white animate-flash" />
                <span className="font-headline font-bold text-white text-lg md:text-xl">
                  EMERGENCY DISPATCH IN UNDER 1 HOUR
                </span>
                <Zap className="h-6 w-6 text-white animate-flash" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pest Categories */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="font-headline font-bold text-3xl md:text-4xl text-strike-black text-center mb-12">
            CRITICAL PEST <span className="text-strike-red">ELIMINATION</span>
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {pestCategories.map((pest, index) => (
              <div
                key={pest.name}
                className="bg-strike-black hover:bg-strike-red border-4 border-strike-red text-center p-6 transition-all duration-300 group animate-zoom-in"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="text-4xl mb-3">{pest.icon}</div>
                <h3 className="font-headline font-bold text-white text-lg mb-2">{pest.name}</h3>
                <span className="bg-strike-red group-hover:bg-white group-hover:text-strike-red text-white px-3 py-1 text-xs font-body font-bold">
                  {pest.urgency}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose StrikeForce */}
      <section className="py-16 bg-strike-black">
        <div className="container mx-auto px-4">
          <h2 className="font-headline font-bold text-3xl md:text-4xl text-white text-center mb-12">
            WHY CHOOSE <span className="text-strike-red">STRIKEFORCE</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <div
                key={item.title}
                className="text-center group animate-zoom-in"
                style={{animationDelay: `${index * 0.2}s`}}
              >
                <div className="bg-strike-red group-hover:bg-white p-6 mb-4 inline-block transition-all duration-300">
                  <item.icon className="h-12 w-12 text-white group-hover:text-strike-red" />
                </div>
                <h3 className="font-headline font-bold text-white text-lg mb-3">{item.title}</h3>
                <p className="font-body text-gray-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 24/7 Hotline Banner */}
      <section className="py-8 bg-strike-red">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <h3 className="font-headline font-bold text-white text-2xl md:text-3xl">
                PEST EMERGENCY? WE RESPOND NOW!
              </h3>
              <p className="font-body text-white text-lg">
                Licensed technicians standing by 24/7/365
              </p>
            </div>
            
            <button
              onClick={handleCallNow}
              className="bg-white hover:bg-strike-black border-4 border-white hover:border-strike-red text-strike-red hover:text-white px-8 py-4 font-headline font-bold text-xl transition-all duration-300"
            >
              (555) STRIKE-1
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;