import React from 'react';
import { motion } from 'framer-motion';
import { Gallery as GalleryComponent } from '../components/Gallery';
import siteData from '../content/site.json';

export const Gallery: React.FC = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-charcoal mb-4">Our Gallery</h1>
          <p className="text-xl text-bone">
            Browse our latest work and see the transformations we create.
            Click any image to see the before and after results.
          </p>
        </motion.div>

        <GalleryComponent images={siteData.gallery} showFilters={true} />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="bg-bone rounded-lg p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-charcoal mb-4">Ready for Your Transformation?</h2>
            <p className="text-bone mb-6">
              Book your appointment today and join our gallery of satisfied clients.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/book"
                className="bg-copper text-bone px-8 py-3 rounded-lg hover:bg-copper/90 transition-colors font-semibold focus:outline-none focus:ring-2 focus:ring-copper focus:ring-offset-2"
              >
                Book Now
              </a>
              <a
                href="tel:+1-555-0100"
                className="bg-success text-bone px-8 py-3 rounded-lg hover:bg-success/90 transition-colors font-semibold focus:outline-none focus:ring-2 focus:ring-success focus:ring-offset-2"
              >
                Call to Book
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};