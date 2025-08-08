import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import { Shield, CheckCircle, MapPin, Sparkles, Car, Palette } from 'lucide-react';
import BeforeAfterSlider from '../components/BeforeAfterSlider';
import TestimonialCard from '../components/TestimonialCard';

const Home: React.FC = () => {
  const [heroRef, heroInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [servicesRef, servicesInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [testimonialsRef, testimonialsInView] = useInView({ threshold: 0.1, triggerOnce: true });

  const trustBadges = [
    { icon: MapPin, title: 'We Come To You', description: 'Mobile service at your location' },
    { icon: Shield, title: 'Fully Insured', description: 'Complete coverage and protection' },
    { icon: CheckCircle, title: 'Satisfaction Guaranteed', description: '100% quality promise' }
  ];

  const services = [
    { 
      icon: Sparkles, 
      title: 'Interior Detailing', 
      description: 'Deep cleaning, conditioning, and protection for all interior surfaces' 
    },
    { 
      icon: Car, 
      title: 'Exterior Detailing', 
      description: 'Paint correction, washing, waxing, and ceramic coating application' 
    },
    { 
      icon: Palette, 
      title: 'Ceramic Coating', 
      description: 'Long-lasting protection with hydrophobic and UV-resistant properties' 
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      rating: 5,
      text: 'Incredible service! They came to my office and my car looked brand new. The ceramic coating is amazing.',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2'
    },
    {
      name: 'Mike Rodriguez',
      rating: 5,
      text: 'Professional team, arrived on time, and the results exceeded my expectations. My truck has never looked better.',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2'
    },
    {
      name: 'Emily Chen',
      rating: 5,
      text: 'The convenience of mobile detailing is unbeatable. They brought everything needed and did an outstanding job.',
      image: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2'
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="overflow-hidden"
    >
      {/* Hero Section with Parallax */}
      <section 
        ref={heroRef}
        className="relative h-screen flex items-center justify-center overflow-hidden"
      >
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ 
            backgroundImage: 'url(https://images.pexels.com/photos/3764984/pexels-photo-3764984.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=2)',
          }}
        />
        <div className="absolute inset-0 bg-gray-900/70" />
        
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={heroInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative z-10 text-center max-w-4xl mx-auto px-4"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Showroom Shine,
            <br />
            <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              Delivered to Your Door
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Premium mobile detailing for homes, offices, and events
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/services"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 hover:scale-105 shadow-lg"
            >
              Book Mobile Detail Now
            </Link>
            <Link
              to="/services"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 hover:scale-105"
            >
              View Packages
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Trust Badges */}
      <section className="py-16 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {trustBadges.map((badge, index) => (
              <motion.div
                key={badge.title}
                initial={{ y: 30, opacity: 0 }}
                animate={heroInView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.2 }}
                className="text-center"
              >
                <badge.icon className="h-12 w-12 text-blue-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">{badge.title}</h3>
                <p className="text-gray-400">{badge.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Before/After Section */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={heroInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">See the Transformation</h2>
            <p className="text-xl text-gray-400">Professional results that speak for themselves</p>
          </motion.div>
          <BeforeAfterSlider />
        </div>
      </section>

      {/* Services Summary */}
      <section ref={servicesRef} className="py-16 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={servicesInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-xl text-gray-400">Comprehensive care for your vehicle</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ y: 30, opacity: 0 }}
                animate={servicesInView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-gray-900 p-6 rounded-lg hover:bg-gray-700 transition-colors duration-200 group"
                whileHover={{ y: -5 }}
              >
                <service.icon className="h-12 w-12 text-blue-500 mb-4 group-hover:scale-110 transition-transform duration-200" />
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section ref={testimonialsRef} className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={testimonialsInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">What Our Customers Say</h2>
            <p className="text-xl text-gray-400">Real reviews from satisfied clients</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ y: 30, opacity: 0 }}
                animate={testimonialsInView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <TestimonialCard {...testimonial} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Area Map */}
      <section className="py-16 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Service Area</h2>
            <p className="text-xl text-gray-400 mb-8">We serve within 25 miles of the metro area</p>
          </div>
          
          <div className="bg-gray-700 rounded-lg p-8 max-w-2xl mx-auto">
            <div className="aspect-w-16 aspect-h-9 bg-gray-600 rounded-lg mb-4 flex items-center justify-center">
              <MapPin className="h-16 w-16 text-blue-500" />
            </div>
            <div className="text-center">
              <p className="text-lg font-semibold mb-2">25-Mile Service Radius</p>
              <p className="text-gray-400">Metro Area and Surrounding Communities</p>
              <p className="text-sm text-gray-500 mt-2">
                Travel fees may apply for locations over 15 miles
              </p>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;
