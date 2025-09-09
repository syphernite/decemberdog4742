import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, Instagram, MapPin, Clock } from 'lucide-react';
import siteData from '../content/site.json';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    preferredDate: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
      console.log('Contact form submitted:', formData);
      setIsSubmitting(false);
      setShowSuccess(true);
      
      // Reset form after success
      setTimeout(() => {
        setShowSuccess(false);
        setFormData({ name: '', phone: '', preferredDate: '', message: '' });
      }, 3000);
    }, 1500);
  };

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-charcoal mb-4">Get in Touch</h1>
          <p className="text-xl text-bone">
            Have questions? Want to book a cut? We're here to help.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
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
                <h3 className="text-2xl font-bold text-success mb-2">Message Sent!</h3>
                <p className="text-bone">
                  We'll get back to you within 24 hours. For immediate booking, please call or text.
                </p>
              </motion.div>
            ) : (
              <div className="bg-bone rounded-lg p-8 shadow-lg">
                <h2 className="text-2xl font-bold text-charcoal mb-6">Send Us a Message</h2>
                
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
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-copper focus:border-copper"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-bone mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-copper focus:border-copper"
                    />
                  </div>

                  <div>
                    <label htmlFor="preferredDate" className="block text-sm font-medium text-bone mb-2">
                      Preferred Date (Optional)
                    </label>
                    <input
                      type="date"
                      id="preferredDate"
                      name="preferredDate"
                      value={formData.preferredDate}
                      onChange={handleChange}
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-copper focus:border-copper"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-bone mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      placeholder="Tell us about your haircut needs, questions, or any special requests..."
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-copper focus:border-copper resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-copper text-bone py-3 px-6 rounded-lg hover:bg-copper/90 disabled:bg-charcoal transition-colors flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-copper focus:ring-offset-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></div>
                        Sending...
                      </>
                    ) : (
                      'Send Message'
                    )}
                  </button>
                </form>
              </div>
            )}
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-8"
          >
            {/* Quick Contact */}
            <div className="bg-bone rounded-lg p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-charcoal mb-6">Quick Contact</h2>
              
              <div className="space-y-4">
                <a
                  href={`tel:${siteData.business.phone}`}
                  className="flex items-center gap-4 p-4 rounded-lg hover:bg-copper/5 transition-colors group"
                >
                  <div className="w-12 h-12 bg-copper rounded-lg flex items-center justify-center group-hover:bg-copper/80 transition-colors">
                    <Phone size={24} className="text-bone" />
                  </div>
                  <div>
                    <div className="font-semibold text-charcoal">Call or Text</div>
                    <div className="text-copper">{siteData.business.phone}</div>
                  </div>
                </a>

                <a
                  href={`mailto:${siteData.business.email}`}
                  className="flex items-center gap-4 p-4 rounded-lg hover:bg-copper/5 transition-colors group"
                >
                  <div className="w-12 h-12 bg-copper rounded-lg flex items-center justify-center group-hover:bg-copper/80 transition-colors">
                    <Mail size={24} className="text-bone" />
                  </div>
                  <div>
                    <div className="font-semibold text-charcoal">Email</div>
                    <div className="text-copper">{siteData.business.email}</div>
                  </div>
                </a>

                <a
                  href={siteData.business.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-lg hover:bg-copper/5 transition-colors group"
                >
                  <div className="w-12 h-12 bg-copper rounded-lg flex items-center justify-center group-hover:bg-copper/80 transition-colors">
                    <Instagram size={24} className="text-bone" />
                  </div>
                  <div>
                    <div className="font-semibold text-charcoal">Instagram</div>
                    <div className="text-copper">@copperheadcuts</div>
                  </div>
                </a>
              </div>
            </div>

            {/* Hours & Service Area */}
            <div className="bg-bone rounded-lg p-8 shadow-lg">
              <h3 className="text-xl font-bold text-charcoal mb-4 flex items-center gap-2">
                <Clock size={24} />
                Hours & Availability
              </h3>
              <div className="space-y-2 text-bone mb-6">
                <div className="flex justify-between">
                  <span>Monday - Friday:</span>
                  <span>8:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday:</span>
                  <span>8:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday:</span>
                  <span>By appointment</span>
                </div>
              </div>

              <h3 className="text-xl font-bold text-charcoal mb-4 flex items-center gap-2">
                <MapPin size={24} />
                Service Area
              </h3>
              <p className="text-bone mb-4">
                We serve the greater {siteData.business.city} within {siteData.business.radius}.
              </p>
              <div className="grid grid-cols-2 gap-1 text-sm text-bone">
                {siteData.serviceArea.map((area) => (
                  <span key={area}>• {area}</span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};