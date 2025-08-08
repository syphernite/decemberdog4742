import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Phone, Mail, MessageCircle, Clock, MapPin } from 'lucide-react';

export function Help() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: 'What is obsidian jewelry?',
      answer: 'Obsidian is a natural volcanic glass formed when felsic lava cools rapidly. Our jewelry features hand-selected obsidian pieces that are carefully shaped and polished, then set in 18k gold vermeil to create unique, luxury pieces.'
    },
    {
      question: 'How do I care for my obsidian jewelry?',
      answer: 'Store your obsidian jewelry in the provided pouch to prevent scratching. Clean with a soft, dry cloth and avoid contact with chemicals, perfumes, and lotions. While obsidian is durable, it can chip if dropped on hard surfaces.'
    },
    {
      question: 'What is your return policy?',
      answer: 'We offer a 30-day return policy for unworn items in original condition. Items must be returned in original packaging with all certificates. Custom or personalized items cannot be returned unless defective.'
    },
    {
      question: 'Do you offer international shipping?',
      answer: 'Yes, we ship worldwide. International orders may be subject to customs duties and taxes, which are the responsibility of the customer. Shipping times vary by destination, typically 7-14 business days.'
    },
    {
      question: 'Is my jewelry covered by warranty?',
      answer: 'All our pieces come with a lifetime craftsmanship warranty covering manufacturing defects. This does not cover normal wear, damage from misuse, or loss. We also offer repair services for accidental damage.'
    },
    {
      question: 'How do I determine my ring size?',
      answer: 'We recommend visiting a local jeweler for professional sizing. You can also use our printable ring sizer available in your account. If you\'re unsure, we offer free resizing within 30 days of purchase.'
    },
    {
      question: 'Are your materials ethically sourced?',
      answer: 'Yes, we work directly with volcanic regions and local communities to source our obsidian ethically. Our gold is recycled and certified conflict-free. We maintain full transparency in our supply chain.'
    },
    {
      question: 'Can I customize a piece?',
      answer: 'We offer limited customization options including engraving and size adjustments. For major modifications or completely custom pieces, please contact our design team to discuss possibilities and pricing.'
    }
  ];

  const contactMethods = [
    {
      icon: Phone,
      title: 'Phone Support',
      description: 'Speak with our jewelry experts',
      contact: '+1 (555) 123-4567',
      hours: 'Mon-Fri 9AM-6PM EST'
    },
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Get detailed assistance',
      contact: 'support@obsidian.com',
      hours: 'Response within 24 hours'
    },
    {
      icon: MessageCircle,
      title: 'Live Chat',
      description: 'Instant help when you need it',
      contact: 'Available on website',
      hours: 'Mon-Fri 9AM-9PM EST'
    }
  ];

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
              Help Center
            </h1>
            <p className="text-lg text-white/60 max-w-2xl mx-auto">
              Find answers to common questions or get in touch with our expert team 
              for personalized assistance with your luxury jewelry.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-heading font-heading text-champagne mb-4">
              Get in Touch
            </h2>
            <p className="text-white/60">
              Our jewelry experts are here to help with any questions about our collections.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-6 bg-onyx border border-champagne/20 hover:border-champagne/40 transition-colors"
              >
                <div className="w-16 h-16 bg-champagne/10 border border-champagne/20 flex items-center justify-center mx-auto mb-4">
                  <method.icon className="h-8 w-8 text-champagne" />
                </div>
                <h3 className="text-lg font-heading text-champagne mb-2">
                  {method.title}
                </h3>
                <p className="text-white/60 text-sm mb-3">
                  {method.description}
                </p>
                <p className="text-champagne font-medium mb-1">
                  {method.contact}
                </p>
                <p className="text-white/50 text-xs">
                  {method.hours}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-onyx">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-heading font-heading text-champagne mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-white/60">
              Find quick answers to the most common questions about our jewelry and services.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="border border-champagne/20"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-champagne/5 transition-colors"
                >
                  <span className="font-medium text-white">{faq.question}</span>
                  <ChevronDown
                    className={`h-5 w-5 text-champagne transition-transform ${
                      openFaq === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openFaq === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="px-6 pb-4"
                  >
                    <p className="text-white/80 leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Store Information */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h2 className="text-heading font-heading text-champagne">
                Visit Our Atelier
              </h2>
              <p className="text-white/80 leading-relaxed">
                Experience our collections in person at our flagship atelier. Our jewelry 
                experts are available for private consultations and can help you find the 
                perfect piece or create something custom.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-champagne mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-white font-medium">Flagship Atelier</p>
                    <p className="text-white/60 text-sm">
                      123 Luxury Lane<br />
                      New York, NY 10001
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Clock className="h-5 w-5 text-champagne mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-white font-medium">Hours</p>
                    <div className="text-white/60 text-sm space-y-1">
                      <p>Monday - Friday: 10AM - 7PM</p>
                      <p>Saturday: 10AM - 6PM</p>
                      <p>Sunday: 12PM - 5PM</p>
                    </div>
                  </div>
                </div>
              </div>

              <button className="bg-champagne text-obsidian px-6 py-3 font-medium hover:bg-champagne/90 transition-colors">
                Schedule Appointment
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img
                src="https://images.pexels.com/photos/1454171/pexels-photo-1454171.jpeg"
                alt="Luxury jewelry store interior"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian/60 to-transparent" />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}