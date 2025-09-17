// src/components/Location.tsx
import React from 'react';
import { MapPin, Clock, Phone } from 'lucide-react';

const Location = () => {
  const hours = [
    { day: 'Monday - Friday', time: '11:00 AM - 2:00 PM, 4:00 PM - 8:00 PM' },
    { day: 'Saturday', time: '11:00 AM - 3:00 PM, 5:00 PM - 8:00 PM' },
    { day: 'Sunday', time: '11:00 AM - 3:00 PM, 5:00 PM - 8:00 PM' },
  ];

  return (
    <section id="location" className="py-20 bg-earth-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
              Location & Hours
            </h2>
            <p className="text-lg text-gray-600">
              Find us in the heart of Your City
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Map */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <iframe
                src="https://www.google.com/maps?q=Your%20City%2C%20ST&z=13&output=embed"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Location Map"
              ></iframe>
            </div>

            {/* Location Info */}
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-primary-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Address</h3>
                    <p className="text-gray-600">
                      123 Demo Street<br />
                      Your City, ST 00000
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-start space-x-4">
                  <Clock className="w-6 h-6 text-primary-600 mt-1 flex-shrink-0" />
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 mb-4">Hours</h3>
                    <div className="space-y-2">
                      {hours.map((item, index) => (
                        <div key={index} className="flex justify-between">
                          <span className="text-gray-700">{item.day}</span>
                          <span className="font-medium text-gray-900">
                            {item.time}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-primary-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Phone</h3>
                    <a
                      href="tel:+15551234567"
                      className="text-primary-600 hover:text-primary-700 transition-colors"
                    >
                      (555) 123-4567
                    </a>
                  </div>
                </div>
                <p className="text-xs text-gray-500 mt-3">Demo content. Replace with your details.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
