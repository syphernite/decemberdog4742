import React, { useState, useEffect } from 'react';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="pt-20 min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-ocean-blue to-slate-900">
        <div className="water-ripple"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
          <h1 className="font-display text-5xl md:text-6xl text-white mb-6 neon-glow">
            GET IN TOUCH
          </h1>
          <p className="text-xl text-sandy-beige mb-8">
            We'd love to hear from you! Come visit us in beautiful Morehead City
          </p>
          <a 
            href="tel:252-726-7800" 
            className="btn-secondary inline-flex items-center space-x-2"
          >
            <Phone className="h-5 w-5" />
            <span>Call Now: (252) 726-7800</span>
          </a>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-sandy-beige sand-texture">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Details */}
            <div className="animate-on-scroll">
              <h2 className="font-display text-4xl text-ocean-blue mb-8">
                Visit Beach Bumz
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4 bg-white rounded-lg p-6 shadow-lg hover-lift beach-card tilt-on-hover">
                  <MapPin className="h-6 w-6 text-turquoise mt-1 flex-shrink-0 bounce-subtle" />
                  <div>
                    <h3 className="font-semibold text-ocean-blue mb-2">Address</h3>
                    <p className="text-gray-700">105 South 6th Street</p>
                    <p className="text-gray-700">Morehead City, NC 28577</p>
                    <a 
                      href="https://maps.google.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-turquoise hover:text-sunset-orange transition-colors duration-300 font-medium mt-2 inline-block"
                    >
                      Get Directions →
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4 bg-white rounded-lg p-6 shadow-lg hover-lift beach-card tilt-on-hover">
                  <Phone className="h-6 w-6 text-sunset-orange mt-1 flex-shrink-0 coconut-bounce" />
                  <div>
                    <h3 className="font-semibold text-ocean-blue mb-2">Phone</h3>
                    <a 
                      href="tel:252-726-7800" 
                      className="text-gray-700 hover:text-sunset-orange transition-colors duration-300 text-lg font-medium"
                    >
                      (252) 726-7800
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4 bg-white rounded-lg p-6 shadow-lg hover-lift beach-card tilt-on-hover">
                  <Mail className="h-6 w-6 text-coral-pink mt-1 flex-shrink-0 palm-sway" />
                  <div>
                    <h3 className="font-semibold text-ocean-blue mb-2">Email</h3>
                    <a 
                      href="mailto:beachbumzofmcinc@gmail.com" 
                      className="text-gray-700 hover:text-coral-pink transition-colors duration-300"
                    >
                      beachbumzofmcinc@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4 bg-white rounded-lg p-6 shadow-lg hover-lift beach-card tilt-on-hover">
                  <Clock className="h-6 w-6 text-turquoise mt-1 flex-shrink-0 starfish-spin" />
                  <div>
                    <h3 className="font-semibold text-ocean-blue mb-2">Hours</h3>
                    <div className="space-y-1 text-gray-700">
                      <p><span className="font-medium">Monday - Thursday:</span> 11:00 AM - 9:00 PM</p>
                      <p><span className="font-medium">Friday - Saturday:</span> 11:00 AM - 10:00 PM</p>
                      <p><span className="font-medium">Sunday:</span> 12:00 PM - 9:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="mt-8">
                <h3 className="font-semibold text-ocean-blue mb-4 text-lg">Follow Us</h3>
                <div className="flex space-x-4">
                  <a 
                    href="https://instagram.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform duration-300 shadow-lg pulse-glow"
                    aria-label="Follow us on Instagram"
                  >
                    <Instagram className="h-6 w-6 bounce-subtle" />
                  </a>
                  <a 
                    href="https://facebook.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform duration-300 shadow-lg pulse-glow"
                    aria-label="Follow us on Facebook"
                  >
                    <Facebook className="h-6 w-6 coconut-bounce" />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="animate-on-scroll">
              <div className="bg-white rounded-lg shadow-2xl p-8 beach-card">
                <h3 className="font-display text-3xl text-ocean-blue mb-6">
                  Send us a Message
                </h3>
                
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4 bounce-subtle" />
                    <h4 className="font-semibold text-ocean-blue text-xl mb-2">Thank You!</h4>
                    <p className="text-gray-600">Your message has been sent. We'll get back to you soon!</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-turquoise focus:border-transparent transition-all duration-300 wave-animation"
                        placeholder="Enter your full name"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-turquoise focus:border-transparent transition-all duration-300 wave-animation"
                        placeholder="Enter your email address"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-turquoise focus:border-transparent transition-all duration-300 resize-none wave-animation"
                        placeholder="Tell us what's on your mind..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-turquoise to-teal-400 hover:from-sunset-orange hover:to-coral-pink text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:rotate-1 flex items-center justify-center space-x-2"
                    >
                      <Send className="h-5 w-5 bounce-subtle" />
                      <span>Send Message</span>
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-96 relative overflow-hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3201.1234567890!2d-76.7319444!3d34.7204444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s105+South+6th+Street%2C+Morehead+City%2C+NC+28577!5e0!3m2!1sen!2sus!4v1234567890123"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Beach Bumz Pub & Pizzeria Location"
          className="filter hue-rotate-15 saturate-150"
        ></iframe>
        
        {/* Map Overlay */}
        <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm rounded-lg p-4 shadow-xl beach-card pulse-glow">
          <h4 className="font-semibold text-ocean-blue mb-2 flex items-center">
            <MapPin className="h-5 w-5 text-turquoise mr-2 bounce-subtle" />
            Beach Bumz Pub & Pizzeria
          </h4>
          <p className="text-gray-700 text-sm">105 South 6th Street</p>
          <p className="text-gray-700 text-sm">Morehead City, NC 28577</p>
        </div>
      </section>
    </div>
  );
};

export default Contact;