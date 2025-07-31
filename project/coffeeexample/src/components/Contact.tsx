import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
    alert('Thank you for your message! We\'ll get back to you soon.');
  };

  return (
    <section className="py-16 bg-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-coffee-800 mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have questions, feedback, or just want to say hello? We'd love to hear from you!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-coffee-800 mb-6">
                Let's Connect
              </h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Whether you're planning a special event, have questions about our menu, 
                or want to learn more about our community initiatives, we're here to help.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="bg-sage-100 p-3 rounded-full">
                  <Phone className="h-6 w-6 text-sage-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-coffee-800">Phone</h4>
                  <p className="text-gray-600">
                    <a href="tel:+15551234567" className="hover:text-coffee-600 transition-colors">
                      (555) 123-4567
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-sage-100 p-3 rounded-full">
                  <Mail className="h-6 w-6 text-sage-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-coffee-800">Email</h4>
                  <p className="text-gray-600">
                    <a href="mailto:hello@riverroastcafe.com" className="hover:text-coffee-600 transition-colors">
                      hello@riverroastcafe.com
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-sage-100 p-3 rounded-full">
                  <MapPin className="h-6 w-6 text-sage-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-coffee-800">Address</h4>
                  <p className="text-gray-600">
                    123 Main Street<br />
                    Downtown Portland, OR 97201
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-coffee-500 focus:border-coffee-500 transition-colors"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-coffee-500 focus:border-coffee-500 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-coffee-500 focus:border-coffee-500 transition-colors"
                >
                  <option value="">Select a subject</option>
                  <option value="general">General Inquiry</option>
                  <option value="events">Events & Booking</option>
                  <option value="catering">Catering Services</option>
                  <option value="feedback">Feedback</option>
                  <option value="partnerships">Partnerships</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-coffee-500 focus:border-coffee-500 transition-colors resize-vertical"
                  placeholder="Tell us how we can help you..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-coffee-600 hover:bg-coffee-700 text-white px-6 py-3 rounded-md font-semibold transition-colors duration-300 flex items-center justify-center space-x-2"
              >
                <Send className="h-5 w-5" />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;