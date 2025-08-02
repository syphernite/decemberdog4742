import React from 'react';
import { Instagram, Play, Youtube, Mail, MessageCircle } from 'lucide-react';

const Contact = () => {
  return (
    <section className="bg-gray-900 py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
          Let's Connect
        </h2>
        <p className="text-xl text-gray-300 mb-12">
          Follow my journey and let's build wealth together
        </p>
        
        {/* Social Media Buttons */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <a 
            href="https://instagram.com/anissaylaa" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white p-4 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex flex-col items-center space-y-2"
          >
            <Instagram className="w-8 h-8" />
            <span className="font-semibold">Instagram</span>
            <span className="text-sm opacity-90">@anissaylaa</span>
          </a>
          
          <a 
            href="#" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-black to-gray-800 hover:from-gray-800 hover:to-gray-700 text-white p-4 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex flex-col items-center space-y-2 border border-gray-700"
          >
            <Play className="w-8 h-8" />
            <span className="font-semibold">TikTok</span>
            <span className="text-sm opacity-90">@anissaylaa</span>
          </a>
          
          <a 
            href="#" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white p-4 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex flex-col items-center space-y-2"
          >
            <Youtube className="w-8 h-8" />
            <span className="font-semibold">YouTube</span>
            <span className="text-sm opacity-90">Coming Soon</span>
          </a>
          
          <a 
            href="mailto:hello@anissaylaa.com" 
            className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white p-4 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex flex-col items-center space-y-2"
          >
            <Mail className="w-8 h-8" />
            <span className="font-semibold">Email</span>
            <span className="text-sm opacity-90">Business</span>
          </a>
        </div>
        
        {/* Collaboration CTA */}
        <div className="bg-black p-8 rounded-2xl border border-gray-800">
          <MessageCircle className="w-12 h-12 text-purple-400 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-white mb-4">
            Want to Collaborate?
          </h3>
          <p className="text-gray-300 mb-6">
            I'm always open to partnerships with brands that align with my values. 
            Let's create content that actually helps people build wealth.
          </p>
          
          <button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105">
            DM Me for Collabs
          </button>
        </div>
        
        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-gray-800">
          <p className="text-gray-500 text-sm">
            © 2025 Anissa. Building wealth, one budget at a time. 💰
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;