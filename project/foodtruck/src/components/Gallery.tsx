import React, { useEffect, useRef, useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const Gallery = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [currentCategory, setCurrentCategory] = useState('all');
  const sectionRef = useRef<HTMLDivElement>(null);

  const images = [
    {
      src: "https://images.pexels.com/photos/4393668/pexels-photo-4393668.jpeg",
      category: "truck",
      alt: "Food truck in action"
    },
    {
      src: "https://images.pexels.com/photos/7613568/pexels-photo-7613568.jpeg",
      category: "food",
      alt: "Korean bulgogi taco"
    },
    {
      src: "https://images.pexels.com/photos/6210959/pexels-photo-6210959.jpeg",
      category: "team",
      alt: "Chef preparing tacos"
    },
    {
      src: "https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg",
      category: "food",
      alt: "Mumbai Express taco"
    },
    {
      src: "https://images.pexels.com/photos/4958792/pexels-photo-4958792.jpeg",
      category: "food",
      alt: "Mediterranean Magic taco"
    },
    {
      src: "https://images.pexels.com/photos/2456435/pexels-photo-2456435.jpeg",
      category: "customers",
      alt: "Happy customers enjoying tacos"
    },
    {
      src: "https://images.pexels.com/photos/4393021/pexels-photo-4393021.jpeg",
      category: "food",
      alt: "Tokyo Fusion taco"
    },
    {
      src: "https://images.pexels.com/photos/6941004/pexels-photo-6941004.jpeg",
      category: "customers",
      alt: "Family enjoying meal"
    },
    {
      src: "https://images.pexels.com/photos/5792320/pexels-photo-5792320.jpeg",
      category: "food",
      alt: "Peruvian Power taco"
    },
    {
      src: "https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg",
      category: "food",
      alt: "Bangkok Fire taco"
    },
    {
      src: "https://images.pexels.com/photos/5639266/pexels-photo-5639266.jpeg",
      category: "food",
      alt: "Moroccan Sunset taco"
    },
    {
      src: "https://images.pexels.com/photos/3534750/pexels-photo-3534750.jpeg",
      category: "team",
      alt: "Team preparing ingredients"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Photos' },
    { id: 'food', name: 'Our Food' },
    { id: 'truck', name: 'The Truck' },
    { id: 'team', name: 'Behind the Scenes' },
    { id: 'customers', name: 'Happy Customers' }
  ];

  const filteredImages = currentCategory === 'all' 
    ? images 
    : images.filter(img => img.category === currentCategory);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  const navigateLightbox = (direction: 'prev' | 'next') => {
    if (selectedImage === null) return;
    
    if (direction === 'prev') {
      setSelectedImage(selectedImage > 0 ? selectedImage - 1 : filteredImages.length - 1);
    } else {
      setSelectedImage(selectedImage < filteredImages.length - 1 ? selectedImage + 1 : 0);
    }
  };

  return (
    <section ref={sectionRef} id="gallery" className="py-20 bg-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-pattern opacity-20"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`font-heading text-4xl md:text-5xl text-white mb-4 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            Photo <span className="text-yellow-400">Gallery</span>
          </h2>
          <p className={`text-xl text-gray-300 max-w-3xl mx-auto font-body ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
            Take a peek behind the scenes, see our amazing food, and meet our happy customers
          </p>
        </div>

        {/* Category Filter */}
        <div className={`flex flex-wrap justify-center gap-4 mb-12 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setCurrentCategory(category.id)}
              className={`px-6 py-2 rounded-full font-bold transition-all duration-300 ${
                currentCategory === category.id
                  ? 'bg-gradient-to-r from-red-500 to-yellow-500 text-white'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Image Grid */}
        <div className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          {filteredImages.map((image, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg cursor-pointer group"
              onClick={() => openLightbox(index)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-bold">View Image</span>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage !== null && (
          <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4">
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 text-white hover:text-yellow-400 transition-colors duration-200"
            >
              <X className="w-8 h-8" />
            </button>

            <button
              onClick={() => navigateLightbox('prev')}
              className="absolute left-6 text-white hover:text-yellow-400 transition-colors duration-200"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>

            <button
              onClick={() => navigateLightbox('next')}
              className="absolute right-6 text-white hover:text-yellow-400 transition-colors duration-200"
            >
              <ChevronRight className="w-8 h-8" />
            </button>

            <img
              src={filteredImages[selectedImage].src}
              alt={filteredImages[selectedImage].alt}
              className="max-w-full max-h-full object-contain"
            />

            <div className="absolute bottom-6 left-6 text-white">
              <p className="text-sm opacity-75">
                {selectedImage + 1} of {filteredImages.length}
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;