import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Import images from src/assets
import Thai1 from '../assets/Thai1.jpg';
import Thai4 from '../assets/Thai4.jpg';
import Thai5 from '../assets/Thai5.jpg';
import Thai6 from '../assets/Thai6.jpg';
import Thai3 from '../assets/Thai3.jpg';

const Gallery = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    {
      url: Thai1,
      alt: 'Thai Riverside plated duck',
      caption: 'Plated Crispy Duck w/ Noodles'
    },
    {
      url: Thai4,
      alt: 'Shrimp Paradise in pineapple',
      caption: 'Shrimp Paradise - Chef Special'
    },
    {
      url: Thai5,
      alt: 'Dog-friendly patio seating',
      caption: 'Dog-friendly patio'
    },
    {
      url: Thai6,
      alt: 'Bankok Duck',
      caption: 'Savory Thai Duck'
    },
    {
      url: Thai3,
      alt: 'Cozy indoor dining area',
      caption: 'Cozy indoor atmosphere'
    }
  ];

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section id="gallery" className="py-24 bg-gradient-to-br from-earth-50 via-warm-50 to-accent-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-40 h-40 bg-accent-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-32 h-32 bg-warm-400 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-white/80 backdrop-blur-sm px-6 py-2 rounded-full mb-6 shadow-warm">
              <span className="text-accent-600 font-medium text-sm tracking-wider uppercase">Visual Experience</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-display font-bold text-gray-900 mb-8">
              <span className="bg-gradient-to-r from-accent-700 via-warm-600 to-accent-700 bg-clip-text text-transparent">
                Gallery
              </span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-accent-400 to-warm-400 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 font-light max-w-2xl mx-auto">
              A glimpse into our restaurant, food, and riverside atmosphere
            </p>
          </div>

          {/* Main Image */}
          <div className="relative mb-12 group">
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-4 shadow-warm-lg">
              <div className="aspect-w-16 aspect-h-9 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl overflow-hidden">
                <img
                  src={images[currentImage].url}
                  alt={images[currentImage].alt}
                  className="w-full h-96 md:h-[500px] object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
            
            {/* Navigation Arrows */}
            <button
              onClick={prevImage}
              className="absolute left-8 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm hover:bg-white p-4 rounded-full shadow-warm hover:shadow-warm-lg transition-all duration-300 transform hover:scale-110 group/btn"
            >
              <ChevronLeft className="w-6 h-6 text-gray-700 group-hover/btn:text-accent-600 transition-colors" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-8 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm hover:bg-white p-4 rounded-full shadow-warm hover:shadow-warm-lg transition-all duration-300 transform hover:scale-110 group/btn"
            >
              <ChevronRight className="w-6 h-6 text-gray-700 group-hover/btn:text-accent-600 transition-colors" />
            </button>

            {/* Caption */}
            <div className="absolute bottom-8 left-8 right-8 bg-black/80 backdrop-blur-sm text-white p-6 rounded-2xl">
              <p className="text-center font-semibold text-lg">
                {images[currentImage].caption}
              </p>
            </div>
          </div>

          {/* Thumbnail Navigation */}
          <div className="flex justify-center space-x-4 overflow-x-auto pb-4">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => setCurrentImage(index)}
                className={`flex-shrink-0 w-20 h-20 rounded-2xl overflow-hidden border-3 transition-all duration-300 transform hover:scale-110 ${
                  currentImage === index 
                    ? 'border-accent-500 ring-4 ring-accent-200 shadow-warm' 
                    : 'border-white hover:border-accent-300 shadow-md hover:shadow-warm'
                }`}
              >
                <div className="relative">
                <img
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
                  {currentImage === index && (
                    <div className="absolute inset-0 bg-accent-500/20"></div>
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
