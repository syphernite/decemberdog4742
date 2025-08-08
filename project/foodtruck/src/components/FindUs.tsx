import React, { useEffect, useRef, useState } from 'react';
import { MapPin, Clock, Instagram, Facebook, Twitter } from 'lucide-react';

const FindUs = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const schedule = [
    { day: 'Monday', location: 'Downtown Plaza', time: '11:00 AM - 8:00 PM' },
    { day: 'Tuesday', location: 'Tech District', time: '11:00 AM - 8:00 PM' },
    { day: 'Wednesday', location: 'University Area', time: '11:00 AM - 9:00 PM' },
    { day: 'Thursday', location: 'Business District', time: '11:00 AM - 8:00 PM' },
    { day: 'Friday', location: 'Waterfront Park', time: '11:00 AM - 10:00 PM' },
    { day: 'Saturday', location: 'Farmers Market', time: '10:00 AM - 10:00 PM' },
    { day: 'Sunday', location: 'City Center', time: '12:00 PM - 8:00 PM' }
  ];

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

  return (
    <section ref={sectionRef} id="find-us" className="py-20 bg-gradient-to-br from-yellow-50 to-red-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`font-heading text-4xl md:text-5xl text-gray-900 mb-4 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            Find <span className="text-red-600">Us</span>
          </h2>
          <p className={`text-xl text-gray-600 max-w-3xl mx-auto font-body ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
            Follow our truck around the city or catch us at these regular locations
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Map and Current Location */}
          <div className={`${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="h-80 bg-gray-200 relative">
                {/* Placeholder for Google Map */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-red-600 mx-auto mb-4 animate-bounce-slow" />
                    <h3 className="font-heading text-xl text-gray-700">Live Location</h3>
                    <p className="text-gray-500 font-body">Interactive map coming soon!</p>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <MapPin className="w-6 h-6 text-red-600" />
                  <div>
                    <h4 className="font-heading text-lg text-gray-900">Currently at</h4>
                    <p className="text-gray-600 font-body">Downtown Plaza - 123 Main Street</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 mb-6">
                  <Clock className="w-6 h-6 text-yellow-600" />
                  <div>
                    <h4 className="font-heading text-lg text-gray-900">Today's Hours</h4>
                    <p className="text-gray-600 font-body">11:00 AM - 8:00 PM</p>
                  </div>
                </div>

                <button className="w-full bg-gradient-to-r from-red-500 to-yellow-500 text-white py-3 rounded-lg font-bold hover:from-red-600 hover:to-yellow-600 transform hover:scale-105 transition-all duration-300">
                  Get Directions
                </button>
              </div>
            </div>
          </div>

          {/* Schedule and Social */}
          <div className={`space-y-8 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
            {/* Weekly Schedule */}
            <div className="bg-white rounded-2xl shadow-xl p-6">
              <h3 className="font-heading text-2xl text-gray-900 mb-6">Weekly Schedule</h3>
              
              <div className="space-y-4">
                {schedule.map((item, index) => (
                  <div key={item.day} className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                    <div>
                      <h4 className="font-bold text-gray-900 font-body">{item.day}</h4>
                      <p className="text-gray-600 font-body text-sm">{item.location}</p>
                    </div>
                    <span className="text-red-600 font-medium font-body text-sm">{item.time}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Media Follow */}
            <div className="bg-white rounded-2xl shadow-xl p-6">
              <h3 className="font-heading text-2xl text-gray-900 mb-4">Follow for Live Updates</h3>
              <p className="text-gray-600 font-body mb-6">
                Get real-time location updates, special announcements, and behind-the-scenes content
              </p>

              <div className="flex space-x-4">
                <a
                  href="#"
                  className="flex-1 bg-gradient-to-r from-pink-500 to-purple-600 text-white p-4 rounded-lg text-center font-bold hover:from-pink-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300"
                >
                  <Instagram className="w-6 h-6 mx-auto mb-2 animate-bounce-slow" />
                  Instagram
                </a>
                
                <a
                  href="#"
                  className="flex-1 bg-blue-600 text-white p-4 rounded-lg text-center font-bold hover:bg-blue-700 transform hover:scale-105 transition-all duration-300"
                >
                  <Facebook className="w-6 h-6 mx-auto mb-2 animate-bounce-slow" />
                  Facebook
                </a>
                
                <a
                  href="#"
                  className="flex-1 bg-blue-400 text-white p-4 rounded-lg text-center font-bold hover:bg-blue-500 transform hover:scale-105 transition-all duration-300"
                >
                  <Twitter className="w-6 h-6 mx-auto mb-2 animate-bounce-slow" />
                  Twitter
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FindUs;