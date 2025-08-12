import React from 'react';

const About = () => {
  return (
    <section className="py-20 bg-gray-50" id="about">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Photo */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500">
              <img 
                src="https://images.pexels.com/photos/1547971/pexels-photo-1547971.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Oli Wakefield - Personal Trainer"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-orange-500/20 to-transparent"></div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Meet <span className="text-orange-500">Oli</span>
              </h2>
              
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  I believe fitness isn't just about changing your body—it's about remapping your entire life. 
                  My approach blends evidence-based training, practical nutrition, and powerful mindset tools 
                  to help you create lasting transformation.
                </p>
                
                <p>
                  Whether you're just starting your journey or looking to break through plateaus, I'm here 
                  to provide the guidance, accountability, and support you need. No cookie-cutter programs—
                  just personalized coaching that fits your life, your goals, and your schedule.
                </p>
              </div>
            </div>

            {/* Callout */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-orange-500">
              <p className="text-2xl font-bold text-gray-900 mb-2">
                "I'll be right there with you every step of the way."
              </p>
              <p className="text-gray-600">
                Your success is my mission. Let's build something incredible together.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;