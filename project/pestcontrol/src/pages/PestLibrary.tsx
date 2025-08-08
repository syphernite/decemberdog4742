import React from 'react';
import { AlertTriangle, Shield, Clock, Info } from 'lucide-react';

const PestLibrary: React.FC = () => {
  const pestProfiles = [
    {
      name: 'Norway Rats',
      category: 'Rodents',
      dangerLevel: 'High',
      icon: '🐭',
      healthRisks: ['Disease transmission', 'Property damage', 'Contamination'],
      urgency: 'Same Day',
      treatment: 'Trapping & exclusion',
      description: 'Large, aggressive rodents that multiply rapidly and cause significant property damage.',
      signs: ['Droppings', 'Gnaw marks', 'Strange noises', 'Grease marks']
    },
    {
      name: 'Subterranean Termites',
      category: 'Wood Destroyers',
      dangerLevel: 'Critical',
      icon: '🐛',
      healthRisks: ['Structural damage', 'Financial loss', 'Home value reduction'],
      urgency: 'Immediate',
      treatment: 'Liquid barrier & baiting',
      description: 'Silent destroyers that can cause thousands in damage before detection.',
      signs: ['Mud tubes', 'Swarmers', 'Hollow wood', 'Discarded wings']
    },
    {
      name: 'German Cockroaches',
      category: 'Disease Carriers',
      dangerLevel: 'High',
      icon: '🪳',
      healthRisks: ['Asthma triggers', 'Bacteria spread', 'Food contamination'],
      urgency: 'Within 24 Hours',
      treatment: 'Gel baiting & IGR',
      description: 'Prolific breeders that spread disease and trigger allergic reactions.',
      signs: ['Live insects', 'Egg cases', 'Staining', 'Musty odor']
    },
    {
      name: 'Bed Bugs',
      category: 'Blood Feeders',
      dangerLevel: 'Urgent',
      icon: '🛌',
      healthRisks: ['Sleep disruption', 'Skin reactions', 'Psychological stress'],
      urgency: 'Same Day',
      treatment: 'Heat treatment & residual',
      description: 'Parasitic insects that feed on human blood while you sleep.',
      signs: ['Bite marks', 'Blood spots', 'Dark stains', 'Sweet odor']
    },
    {
      name: 'Paper Wasps',
      category: 'Stinging Insects',
      dangerLevel: 'Danger',
      icon: '🐝',
      healthRisks: ['Painful stings', 'Allergic reactions', 'Anaphylaxis risk'],
      urgency: 'Immediate',
      treatment: 'Nest removal & treatment',
      description: 'Aggressive defenders of their nests with potentially life-threatening stings.',
      signs: ['Visible nests', 'Increased activity', 'Buzzing sounds', 'Aggressive behavior']
    },
    {
      name: 'Black Widow Spiders',
      category: 'Venomous Arachnids',
      dangerLevel: 'Danger',
      icon: '🕷️',
      healthRisks: ['Venomous bites', 'Neurological symptoms', 'Medical emergency'],
      urgency: 'Immediate',
      treatment: 'Targeted spraying & removal',
      description: 'Highly venomous spiders whose bite can cause serious medical complications.',
      signs: ['Distinctive webs', 'Egg sacs', 'Shed skins', 'Live spiders']
    },
    {
      name: 'Carpenter Ants',
      category: 'Wood Damagers',
      dangerLevel: 'Medium',
      icon: '🐜',
      healthRisks: ['Structural damage', 'Wood deterioration', 'Property loss'],
      urgency: 'Within 48 Hours',
      treatment: 'Colony elimination',
      description: 'Large ants that excavate wood to create nests, weakening structures.',
      signs: ['Wood shavings', 'Large ants', 'Rustling sounds', 'Winged swarmers']
    },
    {
      name: 'House Centipedes',
      category: 'Predatory Arthropods',
      dangerLevel: 'Low',
      icon: '🪱',
      healthRisks: ['Minor bites', 'Startling appearance', 'Nuisance factor'],
      urgency: 'Scheduled Service',
      treatment: 'Moisture control & spraying',
      description: 'Fast-moving predators that actually help control other pest populations.',
      signs: ['Live insects', 'Shed skins', 'Moisture areas', 'Other pest presence']
    }
  ];

  const getDangerColor = (level: string) => {
    switch (level) {
      case 'Critical': return 'bg-red-600';
      case 'Danger': return 'bg-orange-500';
      case 'High': return 'bg-yellow-500';
      case 'Urgent': return 'bg-purple-500';
      case 'Medium': return 'bg-blue-500';
      case 'Low': return 'bg-green-500';
      default: return 'bg-gray-500';
    }
  };

  const getUrgencyColor = (urgency: string) => {
    if (urgency.includes('Immediate')) return 'text-red-600';
    if (urgency.includes('Same Day')) return 'text-orange-600';
    if (urgency.includes('24 Hours')) return 'text-yellow-600';
    if (urgency.includes('48 Hours')) return 'text-blue-600';
    return 'text-green-600';
  };

  return (
    <div className="pt-8">
      {/* Header */}
      <section className="bg-gradient-to-r from-strike-black to-strike-steel py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-headline font-bold text-4xl md:text-6xl text-white mb-6">
            PEST <span className="text-strike-red">INTELLIGENCE</span>
          </h1>
          <p className="font-body text-xl text-gray-200 max-w-3xl mx-auto">
            Know your enemy. Our comprehensive pest profiles help you identify threats 
            and understand the urgency of professional intervention.
          </p>
        </div>
      </section>

      {/* Filter/Category Section */}
      <section className="py-8 bg-white border-b-4 border-strike-red">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center space-x-2 space-y-2">
            <button className="bg-strike-red text-white px-4 py-2 font-body font-bold">
              ALL THREATS
            </button>
            <button className="bg-gray-200 hover:bg-strike-red hover:text-white text-strike-black px-4 py-2 font-body font-bold transition-all duration-300">
              CRITICAL
            </button>
            <button className="bg-gray-200 hover:bg-strike-red hover:text-white text-strike-black px-4 py-2 font-body font-bold transition-all duration-300">
              HIGH DANGER
            </button>
            <button className="bg-gray-200 hover:bg-strike-red hover:text-white text-strike-black px-4 py-2 font-body font-bold transition-all duration-300">
              URGENT
            </button>
          </div>
        </div>
      </section>

      {/* Pest Profiles Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pestProfiles.map((pest, index) => (
              <div
                key={pest.name}
                className="bg-white border-4 border-strike-black hover:border-strike-red transition-all duration-300 group animate-zoom-in"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                {/* Card Header */}
                <div className="bg-strike-black group-hover:bg-strike-red p-6 transition-all duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-4xl">{pest.icon}</span>
                    <span className={`px-3 py-1 text-xs font-headline font-bold text-white ${getDangerColor(pest.dangerLevel)}`}>
                      {pest.dangerLevel.toUpperCase()}
                    </span>
                  </div>
                  
                  <h3 className="font-headline font-bold text-white text-xl mb-2">
                    {pest.name}
                  </h3>
                  <span className="font-body text-gray-300 text-sm">
                    {pest.category}
                  </span>
                </div>

                {/* Card Body */}
                <div className="p-6">
                  <p className="font-body text-gray-700 mb-4">
                    {pest.description}
                  </p>

                  {/* Urgency */}
                  <div className="flex items-center space-x-2 mb-4">
                    <Clock className="h-5 w-5 text-strike-red" />
                    <span className="font-body font-bold text-sm">
                      RESPONSE: 
                    </span>
                    <span className={`font-body font-bold text-sm ${getUrgencyColor(pest.urgency)}`}>
                      {pest.urgency}
                    </span>
                  </div>

                  {/* Health Risks */}
                  <div className="mb-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <AlertTriangle className="h-5 w-5 text-strike-red" />
                      <span className="font-body font-bold text-sm">HEALTH RISKS:</span>
                    </div>
                    <ul className="space-y-1">
                      {pest.healthRisks.map((risk, i) => (
                        <li key={i} className="font-body text-xs text-gray-600 ml-6">
                          • {risk}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Warning Signs */}
                  <div className="mb-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <Info className="h-5 w-5 text-strike-red" />
                      <span className="font-body font-bold text-sm">WARNING SIGNS:</span>
                    </div>
                    <ul className="space-y-1">
                      {pest.signs.map((sign, i) => (
                        <li key={i} className="font-body text-xs text-gray-600 ml-6">
                          • {sign}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Treatment */}
                  <div className="bg-gray-100 p-3 mb-4">
                    <div className="flex items-center space-x-2 mb-1">
                      <Shield className="h-4 w-4 text-strike-red" />
                      <span className="font-body font-bold text-xs">TREATMENT:</span>
                    </div>
                    <span className="font-body text-xs text-gray-700">
                      {pest.treatment}
                    </span>
                  </div>

                  {/* Emergency Button */}
                  <button
                    onClick={() => window.location.href = 'tel:+1-555-STRIKE-1'}
                    className="w-full bg-strike-red hover:bg-strike-black text-white py-3 font-headline font-bold text-sm transition-all duration-300"
                  >
                    EMERGENCY RESPONSE
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Contact Banner */}
      <section className="py-12 bg-strike-red">
        <div className="container mx-auto px-4 text-center">
          <h3 className="font-headline font-bold text-white text-3xl mb-4">
            IDENTIFIED A THREAT?
          </h3>
          <p className="font-body text-white text-lg mb-6 max-w-2xl mx-auto">
            Don't wait for the problem to get worse. Our experts can identify and eliminate threats quickly.
          </p>
          <button
            onClick={() => window.location.href = 'tel:+1-555-STRIKE-1'}
            className="bg-white hover:bg-strike-black border-4 border-white text-strike-red hover:text-white px-8 py-4 font-headline font-bold text-xl transition-all duration-300"
          >
            GET IMMEDIATE HELP
          </button>
        </div>
      </section>
    </div>
  );
};

export default PestLibrary;