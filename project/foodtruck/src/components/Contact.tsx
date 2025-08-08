import React, { useEffect, useRef, useState } from 'react';
import { Phone, MessageCircle, Mail, Send } from 'lucide-react';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    inquiryType: 'general'
  });
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <section ref={sectionRef} id="contact" className="py-20 bg-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-pattern opacity-20"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`font-heading text-4xl md:text-5xl text-white mb-4 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            Get in <span className="text-yellow-400">Touch</span>
          </h2>
          <p className={`text-xl text-gray-300 max-w-3xl mx-auto font-body ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
            Have questions about catering or want to say hello? We'd love to hear from you!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className={`${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="font-heading text-2xl text-gray-900 mb-6">Send us a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2 font-body">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200 font-body"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2 font-body">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200 font-body"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="inquiryType" className="block text-sm font-medium text-gray-700 mb-2 font-body">
                    Inquiry Type
                  </label>
                  <select
                    id="inquiryType"
                    name="inquiryType"
                    value={formData.inquiryType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200 font-body"
                  >
                    <option value="general">General Question</option>
                    <option value="catering">Catering Inquiry</option>
                    <option value="event">Private Event</option>
                    <option value="partnership">Partnership</option>
                    <option value="feedback">Feedback</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2 font-body">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200 font-body"
                    placeholder="Tell us how we can help you..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-red-500 to-yellow-500 text-white py-4 rounded-lg font-bold hover:from-red-600 hover:to-yellow-600 transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <Send className="w-5 h-5" />
                  <span>Send Message</span>
                </button>
              </form>
            </div>
          </div>

          {/* Contact Info and Quick Actions */}
          <div className={`space-y-8 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
            {/* Quick Contact */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="font-heading text-2xl text-gray-900 mb-6">Quick Contact</h3>
              
              <div className="space-y-4">
                <a
                  href="tel:+1234567890"
                  className="flex items-center space-x-4 p-4 rounded-lg bg-green-50 hover:bg-green-100 transition-colors duration-200 group"
                >
                  <Phone className="w-6 h-6 text-green-600 group-hover:animate-bounce-slow" />
                  <div>
                    <h4 className="font-bold text-gray-900 font-body">Call Us</h4>
                    <p className="text-gray-600 font-body">(123) 456-7890</p>
                  </div>
                </a>

                <a
                  href="sms:+1234567890"
                  className="flex items-center space-x-4 p-4 rounded-lg bg-blue-50 hover:bg-blue-100 transition-colors duration-200 group"
                >
                  <MessageCircle className="w-6 h-6 text-blue-600 group-hover:animate-bounce-slow" />
                  <div>
                    <h4 className="font-bold text-gray-900 font-body">Text Us</h4>
                    <p className="text-gray-600 font-body">(123) 456-7890</p>
                  </div>
                </a>

                <a
                  href="mailto:hello@rollingspice.com"
                  className="flex items-center space-x-4 p-4 rounded-lg bg-yellow-50 hover:bg-yellow-100 transition-colors duration-200 group"
                >
                  <Mail className="w-6 h-6 text-yellow-600 group-hover:animate-bounce-slow" />
                  <div>
                    <h4 className="font-bold text-gray-900 font-body">Email Us</h4>
                    <p className="text-gray-600 font-body">hello@rollingspice.com</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-gradient-to-br from-red-500 to-yellow-500 rounded-2xl shadow-xl p-8 text-white">
              <h3 className="font-heading text-2xl mb-6">Business Hours</h3>
              
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="font-body font-medium">Monday - Thursday</span>
                  <span className="font-body">11:00 AM - 8:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-body font-medium">Friday - Saturday</span>
                  <span className="font-body">11:00 AM - 10:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-body font-medium">Sunday</span>
                  <span className="font-body">12:00 PM - 8:00 PM</span>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-white/30">
                <p className="font-body text-sm opacity-90">
                  Hours may vary during special events. Follow our social media for real-time updates!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;