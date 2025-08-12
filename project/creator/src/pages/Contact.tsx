import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  EnvelopeIcon, 
  PhoneIcon, 
  MapPinIcon,
  CheckIcon,
  CalendarIcon,
  ClockIcon
} from '@heroicons/react/24/outline';

const projectTypes = [
  'Sponsored Content',
  'Product Review',
  'Brand Partnership',
  'Event Appearance',
  'Speaking Engagement',
  'UGC Creation',
  'Consulting',
  'Other'
];

const budgetRanges = [
  'Under $5,000',
  '$5,000 - $10,000',
  '$10,000 - $25,000',
  '$25,000 - $50,000',
  '$50,000+',
  'Let\'s discuss'
];

const timelines = [
  'ASAP (Rush fee applies)',
  'Within 2 weeks',
  '2-4 weeks',
  '1-2 months',
  '2+ months',
  'Flexible'
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: '',
    budget: '',
    timeline: '',
    message: '',
    phone: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitted(true);
    setIsSubmitting(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen py-20 flex items-center justify-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="max-w-md mx-auto text-center glass-panel p-8"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="w-16 h-16 bg-gradient-to-r from-neon-violet to-neon-cyan rounded-full flex items-center justify-center mx-auto mb-6"
          >
            <CheckIcon className="h-8 w-8 text-white" />
          </motion.div>
          <h2 className="text-2xl font-display font-bold text-white mb-4">
            Message Sent Successfully!
          </h2>
          <p className="text-gray-400 mb-6">
            Thank you for reaching out. I'll get back to you within 24 hours to discuss your project.
          </p>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => {
              setIsSubmitted(false);
              setFormData({
                name: '',
                email: '',
                company: '',
                projectType: '',
                budget: '',
                timeline: '',
                message: '',
                phone: ''
              });
            }}
            className="px-6 py-3 bg-gradient-to-r from-neon-violet to-neon-cyan text-white font-medium hover:shadow-neon transition-all duration-300"
          >
            Send Another Message
          </motion.button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-display font-black mb-4">
            <span className="gradient-text">GET IN</span> TOUCH
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Ready to create something amazing together? Let's discuss your project and bring your vision to life.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="space-y-8"
          >
            <div className="glass-panel p-6">
              <h2 className="text-xl font-display font-bold text-white mb-6">
                Contact Information
              </h2>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <EnvelopeIcon className="h-5 w-5 text-neon-violet" />
                  <div>
                    <p className="text-gray-400 text-sm">Email</p>
                    <a href="mailto:hello@creator.com" className="text-white hover:text-neon-violet transition-colors">
                      hello@creator.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <PhoneIcon className="h-5 w-5 text-neon-cyan" />
                  <div>
                    <p className="text-gray-400 text-sm">Phone</p>
                    <a href="tel:+1234567890" className="text-white hover:text-neon-cyan transition-colors">
                      +1 (234) 567-8900
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <MapPinIcon className="h-5 w-5 text-neon-magenta" />
                  <div>
                    <p className="text-gray-400 text-sm">Location</p>
                    <p className="text-white">Los Angeles, CA</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-panel p-6">
              <h3 className="text-lg font-semibold text-white mb-4">Response Time</h3>
              <div className="flex items-center space-x-2 text-gray-400">
                <ClockIcon className="h-4 w-4" />
                <span className="text-sm">Usually within 24 hours</span>
              </div>
            </div>

            <div className="glass-panel p-6">
              <h3 className="text-lg font-semibold text-white mb-4">Schedule a Call</h3>
              <p className="text-gray-400 text-sm mb-4">
                Prefer to talk? Book a discovery call to discuss your project in detail.
              </p>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3 bg-gradient-to-r from-neon-violet to-neon-cyan text-white font-medium hover:shadow-neon transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <CalendarIcon className="h-4 w-4" />
                <span>Book Discovery Call</span>
              </motion.button>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-2"
          >
            <div className="glass-panel p-8">
              <h2 className="text-2xl font-display font-bold text-white mb-6">
                Project Inquiry Form
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-onyx-800 border border-onyx-700 text-white focus:outline-none focus:border-neon-violet transition-colors duration-200"
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-onyx-800 border border-onyx-700 text-white focus:outline-none focus:border-neon-violet transition-colors duration-200"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-onyx-800 border border-onyx-700 text-white focus:outline-none focus:border-neon-violet transition-colors duration-200"
                      placeholder="Your company name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-onyx-800 border border-onyx-700 text-white focus:outline-none focus:border-neon-violet transition-colors duration-200"
                      placeholder="+1 (234) 567-8900"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="projectType" className="block text-sm font-medium text-gray-300 mb-2">
                    Project Type *
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    required
                    value={formData.projectType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-onyx-800 border border-onyx-700 text-white focus:outline-none focus:border-neon-violet transition-colors duration-200"
                  >
                    <option value="">Select project type</option>
                    {projectTypes.map((type) => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium text-gray-300 mb-2">
                      Budget Range
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-onyx-800 border border-onyx-700 text-white focus:outline-none focus:border-neon-violet transition-colors duration-200"
                    >
                      <option value="">Select budget range</option>
                      {budgetRanges.map((range) => (
                        <option key={range} value={range}>{range}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="timeline" className="block text-sm font-medium text-gray-300 mb-2">
                      Timeline
                    </label>
                    <select
                      id="timeline"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-onyx-800 border border-onyx-700 text-white focus:outline-none focus:border-neon-violet transition-colors duration-200"
                    >
                      <option value="">Select timeline</option>
                      {timelines.map((time) => (
                        <option key={time} value={time}>{time}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-onyx-800 border border-onyx-700 text-white focus:outline-none focus:border-neon-violet transition-colors duration-200 resize-none"
                    placeholder="Tell me about your project, goals, deliverables, and any specific requirements..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  className="w-full py-4 bg-gradient-to-r from-neon-violet to-neon-cyan text-white font-medium hover:shadow-neon-strong transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <EnvelopeIcon className="h-4 w-4" />
                      <span>Send Project Inquiry</span>
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>

        {/* FAQ Section */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h2 className="text-3xl font-display font-bold text-center mb-12">
            <span className="gradient-text">FREQUENTLY</span> ASKED QUESTIONS
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                question: "What's your typical response time?",
                answer: "I aim to respond to all inquiries within 24 hours during business days. For urgent projects, please mention it in your message."
              },
              {
                question: "Do you work with small businesses?",
                answer: "Absolutely! I work with brands of all sizes, from startups to Fortune 500 companies. Each collaboration is tailored to fit your budget and goals."
              },
              {
                question: "What platforms do you create content for?",
                answer: "I create content for YouTube, Instagram, TikTok, Twitter, and LinkedIn. I can also create content for your website, email campaigns, and other marketing channels."
              },
              {
                question: "How far in advance should I book?",
                answer: "I recommend booking 2-4 weeks in advance for most projects. However, I can accommodate rush projects with additional fees when my schedule allows."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-panel p-6"
              >
                <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}