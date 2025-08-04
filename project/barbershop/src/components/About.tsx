import React from 'react';
import { Award, Clock, MapPin } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-w-4 aspect-h-5 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/1319460/pexels-photo-1319460.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Tony cutting hair"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-red-600 text-white p-6 rounded-2xl shadow-xl">
              <div className="text-2xl font-bold">5+</div>
              <div className="text-sm">Years Pro</div>
            </div>
          </div>

          {/* Content */}
          <div>
            <div className="mb-8">
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                Meet Tony
                <span className="block text-red-600">Your Barber</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                With over 5 years of experience in the industry, I've mastered the art of 
                traditional barbering while staying current with modern trends. Every cut 
                is a craft, every client is family.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                I specialize in fades, line-ups, beard grooming, and creating looks that 
                match your personality and lifestyle. Quality and attention to detail 
                are what set my work apart.
              </p>
            </div>

            <div className="grid sm:grid-cols-3 gap-6 mb-8">
              <div className="text-center p-4 bg-white rounded-xl shadow-md">
                <Award className="h-8 w-8 text-red-600 mx-auto mb-2" />
                <div className="font-semibold text-gray-900">Certified</div>
                <div className="text-sm text-gray-600">Licensed Professional</div>
              </div>
              <div className="text-center p-4 bg-white rounded-xl shadow-md">
                <Clock className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <div className="font-semibold text-gray-900">Punctual</div>
                <div className="text-sm text-gray-600">On-Time Service</div>
              </div>
              <div className="text-center p-4 bg-white rounded-xl shadow-md">
                <MapPin className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <div className="font-semibold text-gray-900">Located</div>
                <div className="text-sm text-gray-600">Downtown Shop</div>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-xl">
              <p className="text-blue-800 font-medium mb-2">📍 Important Note</p>
              <p className="text-blue-700 text-sm">
                I operate as an independent barber at Classic Cuts Barbershop. 
                This personal website is not affiliated with or endorsed by Classic Cuts Barbershop. 
                All appointments and services are directly with me, Tony.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;