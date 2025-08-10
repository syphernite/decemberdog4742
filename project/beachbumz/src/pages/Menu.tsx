import React, { useState, useEffect } from 'react';
import { ExternalLink, Star, Flame, ShoppingBag } from 'lucide-react';
import { menuData, categories, MenuItem } from '../data/menuData';

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState('appetizers');
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 200);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleOrderClick = () => {
    window.open('https://www.doordash.com', '_blank');
  };

  const filteredItems = menuData.filter(item => item.category === selectedCategory);

  return (
    <div className="pt-20 min-h-screen bg-ocean-blue">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-ocean-blue to-slate-900">
        <div className="water-ripple"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
          <h1 className="font-display text-5xl md:text-6xl text-white mb-6 neon-glow">
            OUR MENU
          </h1>
          <p className="text-xl text-sandy-beige mb-8">
            Fresh coastal flavors meets comfort food classics
          </p>
          <button 
            onClick={handleOrderClick}
            className="btn-secondary flex items-center space-x-2 mx-auto"
          >
            <ShoppingBag className="h-5 w-5" />
            <span>Order on DoorDash</span>
            <ExternalLink className="h-4 w-4" />
          </button>
        </div>
      </section>

      {/* Category Navigation */}
      <div className={`${isSticky ? 'fixed top-20 left-0 right-0 z-30 bg-ocean-blue/95 backdrop-blur-md shadow-lg' : 'relative'} transition-all duration-300`}>
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-turquoise text-ocean-blue'
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                <span className="text-lg">{category.icon}</span>
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Menu Items */}
      <section className="py-12 bg-sandy-beige sand-texture">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-8 animate-on-scroll">
            <h2 className="font-display text-3xl md:text-4xl text-ocean-blue text-center mb-4">
              {categories.find(cat => cat.id === selectedCategory)?.name}
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <MenuItemCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* Sticky Order Button */}
      <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-40 hidden md:block">
        <button 
          onClick={handleOrderClick}
          className="bg-gradient-to-r from-sunset-orange to-coral-pink hover:from-turquoise hover:to-teal-400 
                     text-white font-semibold py-3 px-6 rounded-full shadow-2xl transition-all duration-300 
                     transform hover:scale-105 bounce-subtle flex items-center space-x-2"
        >
          <ShoppingBag className="h-5 w-5" />
          <span>Order on DoorDash</span>
          <ExternalLink className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

const MenuItemCard: React.FC<{ item: MenuItem }> = ({ item }) => {
  const [showDescription, setShowDescription] = useState(false);

  return (
    <div 
      className="bg-white rounded-lg shadow-lg overflow-hidden hover-lift transition-all duration-300 animate-on-scroll cursor-pointer beach-card tilt-on-hover"
      onMouseEnter={() => setShowDescription(true)}
      onMouseLeave={() => setShowDescription(false)}
      onClick={() => setShowDescription(!showDescription)}
    >
      {item.image && (
        <div className="relative h-48 overflow-hidden">
          <img 
            src={item.image} 
            alt={item.name}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-110 wave-animation"
            loading="lazy"
          />
          <div className="absolute top-4 right-4 flex space-x-2">
            {item.popular && (
              <span className="bg-sunset-orange text-white px-2 py-1 rounded-full text-xs flex items-center space-x-1 bounce-subtle">
                <Star className="h-3 w-3 fill-current" />
                <span>Popular</span>
              </span>
            )}
            {item.spicy && (
              <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs flex items-center space-x-1 pulse-glow">
                <Flame className="h-3 w-3 fill-current" />
                <span>Spicy</span>
              </span>
            )}
          </div>
        </div>
      )}
      
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="font-semibold text-lg text-ocean-blue">{item.name}</h3>
          <span className="font-bold text-sunset-orange text-lg coconut-bounce">{item.price}</span>
        </div>
        
        <div className={`transition-all duration-300 overflow-hidden ${
          showDescription ? 'max-h-32 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <p className="text-gray-600 text-sm leading-relaxed">
            {item.description}
          </p>
        </div>
        
        {!item.image && (
          <div className="flex items-center justify-between mt-4">
            <div className="flex space-x-2">
              {item.popular && (
                <span className="bg-sunset-orange text-white px-2 py-1 rounded-full text-xs flex items-center space-x-1 bounce-subtle">
                  <Star className="h-3 w-3 fill-current" />
                  <span>Popular</span>
                </span>
              )}
              {item.spicy && (
                <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs flex items-center space-x-1 pulse-glow">
                  <Flame className="h-3 w-3 fill-current" />
                  <span>Spicy</span>
                </span>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Menu;