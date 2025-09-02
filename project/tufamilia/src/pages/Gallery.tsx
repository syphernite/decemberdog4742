import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  category: 'food' | 'drinks' | 'interior' | 'events';
  title: string;
}

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [lightboxImage, setLightboxImage] = useState<GalleryItem | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const categories = [
    { id: 'all', name: 'All', emoji: '🎨' },
    { id: 'food', name: 'Food', emoji: '🍽️' },
    { id: 'drinks', name: 'Drinks', emoji: '🍹' },
    { id: 'interior', name: 'Interior', emoji: '🏮' },
    { id: 'events', name: 'Events', emoji: '🎉' },
  ];

  const galleryItems: GalleryItem[] = [
    // Food
    {
      id: '1',
      src: 'https://images.pexels.com/photos/4958792/pexels-photo-4958792.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Carnitas tacos with fresh garnish',
      category: 'food',
      title: 'Carnitas Tacos'
    },
    {
      id: '2',
      src: 'https://images.pexels.com/photos/8448328/pexels-photo-8448328.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Traditional mole poblano with chicken',
      category: 'food',
      title: 'Mole Poblano'
    },
    {
      id: '3',
      src: 'https://images.pexels.com/photos/2313686/pexels-photo-2313686.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Fresh ceviche with lime and cilantro',
      category: 'food',
      title: 'Ceviche Verde'
    },
    {
      id: '4',
      src: 'https://images.pexels.com/photos/1600711/pexels-photo-1600711.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Colorful barbacoa bowl with rice and beans',
      category: 'food',
      title: 'Barbacoa Bowl'
    },
    {
      id: '5',
      src: 'https://images.pexels.com/photos/2664216/pexels-photo-2664216.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Fresh guacamole with tortilla chips',
      category: 'food',
      title: 'Guacamole Tradicional'
    },
    {
      id: '6',
      src: 'https://images.pexels.com/photos/4051443/pexels-photo-4051443.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Melted queso fundido with chorizo',
      category: 'food',
      title: 'Queso Fundido'
    },
    // Drinks
    {
      id: '7',
      src: 'https://images.pexels.com/photos/5947043/pexels-photo-5947043.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Classic margarita with lime garnish',
      category: 'drinks',
      title: 'Margarita Clásica'
    },
    {
      id: '8',
      src: 'https://images.pexels.com/photos/2795026/pexels-photo-2795026.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Colorful cocktails with fresh fruit',
      category: 'drinks',
      title: 'Signature Cocktails'
    },
    {
      id: '9',
      src: 'https://images.pexels.com/photos/3658777/pexels-photo-3658777.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Fresh agua frescas in glass pitchers',
      category: 'drinks',
      title: 'Agua Frescas'
    },
    // Interior
    {
      id: '10',
      src: 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Warm restaurant dining room with Mexican decor',
      category: 'interior',
      title: 'Main Dining Room'
    },
    {
      id: '11',
      src: 'https://images.pexels.com/photos/1395964/pexels-photo-1395964.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Colorful bar area with Mexican tiles',
      category: 'interior',
      title: 'Bar Area'
    },
    {
      id: '12',
      src: 'https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Intimate private dining space',
      category: 'interior',
      title: 'Private Dining'
    },
    // Events
    {
      id: '13',
      src: 'https://images.pexels.com/photos/3171837/pexels-photo-3171837.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Live mariachi performance',
      category: 'events',
      title: 'Live Music Night'
    },
    {
      id: '14',
      src: 'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Birthday celebration with tres leches cake',
      category: 'events',
      title: 'Birthday Celebration'
    },
    {
      id: '15',
      src: 'https://images.pexels.com/photos/1395967/pexels-photo-1395967.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Group dining celebration',
      category: 'events',
      title: 'Group Events'
    },
  ];

  const filteredItems = selectedCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  const openLightbox = (item: GalleryItem) => {
    setLightboxImage(item);
    setCurrentImageIndex(filteredItems.findIndex(i => i.id === item.id));
  };

  const navigate = (direction: 'prev' | 'next') => {
    if (direction === 'prev') {
      const newIndex = currentImageIndex > 0 ? currentImageIndex - 1 : filteredItems.length - 1;
      setCurrentImageIndex(newIndex);
      setLightboxImage(filteredItems[newIndex]);
    } else {
      const newIndex = currentImageIndex < filteredItems.length - 1 ? currentImageIndex + 1 : 0;
      setCurrentImageIndex(newIndex);
      setLightboxImage(filteredItems[newIndex]);
    }
  };

  return (
    <motion.div
      className="min-h-screen pt-20 pb-32"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-6xl font-display font-bold text-charcoal mb-4">
            Our <span className="text-chili">Gallery</span>
          </h1>
          <p className="text-lg text-charcoal/70 max-w-2xl mx-auto">
            Discover the vibrant atmosphere and authentic flavors that make Robert Familia special
          </p>
        </motion.div>

        {/* Filter Pills */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map((category, index) => (
            <motion.button
              key={category.id}
              className={`px-6 py-3 rounded-full font-medium transition-all ${
                selectedCategory === category.id
                  ? 'bg-chili text-papel shadow-lg'
                  : 'bg-white text-charcoal hover:bg-chili/10 border border-gray-200'
              }`}
              onClick={() => setSelectedCategory(category.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <span className="flex items-center gap-2">
                {category.emoji} {category.name}
              </span>
            </motion.button>
          ))}
        </motion.div>

        {/* Masonry Gallery */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                className="break-inside-avoid mb-6 group cursor-pointer"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                onClick={() => openLightbox(item)}
              >
                <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-auto group-hover:scale-110 transition-transform duration-500"
                  />
                  
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-papel font-display font-bold text-lg mb-1">
                        {item.title}
                      </h3>
                      <p className="text-papel/80 text-sm capitalize">
                        {item.category}
                      </p>
                    </div>
                  </div>

                  {/* Chili lens flare effect */}
                  <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute top-4 right-4 w-6 h-6 bg-chili rounded-full blur-md animate-pulse"></div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            className="fixed inset-0 bg-charcoal/95 backdrop-blur-sm flex items-center justify-center p-4 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxImage(null)}
          >
            <motion.div
              className="relative max-w-5xl max-h-[90vh] w-full"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={lightboxImage.src}
                alt={lightboxImage.alt}
                className="w-full h-full object-contain rounded-lg"
              />
              
              {/* Close button */}
              <button
                className="absolute top-4 right-4 w-10 h-10 bg-charcoal/80 text-papel rounded-full flex items-center justify-center hover:bg-charcoal transition-colors"
                onClick={() => setLightboxImage(null)}
              >
                <X size={20} />
              </button>

              {/* Navigation arrows */}
              <button
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-charcoal/80 text-papel rounded-full flex items-center justify-center hover:bg-charcoal transition-colors"
                onClick={() => navigate('prev')}
              >
                <ChevronLeft size={24} />
              </button>
              
              <button
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-charcoal/80 text-papel rounded-full flex items-center justify-center hover:bg-charcoal transition-colors"
                onClick={() => navigate('next')}
              >
                <ChevronRight size={24} />
              </button>

              {/* Image info */}
              <div className="absolute bottom-4 left-4 right-4 bg-charcoal/80 backdrop-blur-sm rounded-lg p-4">
                <h3 className="text-papel font-display font-bold text-xl mb-1">
                  {lightboxImage.title}
                </h3>
                <p className="text-papel/80 text-sm capitalize">
                  {lightboxImage.category} • {currentImageIndex + 1} of {filteredItems.length}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Gallery;