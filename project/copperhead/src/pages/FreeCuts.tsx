import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Users, Calendar, Mail, Phone } from 'lucide-react';
import { BadgeCounter } from '../components/BadgeCounter';
import siteData from '../content/site.json';

export const FreeCuts: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      console.log('Free cuts signup submitted:', formData);
      setIsSubmitting(false);
      setShowSuccess(true);
      
      // Reset form after success
      setTimeout(() => {
        setShowSuccess(false);
        setFormData({ name: '', email: '', phone: '' });
      }, 3000);
    }, 1500);
  };

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-6">
            <BadgeCounter
              count={siteData.freeCuts.totalGiven}
              label="Free Cuts Given"
              className="scale-125"
            />
          </div>
          <h1 className="text-4xl font-bold text-charcoal mb-4">Free Cuts Program</h1>
          <p className="text-xl text-bone max-w-3xl mx-auto">
            {siteData.freeCuts.description}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Program Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-8"
          >
            <div className="bg-bone rounded-lg p-8 shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <Heart className="w-8 h-8 text-success" />
                <h2 className="text-2xl font-bold text-charcoal">Giving Back</h2>
              </div>
              <p className="text-bone mb-6">
                Every month, we host a community event where we provide free haircuts 
                to those in need. From students preparing for job interviews to 
                families facing tough times, everyone deserves to look and feel their best.
              </p>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="p-4 bg-success/10 rounded-lg">
                  <Users className="w-8 h-8 text-success mx-auto mb-2" />
                  <div className="text-2xl font-bold text-success">50+</div>
                  <div className="text-sm text-bone">People Helped Monthly</div>
                </div>
                <div className="p-4 bg-copper/10 rounded-lg">
                  <Calendar className="w-8 h-8 text-copper mx-auto mb-2" />
                  <div className="text-2xl font-bold text-copper">24</div>
                  <div className="text-sm text-bone">Events This Year</div>
                </div>
              </div>
            </div>

            {/* Next Event */}
            <div className="bg-success/10 border border-success rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <Calendar className="w-6 h-6 text-success" />
                <h3 className="text-xl font-bold text-success">Next Free Cut Day</h3>
              </div>
              <p className="text-lg font-semibold text-charcoal mb-2">
                February 15th, 2025
              </p>
              <p className="text-bone mb-4">
                10:00 AM - 4:00 PM at Community Center Downtown
              </p>
              <p className="text-sm text-bone">
                No appointment needed. First come, first served.
              </p>
            </div>
          </motion.div>

          {/* Signup Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            {showSuccess ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-success/10 border border-success rounded-lg p-8 text-center"
              >
                <div className="w-16 h-16 bg-success rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-bone" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-success mb-2">You're On The List!</h3>
                <p className="text-bone">
                  We'll notify you about upcoming free cut events and community initiatives.
                </p>
              </motion.div>
            ) : (
              <div className="bg-bone rounded-lg p-8 shadow-lg">
                <h2 className="text-2xl font-bold text-charcoal mb-6">Join Our Community List</h2>
                <p className="text-bone mb-6">
                  Get notified about upcoming free cut events, community initiatives, 
                  and ways to help spread the word.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-bone mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-success focus:border-success"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-bone mb-2 flex items-center gap-2">
                      <Mail size={16} />
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-success focus:border-success"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-bone mb-2 flex items-center gap-2">
                      <Phone size={16} />
                      Phone Number (Optional)
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-success focus:border-success"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-success text-bone py-3 px-6 rounded-lg hover:bg-success/90 disabled:bg-charcoal transition-colors flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-success focus:ring-offset-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></div>
                        Joining...
                      </>
                    ) : (
                      'Join the List'
                    )}
                  </button>
                </form>

                <p className="text-xs text-bone mt-4">
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </div>
            )}
          </motion.div>
        </div>

        {/* Previous Events Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-16"
        >
          <h2 className="text-3xl font-bold text-charcoal text-center mb-12">Previous Events</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-bone rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://images.pexels.com/photos/1570807/pexels-photo-1570807.jpeg"
                alt="Community free cut event"
                className="w-full h-48 object-cover"
                loading="lazy"
              />
              <div className="p-4">
                <h3 className="font-bold text-charcoal mb-2">January Community Day</h3>
                <p className="text-sm text-bone">45 free cuts given at the downtown community center</p>
              </div>
            </div>

            <div className="bg-bone rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://images.pexels.com/photos/1570799/pexels-photo-1570799.jpeg"
                alt="Youth program free cuts"
                className="w-full h-48 object-cover"
                loading="lazy"
              />
              <div className="p-4">
                <h3 className="font-bold text-charcoal mb-2">Youth Program Partnership</h3>
                <p className="text-sm text-bone">Back-to-school cuts for local high school students</p>
              </div>
            </div>

            <div className="bg-bone rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://images.pexels.com/photos/1570806/pexels-photo-1570806.jpeg"
                alt="Holiday giving event"
                className="w-full h-48 object-cover"
                loading="lazy"
              />
              <div className="p-4">
                <h3 className="font-bold text-charcoal mb-2">Holiday Giving</h3>
                <p className="text-sm text-bone">Special holiday event with 60+ participants</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};