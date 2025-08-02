import React from 'react';

const Gallery: React.FC = () => {
  const galleryImages = [
    {
      src: "https://images.pexels.com/photos/1833586/pexels-photo-1833586.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&fit=crop",
      alt: "Cozy interior seating area"
    },
    {
      src: "https://images.pexels.com/photos/851555/pexels-photo-851555.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&fit=crop",
      alt: "Beautiful latte art"
    },
    {
      src: "https://images.pexels.com/photos/1234567/pexels-photo-1234567.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&fit=crop",
      alt: "Happy customers enjoying coffee"
    },
    {
      src: "https://images.pexels.com/photos/2362002/pexels-photo-2362002.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&fit=crop",
      alt: "Coffee beans and brewing equipment"
    },
    {
      src: "https://images.pexels.com/photos/1475554/pexels-photo-1475554.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&fit=crop",
      alt: "Window seating with natural light"
    },
    {
      src: "https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&fit=crop",
      alt: "Barista preparing drinks"
    }
  ];

  return (
    <section className="py-16 bg-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-coffee-800 mb-4">
            Our Ambiance
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Step into a world where comfort meets craft, where every corner tells a story
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <div 
              key={index}
              className="relative overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 group"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-48 md:h-64 object-cover transform group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            From our carefully curated playlist to the gentle hum of conversation, every element 
            is designed to create a space where you can truly unwind. Whether you're catching up 
            with friends, diving into a good book, or finding inspiration for your next project, 
            River Roast Café is your home away from home.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Gallery;