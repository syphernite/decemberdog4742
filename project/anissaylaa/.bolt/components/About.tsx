import React from 'react';
import { TrendingUp, DollarSign, Users } from 'lucide-react';

const About = () => {
  return (
    <section className="bg-black py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            About Me
          </h2>
          <p className="text-xl text-purple-300 font-semibold mb-8">
            No fluff. No crypto scams. Just real money moves.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              Started working young, learned to save smart, and now I'm here to help you do the same. 
              I'm not about those get-rich-quick schemes or complicated investment jargon.
            </p>
            
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm all about that hustle mentality - working my Amazon job, running side hustles, 
              and documenting every step of my wealth-building journey. If I can do it at 19, 
              you can do it too.
            </p>
            
            <p className="text-lg text-gray-300 leading-relaxed">
              My goal? To make financial education accessible, authentic, and actually fun. 
              Because building wealth shouldn't be boring or confusing.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-6">
            <div className="bg-gray-900 p-6 rounded-2xl border border-gray-800 hover:border-purple-500 transition-colors duration-300">
              <TrendingUp className="w-10 h-10 text-purple-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Wealth Building</h3>
              <p className="text-gray-400">From Amazon paychecks to multiple income streams</p>
            </div>
            
            <div className="bg-gray-900 p-6 rounded-2xl border border-gray-800 hover:border-pink-500 transition-colors duration-300">
              <DollarSign className="w-10 h-10 text-pink-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Smart Budgeting</h3>
              <p className="text-gray-400">Practical tips that actually work in real life</p>
            </div>
            
            <div className="bg-gray-900 p-6 rounded-2xl border border-gray-800 hover:border-blue-500 transition-colors duration-300">
              <Users className="w-10 h-10 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Community First</h3>
              <p className="text-gray-400">Building a supportive network of money-smart individuals</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;