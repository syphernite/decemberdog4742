import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { PlayIcon, FunnelIcon } from '@heroicons/react/24/outline';
import { videos } from '../data/sampleData';

const platforms = [
  { id: 'all', name: 'All', icon: '📱' },
  { id: 'youtube', name: 'YouTube', icon: '▶️' },
  { id: 'instagram', name: 'Instagram', icon: '📷' },
  { id: 'tiktok', name: 'TikTok', icon: '🎵' },
];

const categories = [
  { id: 'all', name: 'All Categories' },
  { id: 'tech', name: 'Tech Reviews' },
  { id: 'lifestyle', name: 'Lifestyle' },
  { id: 'gaming', name: 'Gaming' },
  { id: 'productivity', name: 'Productivity' },
];

export default function Content() {
  const [selectedPlatform, setSelectedPlatform] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [lightboxVideo, setLightboxVideo] = useState<any>(null);

  const filteredVideos = videos.filter(video => {
    const platformMatch = selectedPlatform === 'all' || video.platform === selectedPlatform;
    const categoryMatch = selectedCategory === 'all' || video.category === selectedCategory;
    return platformMatch && categoryMatch;
  });

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
            <span className="gradient-text">CONTENT</span> HUB
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Discover premium content across all platforms, from tech reviews to lifestyle vlogs
          </p>
        </motion.div>

        {/* Platform Tabs */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-8"
        >
          {platforms.map((platform) => (
            <button
              key={platform.id}
              onClick={() => setSelectedPlatform(platform.id)}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 flex items-center space-x-2 ${
                selectedPlatform === platform.id
                  ? 'bg-gradient-to-r from-neon-violet to-neon-cyan text-white shadow-neon'
                  : 'glass-panel text-gray-300 hover:text-white'
              }`}
            >
              <span>{platform.icon}</span>
              <span>{platform.name}</span>
            </button>
          ))}
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 text-xs font-medium transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'glass-panel text-neon-violet border-neon-violet'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              {category.name}
            </button>
          ))}
        </motion.div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredVideos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -4, scale: 1.02 }}
              className="glass-panel overflow-hidden group cursor-pointer"
              onClick={() => setLightboxVideo(video)}
            >
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-all duration-300" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <PlayIcon className="h-16 w-16 text-white drop-shadow-lg" />
                </div>
                <div className="absolute top-4 left-4">
                  <span className="px-2 py-1 bg-black/80 text-white text-xs rounded">
                    {platforms.find(p => p.id === video.platform)?.icon} {video.platform.toUpperCase()}
                  </span>
                </div>
                <div className="absolute bottom-4 right-4">
                  <span className="px-2 py-1 bg-black/80 text-white text-xs rounded">
                    {video.duration}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-white mb-2 line-clamp-2">
                  {video.title}
                </h3>
                <div className="flex justify-between items-center text-sm text-gray-400">
                  <span>{video.views} views</span>
                  <span>{new Date(video.date).toLocaleDateString()}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox */}
        {lightboxVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setLightboxVideo(null)}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="max-w-4xl w-full glass-panel overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="aspect-video bg-black">
                <img
                  src={lightboxVideo.thumbnail}
                  alt={lightboxVideo.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <PlayIcon className="h-20 w-20 text-white/80" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {lightboxVideo.title}
                </h3>
                <div className="flex justify-between items-center text-gray-400">
                  <span>{lightboxVideo.views} views</span>
                  <span>{platforms.find(p => p.id === lightboxVideo.platform)?.name}</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </div>
  );
}