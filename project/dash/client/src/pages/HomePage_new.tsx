import { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import {
  ArrowRight,
  Menu,
  X,
  ArrowUp,
  Globe,
  Workflow,
  Star,
  MessageSquare,
  TrendingUp,
  Users,
  Calendar,
  Search,
  BarChart3,
  CheckCircle
} from 'lucide-react';

export default function HomePage() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleGetStarted = () => {
    navigate('/login');
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  // Unique service ecosystem - all services in glass cards, no tasks
  const services = [
    {
      id: 'websites',
      name: 'Website Development',
      description: 'Custom, responsive websites with integrated business management tools',
      icon: Globe,
      features: ['Mobile Responsive', 'SEO Optimized', 'Fast Loading', 'Custom Design']
    },
    {
      id: 'automation',
      name: 'Front Desk Automation',
      description: 'Smart workflow systems that handle scheduling and customer service',
      icon: Workflow,
      features: ['Auto Scheduling', 'Customer Alerts', 'Workflow Optimization', 'Real-time Updates']
    },
    {
      id: 'google',
      name: 'Google Business Pro',
      description: 'Complete Google Business Profile optimization and management',
      icon: Star,
      features: ['Profile Optimization', 'Review Management', 'Local SEO', 'Analytics']
    },
    {
      id: 'social',
      name: 'Social Media Management',
      description: 'Multi-platform social media presence and engagement',
      icon: MessageSquare,
      features: ['Content Creation', 'Community Management', 'Analytics', 'Growth Strategy']
    },
    {
      id: 'ads',
      name: 'Ad Campaigns',
      description: 'Targeted advertising campaigns across multiple platforms',
      icon: TrendingUp,
      features: ['Google Ads', 'Facebook Ads', 'Performance Tracking', 'A/B Testing']
    },
    {
      id: 'analytics',
      name: 'Analytics Hub',
      description: 'Comprehensive data-driven insights and reporting',
      icon: BarChart3,
      features: ['Real-time Analytics', 'Custom Reports', 'Performance Insights', 'ROI Tracking']
    },
    {
      id: 'crm',
      name: 'Client Management',
      description: 'Complete CRM integration and customer relationship management',
      icon: Users,
      features: ['Customer Database', 'Communication Tools', 'Loyalty Programs', 'Support Tracking']
    },
    {
      id: 'scheduling',
      name: 'Smart Scheduling',
      description: 'Automated booking and appointment management system',
      icon: Calendar,
      features: ['Online Booking', 'Calendar Sync', 'Reminder System', 'Capacity Management']
    },
    {
      id: 'seo',
      name: 'SEO Services',
      description: 'Search engine optimization for maximum online visibility',
      icon: Search,
      features: ['Keyword Research', 'Content Optimization', 'Link Building', 'Performance Monitoring']
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Unique Ecosystem Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl border-b border-emerald-100"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo from favicon */}
            <motion.div
              className="flex items-center space-x-3"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-blue-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">B4Y</span>
              </div>
              <span className="built4you-accurate-gradient font-bold text-xl">Built4You</span>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection('ecosystem')}
                className="text-gray-700 hover:text-emerald-600 transition-colors font-medium"
              >
                Ecosystem
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="text-gray-700 hover:text-emerald-600 transition-colors font-medium"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-gray-700 hover:text-emerald-600 transition-colors font-medium"
              >
                Contact
              </button>
              <button
                onClick={handleGetStarted}
                className="built4you-bg-gradient text-white px-6 py-2 rounded-lg font-medium hover:shadow-lg transition-all"
              >
                Get Started
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="md:hidden py-4 border-t border-emerald-100"
            >
              <div className="flex flex-col space-y-4">
                <button
                  onClick={() => scrollToSection('ecosystem')}
                  className="text-left text-gray-700 hover:text-emerald-600 transition-colors font-medium"
                >
                  Ecosystem
                </button>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-left text-gray-700 hover:text-emerald-600 transition-colors font-medium"
                >
                  Services
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-left text-gray-700 hover:text-emerald-600 transition-colors font-medium"
                >
                  Contact
                </button>
                <button
                  onClick={handleGetStarted}
                  className="built4you-bg-gradient text-white px-6 py-2 rounded-lg font-medium w-fit"
                >
                  Get Started
                </button>
              </div>
            </motion.div>
          )}
        </div>
      </motion.nav>

      {/* Unique Hero Section - Custom Layout */}
      <section className="relative min-h-screen bg-white flex items-center justify-center overflow-hidden">
        {/* Unique Background Pattern */}
        <div className="absolute inset-0 ecosystem-pattern opacity-30" />

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-32 h-32 bg-gradient-to-br from-emerald-100 to-blue-100 rounded-full opacity-20"
              style={{
                top: `${20 + i * 15}%`,
                left: `${10 + i * 15}%`,
              }}
              animate={{
                x: [0, 30, 0],
                y: [0, -20, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 8 + i * 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center min-h-[80vh]">
            {/* Left Column - Unique Content Layout */}
            <motion.div
              className="lg:col-span-7 space-y-8"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Unique Badge */}
              <motion.div
                className="inline-flex items-center gap-3 bg-emerald-50 text-emerald-700 px-6 py-3 rounded-full text-sm font-medium border border-emerald-200"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring" }}
              >
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                🌐 25+ Businesses Connected
              </motion.div>

              {/* Unique Headline Structure */}
              <div className="space-y-6">
                <motion.h1
                  className="text-5xl md:text-7xl font-bold leading-tight"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <span className="built4you-accurate-gradient">Built4You</span>
                  <span className="block text-gray-900 text-4xl md:text-5xl">Business</span>
                  <span className="block text-gray-900 text-3xl md:text-4xl">Ecosystem</span>
                </motion.h1>

                <motion.p
                  className="text-xl text-gray-600 leading-relaxed max-w-2xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  Where businesses don't just exist—they interconnect, share intelligence,
                  and grow together through our comprehensive digital platform.
                </motion.p>
              </div>

              {/* Unique Feature Pills */}
              <motion.div
                className="flex flex-wrap gap-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                {[
                  'Websites',
                  'Automation',
                  'Analytics',
                  'Marketing',
                  'CRM',
                  '24/7 Support'
                ].map((feature, index) => (
                  <motion.div
                    key={feature}
                    className="bg-white/80 backdrop-blur-sm border border-emerald-200 px-4 py-2 rounded-full text-sm font-medium text-gray-700 hover:bg-emerald-50 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {feature}
                  </motion.div>
                ))}
              </motion.div>

              {/* Unique CTA Section */}
              <motion.div
                className="flex flex-col sm:flex-row gap-4 pt-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
              >
                <button
                  onClick={handleGetStarted}
                  className="group bg-gradient-to-r from-emerald-500 to-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-3"
                >
                  <span>Join the Ecosystem</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={() => scrollToSection('ecosystem')}
                  className="border-2 border-emerald-300 text-emerald-700 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-emerald-50 transition-all duration-300"
                >
                  Explore Network
                </button>
              </motion.div>
            </motion.div>

            {/* Right Column - Unique Visual Element */}
            <motion.div
              className="lg:col-span-5 relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {/* Unique Central Hub Visualization */}
              <div className="relative h-96 flex items-center justify-center">
                {/* Central Hub */}
                <motion.div
                  className="relative z-10 ecosystem-node p-8 text-center"
                  animate={{
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-blue-700 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <span className="text-white font-bold text-2xl">B4Y</span>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">Central Hub</h3>
                  <p className="text-sm text-gray-600">Intelligence Center</p>
                </motion.div>

                {/* Orbiting Elements */}
                {[
                  { label: 'Websites', angle: 0, color: 'from-blue-400 to-blue-600' },
                  { label: 'Automation', angle: 72, color: 'from-emerald-400 to-emerald-600' },
                  { label: 'Analytics', angle: 144, color: 'from-purple-400 to-purple-600' },
                  { label: 'Marketing', angle: 216, color: 'from-orange-400 to-orange-600' },
                  { label: 'CRM', angle: 288, color: 'from-pink-400 to-pink-600' },
                ].map((item, index) => {
                  const angle = (item.angle * Math.PI) / 180;
                  const radius = 120;

                  return (
                    <motion.div
                      key={item.label}
                      className={`absolute w-16 h-16 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center text-white text-xs font-semibold shadow-lg`}
                      style={{
                        top: `calc(50% + ${Math.sin(angle) * radius}px)`,
                        left: `calc(50% + ${Math.cos(angle) * radius}px)`,
                        transform: 'translate(-50%, -50%)',
                      }}
                      animate={{
                        rotate: [0, 360],
                      }}
                      transition={{
                        duration: 20 + index * 2,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    >
                      {item.label.charAt(0)}
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Unique Interconnected Ecosystem Section */}
      <section id="ecosystem" className="py-20 md:py-32 px-4 ecosystem-pattern">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.div
              className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium mb-6"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
            >
              🌐 Interconnected Network
            </motion.div>

            <motion.h2
              className="text-4xl md:text-6xl font-bold mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <span className="built4you-accurate-gradient">25+ Businesses</span>
              <span className="block text-gray-900">Working Together</span>
            </motion.h2>

            <motion.p
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Our ecosystem connects businesses through shared workflows, automated processes,
              and integrated systems. Each business strengthens the network, creating
              unprecedented efficiency and growth opportunities.
            </motion.p>
          </motion.div>

          {/* Unique Network Visualization */}
          <div className="relative h-96 md:h-[500px] mb-16">
            {/* Central Hub */}
            <motion.div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ecosystem-node p-6 text-center"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">B4Y</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Built4You Hub</h3>
              <p className="text-sm text-gray-600">Central Intelligence</p>
            </motion.div>

            {/* Connected Business Nodes */}
            {[
              { name: 'Barber Shop', type: 'Service', angle: 0, distance: 150 },
              { name: 'Food Truck', type: 'Food', angle: 60, distance: 150 },
              { name: 'Pest Control', type: 'Service', angle: 120, distance: 150 },
              { name: 'Plumbing', type: 'Trade', angle: 180, distance: 150 },
              { name: 'Tattoo Shop', type: 'Service', angle: 240, distance: 150 },
              { name: 'Restaurant', type: 'Food', angle: 300, distance: 150 },
            ].map((business, index) => {
              const radian = (business.angle * Math.PI) / 180;
              const x = Math.cos(radian) * business.distance;
              const y = Math.sin(radian) * business.distance;

              return (
                <motion.div
                  key={business.name}
                  className="absolute ecosystem-node p-4 text-center"
                  style={{
                    top: `calc(50% + ${y}px)`,
                    left: `calc(50% + ${x}px)`,
                    transform: 'translate(-50%, -50%)'
                  }}
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                >
                  <div className="w-8 h-8 bg-gradient-to-br from-emerald-400 to-blue-600 rounded-lg flex items-center justify-center mb-2">
                    <span className="text-white font-bold text-xs">
                      {business.name.charAt(0)}
                    </span>
                  </div>
                  <h4 className="font-medium text-gray-900 text-sm">{business.name}</h4>
                  <p className="text-xs text-gray-600">{business.type}</p>
                </motion.div>
              );
            })}

            {/* Connection Lines */}
            {[
              { from: 0, to: 1 }, { from: 1, to: 2 }, { from: 2, to: 3 },
              { from: 3, to: 4 }, { from: 4, to: 5 }, { from: 5, to: 0 }
            ].map((connection, index) => {
              const fromAngle = (connection.from * 60 * Math.PI) / 180;
              const toAngle = (connection.to * 60 * Math.PI) / 180;
              const fromX = Math.cos(fromAngle) * 150;
              const toX = Math.cos(toAngle) * 150;
              const fromY = Math.sin(fromAngle) * 150;
              const toY = Math.sin(toAngle) * 150;

              const length = Math.sqrt((toX - fromX) ** 2 + (toY - fromY) ** 2);
              const angle = Math.atan2(toY - fromY, toX - fromX) * 180 / Math.PI;

              return (
                <motion.div
                  key={index}
                  className="absolute ecosystem-connection"
                  style={{
                    top: `calc(50% + ${(fromY + toY) / 2}px)`,
                    left: `calc(50% + ${(fromX + toX) / 2}px)`,
                    width: `${length}px`,
                    transform: `translate(-50%, -50%) rotate(${angle}deg)`
                  }}
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                />
              );
            })}
          </div>

          {/* Ecosystem Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Shared Intelligence',
                description: 'Businesses learn from each other\'s successes and optimize collectively.',
                icon: '🧠'
              },
              {
                title: 'Automated Workflows',
                description: 'Cross-business processes that eliminate redundant tasks and improve efficiency.',
                icon: '⚡'
              },
              {
                title: 'Network Effects',
                description: 'Each new business strengthens the entire ecosystem\'s capabilities.',
                icon: '🌐'
              }
            ].map((benefit, index) => (
              <motion.div
                key={benefit.title}
                className="ecosystem-glass p-6 text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Unique Services Section - All in Glass Cards */}
      <section id="services" className="py-20 md:py-32 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.div
              className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
            >
              🔧 Complete Service Suite
            </motion.div>

            <motion.h2
              className="text-4xl md:text-6xl font-bold mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <span className="built4you-accurate-gradient">Everything</span>
              <span className="block text-gray-900">Your Business Needs</span>
            </motion.h2>

            <motion.p
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              From websites to automation, marketing to analytics - we provide
              comprehensive digital solutions that drive real results.
            </motion.p>
          </motion.div>

          {/* Unique Service Grid - All in Glass Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flow-element"
                >
                  <div className="ecosystem-glass p-8 h-full group">
                    {/* Service Icon */}
                    <motion.div
                      className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-blue-700 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                      whileHover={{ rotate: 5 }}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </motion.div>

                    {/* Service Info */}
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          {service.name}
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {service.description}
                        </p>
                      </div>

                      {/* Key Features */}
                      <div className="space-y-2">
                        {service.features.slice(0, 3).map((feature, i) => (
                          <div key={i} className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                            <span className="text-sm text-gray-600">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Unique Hover Effect */}
                    <motion.div
                      className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={{ scale: 0.8 }}
                      whileHover={{ scale: 1 }}
                    >
                      <div className="w-full h-1 bg-gradient-to-r from-emerald-500 to-blue-700 rounded-full" />
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Unique Contact Section */}
      <section id="contact" className="py-20 md:py-32 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Join the
              <span className="block built4you-accurate-gradient">Ecosystem?</span>
            </h2>
            <p className="text-xl text-gray-600">
              Transform your business with our comprehensive digital platform.
            </p>
          </motion.div>

          {/* Unique Contact Form */}
          <motion.div
            className="ecosystem-glass p-8 md:p-12"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">Full Name *</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-white/50 border border-emerald-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                    placeholder="Your full name"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">Email Address *</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-white/50 border border-emerald-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Business Name *</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-white/50 border border-emerald-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                  placeholder="Your business name"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Service Interest</label>
                <select className="w-full px-4 py-3 bg-white/50 border border-emerald-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all">
                  <option>Select a service</option>
                  {services.map(service => (
                    <option key={service.id} value={service.id}>{service.name}</option>
                  ))}
                  <option value="full">Complete Digital Ecosystem</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 bg-white/50 border border-emerald-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all resize-none"
                  placeholder="Tell us about your business goals and challenges..."
                />
              </div>

              <button
                type="submit"
                onClick={handleGetStarted}
                className="w-full bg-gradient-to-r from-emerald-500 to-blue-700 text-white py-4 px-8 rounded-lg font-semibold text-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3"
              >
                <span>Start Your Transformation</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Unique Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-blue-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">B4Y</span>
              </div>
              <span className="built4you-accurate-gradient font-bold text-xl">Built4You</span>
            </div>
            <p className="text-gray-400 text-sm">
              © 2025 Built4You. Empowering business ecosystems worldwide.
            </p>
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      <motion.button
        className="fixed bottom-8 right-8 bg-gradient-to-br from-emerald-500 to-blue-700 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all z-50"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <ArrowUp className="w-5 h-5" />
      </motion.button>
    </div>
  );
}