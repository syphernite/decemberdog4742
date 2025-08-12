import React from 'react';
import { Instagram, Youtube, Facebook, MessageCircle, Star } from 'lucide-react';

const ContentHub = () => {
  const testimonials = [
    {
      name: 'Sarah M.',
      text: "Oli completely transformed my relationship with fitness. I'm stronger and more confident than ever!",
      rating: 5
    },
    {
      name: 'Mike T.',
      text: "The mindset coaching was a game-changer. I finally broke through my mental barriers.",
      rating: 5
    },
    {
      name: 'Emma L.',
      text: "Love the recipes! Finally found a way to eat healthy without sacrificing flavor.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-gray-50" id="content">
      <div className="max-w-7xl mx-auto px-6">
        {/* Social Media Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Follow The <span className="text-orange-500">Journey</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Get daily motivation, workout tips, and behind-the-scenes content across all platforms.
          </p>

          <div className="flex justify-center space-x-6 mb-12">
            {[
              { icon: Instagram, label: 'Instagram', color: 'hover:text-pink-500' },
              { icon: Youtube, label: 'YouTube', color: 'hover:text-red-500' },
              { icon: Facebook, label: 'Facebook', color: 'hover:text-blue-500' },
              { icon: MessageCircle, label: 'Threads', color: 'hover:text-purple-500' }
            ].map((social, index) => (
              <a
                key={index}
                href="#"
                className={`bg-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 ${social.color}`}
              >
                <social.icon className="w-8 h-8 text-gray-700" />
              </a>
            ))}
          </div>
        </div>

        {/* Featured Content Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
            <img 
              src="https://images.pexels.com/photos/416778/pexels-photo-416778.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Workout demonstration"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Weekly Workout Breakdown</h3>
              <p className="text-gray-600">Follow along with my latest training session and learn proper form.</p>
            </div>
          </div>

          <div className="relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
            <img 
              src="https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Meal prep"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Sunday Meal Prep</h3>
              <p className="text-gray-600">Step-by-step guide to preparing a week's worth of healthy meals.</p>
            </div>
          </div>

          <div className="relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
            <img 
              src="https://images.pexels.com/photos/3768916/pexels-photo-3768916.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Mindset coaching"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Mindset Monday</h3>
              <p className="text-gray-600">Weekly motivation and mental strategies for lasting success.</p>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-900">
            What My Clients Say
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-700 italic mb-4 text-lg">
                  "{testimonial.text}"
                </p>
                
                <p className="font-bold text-orange-500">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentHub;