// src/pages/Home.tsx
import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { PlayIcon, BookOpenIcon } from '@heroicons/react/24/outline';
import Lightning from '../components/Lightning'; // ensure file exists at src/components/Lightning.tsx

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div className="relative">
      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{ y, opacity }}
      >
        {/* Background video */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover opacity-30"
          >
            <source
              src="https://player.vimeo.com/external/434045526.sd.mp4?s=c27eecc69662a42b2ac36cc2b86f2c96c85c6530&profile_id=139&oauth2_token_id=57447761"
              type="video/mp4"
            />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-onyx-950/50 via-transparent to-onyx-950/90" />
        </div>

        {/* Lightning overlay */}
        <div className="absolute inset-0 z-[1] pointer-events-none">
          <Lightning
            hue={220}
            xOffset={0}
            speed={1}
            intensity={1}
            size={1}
          />
        </div>

        {/* Foreground content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.h1
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="font-display text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter mb-6"
          >
            <span className="gradient-text">CREATOR</span>
            <br />
            <span className="text-white">EMPIRE</span>
          </motion.h1>

          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto font-light leading-relaxed"
          >
            Premium content creation, brand partnerships, and digital experiences
            that captivate millions and drive exceptional results.
          </motion.p>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link
              to="/content"
              className="group glass-panel px-8 py-4 text-lg font-medium text-white hover:shadow-neon transition-all duration-300 flex items-center space-x-2"
            >
              <PlayIcon className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
              <span>Watch Latest</span>
            </Link>
            <Link
              to="/collab"
              className="group px-8 py-4 text-lg font-medium bg-gradient-to-r from-neon-violet to-neon-cyan text-white hover:shadow-neon-strong transition-all duration-300 flex items-center space-x-2"
            >
              <BookOpenIcon className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
              <span>Book Collab</span>
            </Link>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full p-1">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="w-1 h-3 bg-white rounded-full mx-auto"
            />
          </div>
        </motion.div>
      </motion.section>

      {/* Announcement Marquee */}
      <div className="bg-gradient-to-r from-neon-violet via-neon-cyan to-neon-magenta py-2 overflow-hidden">
        <div className="animate-marquee whitespace-nowrap">
          <span className="text-white font-medium">
            🎯 Now Booking Q4 Campaigns • 🚀 3.2M+ Combined Followers • 💼 Premium Brand Partnerships •
            📈 Proven ROI Results • 🎬 Award-Winning Content • ⚡ Fast Turnaround •
            🎯 Now Booking Q4 Campaigns • 🚀 3.2M+ Combined Followers • 💼 Premium Brand Partnerships •
          </span>
        </div>
      </div>

      {/* Stats Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: '2.4M', label: 'YouTube Subscribers' },
              { number: '1.8M', label: 'Instagram Followers' },
              { number: '3.1M', label: 'TikTok Followers' },
              { number: '50+', label: 'Brand Partners' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-panel p-6"
              >
                <div className="text-3xl md:text-4xl font-display font-black gradient-text mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400 text-sm uppercase tracking-wider">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Content Preview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-display font-black mb-4">
              <span className="gradient-text">LATEST</span> CONTENT
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Fresh content across all platforms, designed to engage and inspire
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[1, 2, 3].map((item) => (
              <motion.div
                key={item}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: item * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -4, scale: 1.02 }}
                className="glass-panel overflow-hidden group cursor-pointer"
              >
                <div className="aspect-video bg-gradient-to-br from-neon-violet/20 to-neon-cyan/20 relative overflow-hidden">
                  <img
                    src={`https://images.pexels.com/photos/${
                      item === 1 ? '205421' : item === 2 ? '274973' : '1105766'
                    }/pexels-photo-${
                      item === 1 ? '205421' : item === 2 ? '274973' : '1105766'
                    }.jpeg?auto=compress&cs=tinysrgb&w=600`}
                    alt={`Content ${item}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-all duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <PlayIcon className="h-12 w-12 text-white" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {item === 1
                      ? 'Tech Review: Latest Gadgets'
                      : item === 2
                      ? 'Behind the Scenes'
                      : 'Lifestyle Content'}
                  </h3>
                  <div className="flex justify-between text-sm text-gray-400">
                    <span>
                      {item === 1 ? '2.1M views' : item === 2 ? '856K views' : '1.4M views'}
                    </span>
                    <span>{item === 1 ? 'YouTube' : item === 2 ? 'Instagram' : 'TikTok'}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/content"
              className="inline-flex items-center space-x-2 glass-panel px-8 py-3 text-lg font-medium text-white hover:shadow-neon transition-all duration-300"
            >
              <span>View All Content</span>
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
