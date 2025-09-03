import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, CheckCircle } from 'lucide-react';
import Section from '../components/Section';
import Container from '../components/Container';
import Button from '../components/Button';
import Card from '../components/Card';
import siteData from '../content/site.json';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate form submission to Formspree
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setIsSubmitted(true);
      setFormData({ name: '', phone: '', email: '', message: '' });
      
      // Reset success state after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Contact | Plaza Mexico</title>
        <meta name="description" content="Contact Plaza Mexico restaurant. Visit us, call for takeout, or get directions. Located in Hometown with authentic Mexican food and fast service." />
      </Helmet>

      {/* Hero Section */}
      <div className="h-64 bg-gradient-to-r from-cactus via-gold to-chili flex items-center justify-center text-white mt-16">
        <Container>
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-4">Contact Us</h1>
            <p className="text-xl md:text-2xl">We'd love to hear from you!</p>
          </motion.div>
        </Container>
      </div>

      {/* Contact Information */}
      <Section background="white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Restaurant Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-heading text-charcoal mb-8">Restaurant Information</h2>
              
              <div className="space-y-6">
                <Card hover={false}>
                  <div className="p-6 flex items-start space-x-4">
                    <div className="w-12 h-12 bg-chili/10 rounded-full flex items-center justify-center">
                      <MapPin className="text-chili" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-charcoal mb-1">Address</h3>
                      <p className="text-gray-600 select-all">{siteData.address}</p>
                    </div>
                  </div>
                </Card>

                <Card hover={false}>
                  <div className="p-6 flex items-start space-x-4">
                    <div className="w-12 h-12 bg-cactus/10 rounded-full flex items-center justify-center">
                      <Phone className="text-cactus" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-charcoal mb-1">Phone</h3>
                      <a 
                        href={`tel:${siteData.phone}`}
                        className="text-cactus hover:underline font-medium"
                      >
                        {siteData.phone}
                      </a>
                    </div>
                  </div>
                </Card>

                <Card hover={false}>
                  <div className="p-6 flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center">
                      <Mail className="text-gold" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-charcoal mb-1">Email</h3>
                      <a 
                        href={`mailto:${siteData.email}`}
                        className="text-gold hover:underline"
                      >
                        {siteData.email}
                      </a>
                    </div>
                  </div>
                </Card>

                <Card hover={false}>
                  <div className="p-6 flex items-start space-x-4">
                    <div className="w-12 h-12 bg-charcoal/10 rounded-full flex items-center justify-center">
                      <Clock className="text-charcoal" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-charcoal mb-3">Hours</h3>
                      <div className="space-y-2">
                        {siteData.hours.map((schedule, index) => (
                          <div key={index} className="flex justify-between text-gray-600">
                            <span className="font-medium">{schedule.day}</span>
                            <span>{schedule.open} - {schedule.close}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card hover={false}>
                <div className="p-8">
                  <h2 className="text-3xl font-heading text-charcoal mb-6">Send Us a Message</h2>
                  
                  {isSubmitted ? (
                    <motion.div 
                      className="text-center py-8"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", duration: 0.6, delay: 0.1 }}
                      >
                        <CheckCircle className="text-cactus mx-auto mb-4" size={64} />
                      </motion.div>
                      <h3 className="text-xl font-semibold text-charcoal mb-2">
                        Thanks for your message!
                      </h3>
                      <p className="text-gray-600">
                        We will contact you soon.
                      </p>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-charcoal mb-2">
                          Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-chili/50 transition-colors ${
                            errors.name ? 'border-red-500' : 'border-gray-300'
                          }`}
                          placeholder="Your full name"
                        />
                        {errors.name && (
                          <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                        )}
                      </div>

                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-charcoal mb-2">
                          Phone *
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-chili/50 transition-colors ${
                            errors.phone ? 'border-red-500' : 'border-gray-300'
                          }`}
                          placeholder="Your phone number"
                        />
                        {errors.phone && (
                          <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                        )}
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-charcoal mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-chili/50 transition-colors ${
                            errors.email ? 'border-red-500' : 'border-gray-300'
                          }`}
                          placeholder="your@email.com"
                        />
                        {errors.email && (
                          <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                        )}
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-charcoal mb-2">
                          Message *
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          rows={5}
                          className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-chili/50 transition-colors resize-vertical ${
                            errors.message ? 'border-red-500' : 'border-gray-300'
                          }`}
                          placeholder="Tell us how we can help you..."
                        />
                        {errors.message && (
                          <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                        )}
                      </div>

                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full"
                        size="lg"
                      >
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                      </Button>
                    </form>
                  )}
                </div>
              </Card>
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* Map Section */}
      <Section background="pattern">
        <Container>
          <motion.h2 
            className="text-3xl md:text-4xl font-heading text-center text-charcoal mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Find Us
          </motion.h2>
          
          <motion.div 
            className="bg-white rounded-2xl overflow-hidden shadow-lg"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <div className="aspect-video">
              <iframe
                src={siteData.mapsUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Plaza Mexico location"
              />
            </div>
          </motion.div>
        </Container>
      </Section>

      {/* Quick Actions */}
      <Section background="white">
        <Container>
          <motion.div 
            className="bg-gradient-to-r from-chili to-gold text-white p-12 rounded-2xl text-center"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Ready to Visit?
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href={`tel:${siteData.phone}`} variant="outline" size="lg">
                <Phone size={20} className="mr-2" />
                Call Now
              </Button>
              <Button href={siteData.mapsUrl} target="_blank" size="lg">
                <MapPin size={20} className="mr-2" />
                Get Directions
              </Button>
            </div>
          </motion.div>
        </Container>
      </Section>
    </>
  );
};

export default ContactPage;