import React from 'react';
import { Calendar, Music, Palette, Coffee } from 'lucide-react';

const Events: React.FC = () => {
  const events = [
    {
      title: "Open Mic Night",
      description: "Share your talent with our community every Thursday evening",
      schedule: "Every Thursday, 7:00 PM - 9:00 PM",
      icon: Music,
      color: "text-purple-600",
      bgColor: "bg-purple-100"
    },
    {
      title: "Latte Art Classes",
      description: "Learn the art of creating beautiful designs in your coffee",
      schedule: "Saturdays, 10:00 AM - 12:00 PM",
      icon: Coffee,
      color: "text-coffee-600",
      bgColor: "bg-coffee-100"
    },
    {
      title: "Local Artist Showcase",
      description: "Featuring rotating monthly exhibits from local artists",
      schedule: "First Friday of each month, 6:00 PM - 8:00 PM",
      icon: Palette,
      color: "text-blue-600",
      bgColor: "bg-blue-100"
    },
    {
      title: "Coffee Cupping Sessions",
      description: "Explore different coffee origins and flavors with our experts",
      schedule: "Second Saturday of each month, 2:00 PM - 4:00 PM",
      icon: Calendar,
      color: "text-green-600",
      bgColor: "bg-green-100"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-coffee-800 mb-4">
            Community Events
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join us for regular events that bring our community together through art, music, and coffee
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {events.map((event, index) => (
            <div 
              key={index}
              className="bg-cream-50 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300 border border-cream-200"
            >
              <div className="flex items-start space-x-4">
                <div className={`${event.bgColor} p-3 rounded-full`}>
                  <event.icon className={`h-6 w-6 ${event.color}`} />
                </div>
                
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-coffee-800 mb-2">
                    {event.title}
                  </h3>
                  <p className="text-gray-600 mb-3 leading-relaxed">
                    {event.description}
                  </p>
                  <div className="flex items-center text-sm text-coffee-600 font-medium">
                    <Calendar className="h-4 w-4 mr-2" />
                    {event.schedule}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center bg-sage-50 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-coffee-800 mb-4">
            Stay Connected
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Want to be the first to know about special events, new menu items, and community happenings? 
            Follow us on social media or sign up for our newsletter!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-coffee-600 hover:bg-coffee-700 text-white px-6 py-3 rounded-full font-semibold transition-colors duration-300">
              Follow Us on Instagram
            </button>
            <button className="bg-transparent border-2 border-coffee-600 hover:bg-coffee-600 hover:text-white text-coffee-600 px-6 py-3 rounded-full font-semibold transition-all duration-300">
              Subscribe to Newsletter
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;