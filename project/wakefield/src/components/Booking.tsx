import React, { useState } from 'react';
import { Calendar, Mail } from 'lucide-react';

const Booking = () => {
  const [formData, setFormData] = useState({ name: '', email: '', goals: '' });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <section className="py-20 bg-gray-900 text-white" id="contact">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Let’s Get <span className="text-sky-400">Started</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Ready to move? Tell me your goals and I’ll reply with next steps.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Contact Form */}
          <div className="bg-gray-800 p-8 rounded-2xl shadow-2xl">
            <h3 className="text-2xl font-bold mb-8">Apply for Coaching</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Full Name
                </label>
                <input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all"
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
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all"
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
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all"
                  placeholder="Share your goals and current routine…"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-sky-500 hover:bg-sky-600 text-white py-4 px-8 rounded-lg font-bold text-lg transition-all duration-300 hover:shadow-xl"
              >
                Send Application
              </button>
            </form>
          </div>

          {/* Contact Options */}
          <div className="space-y-8">
            <div className="bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <div className="flex items-center space-x-4 mb-6">
                <div className="bg-sky-500 w-12 h-12 rounded-full flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Free Consultation Call</h3>
                  <p className="text-gray-300">30-minute strategy session</p>
                </div>
              </div>
              <p className="text-gray-300 mb-6">
                We’ll map the first wins and confirm your plan.
              </p>
              <button className="bg-white text-gray-900 px-6 py-3 rounded-full font-bold hover:bg-gray-100 transition-all">
                Book Free Call
              </button>
            </div>

            <div className="bg-gray-800 p-8 rounded-2xl shadow-lg">
              <div className="flex items-center space-x-4 mb-4">
                <div className="bg-sky-500 w-12 h-12 rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Email Direct</h3>
                  <p className="text-sky-400 font-medium">oli.wakefield@gmail.com</p>
                </div>
              </div>
              <p className="text-gray-300">Quick question? I typically reply within 24 hours.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;
