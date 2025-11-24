import { useState } from 'react';
import { MapPin, Phone, Clock, Mail } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Questions? Special requests? Just want to say hi? We'd love to hear from you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <div className="space-y-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex items-start space-x-4">
                  <div className="bg-red-100 rounded-lg p-3">
                    <MapPin className="w-6 h-6 text-red-700" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Visit Us</h3>
                    <p className="text-gray-700">456 River Road</p>
                    <p className="text-gray-700">Riverside, ST 12345</p>
                    <p className="text-sm text-gray-500 mt-2">Next to the community center, plenty of parking</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex items-start space-x-4">
                  <div className="bg-red-100 rounded-lg p-3">
                    <Clock className="w-6 h-6 text-red-700" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Hours</h3>
                    <div className="space-y-1 text-gray-700">
                      <p>Monday - Thursday: 11:00 AM - 10:00 PM</p>
                      <p>Friday - Saturday: 11:00 AM - 11:00 PM</p>
                      <p>Sunday: 12:00 PM - 9:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex items-start space-x-4">
                  <div className="bg-red-100 rounded-lg p-3">
                    <Phone className="w-6 h-6 text-red-700" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Call or Text</h3>
                    <a href="tel:5557897499" className="text-2xl font-bold text-red-700 hover:text-red-800">
                      (555) 789-PIZZA
                    </a>
                    <p className="text-sm text-gray-500 mt-2">For orders, catering, or questions</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex items-start space-x-4">
                  <div className="bg-red-100 rounded-lg p-3">
                    <Mail className="w-6 h-6 text-red-700" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Email</h3>
                    <a href="mailto:hello@riversidepizza.com" className="text-lg text-red-700 hover:text-red-800">
                      hello@riversidepizza.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h3>
            {submitted ? (
              <div className="bg-green-50 border-2 border-green-500 rounded-lg p-8 text-center">
                <div className="text-5xl mb-4">✓</div>
                <h4 className="text-2xl font-bold text-green-800 mb-2">Message Sent!</h4>
                <p className="text-green-700">We'll get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-red-700 focus:outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-red-700 focus:outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-bold text-gray-700 mb-2">
                    Phone Number (optional)
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-red-700 focus:outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-red-700 focus:outline-none resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-red-700 text-white py-4 rounded-lg font-bold text-lg hover:bg-red-800 transition-colors"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
