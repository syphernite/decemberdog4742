import React from 'react';
import { MapPin, Phone, Clock, Navigation } from 'lucide-react';

const Map = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Find Me
            <span className="text-red-600"> Here</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            I cut hair at Classic Cuts Barbershop in downtown. Easy parking and great location.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Map */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="aspect-video bg-gray-200 relative">
                {/* Google Maps Embed Placeholder */}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1841947924887!2d-73.98823492404094!3d40.758896371398926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1635959962132!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Classic Cuts Barbershop Location"
                  className="absolute inset-0"
                />
              </div>
            </div>
          </div>

          {/* Location Info */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                <MapPin className="h-6 w-6 text-red-600 mr-2" />
                Location Details
              </h3>
              
              <div className="space-y-4">
                <div>
                  <div className="font-semibold text-gray-900 mb-1">Address</div>
                  <div className="text-gray-600">
                    Classic Cuts Barbershop<br />
                    123 Main Street<br />
                    Downtown, NY 12345
                  </div>
                </div>
                
                <div>
                  <div className="font-semibold text-gray-900 mb-1 flex items-center">
                    <Phone className="h-4 w-4 mr-1" />
                    Contact
                  </div>
                  <div className="text-gray-600">
                    Shop: (555) 987-6543<br />
                    Tony Direct: (555) 123-4567
                  </div>
                </div>
                
                <div>
                  <div className="font-semibold text-gray-900 mb-1 flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    Hours
                  </div>
                  <div className="text-gray-600 text-sm">
                    <div className="flex justify-between">
                      <span>Mon-Fri</span>
                      <span>9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday</span>
                      <span>8:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday</span>
                      <span className="text-red-600">Closed</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t border-gray-200">
                <a
                  href="https://maps.google.com/directions"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 bg-red-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:bg-red-700 hover:shadow-lg"
                >
                  <Navigation className="h-5 w-5" />
                  <span>Get Directions</span>
                </a>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6">
              <h4 className="font-semibold text-blue-900 mb-3 flex items-center">
                <MapPin className="h-5 w-5 mr-2" />
                Parking & Access
              </h4>
              <ul className="text-blue-800 text-sm space-y-2">
                <li>• Free street parking available</li>
                <li>• Paid parking garage across the street</li>
                <li>• Wheelchair accessible entrance</li>
                <li>• Public transit: Bus stops nearby</li>
              </ul>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-6">
              <h4 className="font-semibold text-yellow-900 mb-2">⚠️ Important</h4>
              <p className="text-yellow-800 text-sm">
                While I work at Classic Cuts Barbershop, this website and my services 
                are independent. Please book directly with me, not through the shop.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Map;