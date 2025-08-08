import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Filter, X, ZoomIn } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import { staggerChildren, fadeUp, scaleIn } from '../utils/animations';

interface PortfolioItem {
  id: number;
  image: string;
  title: string;
  artist: string;
  style: string;
  category: string;
}

const Portfolio: React.FC = () => {
  const [ref, isInView] = useInView(0.1);
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [selectedImage, setSelectedImage] = useState<PortfolioItem | null>(null);
  const [showFilters, setShowFilters] = useState(false);

  const portfolioItems: PortfolioItem[] = [
    {
      id: 1,
      image: "https://images.pexels.com/photos/1319459/pexels-photo-1319459.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Dragon Sleeve",
      artist: "Marcus Chen",
      style: "Traditional",
      category: "sleeve"
    },
    {
      id: 2,
      image: "https://images.pexels.com/photos/1010519/pexels-photo-1010519.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Rose Portrait",
      artist: "Sofia Rivera",
      style: "Color Realism",
      category: "portrait"
    },
    {
      id: 3,
      image: "https://images.pexels.com/photos/1738986/pexels-photo-1738986.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Geometric Wolf",
      artist: "Jake Morrison",
      style: "Blackwork",
      category: "animal"
    },
    {
      id: 4,
      image: "https://images.pexels.com/photos/3586091/pexels-photo-3586091.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Mandala Design",
      artist: "Jake Morrison",
      style: "Geometric",
      category: "geometric"
    },
    {
      id: 5,
      image: "https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Floral Piece",
      artist: "Sofia Rivera",
      style: "Fine Line",
      category: "floral"
    },
    {
      id: 6,
      image: "https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Traditional Eagle",
      artist: "Marcus Chen",
      style: "Traditional",
      category: "animal"
    },
    {
      id: 7,
      image: "https://images.pexels.com/photos/1319459/pexels-photo-1319459.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Japanese Koi",
      artist: "Marcus Chen",
      style: "Japanese",
      category: "animal"
    },
    {
      id: 8,
      image: "https://images.pexels.com/photos/1010519/pexels-photo-1010519.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Abstract Lines",
      artist: "Jake Morrison",
      style: "Minimalist",
      category: "abstract"
    },
    {
      id: 9,
      image: "https://images.pexels.com/photos/1738986/pexels-photo-1738986.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Realistic Portrait",
      artist: "Sofia Rivera",
      style: "Color Realism",
      category: "portrait"
    }
  ];

  const filters = [
    { key: 'all', label: 'All Work' },
    { key: 'Traditional', label: 'Traditional' },
    { key: 'Color Realism', label: 'Color Realism' },
    { key: 'Blackwork', label: 'Blackwork' },
    { key: 'Geometric', label: 'Geometric' },
    { key: 'Fine Line', label: 'Fine Line' },
    { key: 'Marcus Chen', label: 'Marcus Chen' },
    { key: 'Sofia Rivera', label: 'Sofia Rivera' },
    { key: 'Jake Morrison', label: 'Jake Morrison' }
  ];

  const filteredItems = useMemo(() => {
    if (selectedFilter === 'all') return portfolioItems;
    return portfolioItems.filter(
      item => item.style === selectedFilter || item.artist === selectedFilter
    );
  }, [selectedFilter, portfolioItems]);

  return (
    <>
      <div className="min-h-screen bg-ink-900 pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-ink-800 film-grain">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-bone-100 mb-6"
            >
              Our <span className="text-blood-600">Portfolio</span>
            </motion.h1>
            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.2 }}
              className="text-xl text-stone-400 max-w-3xl mx-auto"
            >
              Every tattoo tells a story. Browse our collection of custom artwork and 
              find inspiration for your next piece.
            </motion.p>
          </div>
        </section>

        {/* Filter Controls */}
        <section className="py-8 bg-ink-800 border-b border-stone-700/30 sticky top-20 z-40 backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between">
              <h2 className="font-display font-semibold text-xl text-bone-100">
                {filteredItems.length} pieces
              </h2>
              
              {/* Mobile Filter Button */}
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="md:hidden flex items-center px-4 py-2 bg-stone-700 text-bone-100 rounded-small"
              >
                <Filter className="w-4 h-4 mr-2" />
                Filter
              </button>
              
              {/* Desktop Filters */}
              <div className="hidden md:flex flex-wrap gap-2">
                {filters.map((filter) => (
                  <button
                    key={filter.key}
                    onClick={() => setSelectedFilter(filter.key)}
                    className={`px-4 py-2 rounded-small font-medium transition-colors ${
                      selectedFilter === filter.key
                        ? 'bg-blood-600 text-bone-100'
                        : 'bg-stone-700 text-stone-300 hover:bg-stone-600'
                    }`}
                  >
                    {filter.label}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Mobile Filters */}
            {showFilters && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="md:hidden mt-4 flex flex-wrap gap-2"
              >
                {filters.map((filter) => (
                  <button
                    key={filter.key}
                    onClick={() => {
                      setSelectedFilter(filter.key);
                      setShowFilters(false);
                    }}
                    className={`px-4 py-2 rounded-small font-medium transition-colors ${
                      selectedFilter === filter.key
                        ? 'bg-blood-600 text-bone-100'
                        : 'bg-stone-700 text-stone-300 hover:bg-stone-600'
                    }`}
                  >
                    {filter.label}
                  </button>
                ))}
              </motion.div>
            )}
          </div>
        </section>

        {/* Portfolio Grid */}
        <section ref={ref} className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              layout
              variants={staggerChildren}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
              {filteredItems.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  variants={fadeUp}
                  whileHover={{ y: -8 }}
                  className="group cursor-pointer"
                  onClick={() => setSelectedImage(item)}
                >
                  <div className="relative aspect-square overflow-hidden rounded-medium bg-stone-800">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <ZoomIn className="w-8 h-8 text-bone-100" />
                    </div>
                    <div className="absolute bottom-4 left-4 right-4 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="font-display font-semibold text-bone-100 text-sm">
                        {item.title}
                      </h3>
                      <p className="text-stone-400 text-xs">
                        by {item.artist} • {item.style}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-ink-900/95 backdrop-blur-md p-4"
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            variants={scaleIn}
            initial="hidden"
            animate="visible"
            className="relative max-w-4xl max-h-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-bone-100 hover:text-blood-600 transition-colors z-10"
              aria-label="Close lightbox"
            >
              <X className="w-8 h-8" />
            </button>
            
            <img
              src={selectedImage.image}
              alt={selectedImage.title}
              className="max-w-full max-h-[80vh] object-contain rounded-medium"
            />
            
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-ink-900 to-transparent p-6 rounded-b-medium">
              <h3 className="font-display font-semibold text-xl text-bone-100">
                {selectedImage.title}
              </h3>
              <p className="text-stone-400">
                by {selectedImage.artist} • {selectedImage.style}
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default Portfolio;