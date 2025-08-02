import React from 'react';
import { Instagram, TrendingUp, MessageCircle, Eye } from 'lucide-react';

const SocialProof = () => {
  return (
    <section className="bg-gray-900 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Content & Social Proof
          </h2>
          <p className="text-xl text-gray-300">
            Creating viral content that actually helps people budget better
          </p>
        </div>
        
        {/* Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="text-center bg-black p-6 rounded-2xl border border-gray-800">
            <Instagram className="w-8 h-8 text-pink-400 mx-auto mb-3" />
            <div className="text-2xl font-bold text-white mb-1">32.8K</div>
            <div className="text-gray-400 text-sm">Followers</div>
          </div>
          
          <div className="text-center bg-black p-6 rounded-2xl border border-gray-800">
            <Eye className="w-8 h-8 text-purple-400 mx-auto mb-3" />
            <div className="text-2xl font-bold text-white mb-1">100K+</div>
            <div className="text-gray-400 text-sm">Views</div>
          </div>
          
          <div className="text-center bg-black p-6 rounded-2xl border border-gray-800">
            <MessageCircle className="w-8 h-8 text-blue-400 mx-auto mb-3" />
            <div className="text-2xl font-bold text-white mb-1">Daily</div>
            <div className="text-gray-400 text-sm">DMs</div>
          </div>
          
          <div className="text-center bg-black p-6 rounded-2xl border border-gray-800">
            <TrendingUp className="w-8 h-8 text-green-400 mx-auto mb-3" />
            <div className="text-2xl font-bold text-white mb-1">Viral</div>
            <div className="text-gray-400 text-sm">Content</div>
          </div>
        </div>
        
        {/* Content Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-black rounded-2xl overflow-hidden border border-gray-800 hover:border-purple-500 transition-colors duration-300">
            <div className="aspect-video bg-gradient-to-br from-purple-900 to-pink-900 flex items-center justify-center">
              <div className="text-center text-white">
                <div className="text-4xl mb-2">💰</div>
                <p className="text-sm">Budget Like a Pro</p>
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-white font-semibold mb-2">50/30/20 Rule Explained</h3>
              <p className="text-gray-400 text-sm">Simple budgeting that actually works</p>
            </div>
          </div>
          
          <div className="bg-black rounded-2xl overflow-hidden border border-gray-800 hover:border-pink-500 transition-colors duration-300">
            <div className="aspect-video bg-gradient-to-br from-pink-900 to-purple-900 flex items-center justify-center">
              <div className="text-center text-white">
                <div className="text-4xl mb-2">📈</div>
                <p className="text-sm">Side Hustle Tips</p>
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-white font-semibold mb-2">Amazon to Multiple Income</h3>
              <p className="text-gray-400 text-sm">How I diversified my income streams</p>
            </div>
          </div>
          
          <div className="bg-black rounded-2xl overflow-hidden border border-gray-800 hover:border-blue-500 transition-colors duration-300">
            <div className="aspect-video bg-gradient-to-br from-blue-900 to-purple-900 flex items-center justify-center">
              <div className="text-center text-white">
                <div className="text-4xl mb-2">💡</div>
                <p className="text-sm">Money Mindset</p>
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-white font-semibold mb-2">Gen Z Wealth Building</h3>
              <p className="text-gray-400 text-sm">Breaking money myths for our generation</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;