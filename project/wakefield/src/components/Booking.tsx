import React, { useState } from 'react';
import { Calendar, Mail, Target } from 'lucide-react';

const Booking = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    goals: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <section className="py-20 bg-gray-900 text-white" id="contact">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Let's Get <span className="text-orange-500">Started</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Ready to transform your life? Take the first step today. I'm here to guide you 
            every step of the way toward your strongest, healthiest, most confident self.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Contact Form */}
          <div className="bg-gray-800 p-8 rounded-2xl shadow-2xl">
            <h3 className="text-2xl font-bold mb-8">Start Your Journey Today</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                  placeholder="Enter your email address"
                  required
                />
              </div>

              <div>
                <label htmlFor="goals" className="block text-sm font-medium text-gray-300 mb-2">
                  Fitness Goals
                </label>
                <textarea
                  id="goals"
                  name="goals"
                  value={formData.goals}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                  placeholder="Tell me about your fitness goals and what you want to achieve..."
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white py-4 px-8 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Options */}
          <div className="space-y-8">
            <div className="bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <div className="flex items-center space-x-4 mb-6">
                <div className="bg-orange-500 w-12 h-12 rounded-full flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Free Consultation Call</h3>
                  <p className="text-gray-300">30-minute strategy session</p>
                </div>
              </div>
              <p className="text-gray-300 mb-6">
                Let's discuss your goals and see if we're a perfect fit. No pressure, just honest conversation about your fitness journey.
              </p>
              <button className="bg-white text-gray-900 px-6 py-3 rounded-full font-bold hover:bg-gray-100 transition-all">
                Book Free Call
              </button>
            </div>

            <div className="bg-gray-800 p-8 rounded-2xl shadow-lg">
              <div className="flex items-center space-x-4 mb-4">
                <div className="bg-orange-500 w-12 h-12 rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Email Direct</h3>
                  <p className="text-orange-500 font-medium">oli.wakefield@gmail.com</p>
                </div>
              </div>
              <p className="text-gray-300">
                Have a quick question? Send me an email and I'll get back to you within 24 hours.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;