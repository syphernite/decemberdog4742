import React from 'react';
import { Target, Utensils, Users, TrendingUp } from 'lucide-react';

const Coaching = () => {
  const features = [
    {
      icon: Target,
      title: 'Personalized Workouts',
      description: 'Tailored training programs designed for your specific goals, fitness level, and schedule.'
    },
    {
      icon: Utensils,
      title: 'Nutrition Guidance',
      description: 'Macro-friendly meal plans and flexible dieting strategies that fit your lifestyle.'
    },
    {
      icon: TrendingUp,
      title: 'Accountability & Support',
      description: 'Regular check-ins, progress tracking, and ongoing support to keep you motivated.'
    },
    {
      icon: Users,
      title: 'Community Motivation',
      description: 'Join a supportive community of like-minded individuals on the same transformation journey.'
    }
  ];

  return (
    <section className="py-20 bg-gray-900 text-white" id="coaching">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Work With Me — <span className="text-orange-500">Wherever You Are</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Get world-class coaching delivered directly to you. Transform your body and mindset 
            with personalized support that fits your life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:bg-gray-750"
            >
              <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold mb-4 text-white">{feature.title}</h3>
              <p className="text-gray-300 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-12 py-6 rounded-full text-xl font-bold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
            Apply for Coaching
          </button>
          
          <p className="mt-4 text-gray-400">
            Limited spots available • Personalized onboarding process
          </p>
        </div>
      </div>
    </section>
  );
};

export default Coaching;