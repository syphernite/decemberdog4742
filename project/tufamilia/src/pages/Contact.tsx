import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, Mail, Send, Briefcase } from 'lucide-react';
import Button from '../components/Button';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [showApplicationModal, setShowApplicationModal] = useState(false);
  const [applicationData, setApplicationData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    availability: ''
  });

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Contact form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleApplicationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle application submission
    console.log('Application submitted:', applicationData);
    setShowApplicationModal(false);
    setApplicationData({ name: '', email: '', phone: '', position: '', experience: '', availability: '' });
  };

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Address',
      content: '123 Mesa Street\nSanta Fe, NM 87501',
      action: 'Get Directions',
      actionType: 'maps'
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Phone',
      content: '(505) 555-TACO',
      action: 'Call Now',
      actionType: 'call'
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email',
      content: 'hola@robertfamilia.com',
      action: 'Send Email',
      actionType: 'email'
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Hours',
      content: 'Mon-Thu: 11am-10pm\nFri-Sat: 11am-11pm\nSun: 10am-9pm',
      action: null,
      actionType: null
    },
  ];

  return (
    <motion.div
      className="min-h-screen pt-20 pb-32"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Header */}
      <section className="py-20 bg-gradient-to-br from-papel to-marigold/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-display font-bold text-charcoal mb-6">
              Get in <span className="text-chili">Touch</span>
            </h1>
            <p className="text-xl text-charcoal/70 leading-relaxed">
              We'd love to hear from you. Whether you have questions, feedback, 
              or want to join our team, we're here to help.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-papel">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-chili/10 text-chili rounded-full mb-4">
                  {info.icon}
                </div>
                <h3 className="text-lg font-display font-bold text-charcoal mb-2">
                  {info.title}
                </h3>
                <p className="text-charcoal/70 text-sm whitespace-pre-line mb-4">
                  {info.content}
                </p>
                {info.action && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => {
                      if (info.actionType === 'maps') {
                        window.open('https://maps.google.com?q=123+Mesa+Street+Santa+Fe+NM', '_blank');
                      } else if (info.actionType === 'call') {
                        window.open('tel:+15055558226');
                      } else if (info.actionType === 'email') {
                        window.open('mailto:hola@robertfamilia.com');
                      }
                    }}
                  >
                    {info.action}
                  </Button>
                )}
              </motion.div>
            ))}
          </div>

          {/* Map Placeholder */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-gradient-to-br from-chili/10 to-nopal/10 h-80 rounded-2xl flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-chili mx-auto mb-4" />
                <h3 className="text-2xl font-display font-bold text-charcoal mb-2">
                  Find Us in Santa Fe
                </h3>
                <p className="text-charcoal/70 mb-4">
                  Located in the heart of downtown Santa Fe
                </p>
                <Button
                  onClick={() => window.open('https://maps.google.com?q=123+Mesa+Street+Santa+Fe+NM', '_blank')}
                >
                  View Full Map
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-display font-bold text-charcoal mb-6">
                Send us a Message
              </h2>
              <form onSubmit={handleContactSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-charcoal mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-chili"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-charcoal mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-chili"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-charcoal mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData(prev => ({ ...prev, subject: e.target.value }))}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-chili"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-charcoal mb-2">
                    Message *
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-chili resize-none"
                    required
                  />
                </div>
                
                <Button type="submit" className="w-full">
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </motion.div>

            {/* Additional Info */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div>
                <h3 className="text-2xl font-display font-bold text-charcoal mb-4">
                  Press & Partnerships
                </h3>
                <p className="text-charcoal/70 mb-4">
                  For media inquiries, catering requests, or partnership opportunities, 
                  please contact our team directly.
                </p>
                <Button variant="secondary" onClick={() => window.open('mailto:press@robertfamilia.com')}>
                  <Mail className="w-4 h-4 mr-2" />
                  press@robertfamilia.com
                </Button>
              </div>

              <div className="bg-gradient-to-br from-chili/5 to-nopal/5 p-8 rounded-2xl">
                <div className="flex items-center mb-4">
                  <Briefcase className="w-8 h-8 text-chili mr-3" />
                  <h3 className="text-2xl font-display font-bold text-charcoal">
                    Join Our Team
                  </h3>
                </div>
                <p className="text-charcoal/70 mb-6">
                  We're always looking for passionate people to join the Robert Familia family. 
                  If you love food, hospitality, and creating memorable experiences, we'd love to meet you.
                </p>
                <Button onClick={() => setShowApplicationModal(true)}>
                  Apply Now
                </Button>
              </div>

              <div>
                <h3 className="text-2xl font-display font-bold text-charcoal mb-4">
                  Follow Us
                </h3>
                <div className="flex space-x-4">
                  <a href="#" className="w-10 h-10 bg-chili text-papel rounded-full flex items-center justify-center hover:bg-chili/80 transition-colors">
                    f
                  </a>
                  <a href="#" className="w-10 h-10 bg-chili text-papel rounded-full flex items-center justify-center hover:bg-chili/80 transition-colors">
                    @
                  </a>
                  <a href="#" className="w-10 h-10 bg-chili text-papel rounded-full flex items-center justify-center hover:bg-chili/80 transition-colors">
                    in
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Application Modal */}
      {showApplicationModal && (
        <motion.div
          className="fixed inset-0 bg-charcoal/80 backdrop-blur-sm flex items-center justify-center p-4 z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <motion.div
            className="bg-papel rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-8"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-3xl font-display font-bold text-charcoal">
                Join Our Team
              </h2>
              <button
                onClick={() => setShowApplicationModal(false)}
                className="text-charcoal/60 hover:text-charcoal"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleApplicationSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-charcoal mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    value={applicationData.name}
                    onChange={(e) => setApplicationData(prev => ({ ...prev, name: e.target.value }))}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-chili"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-charcoal mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    value={applicationData.email}
                    onChange={(e) => setApplicationData(prev => ({ ...prev, email: e.target.value }))}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-chili"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-charcoal mb-2">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    value={applicationData.phone}
                    onChange={(e) => setApplicationData(prev => ({ ...prev, phone: e.target.value }))}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-chili"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-charcoal mb-2">
                    Position *
                  </label>
                  <select
                    value={applicationData.position}
                    onChange={(e) => setApplicationData(prev => ({ ...prev, position: e.target.value }))}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-chili"
                    required
                  >
                    <option value="">Select Position</option>
                    <option value="server">Server</option>
                    <option value="cook">Cook</option>
                    <option value="bartender">Bartender</option>
                    <option value="host">Host</option>
                    <option value="manager">Manager</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-charcoal mb-2">
                  Experience *
                </label>
                <textarea
                  value={applicationData.experience}
                  onChange={(e) => setApplicationData(prev => ({ ...prev, experience: e.target.value }))}
                  rows={4}
                  placeholder="Tell us about your relevant experience..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-chili resize-none"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-charcoal mb-2">
                  Availability *
                </label>
                <textarea
                  value={applicationData.availability}
                  onChange={(e) => setApplicationData(prev => ({ ...prev, availability: e.target.value }))}
                  rows={3}
                  placeholder="Days and hours you're available to work..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-chili resize-none"
                  required
                />
              </div>

              <div className="flex gap-4">
                <Button variant="secondary" onClick={() => setShowApplicationModal(false)}>
                  Cancel
                </Button>
                <Button type="submit" className="flex-1">
                  Submit Application
                </Button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Contact;