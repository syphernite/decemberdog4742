import React from 'react';
import { motion } from 'framer-motion';
import { 
  PlayIcon, 
  TrophyIcon, 
  UsersIcon, 
  GlobeAltIcon,
  CalendarIcon,
  StarIcon
} from '@heroicons/react/24/outline';

const milestones = [
  {
    year: '2019',
    title: 'Started Content Creation',
    description: 'Launched first YouTube channel focusing on tech reviews',
    icon: PlayIcon
  },
  {
    year: '2020',
    title: 'First Viral Video',
    description: 'Tech review video reached 5M+ views, establishing credibility',
    icon: TrophyIcon
  },
  {
    year: '2021',
    title: 'Multi-Platform Expansion',
    description: 'Expanded to Instagram, TikTok, and Twitter with consistent branding',
    icon: GlobeAltIcon
  },
  {
    year: '2022',
    title: 'Brand Partnerships',
    description: 'Secured partnerships with major tech brands and lifestyle companies',
    icon: UsersIcon
  },
  {
    year: '2023',
    title: 'Creator Economy Leader',
    description: 'Recognized as top creator in tech space with 3M+ combined followers',
    icon: StarIcon
  },
  {
    year: '2024',
    title: 'Premium Services Launch',
    description: 'Launched comprehensive creator services and digital product line',
    icon: CalendarIcon
  }
];

const pressQuotes = [
  {
    quote: "One of the most authentic voices in the creator economy today.",
    source: "TechCrunch",
    logo: "https://images.pexels.com/photos/267371/pexels-photo-267371.jpeg?auto=compress&cs=tinysrgb&w=200"
  },
  {
    quote: "Setting the standard for premium brand collaborations.",
    source: "Forbes",
    logo: "https://images.pexels.com/photos/205421/pexels-photo-205421.jpeg?auto=compress&cs=tinysrgb&w=200"
  },
  {
    quote: "A masterclass in content creation and audience engagement.",
    source: "Wired",
    logo: "https://images.pexels.com/photos/274973/pexels-photo-274973.jpeg?auto=compress&cs=tinysrgb&w=200"
  }
];

const collaboratorTestimonials = [
  {
    name: "Alex Chen",
    role: "Video Editor",
    content: "Working with them has been incredible. Their vision and attention to detail pushes everyone to create their best work.",
    avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    name: "Maria Rodriguez",
    role: "Brand Manager",
    content: "Professional, creative, and always delivers beyond expectations. A true partner in every collaboration.",
    avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    name: "David Kim",
    role: "Photographer",
    content: "Their creative direction and collaborative spirit makes every project a joy to work on.",
    avatar: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=400"
  }
];

export default function About() {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-display font-black mb-4">
            <span className="gradient-text">ABOUT</span> THE CREATOR
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Building authentic connections through premium content and meaningful brand partnerships
          </p>
        </motion.div>

        {/* Hero Section */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20"
        >
          <div className="space-y-6">
            <h2 className="text-3xl font-display font-bold text-white">
              Creator. Innovator. <span className="gradient-text">Storyteller.</span>
            </h2>
            <p className="text-gray-300 leading-relaxed">
              What started as a passion for technology and storytelling has evolved into a comprehensive 
              creator empire spanning multiple platforms and reaching millions of engaged followers worldwide.
            </p>
            <p className="text-gray-300 leading-relaxed">
              With over 3 million combined followers across YouTube, Instagram, TikTok, and Twitter, 
              I've built a community that values authenticity, quality, and meaningful connections. 
              My content focuses on the intersection of technology, lifestyle, and personal growth.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Beyond content creation, I'm passionate about helping brands tell their stories in 
              authentic ways that resonate with modern audiences. Every collaboration is approached 
              with the same attention to detail and creative vision that has made my personal content successful.
            </p>
            
            <div className="grid grid-cols-2 gap-4 pt-6">
              <div className="glass-panel p-4 text-center">
                <div className="text-2xl font-display font-bold gradient-text mb-1">3.2M+</div>
                <div className="text-gray-400 text-sm">Total Followers</div>
              </div>
              <div className="glass-panel p-4 text-center">
                <div className="text-2xl font-display font-bold gradient-text mb-1">50+</div>
                <div className="text-gray-400 text-sm">Brand Partners</div>
              </div>
              <div className="glass-panel p-4 text-center">
                <div className="text-2xl font-display font-bold gradient-text mb-1">100M+</div>
                <div className="text-gray-400 text-sm">Total Views</div>
              </div>
              <div className="glass-panel p-4 text-center">
                <div className="text-2xl font-display font-bold gradient-text mb-1">5</div>
                <div className="text-gray-400 text-sm">Years Creating</div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="aspect-square glass-panel overflow-hidden">
              <img
                src="https://images.pexels.com/photos/1264210/pexels-photo-1264210.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Creator Portrait"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="glass-panel p-6">
              <h3 className="text-lg font-semibold text-white mb-3">Mission Statement</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                "To create authentic, high-quality content that inspires, educates, and entertains 
                while building meaningful partnerships that drive real results for brands and value for audiences."
              </p>
            </div>
          </div>
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl font-display font-bold text-center mb-12">
            <span className="gradient-text">JOURNEY</span> HIGHLIGHTS
          </h2>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gradient-to-b from-neon-violet via-neon-cyan to-neon-magenta"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                    <div className="glass-panel p-6">
                      <div className="text-neon-violet font-display font-bold text-lg mb-2">
                        {milestone.year}
                      </div>
                      <h3 className="text-white font-semibold mb-2">{milestone.title}</h3>
                      <p className="text-gray-400 text-sm">{milestone.description}</p>
                    </div>
                  </div>
                  
                  <div className="relative z-10">
                    <div className="w-12 h-12 bg-gradient-to-r from-neon-violet to-neon-cyan rounded-full flex items-center justify-center">
                      <milestone.icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  
                  <div className="w-1/2"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Press Mentions */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl font-display font-bold text-center mb-12">
            <span className="gradient-text">PRESS</span> MENTIONS
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pressQuotes.map((press, index) => (
              <motion.div
                key={press.source}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-panel p-6 text-center"
              >
                <img
                  src={press.logo}
                  alt={press.source}
                  className="w-16 h-16 mx-auto mb-4 object-cover rounded"
                />
                <blockquote className="text-gray-300 italic mb-4">
                  "{press.quote}"
                </blockquote>
                <cite className="text-neon-violet font-semibold">— {press.source}</cite>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Collaborator Testimonials */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl font-display font-bold text-center mb-12">
            <span className="gradient-text">COLLABORATOR</span> TESTIMONIALS
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {collaboratorTestimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-panel p-6"
              >
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="text-white font-semibold">{testimonial.name}</h3>
                    <p className="text-gray-400 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <blockquote className="text-gray-300 italic">
                  "{testimonial.content}"
                </blockquote>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-center glass-panel p-12"
        >
          <h2 className="text-3xl md:text-4xl font-display font-black mb-4">
            Ready to <span className="gradient-text">Collaborate?</span>
          </h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Let's create something amazing together. Whether it's a brand partnership, 
            content collaboration, or speaking engagement, I'm always excited to work with like-minded creators and brands.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 bg-gradient-to-r from-neon-violet to-neon-cyan text-white font-medium hover:shadow-neon-strong transition-all duration-300"
            >
              Start a Collaboration
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="glass-panel px-8 py-4 text-white font-medium hover:shadow-neon transition-all duration-300"
            >
              Download Media Kit
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}