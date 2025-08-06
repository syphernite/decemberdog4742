import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Award, Users, Camera } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
  const stats = [
    { icon: Camera, number: '500+', label: 'Sessions Completed' },
    { icon: Users, number: '200+', label: 'Happy Clients' },
    { icon: Award, number: '5+', label: 'Years Experience' }
  ];

  const brands = [
    'Nike', 'Apple', 'Mercedes-Benz', 'The Ritz-Carlton', 'Vogue', 'Harper\'s Bazaar'
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="font-serif text-4xl md:text-5xl text-gray-900 mb-6">
                Hello, I'm Elena
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                A passionate photographer with over 5 years of experience capturing life's most 
                precious moments. Based in the heart of the city, I specialize in creating 
                timeless images that tell authentic stories.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                My journey began with a simple love for freezing moments in time. What started 
                as a hobby quickly evolved into a calling, and now I have the privilege of 
                documenting love stories, celebrating milestones, and creating lasting memories 
                for incredible people.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center space-x-2 bg-amber-600 text-white px-8 py-3 rounded-full hover:bg-amber-700 transition-colors group"
              >
                <span>Let's Work Together</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Elena - Professional Photographer"
                  className="w-full h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-stone-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-serif font-medium text-gray-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* My Approach */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-3xl md:text-4xl text-gray-900 mb-6">
              My Approach
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Every session is unique, and I believe in creating a comfortable, relaxed 
              environment where authentic moments can unfold naturally.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-serif font-medium text-amber-600">1</span>
              </div>
              <h3 className="font-medium text-xl text-gray-900 mb-3">Listen & Plan</h3>
              <p className="text-gray-600">
                We'll discuss your vision, style preferences, and the story you want to tell 
                through your photos.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-serif font-medium text-amber-600">2</span>
              </div>
              <h3 className="font-medium text-xl text-gray-900 mb-3">Capture Moments</h3>
              <p className="text-gray-600">
                During the session, I focus on creating a relaxed atmosphere where genuine 
                emotions and connections shine through.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-serif font-medium text-amber-600">3</span>
              </div>
              <h3 className="font-medium text-xl text-gray-900 mb-3">Deliver Excellence</h3>
              <p className="text-gray-600">
                Each image is carefully edited to enhance its natural beauty while maintaining 
                an authentic, timeless feel.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Client Brands */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-serif text-2xl md:text-3xl text-gray-900 mb-4">
              Trusted by Leading Brands
            </h2>
            <p className="text-gray-600">
              I've had the privilege of working with some incredible companies and publications.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center"
          >
            {brands.map((brand, index) => (
              <div key={index} className="text-center">
                <div className="text-xl font-serif text-gray-400 hover:text-gray-600 transition-colors">
                  {brand}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-3xl md:text-4xl mb-6">
              Let's Create Something Beautiful
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              I'd love to learn more about your upcoming project and discuss how we can 
              bring your vision to life through photography.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/portfolio"
                className="inline-flex items-center justify-center space-x-2 border border-white text-white px-8 py-3 rounded-full hover:bg-white hover:text-gray-900 transition-colors group"
              >
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center space-x-2 bg-amber-600 text-white px-8 py-3 rounded-full hover:bg-amber-700 transition-colors group"
              >
                <span>Start a Project</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;