import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageCircle, Send, Heart } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:hello@anissaylaa.com?subject=Message from ${formData.name}&body=${formData.message}%0D%0A%0D%0AFrom: ${formData.name}%0D%0AEmail: ${formData.email}`;
    window.location.href = mailtoLink;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const socialLinks = [
    {
      name: 'TikTok',
      icon: '📱',
      handle: '@anissaylaa',
      followers: '200K+',
      url: 'https://tiktok.com/@anissaylaa',
      color: 'from-pink-500 to-red-500'
    },
    {
      name: 'Instagram',
      icon: '📸',
      handle: '@anissaylaa',
      followers: '50K+',
      url: 'https://instagram.com/anissaylaa',
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: 'YouTube',
      icon: '🎥',
      handle: 'Anissa Aylaa',
      followers: '25K+',
      url: 'https://youtube.com/@anissaylaa',
      color: 'from-red-500 to-orange-500'
    },
    {
      name: 'Discord',
      icon: '💬',
      handle: 'A&Y Community',
      followers: '3K+',
      url: 'https://discord.gg/anissaylaa',
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  return (
    <motion.div
      initial="initial"
      animate="animate"
      className="relative z-10 pt-24"
    >
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div variants={fadeInUp}>
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-cyber-pink/20 to-cyber-teal/20 rounded-full text-cyber-pink border border-cyber-pink/30 mb-6">
              💬 Let's Connect
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-cyber-teal bg-clip-text text-transparent">
                Get in Touch
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Have questions about the A&Y Profit Lab? Want to collaborate? Or just want to say hi? I'd love to hear from you!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="bg-dark-card/70 backdrop-blur-sm p-8 rounded-2xl border border-gray-800">
                <div className="flex items-center space-x-3 mb-6">
                  <Mail className="h-6 w-6 text-cyber-pink" />
                  <h2 className="text-2xl font-bold text-white">Send a Message</h2>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-dark-bg/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyber-pink transition-colors"
                      placeholder="Enter your name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-dark-bg/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyber-pink transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-dark-bg/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyber-pink transition-colors resize-none"
                      placeholder="What's on your mind?"
                    />
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-cyber-pink to-cyber-purple px-6 py-3 rounded-lg text-white font-semibold hover:shadow-lg hover:shadow-cyber-pink/25 transition-all duration-300 flex items-center justify-center space-x-2"
                  >
                    <Send size={20} />
                    <span>Send Message</span>
                  </button>
                </form>
              </div>
            </motion.div>

            {/* Quick Contact */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="bg-dark-card/70 backdrop-blur-sm p-8 rounded-2xl border border-gray-800">
                <div className="flex items-center space-x-3 mb-6">
                  <MessageCircle className="h-6 w-6 text-cyber-teal" />
                  <h2 className="text-2xl font-bold text-white">Quick Contact</h2>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Business Inquiries</h3>
                    <a 
                      href="mailto:business@anissaylaa.com"
                      className="text-cyber-teal hover:text-cyber-pink transition-colors"
                    >
                      business@anissaylaa.com
                    </a>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">General Questions</h3>
                    <a 
                      href="mailto:hello@anissaylaa.com"
                      className="text-cyber-teal hover:text-cyber-pink transition-colors"
                    >
                      hello@anissaylaa.com
                    </a>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">A&Y Profit Lab Support</h3>
                    <a 
                      href="https://discord.gg/anissaylaa"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cyber-teal hover:text-cyber-pink transition-colors"
                    >
                      Join Discord Community
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-cyber-pink/10 to-cyber-teal/10 p-8 rounded-2xl border border-cyber-pink/30">
                <div className="flex items-center space-x-3 mb-4">
                  <Heart className="h-6 w-6 text-cyber-pink" />
                  <h3 className="text-xl font-bold text-white">Response Time</h3>
                </div>
                <p className="text-gray-300">
                  I typically respond within 24-48 hours. For urgent inquiries about the A&Y Profit Lab, 
                  join our Discord community for faster support!
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-transparent to-dark-card/20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyber-teal to-cyber-gold bg-clip-text text-transparent">
                Follow the Journey
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Stay connected and get daily tips, behind-the-scenes content, and income updates across all platforms.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-dark-card/70 backdrop-blur-sm p-6 rounded-2xl border border-gray-800 hover:border-cyber-pink/50 transition-all duration-300 text-center"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {social.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{social.name}</h3>
                <p className="text-gray-400 mb-2">{social.handle}</p>
                <div className={`text-sm font-semibold bg-gradient-to-r ${social.color} bg-clip-text text-transparent`}>
                  {social.followers} followers
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Contact;