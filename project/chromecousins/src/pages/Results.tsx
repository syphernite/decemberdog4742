import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Filter, X, ChevronLeft, ChevronRight, Star } from 'lucide-react';
import TestimonialCard from '../components/TestimonialCard';

const Results: React.FC = () => {
  const [galleryRef, galleryInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [testimonialsRef, testimonialsInView] = useInView({ threshold: 0.1, triggerOnce: true });
  
  const [activeFilter, setActiveFilter] = useState('All');
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const filters = ['All', 'Interior', 'Exterior', 'Paint Correction', 'Ceramic'];

  const galleryImages = [
    { 
      src: 'https://images.pexels.com/photos/6873123/pexels-photo-6873123.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2', 
      category: 'Exterior',
      caption: 'Full exterior detail with ceramic coating'
    },
    { 
      src: 'https://images.pexels.com/photos/6873100/pexels-photo-6873100.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2', 
      category: 'Interior',
      caption: 'Complete interior cleaning and conditioning'
    },
    { 
      src: 'https://images.pexels.com/photos/6873122/pexels-photo-6873122.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2', 
      category: 'Paint Correction',
      caption: 'Professional paint correction and polishing'
    },
    { 
      src: 'https://images.pexels.com/photos/6873008/pexels-photo-6873008.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2', 
      category: 'Ceramic',
      caption: 'Ceramic coating application'
    },
    { 
      src: 'https://images.pexels.com/photos/6873015/pexels-photo-6873015.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2', 
      category: 'Interior',
      caption: 'Dashboard and console detailing'
    },
    { 
      src: 'https://images.pexels.com/photos/6872176/pexels-photo-6872176.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2', 
      category: 'Exterior',
      caption: 'Premium exterior wash and wax'
    }
  ];

  const beforeAfterSlides = [
    {
      before: 'https://images.pexels.com/photos/6872176/pexels-photo-6872176.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2',
      after: 'https://images.pexels.com/photos/6873008/pexels-photo-6873008.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2',
      caption: 'Complete exterior transformation with ceramic coating'
    },
    {
      before: 'https://images.pexels.com/photos/6873100/pexels-photo-6873100.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2',
      after: 'https://images.pexels.com/photos/6873015/pexels-photo-6873015.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2',
      caption: 'Interior deep cleaning and leather conditioning'
    },
    {
      before: 'https://images.pexels.com/photos/6873122/pexels-photo-6873122.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2',
      after: 'https://images.pexels.com/photos/6873123/pexels-photo-6873123.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2',
      caption: 'Paint correction removing swirl marks and scratches'
    }
  ];

  const testimonials = [
    {
      name: 'Jennifer Martinez',
      rating: 5,
      text: 'Absolutely amazing results! My 5-year-old SUV looks better than the day I bought it. The ceramic coating is incredible.',
      image: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2'
    },
    {
      name: 'David Thompson',
      rating: 5,
      text: 'Professional service from start to finish. They came to my workplace and did an outstanding job on my truck.',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2'
    },
    {
      name: 'Lisa Wang',
      rating: 5,
      text: 'The convenience and quality are unmatched. My car interior looks and smells like new. Highly recommend!',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2'
    },
    {
      name: 'Robert Johnson',
      rating: 5,
      text: 'Best investment I\'ve made for my vehicle. The paint correction removed years of damage. Outstanding work!',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2'
    }
  ];

  const filteredImages = activeFilter === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeFilter);

  const nextSlide = () => setCurrentSlide((p) => (p + 1) % beforeAfterSlides.length);
  const prevSlide = () => setCurrentSlide((p) => (p - 1 + beforeAfterSlides.length) % beforeAfterSlides.length);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="pt-20 bg-black text-white">
      {/* Hero */}
      <section className="py-16 bg-gradient-to-br from-black via-zinc-900 to-black">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.div initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }}>
            <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">Our Results</h1>
            <p className="text-xl text-white/70 mb-8">See the transformation we deliver to every client</p>
            <div className="bg-red-600 text-black px-8 py-4 rounded-lg inline-flex items-center gap-3 text-lg font-semibold shadow-[0_0_25px_rgba(239,68,68,.35)]">
              <Star className="h-6 w-6" />
              <span>Over 500 Cars Detailed On Site</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filterable Gallery */}
      <section ref={galleryRef} className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div initial={{ y: 30, opacity: 0 }} animate={galleryInView ? { y: 0, opacity: 1 } : {}} transition={{ duration: 0.6 }} className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Gallery</h2>
            <p className="text-xl text-white/70 mb-8">Browse our work by category</p>

            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-6 py-2 rounded-lg font-medium transition-all duration-200 ${
                    activeFilter === filter ? 'bg-red-600 text-black shadow-[0_0_16px_rgba(239,68,68,.35)]' : 'bg-zinc-900 text-white/80 hover:bg-zinc-800'
                  }`}
                >
                  <Filter className="inline h-4 w-4 mr-2" />
                  {filter}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Grid */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence>
              {filteredImages.map((image) => (
                <motion.div
                  key={`${image.src}-${activeFilter}`}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                  className="cursor-pointer group"
                  onClick={() => setLightboxImage(image.src)}
                  whileHover={{ y: -5 }}
                >
                  <div className="relative overflow-hidden rounded-lg">
                    <img
                      src={image.src}
                      alt={image.caption}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-4 left-4 text-white">
                        <span className="text-xs bg-red-600 text-black px-2 py-1 rounded mb-2 block w-fit">
                          {image.category}
                        </span>
                        <p className="text-sm">{image.caption}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Before/After */}
      <section className="py-16 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Before & After</h2>
            <p className="text-xl text-white/70">Dramatic transformations from our mobile service</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <motion.div key={currentSlide} initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="relative">
                <img src={beforeAfterSlides[currentSlide].before} alt="Before detailing" className="w-full h-64 object-cover rounded-lg" />
                <div className="absolute top-4 left-4 bg-red-600 text-black px-3 py-1 rounded-full text-sm font-semibold">BEFORE</div>
              </div>
              <div className="relative">
                <img src={beforeAfterSlides[currentSlide].after} alt="After detailing" className="w-full h-64 object-cover rounded-lg" />
                <div className="absolute top-4 left-4 bg-emerald-500 text-black px-3 py-1 rounded-full text-sm font-semibold">AFTER</div>
              </div>
            </motion.div>

            <p className="text-center text-lg text-white/80 mb-6">
              {beforeAfterSlides[currentSlide].caption}
            </p>

            <div className="flex justify-center items-center gap-4">
              <button onClick={prevSlide} className="bg-zinc-800 hover:bg-zinc-700 text-white p-2 rounded-full transition-colors">
                <ChevronLeft className="h-6 w-6" />
              </button>

              <div className="flex gap-2">
                {beforeAfterSlides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${index === currentSlide ? 'bg-red-500' : 'bg-zinc-600'}`}
                  />
                ))}
              </div>

              <button onClick={nextSlide} className="bg-zinc-800 hover:bg-zinc-700 text-white p-2 rounded-full transition-colors">
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section ref={testimonialsRef} className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div initial={{ y: 30, opacity: 0 }} animate={testimonialsInView ? { y: 0, opacity: 1 } : {}} transition={{ duration: 0.6 }} className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Customer Reviews</h2>
            <p className="text-xl text-white/70">What our clients say about our mobile detailing service</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((t, i) => (
              <motion.div key={t.name} initial={{ y: 30, opacity: 0 }} animate={testimonialsInView ? { y: 0, opacity: 1 } : {}} transition={{ duration: 0.6, delay: i * 0.1 }}>
                <TestimonialCard {...t} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4" onClick={() => setLightboxImage(null)}>
            <motion.div initial={{ scale: 0.5 }} animate={{ scale: 1 }} exit={{ scale: 0.5 }} className="relative max-w-4xl max-h-full" onClick={(e) => e.stopPropagation()}>
              <img src={lightboxImage} alt="Gallery image" className="max-w-full max-h-full object-contain rounded-lg" />
              <button onClick={() => setLightboxImage(null)} className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors">
                <X className="h-6 w-6" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Results;
