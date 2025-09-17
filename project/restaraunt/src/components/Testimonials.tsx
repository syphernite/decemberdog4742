// src/components/Testimonials.tsx
import React, { useState, useEffect } from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      text: 'Fantastic food and friendly service. We were impressed from the first visit.',
      author: 'Alex P.',
      rating: 5,
    },
    {
      text: 'Great spot for a casual night out. The curry and noodles were excellent.',
      author: 'Jordan M.',
      rating: 5,
    },
    {
      text: 'Clean, quick, and delicious. Exactly what we were looking for.',
      author: 'Riley S.',
      rating: 5,
    },
    {
      text: 'Our new go-to. Consistent flavors and a welcoming vibe.',
      author: 'Taylor K.',
      rating: 5,
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <section id="testimonials" className="py-20 bg-primary-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-12">
            What Guests Say
          </h2>

          <div className="relative bg-white rounded-lg shadow-lg p-8 md:p-12">
            <Quote className="w-12 h-12 text-primary-200 mx-auto mb-6" />

            <div className="mb-8">
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
                “{testimonials[currentTestimonial].text}”
              </p>

              <div className="flex justify-center mb-4">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              <p className="font-semibold text-gray-900">— {testimonials[currentTestimonial].author}</p>
            </div>

            <div className="flex justify-center space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    currentTestimonial === index ? 'bg-primary-600' : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Show testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>

          <p className="text-xs text-gray-500 mt-6">Demo content. Replace with real reviews.</p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
