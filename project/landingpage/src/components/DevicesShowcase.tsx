import React from 'react';
import { Monitor, Tablet, Smartphone } from 'lucide-react';

const DevicesShowcase = () => {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">
            Stunning Across All Devices
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Our designs look incredible and function perfectly on every screen size.
          </p>
        </div>
        
        {/* Reflective Shelf */}
        <div className="relative">
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white/5 to-transparent"></div>
          
          {/* Device Mockups */}
          <div className="flex items-end justify-center space-x-8 md:space-x-16 pb-8">
            {/* Desktop */}
            <div className="device-float">
              <div className="w-48 md:w-64 h-32 md:h-40 bg-gradient-to-br from-gray-800 to-gray-900 rounded-t-lg border-2 border-gray-700 relative overflow-hidden">
                <div className="absolute inset-2 bg-gradient-to-br from-purple-900 to-blue-900 rounded flex items-center justify-center">
                  <Monitor className="w-8 h-8 text-green-400" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-green-400 to-teal-400"></div>
              </div>
              <div className="w-48 md:w-64 h-4 bg-gray-700 rounded-b-lg"></div>
              <div className="w-16 h-8 bg-gray-600 mx-auto rounded-b-lg"></div>
            </div>
            
            {/* Tablet */}
            <div className="device-float" style={{ animationDelay: '0.5s' }}>
              <div className="w-32 md:w-40 h-40 md:h-48 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl border-2 border-gray-700 relative overflow-hidden">
                <div className="absolute inset-2 bg-gradient-to-br from-purple-900 to-blue-900 rounded-lg flex items-center justify-center">
                  <Tablet className="w-6 h-6 text-green-400" />
                </div>
                <div className="absolute bottom-2 left-2 right-2 h-1 bg-gradient-to-r from-green-400 to-teal-400 rounded"></div>
              </div>
            </div>
            
            {/* Mobile */}
            <div className="device-float" style={{ animationDelay: '1s' }}>
              <div className="w-20 md:w-24 h-36 md:h-44 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border-2 border-gray-700 relative overflow-hidden">
                <div className="absolute inset-2 bg-gradient-to-br from-purple-900 to-blue-900 rounded-xl flex items-center justify-center">
                  <Smartphone className="w-5 h-5 text-green-400" />
                </div>
                <div className="absolute bottom-2 left-2 right-2 h-1 bg-gradient-to-r from-green-400 to-teal-400 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DevicesShowcase;