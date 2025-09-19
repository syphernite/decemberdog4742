import React, { useState } from 'react';
import { MapPin, Phone, Clock, Car, Mail, Send } from 'lucide-react';
import { businessConfig } from '../config/business';
import HoursTable from '../components/HoursTable';

export default function Visit() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would submit to Formspree or another service
    alert('Thank you for your message! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="pt-24 pb-16 bg-charcoal min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Visit Us</h1>
          <p className="text-gray-300 text-lg">Come experience TimeOut Tavern for yourself</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-slate-850 p-6 rounded-lg border border-gray-700">
              <h2 className="text-2xl font-bold text-white mb-6">Get In Touch</h2>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="w-6 h-6 text-amber-500 mr-3 mt-1" />
                  <div>
                    <h3 className="text-white font-semibold mb-1">Address</h3>
                    <p className="text-gray-300">{businessConfig.address}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="w-6 h-6 text-amber-500 mr-3 mt-1" />
                  <div>
                    <h3 className="text-white font-semibold mb-1">Phone</h3>
                    <a 
                      href={businessConfig.phoneLink}
                      className="text-gray-300 hover:text-amber-500 transition-colors duration-200 ease-in-out hover:underline"
                    >
                      {businessConfig.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <Car className="w-6 h-6 text-amber-500 mr-3 mt-1" />
                  <div>
                    <h3 className="text-white font-semibold mb-1">Parking</h3>
                    <p className="text-gray-300">Private lot available</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-slate-700">
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(businessConfig.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-amber-500 text-charcoal px-6 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-amber-500/30 transition-all duration-200 ease-in-out"
                >
                  <MapPin className="w-5 h-5 mr-2" />
                  Get Directions
                </a>
              </div>
            </div>

            <HoursTable />
          </div>

          {/* Contact Form */}
          <div className="bg-slate-850 p-6 rounded-lg border border-gray-700">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <Mail className="w-6 h-6 mr-2 text-amber-500" />
              Send us a Message
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 bg-charcoal border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors duration-200 ease-in-out"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 bg-charcoal border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors duration-200 ease-in-out"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  className="w-full px-4 py-2 bg-charcoal border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent resize-vertical transition-colors duration-200 ease-in-out"
                  placeholder="Tell us about your experience, ask a question, or let us know how we can help..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-amber-500 text-charcoal px-6 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-amber-500/30 transition-all duration-200 ease-in-out flex items-center justify-center"
              >
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-slate-850 p-6 rounded-lg border border-gray-700 text-center">
            <div className="w-12 h-12 bg-amber-500 rounded-lg mx-auto mb-4 flex items-center justify-center">
              <Clock className="w-6 h-6 text-charcoal" />
            </div>
            <h3 className="text-white font-semibold mb-2">Open Late</h3>
            <p className="text-gray-300 text-sm">Until midnight weekdays, 2AM weekends</p>
          </div>

          <div className="bg-slate-850 p-6 rounded-lg border border-gray-700 text-center">
            <div className="w-12 h-12 bg-amber-500 rounded-lg mx-auto mb-4 flex items-center justify-center">
              <Car className="w-6 h-6 text-charcoal" />
            </div>
            <h3 className="text-white font-semibold mb-2">Free Parking</h3>
            <p className="text-gray-300 text-sm">Private lot with plenty of spaces</p>
          </div>

          <div className="bg-slate-850 p-6 rounded-lg border border-gray-700 text-center">
            <div className="w-12 h-12 bg-amber-500 rounded-lg mx-auto mb-4 flex items-center justify-center">
              <Phone className="w-6 h-6 text-charcoal" />
            </div>
            <h3 className="text-white font-semibold mb-2">Take-Out Available</h3>
            <p className="text-gray-300 text-sm">Call ahead for quick pickup</p>
          </div>

          <div className="bg-slate-850 p-6 rounded-lg border border-gray-700 text-center">
            <div className="w-12 h-12 bg-amber-500 rounded-lg mx-auto mb-4 flex items-center justify-center">
              <Mail className="w-6 h-6 text-charcoal" />
            </div>
            <h3 className="text-white font-semibold mb-2">Cards Accepted</h3>
            <p className="text-gray-300 text-sm">All major credit cards welcome</p>
          </div>
        </div>

        {/* Map Placeholder */}
        <div className="bg-slate-850 rounded-lg p-8 text-center border border-gray-700">
          <MapPin className="w-16 h-16 text-amber-500 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-white mb-2">Find Us in Newport</h3>
          <p className="text-gray-300 mb-6">{businessConfig.address}</p>
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(businessConfig.address)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-amber-500 hover:text-amber-400 font-semibold hover:underline transition-colors duration-200 ease-in-out"
          >
            Open in Google Maps
            <MapPin className="w-4 h-4 ml-2" />
          </a>
        </div>
      </div>
    </div>
  );
}