import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const BeforeAfterSlider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      before: 'https://images.pexels.com/photos/1149137/pexels-photo-1149137.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2',
      after: 'https://images.pexels.com/photos/3764984/pexels-photo-3764984.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2',
      caption: 'Full exterior detail with ceramic coating'
    },
    {
      before: 'https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2',
      after: 'https://images.pexels.com/photos/3972755/pexels-photo-3972755.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2',
      caption: 'Interior deep cleaning and conditioning'
    },
    {
      before: 'https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2',
      after: 'https://images.pexels.com/photos/305070/pexels-photo-305070.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2',
      caption: 'Paint correction and protective coating'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative max-w-4xl mx-auto">
      <motion.div
        key={currentSlide}
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        <div className="relative">
          <img
            src={slides[currentSlide].before}
            alt="Before detailing"
            className="w-full h-64 object-cover rounded-lg"
          />
          <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
            BEFORE
          </div>
        </div>
        
        <div className="relative">
          <img
            src={slides[currentSlide].after}
            alt="After detailing"
            className="w-full h-64 object-cover rounded-lg"
          />
          <div className="absolute top-4 left-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
            AFTER
          </div>
        </div>
      </motion.div>
      
      <p className="text-center mt-4 text-lg text-gray-300">
        {slides[currentSlide].caption}
      </p>
      
      {/* Navigation */}
      <div className="flex justify-center items-center mt-6 space-x-4">
        <button
          onClick={prevSlide}
          className="bg-gray-800 hover:bg-gray-700 text-white p-2 rounded-full transition-colors duration-200"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        
        <div className="flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                index === currentSlide ? 'bg-blue-500' : 'bg-gray-600'
              }`}
            />
          ))}
        </div>
        
        <button
          onClick={nextSlide}
          className="bg-gray-800 hover:bg-gray-700 text-white p-2 rounded-full transition-colors duration-200"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
};

export default BeforeAfterSlider;