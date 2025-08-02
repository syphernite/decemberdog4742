import React from 'react';
import { Gift, Users, MessageSquare, BookOpen, ArrowRight } from 'lucide-react';

const Mentorship = () => {
  return (
    <section id="mentorship" className="bg-black py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            A&Y Profit Lab
          </h2>
          <p className="text-xl text-purple-300 font-semibold mb-4">
            Join My Free Mentorship Community
          </p>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Get exclusive access to budgeting resources, connect with like-minded individuals, 
            and receive guidance on your wealth-building journey. No BS, just real value.
          </p>
        </div>
        
        {/* Value Proposition */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
          <div>
            <h3 className="text-2xl font-bold text-white mb-8">What You Get (Completely Free):</h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <Gift className="w-6 h-6 text-purple-400 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-white font-semibold mb-1">Budget Templates & Tools</h4>
                  <p className="text-gray-400">Ready-to-use spreadsheets and calculators</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Users className="w-6 h-6 text-pink-400 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-white font-semibold mb-1">Discord Community Access</h4>
                  <p className="text-gray-400">Connect with 1000+ money-focused individuals</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <MessageSquare className="w-6 h-6 text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-white font-semibold mb-1">Telegram Channel</h4>
                  <p className="text-gray-400">Daily tips and live Q&A sessions</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <BookOpen className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-white font-semibold mb-1">Exclusive Content</h4>
                  <p className="text-gray-400">Behind-the-scenes wealth building strategies</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-900 p-8 rounded-2xl border border-gray-800">
            <div className="aspect-video bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center mb-6">
              <div className="text-center text-white">
                <div className="text-5xl mb-4">🚀</div>
                <p className="text-lg font-semibold">A&Y Profit Lab</p>
                <p className="text-sm opacity-90">Whop Platform Preview</p>
              </div>
            </div>
            
            <div className="text-center">
              <p className="text-gray-300 mb-6">
                Join thousands of members already building wealth together
              </p>
              
              <div className="bg-black p-4 rounded-lg border border-gray-700 mb-6">
                <p className="text-green-400 font-semibold text-lg">100% FREE</p>
                <p className="text-gray-400 text-sm">No hidden fees. No upsells.</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-purple-900/50 to-pink-900/50 p-8 rounded-2xl border border-purple-500/30">
          <h3 className="text-2xl font-bold text-white mb-4">
            Ready to Level Up Your Finances?
          </h3>
          <p className="text-gray-300 mb-8">
            Stop scrolling through endless financial advice. Get actionable strategies that work.
          </p>
          
          <button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg inline-flex items-center space-x-2">
            <span>Get Free Access</span>
            <ArrowRight className="w-5 h-5" />
          </button>
          
          <p className="text-gray-400 text-sm mt-4">
            ✨ Join in 30 seconds • No spam, just value
          </p>
        </div>
      </div>
    </section>
  );
};

export default Mentorship;