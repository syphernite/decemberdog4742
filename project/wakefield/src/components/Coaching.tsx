import React from 'react';
import { Target, Utensils, Users, TrendingUp } from 'lucide-react';

const Coaching = () => {
  const features = [
    { icon: Target, title: 'Personalized Workouts', description: 'Programs tailored to your goal, level, and schedule.' },
    { icon: Utensils, title: 'Nutrition Guidance', description: 'Macro targets and flexible meals you’ll actually enjoy.' },
    { icon: TrendingUp, title: 'Accountability & Support', description: 'Check-ins, progress tracking, and form feedback.' },
    { icon: Users, title: 'Community Motivation', description: 'Be part of a supportive, like-minded crew.' },
  ];

  return (
    <section className="py-20 bg-gray-900 text-white" id="coaching">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Work With Me — <span className="text-sky-400">Wherever You Are</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            World-class coaching delivered to you. Train smarter. Eat better. Stay consistent.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((f) => (
            <div
              key={f.title}
              className="bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:bg-gray-700"
            >
              <div className="bg-sky-500 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <f.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">{f.title}</h3>
              <p className="text-gray-300 leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="#contact"
            className="bg-sky-500 hover:bg-sky-600 text-white px-12 py-6 rounded-full text-xl font-bold transition-all duration-300 hover:shadow-2xl"
          >
            Apply for Coaching
          </a>
          <p className="mt-4 text-gray-400">Limited spots • Personalized onboarding</p>
        </div>
      </div>
    </section>
  );
};

export default Coaching;
