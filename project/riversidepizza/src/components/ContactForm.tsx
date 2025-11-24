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

        <div className="grid md:grid-cols-1 gap-12">
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
                    <p className="text-sm text-gray-500 mt-2">
                      Next to the community center, plenty of parking
                    </p>
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
                    <a
                      href="tel:5557897499"
                      className="text-2xl font-bold text-red-700 hover:text-red-800"
                    >
                      (555) 789-PIZZA
                    </a>
                    <p className="text-sm text-gray-500 mt-2">
                      For orders, catering, or questions
                    </p>
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
                    <a
                      href="mailto:hello@riversidepizza.com"
                      className="text-lg text-red-700 hover:text-red-800"
                    >
                      hello@riversidepizza.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
