import React, { useState } from 'react';
import { ExternalLink, Instagram, Mail, MapPin, Phone, Send, Clock, Star } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
      
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 3000);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Header Section */}
      <section className="relative py-32 bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/1190307/pexels-photo-1190307.jpeg?auto=compress&cs=tinysrgb&w=1920&h=800&fit=crop"
            alt="Contact background"
            className="w-full h-full object-cover opacity-10 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-purple-900/20 to-black/80"></div>
        </div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="relative z-10">
            <div className="inline-block mb-6">
              <span className="text-yellow-400 font-semibold text-lg tracking-widest uppercase animate-fade-in">Let's Connect</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-black text-white mb-8 animate-slide-up">
              <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent animate-glow">
                Get In Touch
              </span>
            </h1>
            <p className="text-2xl text-gray-300 max-w-3xl mx-auto animate-slide-up-delay">
              Ready to bring your vision to life? Let's discuss your next tattoo and create something unforgettable.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-black to-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="space-y-8 animate-slide-up">
              <div>
                <h2 className="text-4xl font-black text-white mb-6">Send a Message</h2>
                <p className="text-xl text-gray-400 leading-relaxed">
                  Have questions about pricing, availability, or want to discuss your tattoo idea? 
                  Drop me a line and I'll get back to you soon.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="group">
                  <label htmlFor="name" className="block text-lg font-semibold text-gray-300 mb-3">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-6 py-4 bg-gray-800/50 backdrop-blur-sm border-2 border-gray-600 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 transition-all duration-300 text-lg group-hover:border-gray-500"
                    placeholder="Your name"
                  />
                </div>

                <div className="group">
                  <label htmlFor="email" className="block text-lg font-semibold text-gray-300 mb-3">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-6 py-4 bg-gray-800/50 backdrop-blur-sm border-2 border-gray-600 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 transition-all duration-300 text-lg group-hover:border-gray-500"
                    placeholder="your@email.com"
                  />
                </div>

                <div className="group">
                  <label htmlFor="message" className="block text-lg font-semibold text-gray-300 mb-3">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-6 py-4 bg-gray-800/50 backdrop-blur-sm border-2 border-gray-600 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 transition-all duration-300 resize-none text-lg group-hover:border-gray-500"
                    placeholder="Tell me about your tattoo idea, size, placement, and any other details..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`group w-full py-5 px-8 rounded-2xl font-bold text-xl transition-all duration-500 transform hover:scale-105 flex items-center justify-center space-x-3 ${
                    isSubmitting
                      ? 'bg-gray-600 cursor-not-allowed'
                      : submitStatus === 'success'
                      ? 'bg-green-600 hover:bg-green-700 shadow-lg shadow-green-500/25'
                      : 'bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-300 hover:to-yellow-500 text-black hover:shadow-2xl hover:shadow-yellow-500/50'
                  }`}
                >
                  <span>
                    {isSubmitting 
                      ? 'Sending...' 
                      : submitStatus === 'success' 
                      ? 'Message Sent!' 
                      : 'Send Message'
                    }
                  </span>
                  <Send size={24} className={`${isSubmitting ? 'animate-pulse' : 'group-hover:translate-x-1 transition-transform duration-300'}`} />
                </button>
              </form>
            </div>

            {/* Contact Info & Booking */}
            <div className="space-y-8 animate-slide-up-delay">
              {/* Booking Section */}
              <div className="relative bg-gradient-to-br from-yellow-400 to-yellow-600 p-10 rounded-3xl text-black overflow-hidden group hover:scale-105 transition-transform duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-300 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <h3 className="text-3xl font-black mb-6">Ready to Book?</h3>
                  <p className="text-xl mb-8 leading-relaxed">
                    For appointments and consultations, use my secure booking system powered by Square.
                  </p>
                  <a
                    href="https://tattoo-johnny.square.site"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-3 bg-black text-yellow-400 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-gray-900 transition-all duration-300 transform hover:scale-110 shadow-xl"
                  >
                    <span>Book Your Session</span>
                    <ExternalLink size={24} className="group-hover:rotate-12 transition-transform duration-300" />
                  </a>
                </div>
              </div>

              {/* Contact Details */}
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-10 rounded-3xl border border-gray-700/50 hover:border-yellow-400/50 transition-all duration-300">
                <h3 className="text-3xl font-black text-white mb-8">Contact Details</h3>
                
                <div className="space-y-6">
                  <div className="flex items-center space-x-4 group">
                    <div className="p-3 bg-yellow-400/10 rounded-full group-hover:bg-yellow-400/20 transition-colors duration-300">
                      <MapPin className="text-yellow-400 flex-shrink-0" size={24} />
                    </div>
                    <span className="text-gray-300 text-lg group-hover:text-white transition-colors duration-300">Atlanta, GA Metro Area</span>
                  </div>
                  
                  <div className="flex items-center space-x-4 group">
                    <div className="p-3 bg-yellow-400/10 rounded-full group-hover:bg-yellow-400/20 transition-colors duration-300">
                      <Instagram className="text-yellow-400 flex-shrink-0" size={24} />
                    </div>
                    <a
                      href="https://instagram.com/tattoojohnnyatl"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 text-lg font-medium"
                    >
                      @tattoojohnnyatl
                    </a>
                  </div>
                </div>

                <div className="mt-10 pt-8 border-t border-gray-600">
                  <h4 className="text-2xl font-bold text-white mb-6 flex items-center space-x-3">
                    <Clock className="text-yellow-400" size={28} />
                    <span>Studio Hours</span>
                  </h4>
                  <div className="text-gray-300 space-y-3 text-lg">
                    <div className="flex justify-between items-center">
                      <span>Tuesday - Saturday:</span>
                      <span className="text-yellow-400 font-semibold">12pm - 8pm</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Sunday - Monday:</span>
                      <span className="text-yellow-400 font-semibold">By Appointment</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Reviews Section */}
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-10 rounded-3xl border border-gray-700/50">
                <h3 className="text-3xl font-black text-white mb-8 flex items-center space-x-3">
                  <Star className="text-yellow-400" size={32} />
                  <span>Client Reviews</span>
                </h3>
                
                <div className="space-y-6">
                  <div className="border-l-4 border-yellow-400 pl-6">
                    <div className="flex text-yellow-400 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={16} fill="currentColor" />
                      ))}
                    </div>
                    <p className="text-gray-300 italic text-lg leading-relaxed">
                      "Johnny's attention to detail is incredible. My tattoo came out exactly as I envisioned!"
                    </p>
                    <p className="text-gray-400 mt-2 font-medium">- Sarah M.</p>
                  </div>
                  
                  <div className="border-l-4 border-yellow-400 pl-6">
                    <div className="flex text-yellow-400 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={16} fill="currentColor" />
                      ))}
                    </div>
                    <p className="text-gray-300 italic text-lg leading-relaxed">
                      "Professional, clean, and artistic. Best tattoo experience in Atlanta!"
                    </p>
                    <p className="text-gray-400 mt-2 font-medium">- Mike R.</p>
                  </div>
                </div>
              </div>

              {/* Map Section */}
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-10 rounded-3xl border border-gray-700/50 hover:border-yellow-400/50 transition-all duration-300">
                <h3 className="text-3xl font-black text-white mb-6">Location</h3>
                <div className="aspect-video bg-gradient-to-br from-gray-700 to-gray-800 rounded-2xl flex items-center justify-center relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="text-center relative z-10">
                    <MapPin className="text-yellow-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" size={64} />
                    <p className="text-white font-bold text-2xl mb-2">Atlanta, Georgia</p>
                    <p className="text-gray-400 text-lg">Serving the Metro Area</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;