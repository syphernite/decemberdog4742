import React from 'react';
import { motion } from 'framer-motion';
import { Flame, Mountain, Gem, Award } from 'lucide-react';

export function About() {
  return (
    <div className="min-h-screen bg-obsidian">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-obsidian to-onyx">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-6"
          >
            <h1 className="text-display font-heading text-champagne">
              Our Story
            </h1>
            <p className="text-lg text-white/60 max-w-3xl mx-auto">
              Born from the earth's most dramatic moments, our jewelry captures the raw beauty 
              of volcanic glass and transforms it into timeless pieces of luxury.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h2 className="text-heading font-heading text-champagne">
                Where Fire Meets Art
              </h2>
              <p className="text-white/80 leading-relaxed">
                Our journey began with a fascination for obsidian—nature's glass, forged in the 
                heart of volcanic eruptions. Each piece of obsidian tells a story of transformation, 
                of molten rock cooling rapidly to create something both beautiful and powerful.
              </p>
              <p className="text-white/80 leading-relaxed">
                We source our obsidian from volcanic regions around the world, working with local 
                communities to ensure sustainable and ethical practices. Our artisans then transform 
                these raw materials into jewelry that captures the essence of earth's most dramatic moments.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img
                src="https://images.pexels.com/photos/1191531/pexels-photo-1191531.jpeg"
                alt="Volcanic landscape"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian/60 to-transparent" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-onyx">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-heading font-heading text-champagne mb-4">
              Our Values
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Every piece we create is guided by our commitment to excellence, 
              sustainability, and the timeless beauty of natural materials.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Flame,
                title: 'Passion',
                description: 'Every piece is crafted with unwavering dedication to perfection and artistry.'
              },
              {
                icon: Mountain,
                title: 'Sustainability',
                description: 'We work with local communities and practice responsible sourcing.'
              },
              {
                icon: Gem,
                title: 'Quality',
                description: 'Only the finest materials and most skilled craftsmanship meet our standards.'
              },
              {
                icon: Award,
                title: 'Excellence',
                description: 'We strive for perfection in every detail, from design to delivery.'
              }
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center space-y-4"
              >
                <div className="w-16 h-16 bg-champagne/10 border border-champagne/20 flex items-center justify-center mx-auto">
                  <value.icon className="h-8 w-8 text-champagne" />
                </div>
                <h3 className="text-lg font-heading text-champagne">
                  {value.title}
                </h3>
                <p className="text-white/60 text-sm">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Craftsmanship Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative order-2 lg:order-1"
            >
              <img
                src="https://images.pexels.com/photos/1454171/pexels-photo-1454171.jpeg"
                alt="Artisan crafting jewelry"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian/60 to-transparent" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6 order-1 lg:order-2"
            >
              <h2 className="text-heading font-heading text-champagne">
                Master Craftsmanship
              </h2>
              <p className="text-white/80 leading-relaxed">
                Our master artisans bring decades of experience to every piece. Using traditional 
                techniques passed down through generations, combined with modern precision tools, 
                they shape each piece of obsidian with meticulous care.
              </p>
              <p className="text-white/80 leading-relaxed">
                The process begins with careful selection of the raw obsidian, examining each piece 
                for its unique characteristics. Our artisans then hand-shape, polish, and set each 
                stone, ensuring that no two pieces are exactly alike.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-champagne"></div>
                  <span className="text-white/80">Hand-selected volcanic glass</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-champagne"></div>
                  <span className="text-white/80">18k gold vermeil settings</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-champagne"></div>
                  <span className="text-white/80">Lifetime craftsmanship warranty</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-onyx to-obsidian">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-6"
          >
            <h2 className="text-heading font-heading text-champagne">
              Experience the Collection
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Discover jewelry that captures the raw beauty of volcanic glass, 
              transformed into timeless pieces of luxury.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-champagne text-obsidian px-8 py-3 font-medium hover:bg-champagne/90 transition-colors">
                Explore Collections
              </button>
              <button className="border border-champagne/30 text-champagne px-8 py-3 font-medium hover:bg-champagne/10 transition-colors">
                Visit Our Atelier
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}