import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import { fadeUp } from '../utils/animations';

interface Review {
  id: number;
  name: string;
  rating: number;
  text: string;
  date: string;
}

const ReviewsCarousel: React.FC = () => {
  const [ref, isInView] = useInView(0.2);
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const reviews: Review[] = [
    {
      id: 1,
      name: "Sarah M.",
      rating: 5,
      text: "Incredible attention to detail. The artist understood exactly what I wanted and brought it to life perfectly.",
      date: "2 weeks ago"
    },
    {
      id: 2,
      name: "Mike R.",
      rating: 5,
      text: "Clean, professional environment. The aftercare instructions were thorough and my tattoo healed beautifully.",
      date: "1 month ago"
    },
    {
      id: 3,
      name: "Jessica L.",
      rating: 5,
      text: "Best tattoo experience I've ever had. The consultation process was detailed and the final result exceeded expectations.",
      date: "3 weeks ago"
    },
    {
      id: 4,
      name: "David K.",
      rating: 5,
      text: "Professional, talented artists who really take their time to get it right. Worth every penny.",
      date: "1 week ago"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [reviews.length]);

  const nextReview = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length);
  };

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating ? 'text-blood-600 fill-current' : 'text-stone-500'
        }`}
      />
    ));
  };

  return (
    <section ref={ref} className="py-20 bg-ink-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="font-display font-bold text-3xl sm:text-4xl text-bone-100 text-center mb-12"
        >
          Voices in the Dark
        </motion.h2>
        
        <div className="relative">
          <div className="overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
                className="bg-stone-700/50 p-8 rounded-medium border border-stone-600 backdrop-blur-sm film-grain"
              >
                <div className="flex items-center space-x-1 mb-4">
                  {renderStars(reviews[currentIndex].rating)}
                </div>
                
                <blockquote className="text-bone-100 text-lg mb-6 leading-relaxed">
                  "{reviews[currentIndex].text}"
                </blockquote>
                
                <div className="flex justify-between items-center text-stone-400 text-sm">
                  <cite className="font-medium not-italic">
                    {reviews[currentIndex].name}
                  </cite>
                  <span>{reviews[currentIndex].date}</span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          
          {/* Navigation buttons */}
          <div className="flex justify-center space-x-4 mt-8">
            <button
              onClick={prevReview}
              className="p-2 text-stone-400 hover:text-bone-100 transition-colors"
              aria-label="Previous review"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            {/* Dots indicator */}
            <div className="flex items-center space-x-2">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentIndex ? 'bg-blood-600' : 'bg-stone-500'
                  }`}
                  aria-label={`Go to review ${index + 1}`}
                />
              ))}
            </div>
            
            <button
              onClick={nextReview}
              className="p-2 text-stone-400 hover:text-bone-100 transition-colors"
              aria-label="Next review"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsCarousel;