// src/pages/Portfolio.tsx
import React, { useState } from 'react';
import { X, Eye, Heart, Share2, ExternalLink } from 'lucide-react';

interface PortfolioItem {
  id: number;
  image: string; // e.g. "photo1.jpg"
  title: string;
}

type BookingModalProps = {
  open: boolean;
  onClose: () => void;
};

/** Prefix a public asset with the Vite base so it works under /johnny */
const withBase = (p: string) => {
  const clean = p.replace(/^\/+/, ''); // no leading slash
  const base = import.meta.env.BASE_URL || '/';
  return `${base}${clean}`;
};

const BookingModal: React.FC<BookingModalProps> = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <div
        className="mx-4 w-full max-w-md rounded-2xl bg-neutral-900 border border-white/10 shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-5">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-xl font-bold text-white">Booking Link</h3>
            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-white"
              aria-label="Close booking modal"
            >
              <X size={18} />
            </button>
          </div>
          <p className="text-gray-300 mb-6">insert your booking link here</p>
          <div className="flex justify-end">
            <button
              onClick={onClose}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-yellow-400 text-black font-semibold hover:bg-yellow-300 transition-colors"
            >
              <ExternalLink size={18} />
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Portfolio: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<PortfolioItem | null>(null);
  const [bookingOpen, setBookingOpen] = useState(false);

  const openBooking = () => setBookingOpen(true);
  const closeBooking = () => setBookingOpen(false);

  // Files are in johnny/public/photo1.jpg ... photo9.jpg
  const portfolioItems: PortfolioItem[] = [
    { id: 1, image: 'photo1.jpg', title: 'Portfolio Piece 1' },
    { id: 2, image: 'photo2.jpg', title: 'Portfolio Piece 2' },
    { id: 3, image: 'photo3.jpg', title: 'Portfolio Piece 3' },
    { id: 4, image: 'photo4.jpg', title: 'Portfolio Piece 4' },
    { id: 5, image: 'photo5.jpg', title: 'Portfolio Piece 5' },
    { id: 6, image: 'photo6.jpg', title: 'Portfolio Piece 6' },
    { id: 7, image: 'photo7.jpg', title: 'Portfolio Piece 7' },
    { id: 8, image: 'photo8.jpg', title: 'Portfolio Piece 8' },
    { id: 9, image: 'photo9.jpg', title: 'Portfolio Piece 9' },
  ];

  const openLightbox = (item: PortfolioItem) => {
    setSelectedImage(item);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  const headerBg = withBase('photo1.jpg');
  const ctaBg = withBase('photo5.jpg');

  return (
    <div className="min-h-screen bg-black">
      {/* Header Section */}
      <section className="relative py-32 bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={headerBg}
            alt="Tattoo portfolio background"
            className="w-full h-full object-cover opacity-10 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-purple-900/20 to-black/80"></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="relative z-10">
            <div className="inline-block mb-6">
              <span className="text-yellow-400 font-semibold text-lg tracking-widest uppercase animate-fade-in">
                My Work
              </span>
            </div>
            <h1 className="text-6xl md:text-8xl font-black text-white mb-8 animate-slide-up">
              <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent animate-glow">
                Portfolio
              </span>
            </h1>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => {
              const src = withBase(item.image);
              return (
                <div
                  key={item.id}
                  className="group relative overflow-hidden rounded-2xl bg-gray-900 cursor-pointer transform hover:scale-105 transition-all duration-500 shadow-xl hover:shadow-yellow-500/25 animate-slide-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                  onClick={() => openLightbox(item)}
                >
                  <div className="aspect-square relative">
                    <img
                      src={src}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      loading="lazy"
                      decoding="async"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                      {/* Action buttons */}
                      <div className="absolute top-4 right-4 flex space-x-2 transform translate-y-[-20px] group-hover:translate-y-0 transition-transform duration-300">
                        <button
                          className="p-2 bg-black/50 backdrop-blur-sm rounded-full text-white hover:text-yellow-400 hover:bg-black/70 transition-all duration-300"
                          aria-label="Preview"
                        >
                          <Eye size={18} />
                        </button>
                        <button
                          className="p-2 bg-black/50 backdrop-blur-sm rounded-full text-white hover:text-red-400 hover:bg-black/70 transition-all duration-300"
                          aria-label="Favorite"
                        >
                          <Heart size={18} />
                        </button>
                        <button
                          className="p-2 bg-black/50 backdrop-blur-sm rounded-full text-white hover:text-blue-400 hover:bg-black/70 transition-all duration-300"
                          aria-label="Share"
                        >
                          <Share2 size={18} />
                        </button>
                      </div>

                      <div className="absolute bottom-6 left-6 right-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                      </div>
                    </div>

                    {/* Hover Border Effect */}
                    <div className="absolute inset-0 border-2 border-transparent group-hover:border-yellow-400/50 transition-colors duration-500 rounded-2xl"></div>

                    {/* Shine effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative py-20 bg-gradient-to-r from-yellow-400 to-yellow-600 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={ctaBg}
            alt="Tattoo artistry"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/90 to-yellow-600/90"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-6xl font-black text-black mb-6 animate-slide-up">
            Ready for Your Next Piece?
          </h2>
          <p className="text-xl text-black/80 mb-8 animate-slide-up-delay">
            Let's create something extraordinary together. Book your consultation today.
          </p>
          <button
            type="button"
            onClick={openBooking}
            className="inline-flex items-center space-x-3 bg-black text-yellow-400 px-10 py-5 rounded-2xl text-xl font-bold hover:bg-gray-900 transform hover:scale-110 transition-all duration-300 shadow-2xl animate-slide-up-delay-2"
          >
            <span>Book Your Session</span>
            <X className="rotate-45" size={24} />
          </button>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm animate-fade-in">
          <div className="relative max-w-4xl max-h-[90vh] mx-4">
            <button
              onClick={closeLightbox}
              className="absolute -top-16 right-0 p-3 bg-black/50 backdrop-blur-sm rounded-full text-white hover:text-yellow-400 hover:bg-black/70 transition-all duration-300 z-10 transform hover:scale-110"
              aria-label="Close image"
            >
              <X size={28} />
            </button>

            <div className="relative animate-scale-in">
              <img
                src={withBase(selectedImage.image)}
                alt={selectedImage.title}
                className="max-w-full max-h-[80vh] object-contain rounded-2xl shadow-2xl"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-8 rounded-b-2xl">
                <h3 className="text-3xl font-bold text-white mb-3">{selectedImage.title}</h3>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Page-level booking modal */}
      <BookingModal open={bookingOpen} onClose={closeBooking} />
    </div>
  );
};

export default Portfolio;
