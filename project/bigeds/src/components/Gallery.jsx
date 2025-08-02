import React from 'react';
import burger from '../assets/cheeseburger.jpg';
import gyros from '../assets/gyros.jpg';
import chiliDog from '../assets/chili_dog.jpg';
import salad from '../assets/chicken_salad.jpg';

function Gallery() {
  const images = [
    { src: burger, alt: 'Juicy cheeseburger' },
    { src: gyros, alt: 'Gyro sandwich' },
    { src: chiliDog, alt: 'Chili dog topped with bacon' },
    { src: salad, alt: 'Salad with chicken and avocado' },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-primary-dark">Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {images.map((img, idx) => (
            <div key={idx} className="overflow-hidden rounded-lg shadow-md">
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-56 object-cover transform hover:scale-105 transition duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;
