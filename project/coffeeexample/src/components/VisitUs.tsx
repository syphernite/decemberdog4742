import React from 'react';
import { Clock, MapPin, Car, Phone } from 'lucide-react';

const VisitUs: React.FC = () => {
  const hours = [
    { day: 'Monday - Friday', time: '6:00 AM - 8:00 PM' },
    { day: 'Saturday', time: '7:00 AM - 9:00 PM' },
    { day: 'Sunday', time: '7:00 AM - 7:00 PM' }
  ];

  return (
    <section className="py-16 bg-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-coffee-800 mb-4">
            Visit Us
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Find us in the heart of downtown, where community and coffee come together
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Map Section */}
          <div className="order-2 lg:order-1">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden h-80">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.1234567890123!2d-74.0059413!3d40.7589!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQ1JzMyLjAiTiA3NMKwMDAnMjEuNCJX!5e0!3m2!1sen!2sus!4v1234567890123"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="River Roast Café Location"
              ></iframe>
            </div>
          </div>

          {/* Info Section */}
          <div className="order-1 lg:order-2 space-y-8">
            {/* Address */}
            <div className="flex items-start space-x-4">
              <div className="bg-sage-100 p-3 rounded-full">
                <MapPin className="h-6 w-6 text-sage-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-coffee-800 mb-2">Address</h3>
                <p className="text-gray-600">
                  123 Main Street<br />
                  Downtown Portland, OR 97201
                </p>
              </div>
            </div>

            {/* Hours */}
            <div className="flex items-start space-x-4">
              <div className="bg-sage-100 p-3 rounded-full">
                <Clock className="h-6 w-6 text-sage-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-coffee-800 mb-2">Hours</h3>
                <div className="space-y-1">
                  {hours.map((schedule, index) => (
                    <div key={index} className="flex justify-between text-gray-600">
                      <span className="font-medium">{schedule.day}</span>
                      <span>{schedule.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Parking */}
            <div className="flex items-start space-x-4">
              <div className="bg-sage-100 p-3 rounded-full">
                <Car className="h-6 w-6 text-sage-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-coffee-800 mb-2">Parking</h3>
                <p className="text-gray-600">
                  Street parking available on Main Street and side streets. 
                  Municipal parking garage located one block north on Oak Street.
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start space-x-4">
              <div className="bg-sage-100 p-3 rounded-full">
                <Phone className="h-6 w-6 text-sage-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-coffee-800 mb-2">Phone</h3>
                <p className="text-gray-600">
                  <a href="tel:+15551234567" className="hover:text-coffee-600 transition-colors">
                    (555) 123-4567
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisitUs;