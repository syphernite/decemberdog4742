import React from 'react';
import { ShoppingBag } from 'lucide-react';

const FloatingOrderButton = () => {
  const handleOrderClick = () => {
    window.open('https://www.doordash.com/store/beach-bumz-morehead-city-31247691/44617761/?utm_source=mx_share', '_blank');
  };

  return (
    <button
      onClick={handleOrderClick}
      className="fixed bottom-6 right-6 z-40 bg-gradient-to-r from-sunset-orange to-orange-400 hover:from-turquoise hover:to-teal-400 
                 text-white p-4 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 
                 bounce-subtle neon-border pulse-glow md:hidden"
      aria-label="Order on DoorDash"
    >
      <ShoppingBag className="h-6 w-6 coconut-bounce" />
    </button>
  );
};

export default FloatingOrderButton;