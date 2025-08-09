import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowDownTrayIcon,
  EyeIcon,
  UsersIcon,
  GlobeAltIcon,
  TrophyIcon,
  ChartBarIcon
} from '@heroicons/react/24/outline';
import { stats, brandLogos, testimonials } from '../data/sampleData';

const platformStats = [
  {
    platform: 'YouTube',
    followers: stats.youtube.followers,
    avgViews: stats.youtube.avgViews,
    engagement: '8.2%',
    demographics: 'Tech enthusiasts, 25-45 years',
    icon: '▶️',
    color: 'from-red-500 to-red-600'
  },
  {
    platform: 'Instagram',
    followers: stats.instagram.followers,
    avgViews: stats.instagram.avgViews,
    engagement: '12.4%',
    demographics: 'Lifestyle focused, 22-40 years',
    icon: '📷',
    color: 'from-pink-500 to-purple-600'
  },
  {
    platform: 'TikTok',
    followers: stats.tiktok.followers,
    avgViews: stats.tiktok.avgViews,
    engagement: '15.8%',
    demographics: 'Gen Z & Millennials, 18-35 years',
    icon: '🎵',
    color: 'from-black to-gray-800'
  },
  {
    platform: 'Twitter',
    followers: stats.twitter.followers,
    avgViews: stats.twitter.avgViews,
    engagement: '6.1%',
    demographics: 'Tech professionals, 28-50 years',
    icon: '🐦',
    color: 'from-blue-400 to-blue-600'
  }
];

const audienceInsights = [
  { label: 'Age 18-24', percentage: 25, color: 'bg-neon-violet' },
  { label: 'Age 25-34', percentage: 40, color: 'bg-neon-cyan' },
  { label: 'Age 35-44', percentage: 25, color: 'bg-neon-magenta' },
  { label: 'Age 45+', percentage: 10, color: 'bg-gray-500' }
];

const topCountries = [
  { country: 'United States', percentage: 45 },
  { country: 'Canada', percentage: 12 },
  { country: 'United Kingdom', percentage: 10 },
  { country: 'Australia', percentage: 8 },
  { country: 'Germany', percentage: 6 },
  { country: 'Other', percentage: 19 }
];

const caseStudies = [
  {
    brand: 'TechCorp',
    campaign: 'Product Launch Campaign',
    results: '+250% brand awareness, 1.2M impressions',
    image: 'https://images.pexels.com/photos/205421/pexels-photo-205421.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    brand: 'StyleBrand',
    campaign: 'Lifestyle Integration',
    results: '+180% engagement, 850K reach',
    image: 'https://images.pexels.com/photos/1264210/pexels-photo-1264210.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    brand: 'InnovateCo',
    campaign: 'Multi-Platform Series',
    results: '+320% conversions, 2.1M views',
    image: 'https://images.pexels.com/photos/274973/pexels-photo-274973.jpeg?auto=compress&cs=tinysrgb&w=600'
  }
];

