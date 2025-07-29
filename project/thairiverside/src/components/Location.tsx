import React from 'react';
import { MapPin, Clock, Phone } from 'lucide-react';

const Location = () => {
  const hours = [
    { day: 'Monday', time: '11am - 2pm, 4pm - 8pm' },
    { day: 'Tuesday - Friday', time: '11am - 2pm, 4pm - 8pm' },
    { day: 'Saturday', time: '11am - 3pm, 5pm - 8pm' },
    { day: 'Sunday', time: '11am - 3pm, 5pm - 8pm' },
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
              Find us along the beautiful Holston River
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Map */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3201.234!2d-82.5615!3d36.5484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x885a9b8c8f8c8f8f%3A0x8f8c8f8c8f8c8f8f!2s1837%20Netherland%20Inn%20Rd%2C%20Kingsport%2C%20TN%2037660!5e0!3m2!1sen!2sus!4v1234567890"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Thai Riverside Location"
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
                      1837 Netherland Inn Road<br />
                      Kingsport, TN 37660
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
                          <span className={`font-medium ${
                            item.day === 'Monday' ? 'text-red-500' : 'text-gray-900'
                          }`}>
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
                      href="tel:+14237651570"
                      className="text-primary-600 hover:text-primary-700 transition-colors"
                    >
                      (423) 765-1570
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
};

export default Location;
