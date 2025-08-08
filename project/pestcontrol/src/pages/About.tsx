import React from 'react';
import { Shield, Target, Zap, Award, Users, Clock } from 'lucide-react';

const About: React.FC = () => {
  const missionValues = [
    {
      icon: Target,
      title: 'RELENTLESS',
      description: 'We pursue complete pest elimination with unwavering determination until every threat is neutralized.'
    },
    {
      icon: Zap,
      title: 'FAST',
      description: 'Speed is critical in pest control. We respond rapidly and execute treatments with precision and urgency.'
    },
    {
      icon: Shield,
      title: 'GUARANTEED',
      description: 'Our results are backed by comprehensive guarantees. We stand behind every treatment we perform.'
    }
  ];

  const teamStats = [
    { number: '50+', label: 'Licensed Technicians' },
    { number: '24/7', label: 'Emergency Response' },
    { number: '15+', label: 'Years Experience' },
    { number: '99%', label: 'Customer Satisfaction' }
  ];

  const certifications = [
    'EPA Certified Technicians',
    'State Licensed Professionals',
    'IPM Specialists',
    'NPMA Member Company',
    'BBB A+ Rated',
    'Fully Insured & Bonded'
  ];

  return (
    <div className="pt-8">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-strike-black to-strike-steel py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-headline font-bold text-4xl md:text-6xl text-white mb-6">
            ELITE PEST <span className="text-strike-red">COMBAT FORCE</span>
          </h1>
          <p className="font-body text-xl text-gray-200 max-w-4xl mx-auto">
            We are not just another pest control company. We are specialized rapid-response professionals 
            trained to eliminate pest threats with military precision and unwavering commitment.
          </p>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="font-headline font-bold text-3xl md:text-4xl text-strike-black mb-8">
              OUR <span className="text-strike-red">MISSION</span>
            </h2>
            <div className="bg-strike-black border-4 border-strike-red p-8">
              <p className="font-body text-lg text-white leading-relaxed">
                "To provide rapid, professional pest elimination services that protect families, businesses, 
                and properties from the health risks and economic damage caused by pest infestations. We deploy 
                advanced treatment methods with military-style precision to achieve complete pest eradication 
                in the shortest time possible."
              </p>
            </div>
          </div>

          {/* Core Values */}
          <div className="grid md:grid-cols-3 gap-8">
            {missionValues.map((value, index) => (
              <div
                key={value.title}
                className="text-center group animate-zoom-in"
                style={{animationDelay: `${index * 0.2}s`}}
              >
                <div className="bg-strike-red group-hover:bg-strike-black border-4 border-strike-red p-8 mb-6 transition-all duration-300">
                  <value.icon className="h-16 w-16 text-white mx-auto" />
                </div>
                <h3 className="font-headline font-bold text-2xl text-strike-black mb-4">
                  {value.title}
                </h3>
                <p className="font-body text-gray-700 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team & Fleet */}
      <section className="py-16 bg-strike-black">
        <div className="container mx-auto px-4">
          <h2 className="font-headline font-bold text-3xl md:text-4xl text-white text-center mb-12">
            PROFESSIONAL <span className="text-strike-red">STRIKE FORCE</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Fleet Image Placeholder */}
            <div className="space-y-6">
              <div className="bg-gray-800 border-4 border-strike-red aspect-video flex items-center justify-center">
                <div className="text-center text-white">
                  <Users className="h-16 w-16 mx-auto mb-4 text-strike-red" />
                  <p className="font-headline font-bold text-xl">PROFESSIONAL FLEET</p>
                  <p className="font-body text-gray-300">State-of-the-art vehicles equipped for rapid response</p>
                </div>
              </div>
              
              <div className="bg-gray-800 border-4 border-strike-red aspect-video flex items-center justify-center">
                <div className="text-center text-white">
                  <Award className="h-16 w-16 mx-auto mb-4 text-strike-red" />
                  <p className="font-headline font-bold text-xl">UNIFORMED TECHNICIANS</p>
                  <p className="font-body text-gray-300">Professional appearance and expert training</p>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="space-y-8">
              <div>
                <h3 className="font-headline font-bold text-2xl text-white mb-6">
                  COMBAT STATISTICS
                </h3>
                <div className="grid grid-cols-2 gap-6">
                  {teamStats.map((stat, index) => (
                    <div
                      key={stat.label}
                      className="bg-strike-red border-4 border-white p-6 text-center animate-zoom-in"
                      style={{animationDelay: `${index * 0.1}s`}}
                    >
                      <div className="font-headline font-bold text-4xl text-white mb-2">
                        {stat.number}
                      </div>
                      <div className="font-body text-white text-sm">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Training & Certifications */}
              <div>
                <h3 className="font-headline font-bold text-2xl text-white mb-6">
                  CERTIFICATIONS & TRAINING
                </h3>
                <div className="space-y-3">
                  {certifications.map((cert, index) => (
                    <div
                      key={cert}
                      className="flex items-center space-x-3 animate-slide-in"
                      style={{animationDelay: `${index * 0.1}s`}}
                    >
                      <Shield className="h-5 w-5 text-strike-red flex-shrink-0" />
                      <span className="font-body text-white">{cert}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology & Methods */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="font-headline font-bold text-3xl md:text-4xl text-strike-black text-center mb-12">
            ADVANCED <span className="text-strike-red">COMBAT METHODS</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white border-4 border-strike-black p-8 hover:border-strike-red transition-all duration-300">
              <Zap className="h-12 w-12 text-strike-red mb-4" />
              <h3 className="font-headline font-bold text-xl text-strike-black mb-4">
                RAPID DEPLOYMENT
              </h3>
              <p className="font-body text-gray-700">
                GPS-tracked vehicles with real-time dispatch ensure we reach emergency sites 
                within 60 minutes of your call.
              </p>
            </div>
            
            <div className="bg-white border-4 border-strike-black p-8 hover:border-strike-red transition-all duration-300">
              <Target className="h-12 w-12 text-strike-red mb-4" />
              <h3 className="font-headline font-bold text-xl text-strike-black mb-4">
                PRECISION TREATMENT
              </h3>
              <p className="font-body text-gray-700">
                Advanced application equipment and EPA-approved materials ensure maximum 
                effectiveness with minimal environmental impact.
              </p>
            </div>
            
            <div className="bg-white border-4 border-strike-black p-8 hover:border-strike-red transition-all duration-300">
              <Shield className="h-12 w-12 text-strike-red mb-4" />
              <h3 className="font-headline font-bold text-xl text-strike-black mb-4">
                COMPREHENSIVE GUARANTEE
              </h3>
              <p className="font-body text-gray-700">
                Every treatment comes with written guarantees and follow-up service 
                to ensure complete pest elimination.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-16 bg-strike-red">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-headline font-bold text-4xl text-white mb-6">
            READY TO DEPLOY
          </h2>
          <p className="font-body text-xl text-white mb-8 max-w-3xl mx-auto">
            Our professional strike force is standing by 24/7/365, ready to respond to your 
            pest emergency with speed, precision, and guaranteed results.
          </p>
          
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 justify-center">
            <button
              onClick={() => window.location.href = 'tel:+1-555-STRIKE-1'}
              className="bg-white hover:bg-strike-black border-4 border-white text-strike-red hover:text-white px-8 py-4 font-headline font-bold text-xl transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <Clock className="h-6 w-6" />
              <span>EMERGENCY DISPATCH</span>
            </button>
            
            <button
              onClick={() => window.location.href = '/contact'}
              className="bg-transparent hover:bg-white border-4 border-white text-white hover:text-strike-red px-8 py-4 font-headline font-bold text-xl transition-all duration-300"
            >
              REQUEST INSPECTION
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;