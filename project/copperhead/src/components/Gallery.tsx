import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface GalleryImage {
  id: number;
  beforeUrl: string;
  afterUrl: string;
  tags: string[];
  alt: string;
}

interface GalleryProps {
  images: GalleryImage[];
  showFilters?: boolean;
}

export const Gallery: React.FC<GalleryProps> = ({ images, showFilters = false }) => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [showBefore, setShowBefore] = useState(false);
  const [filter, setFilter] = useState('all');

  const filters = ['all', 'fades', 'beards', 'kids'];
  const filteredImages = images.filter(img => 
    filter === 'all' || img.tags.includes(filter)
  );

  const openLightbox = (image: GalleryImage) => {
    setSelectedImage(image);
    setShowBefore(false);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (!selectedImage) return;
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
    const nextIndex = (currentIndex + 1) % filteredImages.length;
    setSelectedImage(filteredImages[nextIndex]);
    setShowBefore(false);
  };

  const prevImage = () => {
    if (!selectedImage) return;
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
    const prevIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
    setSelectedImage(filteredImages[prevIndex]);
    setShowBefore(false);
  };

  return (
    <>
      {showFilters && (
        <div className="flex flex-wrap gap-4 mb-8 justify-center">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-2 rounded-full capitalize transition-colors focus:outline-none focus:ring-2 focus:ring-copper ${
                filter === f
                  ? 'bg-copper text-bone'
                  : 'bg-bone text-charcoal hover:bg-copper/10'
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      )}

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredImages.map((image, index) => (
          <motion.div
            key={image.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            className="relative aspect-square cursor-pointer group overflow-hidden rounded-lg"
            onClick={() => openLightbox(image)}
          >
            <img
              src={image.afterUrl}
              alt={image.alt}
              className="w-full h-full object-cover transition-transform group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/30 transition-colors flex items-center justify-center">
              <span className="text-bone font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                View Details
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-charcoal/90 z-50 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <div className="relative max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
              {/* Navigation */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-bone/20 hover:bg-bone/30 rounded-full text-bone transition-colors z-10"
                aria-label="Previous image"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-bone/20 hover:bg-bone/30 rounded-full text-bone transition-colors z-10"
                aria-label="Next image"
              >
                <ChevronRight size={24} />
              </button>

              {/* Close button */}
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 p-2 bg-bone/20 hover:bg-bone/30 rounded-full text-bone transition-colors z-10"
                aria-label="Close lightbox"
              >
                <X size={24} />
              </button>

              {/* Before/After Toggle */}
              <div className="absolute top-4 left-4 z-10">
                <div className="flex bg-bone/20 rounded-full p-1">
                  <button
                    onClick={() => setShowBefore(false)}
                    className={`px-3 py-1 rounded-full text-sm transition-colors ${
                      !showBefore ? 'bg-bone text-black' : 'text-bone hover:bg-bone/20'
                    }`}
                  >
                    After
                  </button>
                  <button
                    onClick={() => setShowBefore(true)}
                    className={`px-3 py-1 rounded-full text-sm transition-colors ${
                      showBefore ? 'bg-bone text-black' : 'text-bone hover:bg-bone/20'
                    }`}
                  >
                    Before
                  </button>
                </div>
              </div>

              {/* Image */}
              <motion.img
                key={`${selectedImage.id}-${showBefore}`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                src={showBefore ? selectedImage.beforeUrl : selectedImage.afterUrl}
                alt={selectedImage.alt}
                className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};