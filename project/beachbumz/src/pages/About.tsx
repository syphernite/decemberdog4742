import React, { useEffect } from 'react';
import { Users, Award, Heart, MapPin, Clock, Utensils } from 'lucide-react';

const About = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const milestones = [
    { year: '2018', event: 'Beach Bumz Opens', description: 'Started as a small pizzeria with big dreams' },
    { year: '2019', event: 'Community Favorite', description: 'Became a local hotspot for families and friends' },
    { year: '2021', event: 'Menu Expansion', description: 'Added wings, subs, pasta, and seafood dishes' },
    { year: '2022', event: 'Renovation Complete', description: 'Enhanced dining experience with coastal theme' },
    { year: '2024', event: 'Liquor License', description: 'Now serving craft cocktails and premium spirits' },
  ];

  const team = [
    { name: 'Mike Johnson', role: 'Head Chef', image: 'https://images.pexels.com/photos/2696064/pexels-photo-2696064.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { name: 'Sarah Davis', role: 'General Manager', image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { name: 'Alex Rodriguez', role: 'Pizza Specialist', image: 'https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { name: 'Jamie Chen', role: 'Bartender', image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=400' },
  ];

  return (
    <div className="pt-20 min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 md:h-[500px] overflow-hidden">
        <img 
          src="https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg?auto=compress&cs=tinysrgb&w=1200"
          alt="Beach sunset"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ocean-blue/80 to-transparent"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-4 max-w-4xl mx-auto">
            <h1 className="font-display text-5xl md:text-6xl text-white mb-6 neon-glow">
              OUR STORY
            </h1>
            <p className="text-xl md:text-2xl text-sandy-beige font-light">
              Where coastal dreams meet comfort food reality
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-sandy-beige sand-texture">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll">
              <h2 className="font-display text-4xl md:text-5xl text-ocean-blue mb-8">
                The Beach Bumz <span className="text-sunset-orange">Journey</span>
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                It all started in 2018 with a simple dream: create a place where the laid-back 
                vibes of coastal living meet the comfort of exceptional food. Located in the heart 
                of Morehead City, Beach Bumz Pub & Pizzeria was born from a passion for bringing 
                people together over great meals and good times.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                What began as a small pizzeria has grown into a beloved community hub where locals 
                and visitors alike come to experience the perfect blend of fresh coastal flavors 
                and classic comfort food. Every dish is crafted with care, every drink is mixed 
                with passion, and every guest is treated like family.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Now with our liquor license, we're excited to offer an even more complete 
                dining experience, featuring craft cocktails that complement our menu perfectly. 
                Beach Bumz isn't just a restaurant – it's where memories are made.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center bg-white rounded-lg p-6 shadow-lg hover-lift beach-card tilt-on-hover">
                  <Users className="h-8 w-8 text-turquoise mx-auto mb-2 bounce-subtle" />
                  <h3 className="font-semibold text-ocean-blue mb-1">Community Focused</h3>
                  <p className="text-sm text-gray-600">Supporting local families</p>
                </div>
                <div className="text-center bg-white rounded-lg p-6 shadow-lg hover-lift beach-card tilt-on-hover">
                  <Utensils className="h-8 w-8 text-sunset-orange mx-auto mb-2 coconut-bounce" />
                  <h3 className="font-semibold text-ocean-blue mb-1">Fresh Ingredients</h3>
                  <p className="text-sm text-gray-600">Quality in every bite</p>
                </div>
              </div>
            </div>
            
            <div className="animate-on-scroll">
              <div className="relative">
                <img 
                  src="https://images.pexels.com/photos/5490915/pexels-photo-5490915.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Beach Bumz team"
                  className="rounded-lg shadow-2xl w-full h-96 object-cover hover-lift tilt-on-hover wave-animation"
                />
                <div className="absolute -bottom-6 -right-6 bg-turquoise text-white p-6 rounded-lg shadow-xl pulse-glow">
                  <Award className="h-8 w-8 mb-2 starfish-spin" />
                  <p className="font-semibold">Local Favorite</p>
                  <p className="text-sm">Since 2018</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-ocean-blue">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="font-display text-4xl md:text-5xl text-white mb-4">
              Our <span className="text-gradient">Milestones</span>
            </h2>
            <p className="text-sandy-beige text-lg">The journey that brought us here</p>
          </div>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-turquoise to-sunset-orange pulse-glow"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={milestone.year} className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} animate-on-scroll`}>
                  <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                    <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 hover-lift beach-card tilt-on-hover">
                      <div className="flex items-center space-x-4 mb-3">
                        <span className="bg-gradient-to-r from-turquoise to-sunset-orange text-white font-bold px-4 py-2 rounded-full bounce-subtle">
                          {milestone.year}
                        </span>
                        <h3 className="font-semibold text-white text-lg">{milestone.event}</h3>
                      </div>
                      <p className="text-sandy-beige">{milestone.description}</p>
                    </div>
                  </div>
                  
                  <div className="hidden md:flex w-2/12 justify-center">
                    <div className="w-4 h-4 bg-white rounded-full border-4 border-turquoise pulse-glow"></div>
                  </div>
                  
                  <div className="w-full md:w-5/12"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-r from-turquoise to-teal-400">
        <div className="max-w-4xl mx-auto text-center px-4 animate-on-scroll">
          <h2 className="font-display text-4xl md:text-5xl text-white mb-8">
            What We Stand For
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/20 backdrop-blur-md rounded-lg p-6 hover-lift beach-card tilt-on-hover">
              <Heart className="h-10 w-10 text-white mx-auto mb-4 pulse-glow" />
              <h3 className="font-semibold text-white text-lg mb-2">Community Love</h3>
              <p className="text-white/90">We're more than a restaurant – we're your neighbors, committed to serving our community with heart.</p>
            </div>
            <div className="bg-white/20 backdrop-blur-md rounded-lg p-6 hover-lift beach-card tilt-on-hover">
              <Award className="h-10 w-10 text-white mx-auto mb-4 starfish-spin" />
              <h3 className="font-semibold text-white text-lg mb-2">Quality First</h3>
              <p className="text-white/90">Every ingredient is carefully selected, every dish crafted with passion and attention to detail.</p>
            </div>
            <div className="bg-white/20 backdrop-blur-md rounded-lg p-6 hover-lift beach-card tilt-on-hover">
              <MapPin className="h-10 w-10 text-white mx-auto mb-4 coconut-bounce" />
              <h3 className="font-semibold text-white text-lg mb-2">Coastal Spirit</h3>
              <p className="text-white/90">We celebrate the laid-back, welcoming spirit of coastal Carolina in everything we do.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;