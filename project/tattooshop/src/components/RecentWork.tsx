import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import { staggerChildren, fadeUp, scaleIn } from '../utils/animations';

interface WorkImage {
  id: number;
  url: string;
  title: string;
  artist: string;
  style: string;
}

const RecentWork: React.FC = () => {
  const [ref, isInView] = useInView(0.2);
  const [selectedImage, setSelectedImage] = useState<WorkImage | null>(null);
  
  const recentWorks: WorkImage[] = [
    {
      id: 1,
      url: "https://images.pexels.com/photos/1319459/pexels-photo-1319459.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Dragon Sleeve",
      artist: "Marcus Chen",
      style: "Traditional"
    },
    {
      id: 2,
      url: "https://images.pexels.com/photos/1010519/pexels-photo-1010519.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Rose Portrait",
      artist: "Sofia Rivera",
      style: "Color Realism"
    },
    {
      id: 3,
      url: "https://images.pexels.com/photos/1738986/pexels-photo-1738986.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Geometric Wolf",
      artist: "Jake Morrison",
      style: "Blackwork"
    }
  ];

  return (
    <>
      <section ref={ref} className="py-20 bg-ink-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerChildren}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.h2
              variants={fadeUp}
              className="font-display font-bold text-3xl sm:text-4xl text-bone-100 text-center mb-4"
            >
              Recent Work
            </motion.h2>
            
            <motion.p
              variants={fadeUp}
              className="text-stone-400 text-center mb-12 max-w-2xl mx-auto"
            >
              Every piece tells a story. Here's what we've been crafting lately.
            </motion.p>
            
            <motion.div
              variants={staggerChildren}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {recentWorks.map((work) => (
                <motion.div
                  key={work.id}
                  variants={fadeUp}
                  whileHover={{ y: -5 }}
                  className="group relative cursor-pointer"
                  onClick={() => setSelectedImage(work)}
                >
                  <div className="relative overflow-hidden rounded-medium">
                    <img
                      src={work.url}
                      alt={work.title}
                      className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <ZoomIn className="w-8 h-8 text-bone-100" />
                    </div>
                  </div>
                  
                  <div className="mt-4">
                    <h3 className="font-display font-semibold text-lg text-bone-100">
                      {work.title}
                    </h3>
                    <p className="text-stone-400 text-sm">
                      by {work.artist} • {work.style}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-ink-900/90 backdrop-blur-md p-4"
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
              src={selectedImage.url}
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

export default RecentWork;