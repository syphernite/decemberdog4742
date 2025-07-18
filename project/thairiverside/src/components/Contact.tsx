import React, { useState } from 'react';
import { Phone, Mail, MessageCircle, Facebook, Instagram } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-white via-accent-50/30 to-warm-50/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 bg-accent-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-warm-400 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-white/80 backdrop-blur-sm px-6 py-2 rounded-full mb-6 shadow-warm">
              <span className="text-accent-600 font-medium text-sm tracking-wider uppercase">Connect With Us</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-display font-bold text-gray-900 mb-8">
              <span className="bg-gradient-to-r from-accent-700 via-warm-600 to-accent-700 bg-clip-text text-transparent">
                Get in Touch
              </span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-accent-400 to-warm-400 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 font-light max-w-2xl mx-auto">
              Get in Touch
            </p>
            <p className="text-lg text-gray-600">
              Have questions or want to make a reservation? We'd love to hear from you!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="text-center lg:text-left mb-12">
                <a
                  href="https://www.doordash.com/store/thai-riverside-24555226/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-gradient-to-r from-accent-500 to-warm-500 hover:from-accent-600 hover:to-warm-600 text-white px-12 py-5 rounded-full text-xl font-bold transition-all duration-300 transform hover:scale-105 hover:shadow-warm-lg inline-block relative overflow-hidden"
                >
                  <span className="relative z-10">
                  Order on DoorDash
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </a>
              </div>

              <div className="bg-white/90 backdrop-blur-sm p-8 rounded-3xl shadow-warm hover:shadow-warm-lg transition-all duration-300 border border-accent-100/20">
                <h3 className="font-bold text-gray-900 mb-6 text-xl font-display">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-center space-x-4 group/contact">
                    <div className="p-3 bg-gradient-to-br from-accent-50 to-warm-50 rounded-2xl shadow-inner-warm group-hover/contact:shadow-warm transition-all">
                      <Phone className="w-6 h-6 text-accent-600" />
                    </div>
                    <a 
                      href="tel:+1423555-0123"
                      className="text-gray-700 hover:text-accent-600 transition-colors font-semibold text-lg"
                    >
                      (423) 555-0123
                    </a>
                  </div>
                  
                  <div className="flex items-center space-x-4 group/contact">
                    <div className="p-3 bg-gradient-to-br from-accent-50 to-warm-50 rounded-2xl shadow-inner-warm group-hover/contact:shadow-warm transition-all">
                      <Mail className="w-6 h-6 text-accent-600" />
                    </div>
                    <a 
                      href="mailto:info@thairiverside.com"
                      className="text-gray-700 hover:text-accent-600 transition-colors font-semibold text-lg"
                    >
                      info@thairiverside.com
                    </a>
                  </div>
                  
                  <div className="flex items-center space-x-4 group/contact">
                    <div className="p-3 bg-gradient-to-br from-accent-50 to-warm-50 rounded-2xl shadow-inner-warm group-hover/contact:shadow-warm transition-all">
                      <MessageCircle className="w-6 h-6 text-accent-600" />
                    </div>
                    <span className="text-gray-700 font-semibold text-lg">
                      1837 Netherland Inn Rd, Kingsport, TN
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-white/90 backdrop-blur-sm p-8 rounded-3xl shadow-warm hover:shadow-warm-lg transition-all duration-300 border border-accent-100/20">
                <h3 className="font-bold text-gray-900 mb-6 text-xl font-display">Follow Us</h3>
                <div className="flex space-x-6">
                  <a
                    href="#"
                    className="group flex items-center justify-center w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-2xl hover:from-blue-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-xl"
                  >
                    <Facebook className="w-6 h-6 group-hover:scale-110 transition-transform" />
                  </a>
                  <a
                    href="#"
                    className="group flex items-center justify-center w-14 h-14 bg-gradient-to-br from-pink-500 to-pink-600 text-white rounded-2xl hover:from-pink-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-xl"
                  >
                    <Instagram className="w-6 h-6 group-hover:scale-110 transition-transform" />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white/90 backdrop-blur-sm p-8 rounded-3xl shadow-warm hover:shadow-warm-lg transition-all duration-300 border border-accent-100/20">
              <h3 className="font-bold text-gray-900 mb-6 text-xl font-display">Send us a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-3 uppercase tracking-wider">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-accent-400 focus:border-accent-400 transition-all duration-300 bg-white/80 backdrop-blur-sm text-lg"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-3 uppercase tracking-wider">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-accent-400 focus:border-accent-400 transition-all duration-300 bg-white/80 backdrop-blur-sm text-lg"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-3 uppercase tracking-wider">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    required
                    className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-accent-400 focus:border-accent-400 transition-all duration-300 bg-white/80 backdrop-blur-sm text-lg resize-none"
                  />
                </div>
                
                <button
                  type="submit"
                  className="group w-full bg-gradient-to-r from-accent-500 to-warm-500 hover:from-accent-600 hover:to-warm-600 text-white py-5 px-8 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-warm-lg relative overflow-hidden"
                >
                  <span className="relative z-10">
                  Send Message
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
