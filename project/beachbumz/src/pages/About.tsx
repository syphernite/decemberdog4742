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
      <section className="py-20 bg-white">
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
                and classic comfort dishes. Every slice, sip, and smile is a part of our story.
              </p>
              <ul className="mt-6 space-y-3 text-gray-700">
                <li className="flex items-center gap-3"><Utensils className="h-5 w-5 text-turquoise" /> Scratch-made dough and sauces</li>
                <li className="flex items-center gap-3"><Clock className="h-5 w-5 text-turquoise" /> Consistent quality and friendly service</li>
                <li className="flex items-center gap-3"><MapPin className="h-5 w-5 text-turquoise" /> Heart of Morehead City, NC</li>
              </ul>
            </div>
            <div className="animate-on-scroll">
              <img
                src="https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Pizzeria interior"
                className="w-full h-full object-cover rounded-xl shadow-lg"
              />
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
            {/* Spine */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-turquoise to-sunset-orange pulse-glow"></div>

            {/* Mobile single-column timeline (unchanged) */}
            <div className="relative sm:hidden">
              <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-turquoise via-sandy-beige to-sunset-orange opacity-60"></div>
              <div className="flex flex-col gap-6">
                {milestones.map((milestone) => (
                  <div key={milestone.year} className="bg-white/10 backdrop-blur-md rounded-lg p-5 border border-white/10">
                    <div className="flex items-center gap-3 mb-1">
                      <span className="bg-gradient-to-r from-turquoise to-sunset-orange text-white font-bold px-3 py-1 rounded-full">
                        {milestone.year}
                      </span>
                      <h3 className="font-semibold text-white text-lg">{milestone.event}</h3>
                    </div>
                    <p className="text-sandy-beige">{milestone.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Desktop vertical flowchart (only change) */}
            <div className="hidden sm:block">
              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <div key={milestone.year} className="relative grid grid-cols-12 gap-4 items-center">
                    {/* Node on the spine */}
                    <div className="col-span-2 col-start-6 flex items-center justify-center">
                      <div className="relative">
                        <div className="h-4 w-4 rounded-full bg-turquoise shadow-[0_0_0_6px_rgba(64,224,208,0.35)]" />
                        <span className="absolute -top-7 left-1/2 -translate-x-1/2 hidden md:inline-block px-2 py-0.5 text-xs font-semibold text-white bg-ocean-blue/80 rounded">
                          {milestone.year}
                        </span>
                      </div>
                    </div>

                    {/* Connector elbow from spine to card */}
                    <div className="hidden md:block col-span-1 col-start-7 h-px bg-white/20" />

                    {/* Card to the right */}
                    <div className="col-span-12 md:col-span-5 md:col-start-8">
                      <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/10 hover-lift beach-card tilt-on-hover">
                        <h3 className="text-white font-semibold text-lg mb-1">{milestone.event}</h3>
                        <p className="text-sandy-beige">{milestone.description}</p>
                      </div>
                    </div>

                    {/* Optional down connector between steps for flowchart feel */}
                    {index < milestones.length - 1 && (
                      <div className="absolute left-1/2 -translate-x-1/2 -bottom-6 h-6 w-[2px] bg-white/15" />
                    )}
                  </div>
                ))}
              </div>
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
