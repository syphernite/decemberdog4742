// src/pages/Gallery.tsx
import React, { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useInView } from "react-intersection-observer";

// Effects (match Home/Catalog)
import ShinyText from "../components/ShinyText";
import "../components/ShinyText.css";

const marbleTx = `${import.meta.env.BASE_URL}marble.jpg`;
const chromeNoise = `${import.meta.env.BASE_URL}chrome-noise.png`;

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.0 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, scale: 0.97 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
  hover: { scale: 1.03 },
};

const galleryImages = [
  { src: "https://images.unsplash.com/photo-1542367597-8f1e03c0a8b1?w=1200", caption: "Forged wheel on SUV" },
  { src: "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?w=1200", caption: "Chrome on clean chassis" },
  { src: "https://images.unsplash.com/photo-1571087051339-d9e7b2c24f2b?w=1200", caption: "Suspension work detail" },
  { src: "https://images.unsplash.com/photo-1600891964092-4316e005f3b0?w=1200", caption: "Lowered stance rolling" },
  { src: "https://images.unsplash.com/photo-1629622799388-2a5fcf2e9b8b?w=1200", caption: "Offset dialed in" },
  { src: "https://images.unsplash.com/photo-1542367597-8f1e03c0a8b1?w=1200", caption: "Finished delivery" },
];

const Gallery: React.FC = () => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [galleryRef, galleryInView] = useInView({ triggerOnce: true, threshold: 0.2 });

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const prevImage = () =>
    setLightboxIndex((prev) => (prev !== null ? (prev - 1 + galleryImages.length) % galleryImages.length : null));
  const nextImage = () =>
    setLightboxIndex((prev) => (prev !== null ? (prev + 1) % galleryImages.length : null));

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="pt-20 sm:pt-24 bg-gradient-to-b from-black to-zinc-950 text-white relative">
      <div
        className="pointer-events-none absolute inset-0 opacity-10"
        style={{ backgroundImage: `url('${marbleTx}')`, backgroundSize: "cover" }}
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-15 mix-blend-overlay"
        style={{ backgroundImage: `url('${chromeNoise}')`, backgroundSize: "cover" }}
      />

      {/* Header */}
      <section ref={heroRef} className="py-20 sm:py-24 text-center relative isolate">
        <motion.div
          className="relative z-10"
          variants={sectionVariants}
          initial="hidden"
          animate={heroInView ? "visible" : ""}
        >
          <ShinyText
            text="Gallery"
            className="font-cinzel text-4xl md:text-7xl font-bold mb-4 md:mb-6 tracking-wide uppercase block leading-tight"
            speed={5}
          />
          <p className="text-zinc-300/90 text-lg md:text-2xl">
            Recent wheels, stance, and full builds.
          </p>
        </motion.div>
      </section>

      {/* Grid */}
      <section ref={galleryRef} className="py-20 sm:py-24 relative">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 auto-rows-fr">
          {galleryImages.map((img, i) => (
            <motion.div
              key={`${img.src}-${i}`} // unique even if src repeats
              className="relative overflow-hidden rounded-2xl shadow-2xl group cursor-pointer bg-zinc-900/40 border border-zinc-700/40"
              variants={itemVariants}
              initial="hidden"
              animate={galleryInView ? "visible" : ""}
              transition={{ delay: i * 0.08 }}
              whileHover="hover"
              onClick={() => openLightbox(i)}
            >
              <img
                src={img.src}
                alt={img.caption}
                className="w-full h-48 sm:h-64 lg:h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4 sm:p-6">
                <p className="text-white text-base sm:text-lg font-semibold">{img.caption}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
            <motion.div
              className="relative max-w-[95vw] sm:max-w-5xl max-h-[90vh] w-full flex items-center justify-center"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={galleryImages[lightboxIndex].src}
                alt={galleryImages[lightboxIndex].caption}
                className="w-full h-auto object-contain rounded-xl sm:rounded-2xl shadow-2xl transition-transform duration-300"
              />
              <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-sm sm:text-lg font-light bg-black/50 px-4 sm:px-6 py-1.5 sm:py-2 rounded-full">
                {galleryImages[lightboxIndex].caption}
              </p>
              <button className="absolute top-3 right-3 bg-black/60 hover:bg-black/80 text-white p-2 sm:p-3 rounded-full transition" onClick={closeLightbox}>
                <X className="h-6 w-6 sm:h-8 sm:w-8" />
              </button>
              <button className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-2 sm:p-3 rounded-full transition" onClick={prevImage}>
                <ChevronLeft className="h-6 w-6 sm:h-8 sm:w-8" />
              </button>
              <button className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-2 sm:p-3 rounded-full transition" onClick={nextImage}>
                <ChevronRight className="h-6 w-6 sm:h-8 sm:w-8" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Gallery;
