import React, { useEffect, useRef, useState } from 'react';
import { Heart, Globe, Award } from 'lucide-react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

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
    <section ref={sectionRef} id="about" className="py-20 bg-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-pattern opacity-20"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`font-heading text-4xl md:text-5xl text-white mb-4 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            Our <span className="text-yellow-400">Story</span>
          </h2>
          <p className={`text-xl text-gray-300 max-w-3xl mx-auto font-body ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
            Born from a passion for street food and global flavors, Rolling Spice brings the world to your plate
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Story Content */}
          <div className={`space-y-8 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <div className="flex items-start space-x-4">
              <Globe className="w-8 h-8 text-yellow-400 mt-1 animate-bounce-slow" />
              <div>
                <h3 className="text-2xl font-bold text-white mb-2 font-heading">Global Inspiration</h3>
                <p className="text-gray-300 font-body leading-relaxed">
                  Our journey began with a simple idea: what if we could capture the essence of street food from around the world and serve it from a single truck? From Korean bulgogi to Mexican carnitas, Indian curry to Mediterranean herbs.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Heart className="w-8 h-8 text-red-400 mt-1 animate-bounce-slow" />
              <div>
                <h3 className="text-2xl font-bold text-white mb-2 font-heading">Made with Love</h3>
                <p className="text-gray-300 font-body leading-relaxed">
                  Every taco is handcrafted with premium ingredients and authentic spices. We source locally when possible and import the special ingredients that make each fusion creation authentic to its roots.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Award className="w-8 h-8 text-green-400 mt-1 animate-bounce-slow" />
              <div>
                <h3 className="text-2xl font-bold text-white mb-2 font-heading">Award Winning</h3>
                <p className="text-gray-300 font-body leading-relaxed">
                  Winner of "Best Food Truck 2023" and "Most Creative Menu" at the Metro Street Food Festival. Our commitment to quality and innovation drives everything we do.
                </p>
              </div>
            </div>
          </div>

          {/* Team Image */}
          <div className={`${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/6210959/pexels-photo-6210959.jpeg"
                alt="Rolling Spice team cooking"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <p className="text-lg font-bold font-heading">Meet the Team</p>
                <p className="text-sm opacity-90 font-body">Passionate chefs bringing global flavors to life</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;