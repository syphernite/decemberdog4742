import React from 'react';
import { Tv, Target, Users, MapPin, ExternalLink } from 'lucide-react';
import { businessConfig } from '../config/business';
import HoursTable from '../components/HoursTable';

interface HomeProps {
  onNavigate: (page: string) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  const scrollToMap = () => {
    document.getElementById('map-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  const menuItems = [
    { name: "Reuben Sandwich", description: "Stacked corned beef with swiss", price: "$12.99" },
    { name: "Blackened Shrimp Tacos", description: "Three tacos with slaw and sauce", price: "$14.99" },
    { name: "Shrimp and Grits", description: "Creamy grits with seasoned shrimp", price: "$16.99" },
    { name: "Classic Burger", description: "Half-pound beef with all the fixings", price: "$11.99" },
    { name: "Buffalo Wings", description: "Traditional wings with blue cheese", price: "$9.99" },
    { name: "Loaded Flatbread", description: "Choice of toppings on crispy flatbread", price: "$13.99" }
  ];

  const iconComponents = { Tv, Target, Users };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative bg-charcoal py-20 lg:py-32">
        <div className="absolute inset-0 bg-amber-500/5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            {businessConfig.name}
          </h1>
          <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            {businessConfig.subhead}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href={businessConfig.phoneLink}
              className="bg-amber-500 text-charcoal px-8 py-4 rounded-lg font-bold text-lg hover:shadow-lg hover:shadow-amber-500/30 transition-all duration-200 ease-in-out transform hover:-translate-y-1"
            >
              Call Now
            </a>
            <button
              onClick={scrollToMap}
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-charcoal transition-all duration-200 ease-in-out"
            >
              Get Directions
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {businessConfig.features.map((feature, index) => {
              const IconComponent = iconComponents[feature.icon as keyof typeof iconComponents];
              return (
                <div key={index} className="text-center bg-slate-850 p-6 rounded-lg border border-gray-700">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-amber-500 rounded-lg mb-4">
                    <IconComponent className="w-6 h-6 text-charcoal" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Menu Preview */}
      <section className="py-16 bg-slate-850">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Fan Favorites</h2>
            <p className="text-gray-300">Try our most popular dishes</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {menuItems.map((item, index) => (
              <div key={index} className="bg-charcoal p-6 rounded-lg border border-gray-700 hover:border-amber-500/50 transition-all duration-200 ease-in-out">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-white font-semibold">{item.name}</h3>
                  <span className="text-amber-500 font-bold">{item.price}</span>
                </div>
                <p className="text-gray-300 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <button
              onClick={() => onNavigate('menu')}
              className="bg-amber-500 text-charcoal px-8 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-amber-500/30 transition-all duration-200 ease-in-out"
            >
              View Full Menu
            </button>
          </div>
        </div>
      </section>

      {/* Live Events Banner */}
      <section className="py-12 bg-red-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-white mb-6">Live Events</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {businessConfig.liveEvents.map((event, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                  <h3 className="text-white font-semibold">{event.day}</h3>
                  <p className="text-white/90">{event.event}</p>
                  <p className="text-white/80 text-sm">{event.time}</p>
                </div>
              ))}
            </div>
            <button
              onClick={() => onNavigate('events')}
              className="mt-6 bg-white text-red-500 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 ease-in-out"
            >
              View All Events
            </button>
          </div>
        </div>
      </section>

      {/* Hours and Map */}
      <section className="py-16 bg-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <HoursTable />
            
            <div id="map-section" className="bg-slate-850 rounded-lg p-6 border border-gray-700">
              <div className="flex items-center mb-4">
                <MapPin className="w-6 h-6 text-amber-500 mr-2" />
                <h3 className="text-xl font-bold text-white">Location</h3>
              </div>
              <p className="text-gray-300 mb-4">{businessConfig.address}</p>
              <div className="bg-charcoal rounded-lg p-8 text-center border border-gray-700">
                <MapPin className="w-12 h-12 text-amber-500 mx-auto mb-4" />
                <p className="text-white mb-4">Interactive map coming soon</p>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(businessConfig.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-amber-500 hover:text-amber-400 hover:underline transition-colors duration-200 ease-in-out"
                >
                  Open in Google Maps
                  <ExternalLink className="w-4 h-4 ml-1" />
                </a>
              </div>
              <p className="text-gray-400 text-sm mt-4">Private lot parking available</p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Section */}
      <section className="py-12 bg-slate-850">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-6">Stay Connected</h2>
          <a
            href={businessConfig.socialLinks.facebook}
            className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 ease-in-out"
          >
            Follow us on Facebook
          </a>
        </div>
      </section>
    </div>
  );
}