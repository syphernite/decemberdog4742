import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Car, MessageCircle, Skull, Zap } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import { staggerChildren, fadeUp, glitchIn, bloodDrip, rotateIn } from '../utils/animations';

const Contact: React.FC = () => {
  const [ref, isInView] = useInView(0.1);
  const [hoveredSocial, setHoveredSocial] = useState<string | null>(null);

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Location',
      content: '123 Brick Lane\nDowntown District\nCity, ST 12345',
      action: 'Get Directions',
      href: 'https://maps.google.com'
    },
    {
      icon: Phone,
      title: 'Phone',
      content: '(555) 123-4567',
      action: 'Call Now',
      href: 'tel:+15551234567'
    },
    {
      icon: MessageCircle,
      title: 'Text',
      content: '(555) 123-4567',
      action: 'Send Text',
      href: 'sms:+15551234567'
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'info@brickhouseink.com',
      action: 'Send Email',
      href: 'mailto:info@brickhouseink.com'
    }
  ];

  const hours = [
    { day: 'Monday', time: '12:00 PM - 9:00 PM' },
    { day: 'Tuesday', time: '12:00 PM - 9:00 PM' },
    { day: 'Wednesday', time: '12:00 PM - 9:00 PM' },
    { day: 'Thursday', time: '12:00 PM - 9:00 PM' },
    { day: 'Friday', time: '12:00 PM - 9:00 PM' },
    { day: 'Saturday', time: '12:00 PM - 9:00 PM' },
    { day: 'Sunday', time: '12:00 PM - 6:00 PM' }
  ];

  const socialLinks = [
    {
      name: 'Instagram',
      icon: Instagram,
      href: 'https://instagram.com/brickhouseink',
      color: 'from-purple-600 to-pink-600'
    },
    {
      name: 'Facebook',
      icon: Facebook,
      href: 'https://facebook.com/brickhouseink',
      color: 'from-blue-600 to-blue-800'
    }
  ];

  const instagramPosts = [
    'https://images.pexels.com/photos/1319459/pexels-photo-1319459.jpeg?auto=compress&cs=tinysrgb&w=300',
    'https://images.pexels.com/photos/1010519/pexels-photo-1010519.jpeg?auto=compress&cs=tinysrgb&w=300',
    'https://images.pexels.com/photos/1738986/pexels-photo-1738986.jpeg?auto=compress&cs=tinysrgb&w=300',
    'https://images.pexels.com/photos/3586091/pexels-photo-3586091.jpeg?auto=compress&cs=tinysrgb&w=300',
    'https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=300',
    'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=300'
  ];

  return (
    <div className="min-h-screen bg-ink-900 pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-ink-800 film-grain rain-overlay">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            variants={glitchIn}
            initial="hidden"
            animate="visible"
            className="relative mb-6"
          >
            <MapPin className="w-16 h-16 mx-auto mb-4 text-blood-600 animate-pulse-glow" />
            <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-bone-100 text-glow-white">
              FIND <span className="text-blood-600 text-glow animate-pulse-glow">US</span>
            </h1>
            <motion.div
              variants={bloodDrip}
              initial="hidden"
              animate="visible"
              transition={{ delay: 1 }}
              className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-1 h-8 bg-blood-600 opacity-60"
            />
          </motion.div>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.4 }}
            className="text-xl text-stone-400 max-w-3xl mx-auto font-gothic"
          >
            ⚡ Located in the heart of downtown's art district ⚡
          </motion.p>
        </div>
      </section>

      {/* Contact Info Grid */}
      <section ref={ref} className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerChildren}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                variants={rotateIn}
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 5,
                  boxShadow: '0 0 30px rgba(122, 15, 22, 0.4)'
                }}
                className="bg-stone-800/50 rounded-large p-6 border border-stone-700 backdrop-blur-sm text-center group"
              >
                <info.icon className="w-12 h-12 text-blood-600 mx-auto mb-4 animate-pulse-glow" />
                <h3 className="font-display font-bold text-xl text-bone-100 mb-3">
                  {info.title}
                </h3>
                <p className="text-stone-400 text-sm mb-4 whitespace-pre-line">
                  {info.content}
                </p>
                <a
                  href={info.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-blood-600 text-bone-100 rounded-medium font-medium hover:bg-blood-700 transition-all duration-300 group-hover:animate-shake"
                >
                  {info.action}
                  <Zap className="w-4 h-4 ml-2 animate-pulse" />
                </a>
              </motion.div>
            ))}
          </motion.div>

          {/* Hours & Map Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {/* Hours */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="bg-stone-800/50 rounded-large p-8 border border-stone-700 backdrop-blur-sm"
            >
              <div className="flex items-center mb-6">
                <Clock className="w-8 h-8 text-blood-600 mr-3 animate-pulse" />
                <h2 className="font-display font-bold text-2xl text-bone-100 text-glow-white">
                  HOURS
                </h2>
              </div>
              <div className="space-y-3">
                {hours.map((hour, index) => (
                  <div key={hour.day} className="flex justify-between items-center py-2 border-b border-stone-700/30 last:border-b-0">
                    <span className="font-gothic font-medium text-bone-100">
                      {hour.day}
                    </span>
                    <span className="text-stone-400">
                      {hour.time}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-blood-600/10 border border-blood-600/30 rounded-medium">
                <p className="text-blood-600 font-medium text-sm text-center">
                  ⚡ Walk-ins accepted when the light is on ⚡
                </p>
              </div>
            </motion.div>

            {/* Map */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              transition={{ delay: 0.2 }}
              className="bg-stone-800/50 rounded-large p-8 border border-stone-700 backdrop-blur-sm"
            >
              <div className="flex items-center mb-6">
                <Car className="w-8 h-8 text-blood-600 mr-3 animate-pulse" />
                <h2 className="font-display font-bold text-2xl text-bone-100 text-glow-white">
                  LOCATION & PARKING
                </h2>
              </div>
              <div className="aspect-video bg-ink-900 rounded-medium mb-4 flex items-center justify-center border border-stone-600">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-blood-600 mx-auto mb-2 animate-pulse-glow" />
                  <p className="text-stone-400 text-sm">Interactive Map</p>
                  <p className="text-stone-500 text-xs">Click to open in Google Maps</p>
                </div>
              </div>
              <div className="space-y-2 text-sm text-stone-300">
                <div className="flex items-center">
                  <Car className="w-4 h-4 text-blood-600 mr-2" />
                  <span>Street parking available</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 text-blood-600 mr-2" />
                  <span>2 blocks from Metro Station</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 text-blood-600 mr-2" />
                  <span>Free parking after 6 PM</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Social Media */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="text-center mb-12"
          >
            <h2 className="font-display font-bold text-3xl text-bone-100 mb-8 text-glow-white">
              💀 FOLLOW THE DARKNESS 💀
            </h2>
            <div className="flex justify-center space-x-6 mb-8">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  onHoverStart={() => setHoveredSocial(social.name)}
                  onHoverEnd={() => setHoveredSocial(null)}
                  className={`w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 ${
                    hoveredSocial === social.name
                      ? `bg-gradient-to-r ${social.color} glow-accent`
                      : 'bg-stone-700 hover:bg-stone-600'
                  }`}
                >
                  <social.icon className="w-8 h-8 text-bone-100" />
                </motion.a>
              ))}
            </div>

            {/* Instagram Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 max-w-4xl mx-auto">
              {instagramPosts.map((post, index) => (
                <motion.div
                  key={index}
                  variants={rotateIn}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  className="aspect-square rounded-medium overflow-hidden border border-stone-700 hover:border-blood-600 transition-colors cursor-pointer"
                >
                  <img
                    src={post}
                    alt={`Instagram post ${index + 1}`}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Emergency Contact */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="bg-blood-600/10 border border-blood-600/30 rounded-large p-6 text-center"
          >
            <Skull className="w-12 h-12 text-blood-600 mx-auto mb-4 animate-pulse-glow" />
            <h3 className="font-display font-bold text-xl text-bone-100 mb-2">
              AFTERCARE EMERGENCY?
            </h3>
            <p className="text-stone-300 mb-4">
              If you experience unusual swelling, excessive bleeding, or signs of infection, 
              contact us immediately or seek medical attention.
            </p>
            <a
              href="tel:+15551234567"
              className="inline-flex items-center px-6 py-3 bg-blood-600 text-bone-100 rounded-medium font-bold hover:bg-blood-700 transition-all duration-300 glow-accent animate-pulse-glow hover:animate-shake"
            >
              <Phone className="w-5 h-5 mr-2 animate-bounce" />
              EMERGENCY LINE
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;