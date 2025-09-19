// src/pages/Photos.tsx
import React from 'react';
import { Camera } from 'lucide-react';

const photos = [
  { src: 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Sports bar interior with TVs', caption: 'Multiple big screen TVs for game day' },
  { src: 'https://images.pexels.com/photos/1552630/pexels-photo-1552630.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Bar area with taps', caption: 'Full bar with craft beers on tap' },
  { src: 'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Pool table', caption: 'Pool tables for friendly competition' },
  { src: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Burger and fries', caption: 'Our famous half-pound burgers' },
  { src: 'https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Wings and beer', caption: 'Buffalo wings with cold beer' },
  { src: 'https://images.pexels.com/photos/2087748/pexels-photo-2087748.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Restaurant dining area', caption: 'Family-friendly dining area' },
  { src: 'https://images.pexels.com/photos/1251179/pexels-photo-1251179.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Grilled shrimp', caption: 'Fresh shrimp and grits' },
  { src: 'https://images.pexels.com/photos/1307698/pexels-photo-1307698.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Draft beer taps', caption: 'Local and craft beer selection' },
  { src: 'https://images.pexels.com/photos/1484516/pexels-photo-1484516.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Sandwich and fries', caption: 'Reuben sandwich with crispy fries' }
];

export default function Photos() {
  return (
    <div className="pt-24 pb-16 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4 flex items-center justify-center">
            <Camera className="w-8 h-8 mr-3 text-amber-500" />
            Photos
          </h1>
          <p className="text-gray-300 text-lg">Take a look inside TimeOut Tavern</p>
        </div>

        {/* Masonry Gallery */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {photos.map((photo, index) => (
            <div key={index} className="break-inside-avoid">
              <div className="bg-neutral-900/70 backdrop-blur-sm rounded-lg overflow-hidden border border-white/10 hover:border-amber-500/50 transition-all">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-auto object-cover transition-transform duration-200 ease-in-out group-hover:scale-105"
                  loading="lazy"
                />
                {photo.caption && (
                  <div className="p-4">
                    <p className="text-gray-300 text-sm">{photo.caption}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Upload Note */}
        <div className="mt-12 bg-neutral-900/70 backdrop-blur-sm border border-white/10 rounded-lg p-6 text-center">
          <Camera className="w-12 h-12 text-amber-500 mx-auto mb-4" />
          <h3 className="text-white font-bold mb-2">Share Your Experience</h3>
          <p className="text-gray-300">Tag us on social media to have your photos featured in our gallery!</p>
        </div>
      </div>
    </div>
  );
}
