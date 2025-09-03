import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Utensils, Clock, Users, MapPin, Star } from 'lucide-react';
import Hero from '../components/Hero';
import Section from '../components/Section';
import Container from '../components/Container';
import Card from '../components/Card';
import DishCard from '../components/DishCard';
import TestimonialCard from '../components/TestimonialCard';
import Button from '../components/Button';
import siteData from '../content/site.json';
import menuData from '../content/menu.json';
import testimonialsData from '../content/testimonials.json';
import galleryData from '../content/gallery.json';

const HomePage: React.FC = () => {
  // Get featured dishes from menu
  const featuredDishes = menuData.categories
    .flatMap(category => category.items)
    .filter(item => item.featured)
    .slice(0, 6);

  // Get first 3 testimonials
  const testimonials = testimonialsData.slice(0, 3);

  // Get first 6 gallery images
  const galleryImages = galleryData.slice(0, 6);

  const restaurantSchema = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "name": siteData.name,
    "description": siteData.tagline,
    "telephone": siteData.phone,
    "email": siteData.email,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": siteData.address
    },
    "priceRange": siteData.priceRange,
    "openingHours": siteData.hours.map(h => `${h.day} ${h.open}-${h.close}`),
    "url": window.location.origin
  };

  return (
    <>
      <Helmet>
        <title>Plaza Mexico | Authentic Mexican Grill</title>
        <meta name="description" content="Authentic Mexican cuisine in Hometown. Fresh ingredients, family recipes, and fast service. Order online or visit us today!" />
        <script type="application/ld+json">
          {JSON.stringify(restaurantSchema)}
        </script>
      </Helmet>

      {/* Hero Section */}
      <Hero 
        title={siteData.heroHeadline}
        subtitle={siteData.heroSubheadline}
        backgroundImage="/images/hero.jpg"
      />

      {/* Highlights Section */}
      <Section background="white">
        <Container>
          <motion.h2 
            className="text-3xl md:text-4xl font-heading text-center text-charcoal mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Why Choose Plaza Mexico?
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <div className="p-8 text-center">
                <div className="w-16 h-16 bg-cactus/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Utensils className="text-cactus" size={32} />
                </div>
                <h3 className="text-xl font-semibold text-charcoal mb-3">Fresh Ingredients</h3>
                <p className="text-gray-600">We use only the freshest ingredients, sourced locally when possible, to create authentic Mexican flavors.</p>
              </div>
            </Card>

            <Card>
              <div className="p-8 text-center">
                <div className="w-16 h-16 bg-chili/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="text-chili" size={32} />
                </div>
                <h3 className="text-xl font-semibold text-charcoal mb-3">Family Recipes</h3>
                <p className="text-gray-600">Our recipes have been passed down through generations, bringing you authentic Mexican home-style cooking.</p>
              </div>
            </Card>

            <Card>
              <div className="p-8 text-center">
                <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="text-gold" size={32} />
                </div>
                <h3 className="text-xl font-semibold text-charcoal mb-3">Fast Service</h3>
                <p className="text-gray-600">Quick, friendly service without compromising on quality. Perfect for lunch breaks and family dinners.</p>
              </div>
            </Card>
          </div>
        </Container>
      </Section>

      {/* Daily Special Banner */}
      <Section background="pattern">
        <Container>
          <motion.div 
            className="bg-gradient-to-r from-chili to-gold text-white p-8 rounded-2xl text-center"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-heading mb-4">Daily Special</h2>
            <p className="text-lg md:text-xl">{siteData.dailySpecials}</p>
          </motion.div>
        </Container>
      </Section>

      {/* Featured Dishes Section */}
      <Section id="featured-dishes" background="white">
        <Container>
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-heading text-charcoal mb-4">Featured Dishes</h2>
            <p className="text-xl text-gray-600">Taste our most popular and beloved creations</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredDishes.map((dish, index) => (
              <DishCard
                key={index}
                name={dish.name}
                description={dish.desc}
                price={dish.price}
                image={dish.image}
                tags={dish.tags}
                featured={dish.featured}
              />
            ))}
          </div>

          <div className="text-center">
            <Button href="/menu" size="lg">
              View Full Menu
            </Button>
          </div>
        </Container>
      </Section>

      {/* Testimonials Section */}
      <Section background="pattern">
        <Container>
          <motion.h2 
            className="text-3xl md:text-4xl font-heading text-center text-charcoal mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            What Our Customers Say
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <TestimonialCard
                key={testimonial.id}
                name={testimonial.name}
                text={testimonial.text}
                rating={testimonial.rating}
                date={testimonial.date}
              />
            ))}
          </div>
        </Container>
      </Section>

      {/* Gallery Section */}
      <Section background="white">
        <Container>
          <motion.h2 
            className="text-3xl md:text-4xl font-heading text-center text-charcoal mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Experience Plaza Mexico
          </motion.h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((image, index) => (
              <motion.div
                key={image.id}
                className="relative aspect-square overflow-hidden rounded-xl cursor-pointer group"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Location & Hours Section */}
      <Section background="pattern">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-heading text-charcoal mb-6">Visit Us Today</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="text-chili mt-1" size={20} />
                  <div>
                    <p className="font-semibold text-charcoal">Address</p>
                    <p className="text-gray-600">{siteData.address}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Clock className="text-cactus mt-1" size={20} />
                  <div>
                    <p className="font-semibold text-charcoal">Hours</p>
                    <div className="text-gray-600">
                      {siteData.hours.map((schedule, index) => (
                        <div key={index} className="flex justify-between">
                          <span>{schedule.day}</span>
                          <span>{schedule.open} - {schedule.close}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <Button href={siteData.mapsUrl} target="_blank" size="lg">
                  Get Directions
                </Button>
              </div>
            </motion.div>

            <motion.div
              className="bg-white p-8 rounded-2xl shadow-xl"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold text-charcoal mb-4">Quick Contact</h3>
              <div className="space-y-3">
                <p>
                  <span className="font-semibold">Phone: </span>
                  <a href={`tel:${siteData.phone}`} className="text-chili hover:underline">
                    {siteData.phone}
                  </a>
                </p>
                <p>
                  <span className="font-semibold">Email: </span>
                  <a href={`mailto:${siteData.email}`} className="text-chili hover:underline">
                    {siteData.email}
                  </a>
                </p>
              </div>
              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="flex items-center space-x-2 text-gold">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={20} fill="currentColor" />
                  ))}
                </div>
                <p className="text-sm text-gray-600 mt-2">
                  Rated 5 stars by our amazing customers
                </p>
              </div>
            </motion.div>
          </div>
        </Container>
      </Section>
    </>
  );
};

export default HomePage;