export default function MediaKit() {
  const handleDownloadPDF = () => {
    // In a real app, this would generate and download a PDF
    alert('PDF download would be implemented here');
  };

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
            <span className="gradient-text">MEDIA</span> KIT
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
            Comprehensive overview of audience insights, platform statistics, and collaboration success stories
          </p>
          
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleDownloadPDF}
            className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-neon-violet to-neon-cyan text-white font-medium hover:shadow-neon-strong transition-all duration-300"
          >
            <ArrowDownTrayIcon className="h-5 w-5" />
            <span>Download PDF Media Kit</span>
          </motion.button>
        </motion.div>

        {/* Overview Stats */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {[
            { icon: UsersIcon, label: 'Total Followers', value: '3.2M+', color: 'text-neon-violet' },
            { icon: EyeIcon, label: 'Monthly Views', value: '12M+', color: 'text-neon-cyan' },
            { icon: GlobeAltIcon, label: 'Countries Reached', value: '50+', color: 'text-neon-magenta' },
            { icon: TrophyIcon, label: 'Brand Partners', value: '50+', color: 'text-yellow-400' }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="glass-panel p-6 text-center"
            >
              <stat.icon className={`h-8 w-8 mx-auto mb-3 ${stat.color}`} />
              <div className="text-2xl font-display font-bold text-white mb-1">{stat.value}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Platform Statistics */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-display font-bold text-center mb-12">
            <span className="gradient-text">PLATFORM</span> BREAKDOWN
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {platformStats.map((platform, index) => (
              <motion.div
                key={platform.platform}
                initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-panel p-6"
              >
                <div className="flex items-center mb-4">
                  <span className="text-2xl mr-3">{platform.icon}</span>
                  <h3 className="text-xl font-display font-bold text-white">{platform.platform}</h3>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <div className="text-2xl font-bold text-white">{platform.followers}</div>
                    <div className="text-gray-400 text-sm">Followers</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white">{platform.avgViews}</div>
                    <div className="text-gray-400 text-sm">Avg Views</div>
                  </div>
                </div>
                
                <div className="mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-400 text-sm">Engagement Rate</span>
                    <span className="text-neon-violet font-semibold">{platform.engagement}</span>
                  </div>
                  <div className="w-full bg-onyx-800 h-2">
                    <div 
                      className={`h-2 bg-gradient-to-r ${platform.color}`}
                      style={{ width: platform.engagement }}
                    />
                  </div>
                </div>
                
                <p className="text-gray-400 text-sm">{platform.demographics}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Audience Demographics */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-display font-bold text-center mb-12">
            <span className="gradient-text">AUDIENCE</span> INSIGHTS
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Age Demographics */}
            <div className="glass-panel p-8">
              <h3 className="text-xl font-semibold text-white mb-6 flex items-center">
                <ChartBarIcon className="h-6 w-6 mr-2 text-neon-violet" />
                Age Distribution
              </h3>
              <div className="space-y-4">
                {audienceInsights.map((insight, index) => (
                  <motion.div
                    key={insight.label}
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300">{insight.label}</span>
                      <span className="text-white font-semibold">{insight.percentage}%</span>
                    </div>
                    <div className="w-full bg-onyx-800 h-3">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${insight.percentage}%` }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + 0.5, duration: 0.8 }}
                        className={`h-3 ${insight.color}`}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Geographic Distribution */}
            <div className="glass-panel p-8">
              <h3 className="text-xl font-semibold text-white mb-6 flex items-center">
                <GlobeAltIcon className="h-6 w-6 mr-2 text-neon-cyan" />
                Top Countries
              </h3>
              <div className="space-y-3">
                {topCountries.map((country, index) => (
                  <motion.div
                    key={country.country}
                    initial={{ x: 20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex justify-between items-center py-2 border-b border-onyx-800 last:border-b-0"
                  >
                    <span className="text-gray-300">{country.country}</span>
                    <span className="text-white font-semibold">{country.percentage}%</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Brand Partners */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-display font-bold text-center mb-12">
            <span className="gradient-text">TRUSTED</span> BY BRANDS
          </h2>
          
          <div className="relative overflow-hidden">
            <div className="flex animate-marquee space-x-12">
              {[...brandLogos, ...brandLogos].map((logo, index) => (
                <div key={index} className="flex-shrink-0">
                  <img
                    src={logo}
                    alt={`Brand ${index + 1}`}
                    className="h-16 w-32 object-contain opacity-60 hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Case Studies */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-display font-bold text-center mb-12">
            <span className="gradient-text">SUCCESS</span> STORIES
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.brand}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-panel overflow-hidden group"
              >
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={study.image}
                    alt={study.campaign}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-white mb-2">{study.brand}</h3>
                  <p className="text-gray-400 text-sm mb-3">{study.campaign}</p>
                  <p className="text-neon-violet font-medium text-sm">{study.results}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Testimonials */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-display font-bold text-center mb-12">
            <span className="gradient-text">CLIENT</span> TESTIMONIALS
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
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
                    <p className="text-gray-500 text-xs">{testimonial.company}</p>
                  </div>
                </div>
                <blockquote className="text-gray-300 italic text-sm">
                  "{testimonial.content}"
                </blockquote>
                <div className="flex mt-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400">★</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-center glass-panel p-12"
        >
          <h2 className="text-3xl md:text-4xl font-display font-black mb-4">
            Ready to <span className="gradient-text">Partner</span> with Us?
          </h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Let's create impactful content that drives results for your brand. 
            Download the full media kit or get in touch to discuss your next campaign.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleDownloadPDF}
              className="px-8 py-4 bg-gradient-to-r from-neon-violet to-neon-cyan text-white font-medium hover:shadow-neon-strong transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <ArrowDownTrayIcon className="h-5 w-5" />
              <span>Download Full Media Kit</span>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="glass-panel px-8 py-4 text-white font-medium hover:shadow-neon transition-all duration-300"
            >
              Schedule Partnership Call
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}