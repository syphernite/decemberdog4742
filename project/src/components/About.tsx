import React from 'react';
import { Utensils, Heart, Users, Award, Leaf, MapPin } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <Utensils className="w-10 h-10 text-accent-600" />,
      title: "Authentic Thai Cuisine",
      description: "Traditional recipes passed down through generations, crafted with authentic ingredients and time-honored techniques"
    },
    {
      icon: <Heart className="w-10 h-10 text-warm-600" />,
      title: "Dog-Friendly Patio",
      description: "Bring your furry friends to enjoy our scenic riverside patio with comfortable seating and water bowls"
    },
    {
      icon: <MapPin className="w-10 h-10 text-river-600" />,
      title: "Riverside Location",
      description: "Stunning views of the Holston River create the perfect backdrop for your dining experience"
    },
    {
      icon: <Award className="w-10 h-10 text-accent-600" />,
      title: "Award-Winning",
      description: "Kingsport's top-rated Thai restaurant with consistently excellent reviews and loyal customers"
    },
    {
      icon: <Leaf className="w-10 h-10 text-secondary-600" />,
      title: "Fresh Ingredients",
      description: "We source the freshest local and imported ingredients to ensure every dish bursts with flavor"
    },
    {
      icon: <Users className="w-10 h-10 text-warm-600" />,
      title: "Welcoming Atmosphere",
      description: "Perfect for date nights, family gatherings, business lunches, and casual dining with friends"
    }
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-br from-warm-50 via-earth-50 to-accent-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 bg-accent-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-warm-400 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-white/80 backdrop-blur-sm px-6 py-2 rounded-full mb-6 shadow-warm">
              <span className="text-accent-600 font-medium text-sm tracking-wider uppercase">Our Story</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-display font-bold text-gray-900 mb-8 animate-fade-in">
              <span className="bg-gradient-to-r from-accent-700 via-warm-600 to-accent-700 bg-clip-text text-transparent">
                About Thai Riverside
              </span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-accent-400 to-warm-400 mx-auto mb-8"></div>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-warm-lg mb-16 animate-slide-up">
            <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed font-light text-center max-w-4xl mx-auto">
            About Thai Riverside
            </p>
            <p className="text-lg text-gray-600 leading-relaxed text-center max-w-3xl mx-auto">
              We're more than just a restaurant — we're a destination where authentic Thai flavors meet Southern hospitality, 
              creating unforgettable moments for every guest who walks through our doors.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="group text-center p-8 bg-white/90 backdrop-blur-sm rounded-2xl shadow-warm hover:shadow-warm-lg transition-all duration-500 transform hover:-translate-y-2 animate-fade-in border border-accent-100/20"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  <div className="p-4 bg-gradient-to-br from-accent-50 to-warm-50 rounded-2xl shadow-inner-warm">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 font-display group-hover:text-accent-700 transition-colors">
                  {feature.icon}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;