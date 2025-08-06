import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const Home = () => {
  const featuredImages = [
    {
      id: 1,
      src: 'https://images.pexels.com/photos/1386604/pexels-photo-1386604.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Portrait Photography',
      category: 'Portrait'
    },
    {
      id: 2,
      src: 'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Wedding Photography',
      category: 'Wedding'
    },
    {
      id: 3,
      src: 'https://images.pexels.com/photos/1308881/pexels-photo-1308881.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Family Photography',
      category: 'Family'
    },
    {
      id: 4,
      src: 'https://images.pexels.com/photos/3771120/pexels-photo-3771120.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Event Photography',
      category: 'Events'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/1264210/pexels-photo-1264210.jpeg?auto=compress&cs=tinysrgb&w=1600')`
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative z-10 text-center text-white px-4"
        >
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-light mb-4">
            Elena Photography
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-200 max-w-2xl mx-auto">
            Capturing Life Through the Lens
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center space-x-2 bg-amber-600 text-white px-8 py-3 rounded-full hover:bg-amber-700 transition-colors group"
          >
            <span>Book Your Session</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </section>

      {/* Introduction */}
      <section className="py-20 px-4 bg-stone-50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-3xl md:text-4xl text-gray-900 mb-6">
              Welcome to My World
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              I'm Elena, a passionate photographer dedicated to capturing the beauty, 
              emotion, and authentic moments that make life extraordinary. Whether it's a 
              wedding, portrait session, or special event, I believe every photograph tells 
              a unique story worth preserving.
            </p>
            <Link
              to="/about"
              className="text-amber-600 hover:text-amber-700 font-medium inline-flex items-center space-x-2 group"
            >
              <span>Learn More About Me</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Featured Work */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-3xl md:text-4xl text-gray-900 mb-4">
              Featured Work
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A glimpse into my recent photography sessions, showcasing the diverse 
              range of moments I love to capture.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredImages.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-lg aspect-[3/4] bg-gray-100">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                  <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-sm font-medium">{image.category}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/portfolio"
              className="bg-gray-900 text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-colors inline-flex items-center space-x-2 group"
            >
              <span>View Full Portfolio</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 px-4 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex justify-center mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-amber-500 fill-current" />
              ))}
            </div>
            <blockquote className="text-xl md:text-2xl font-light italic mb-8 leading-relaxed">
              "Elena captured our wedding day perfectly. Her attention to detail and ability 
              to make us feel comfortable resulted in photos that we'll treasure forever. 
              She has an incredible eye for those candid, emotional moments."
            </blockquote>
            <div className="text-amber-500 font-medium">
              Sarah & Michael Johnson
            </div>
            <div className="text-gray-400 text-sm mt-1">
              Wedding Photography, 2024
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;