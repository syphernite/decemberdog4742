import React, { useEffect, useRef, useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const Gallery = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [currentCategory, setCurrentCategory] = useState('all');
  const sectionRef = useRef<HTMLDivElement>(null);

  // request compressed, reasonable width images
  const imgUrl = (u: string) => (u.includes('?') ? u : `${u}?auto=compress&cs=tinysrgb&w=1200`);

  const images = [
    { src: imgUrl("https://images.pexels.com/photos/4393668/pexels-photo-4393668.jpeg"), category: "truck", alt: "Food truck in action" },
    { src: imgUrl("https://images.pexels.com/photos/6941004/pexels-photo-6941004.jpeg"), category: "food", alt: "Tacos with fresh toppings" },
    { src: imgUrl("https://images.pexels.com/photos/5792320/pexels-photo-5792320.jpeg"), category: "food", alt: "Street food close-up" },
    { src: imgUrl("https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg"), category: "truck", alt: "Truck at night market" },
    { src: imgUrl("https://images.pexels.com/photos/5639266/pexels-photo-5639266.jpeg"), category: "prep", alt: "Kitchen prep" },
    { src: imgUrl("https://images.pexels.com/photos/3534750/pexels-photo-3534750.jpeg"), category: "crowd", alt: "Happy customers" },
  ];

  const filteredImages = currentCategory === 'all'
    ? images
    : images.filter(img => img.category === currentCategory);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => e.isIntersecting && setIsVisible(true)),
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const openLightbox = (index: number) => setSelectedImage(index);
  const closeLightbox = () => setSelectedImage(null);
  const prevImage = () => setSelectedImage(prev => (prev === null ? null : (prev - 1 + filteredImages.length) % filteredImages.length));
  const nextImage = () => setSelectedImage(prev => (prev === null ? null : (prev + 1) % filteredImages.length));

  return (
    <section id="gallery" ref={sectionRef} className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold">Gallery</h2>
          <p className="mt-2 text-gray-400">A taste of our vibe</p>
        </div>

        <div className="flex justify-center gap-4 mb-8">
          {['all', 'truck', 'food', 'prep', 'crowd'].map(cat => (
            <button
              key={cat}
              onClick={() => setCurrentCategory(cat)}
              className={`px-4 py-2 rounded-full border ${currentCategory === cat ? 'bg-yellow-500 text-black' : 'border-gray-700 text-gray-300'}`}
            >
              {cat[0].toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>

        <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 transition-opacity ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          {filteredImages.map((img, i) => (
            <button key={i} onClick={() => openLightbox(i)} className="group relative overflow-hidden rounded-lg focus:outline-none">
              <img
                loading="lazy"
                decoding="async"
                src={img.src}
                alt={img.alt}
                className="w-full h-56 object-cover transform group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
            </button>
          ))}
        </div>

        {selectedImage !== null && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50">
            <button onClick={closeLightbox} className="absolute top-6 right-6 p-2 text-white/80 hover:text-white">
              <X className="w-6 h-6" />
            </button>
            <button onClick={prevImage} className="absolute left-4 p-2 text-white/80 hover:text-white">
              <ChevronLeft className="w-8 h-8" />
            </button>
            <img
              loading="eager"
              decoding="async"
              src={filteredImages[selectedImage].src}
              alt={filteredImages[selectedImage].alt}
              className="max-w-4xl w-[90%] max-h-[80vh] object-contain rounded-lg shadow-2xl"
            />
            <button onClick={nextImage} className="absolute right-4 p-2 text-white/80 hover:text-white">
              <ChevronRight className="w-8 h-8" />
            </button>
            <div className="absolute bottom-6 left-6 text-white">
              <p className="text-sm opacity-75">{selectedImage + 1} of {filteredImages.length}</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
