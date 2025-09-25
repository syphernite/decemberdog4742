import React, { useState } from 'react';
import { X, Eye, Heart, Share2 } from 'lucide-react';

interface PortfolioItem {
  id: number;
  image: string;
  title: string;
  category: string;
}

const Portfolio: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<PortfolioItem | null>(null);
  const [filter, setFilter] = useState<string>('all');

  const portfolioItems: PortfolioItem[] = [
    {
      id: 1,
      image: "https://images.pexels.com/photos/1813513/pexels-photo-1813513.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Portrait Study",
      category: "Black & Grey"
    },
    {
      id: 2,
      image: "https://images.pexels.com/photos/1616403/pexels-photo-1616403.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Rose Design",
      category: "Fine Line Floral"
    },
    {
      id: 3,
      image: "https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Script Work",
      category: "Bold Script Lettering"
    },
    {
      id: 4,
      image: "https://images.pexels.com/photos/1040753/pexels-photo-1040753.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Geometric Art",
      category: "Fine Line"
    },
    {
      id: 5,
      image: "https://images.pexels.com/photos/1435049/pexels-photo-1435049.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Nature Scene",
      category: "Black & Grey"
    },
    {
      id: 6,
      image: "https://images.pexels.com/photos/1040752/pexels-photo-1040752.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Abstract Design",
      category: "Bold Statement"
    },
    {
      id: 7,
      image: "https://images.pexels.com/photos/1553787/pexels-photo-1553787.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Mandala Pattern",
      category: "Fine Line"
    },
    {
      id: 8,
      image: "https://images.pexels.com/photos/1190307/pexels-photo-1190307.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Animal Portrait",
      category: "Black & Grey"
    },
    {
      id: 9,
      image: "https://images.pexels.com/photos/1654698/pexels-photo-1654698.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Minimalist Art",
      category: "Fine Line"
    }
  ];

  const categories = ['all', 'Black & Grey', 'Fine Line', 'Bold Statement'];
  
  const filteredItems = filter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category.includes(filter));

  const openLightbox = (item: PortfolioItem) => {
    setSelectedImage(item);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Header Section */}
      <section className="relative py-32 bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&w=1920&h=800&fit=crop"
            alt="Tattoo portfolio background"
            className="w-full h-full object-cover opacity-10 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-purple-900/20 to-black/80"></div>
        </div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="relative z-10">
            <div className="inline-block mb-6">
              <span className="text-yellow-400 font-semibold text-lg tracking-widest uppercase animate-fade-in">My Work</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-black text-white mb-8 animate-slide-up">
              <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent animate-glow">
                Portfolio
              </span>
            </h1>
            <p className="text-2xl text-gray-300 mb-4 animate-slide-up-delay">
              Curated from Instagram <span className="text-yellow-400 font-bold">@tattoojohnnyatl</span>
            </p>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto animate-slide-up-delay-2">
              Each piece represents hours of dedication, artistic vision, and collaborative creativity 
              with clients who trust me to bring their stories to life.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-gradient-to-r from-gray-900 to-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                  filter === category
                    ? 'bg-gradient-to-r from-yellow-400 to-yellow-600 text-black shadow-lg shadow-yellow-500/25'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white border border-gray-600 hover:border-yellow-400/50'
                }`}
              >
                {category === 'all' ? 'All Work' : category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                className={`group relative overflow-hidden rounded-2xl bg-gray-900 cursor-pointer transform hover:scale-105 transition-all duration-500 shadow-xl hover:shadow-yellow-500/25 animate-slide-up`}
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => openLightbox(item)}
              >
                <div className="aspect-square relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                    {/* Action buttons */}
                    <div className="absolute top-4 right-4 flex space-x-2 transform translate-y-[-20px] group-hover:translate-y-0 transition-transform duration-300">
                      <button className="p-2 bg-black/50 backdrop-blur-sm rounded-full text-white hover:text-yellow-400 hover:bg-black/70 transition-all duration-300">
                        <Eye size={18} />
                      </button>
                      <button className="p-2 bg-black/50 backdrop-blur-sm rounded-full text-white hover:text-red-400 hover:bg-black/70 transition-all duration-300">
                        <Heart size={18} />
                      </button>
                      <button className="p-2 bg-black/50 backdrop-blur-sm rounded-full text-white hover:text-blue-400 hover:bg-black/70 transition-all duration-300">
                        <Share2 size={18} />
                      </button>
                    </div>
                    
                    <div className="absolute bottom-6 left-6 right-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                      <p className="text-yellow-400 font-semibold text-lg">{item.category}</p>
                    </div>
                  </div>

                  {/* Hover Border Effect */}
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-yellow-400/50 transition-colors duration-500 rounded-2xl"></div>
                  
                  {/* Shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative py-20 bg-gradient-to-r from-yellow-400 to-yellow-600 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/1435049/pexels-photo-1435049.jpeg?auto=compress&cs=tinysrgb&w=1920&h=600&fit=crop"
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
          <a
            href="https://tattoo-johnny.square.site"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-3 bg-black text-yellow-400 px-10 py-5 rounded-2xl text-xl font-bold hover:bg-gray-900 transform hover:scale-110 transition-all duration-300 shadow-2xl animate-slide-up-delay-2"
          >
            <span>Book Your Session</span>
            <X className="rotate-45" size={24} />
          </a>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm animate-fade-in">
          <div className="relative max-w-4xl max-h-[90vh] mx-4">
            <button
              onClick={closeLightbox}
              className="absolute -top-16 right-0 p-3 bg-black/50 backdrop-blur-sm rounded-full text-white hover:text-yellow-400 hover:bg-black/70 transition-all duration-300 z-10 transform hover:scale-110"
            >
              <X size={28} />
            </button>
            
            <div className="relative animate-scale-in">
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="max-w-full max-h-[80vh] object-contain rounded-2xl shadow-2xl"
              />
              
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-8 rounded-b-2xl">
                <h3 className="text-3xl font-bold text-white mb-3">{selectedImage.title}</h3>
                <p className="text-yellow-400 text-xl font-semibold">{selectedImage.category}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;