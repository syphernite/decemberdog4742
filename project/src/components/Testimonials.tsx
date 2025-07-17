import React, { useState, useEffect } from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      text: "Best Thai food in the Tri-Cities — hands down! The flavors are incredible and the riverside view makes it even better.",
      author: "Sarah Johnson",
      rating: 5
    },
    {
      text: "Beautiful view, amazing curry, and the Shrimp Paradise is a must-try. We bring our dog here every weekend!",
      author: "Mike Chen",
      rating: 5
    },
    {
      text: "Blows Thai Noodle Town out of the water. Authentic flavors, great service, and the patio is perfect for date night.",
      author: "Emily Rodriguez",
      rating: 5
    },
    {
      text: "Family-friendly atmosphere with incredible food. The kids love the Pad Thai and we love the adult beverages on the patio.",
      author: "David Wilson",
      rating: 5
    }
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
            What Our Customers Say
          </h2>

          <div className="relative bg-white rounded-lg shadow-lg p-8 md:p-12">
            <Quote className="w-12 h-12 text-primary-200 mx-auto mb-6" />
            
            <div className="mb-8">
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
                "{testimonials[currentTestimonial].text}"
              </p>
              
              <div className="flex justify-center mb-4">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <p className="font-semibold text-gray-900">
                — {testimonials[currentTestimonial].author}
              </p>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    currentTestimonial === index 
                      ? 'bg-primary-600' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;