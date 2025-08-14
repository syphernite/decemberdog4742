import React from 'react';
import { Instagram, Youtube, Facebook, MessageCircle, Star } from 'lucide-react';

const ContentHub = () => {
  const testimonials = [
    { name: 'Sarah M.', text: 'I’m stronger and more confident than ever.', rating: 5 },
    { name: 'Mike T.', text: 'Mindset coaching helped me break mental barriers.', rating: 5 },
    { name: 'Emma L.', text: 'Recipes made healthy eating simple and tasty.', rating: 5 },
  ];

  return (
    <section className="py-20 bg-gray-50" id="content">
      <div className="max-w-7xl mx-auto px-6">
        {/* Social */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Follow The <span className="text-sky-500">Journey</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Daily training, nutrition, and motivation.
          </p>

          <div className="flex justify-center space-x-6 mb-12">
            {[
              { icon: Instagram, label: 'Instagram', href: 'https://instagram.com/oliwakefieldfitness', color: 'hover:text-pink-500' },
              { icon: Youtube, label: 'YouTube', href: 'https://www.youtube.com/@oliwakefieldfitness', color: 'hover:text-red-500' },
              { icon: Facebook, label: 'Facebook', href: 'https://www.facebook.com/share/19w6RhurwL/?mibextid=wwXIfr', color: 'hover:text-blue-500' },
              { icon: MessageCircle, label: 'Contact', href: '#contact', color: 'hover:text-sky-500' },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith('http') ? '_blank' : undefined}
                rel={s.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className={`bg-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 ${s.color}`}
                aria-label={s.label}
                title={s.label}
              >
                <s.icon className="w-8 h-8 text-gray-700" />
              </a>
            ))}
          </div>
        </div>

        {/* Featured content (static placeholders) */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            { title: 'Weekly Workout Breakdown', img: 'https://images.pexels.com/photos/416778/pexels-photo-416778.jpeg?auto=compress&cs=tinysrgb&w=800', blurb: 'Learn proper form and progress with clarity.' },
            { title: 'Sunday Meal Prep', img: 'https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=800', blurb: 'Prep tasty meals that fit your macros.' },
            { title: 'Mindset Monday', img: 'https://images.pexels.com/photos/3768916/pexels-photo-3768916.jpeg?auto=compress&cs=tinysrgb&w=800', blurb: 'Build confidence and discipline that lasts.' },
          ].map((c) => (
            <div key={c.title} className="relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <img src={c.img} alt={c.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{c.title}</h3>
                <p className="text-gray-600">{c.blurb}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-900">What My Clients Say</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div key={t.name} className="text-center">
                <div className="flex justify-center mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 italic mb-4 text-lg">“{t.text}”</p>
                <p className="font-bold text-sky-500">{t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentHub;
