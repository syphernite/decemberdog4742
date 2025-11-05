import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { Building2, Zap, CheckCircle, ArrowRight, BarChart3, Users, Globe, Settings } from 'lucide-react';

export function HeroSection({ onLoginClick }: { onLoginClick: () => void }) {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      title: "Complete Website Solutions",
      description: "Custom, responsive websites with integrated business management tools",
      icon: Globe,
      stats: "25+ Live Sites"
    },
    {
      title: "Intelligent Automation",
      description: "AI-powered workflows that handle scheduling, customer service, and operations",
      icon: Settings,
      stats: "500+ Daily Tasks"
    },
    {
      title: "Data-Driven Marketing",
      description: "Analytics, SEO, and advertising campaigns optimized for real results",
      icon: BarChart3,
      stats: "$50K+ Monthly Revenue"
    },
    {
      title: "Unified Client Management",
      description: "Single platform managing all client relationships and business operations",
      icon: Users,
      stats: "98% Satisfaction Rate"
    }
  ];

  const benefits = [
    "No more scattered tools and platforms",
    "Real-time business intelligence",
    "Automated customer communication",
    "Integrated payment processing",
    "Mobile-optimized experiences",
    "24/7 system monitoring"
  ];

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-surface to-white flex items-center justify-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #2563eb 2px, transparent 2px),
                           radial-gradient(circle at 75% 75%, #64748b 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Main Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <Building2 className="w-4 h-4" />
              Complete Business Ecosystem
            </motion.div>

            {/* Main Heading */}
            <div className="space-y-4">
              <motion.h1
                className="text-4xl md:text-6xl font-bold leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <span className="built4you-gradient">Built4You</span>
                <span className="block text-primary">Business Ecosystem</span>
              </motion.h1>

              <motion.p
                className="text-xl text-secondary leading-relaxed max-w-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                Transform your business with our comprehensive digital ecosystem.
                Websites, automation, marketing, analytics, and client management -
                all in one unified platform.
              </motion.p>
            </div>

            {/* Benefits List */}
            <motion.div
              className="space-y-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-success flex-shrink-0" />
                  <span className="text-secondary">{benefit}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
            >
              <Button
                size="lg"
                className="interactive-button text-lg px-8 py-4"
                onClick={onLoginClick}
              >
                <Zap className="w-5 h-5 mr-2" />
                Start Your Transformation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-white text-lg px-8 py-4"
              >
                View Our Portfolio
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Column - Interactive Features */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Feature Cards */}
            <div className="space-y-4">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                const isActive = activeFeature === index;

                return (
                  <motion.div
                    key={feature.title}
                    className={`clean-card p-6 cursor-pointer transition-all duration-300 ${
                      isActive ? 'ring-2 ring-primary shadow-lg' : ''
                    }`}
                    onClick={() => setActiveFeature(index)}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`business-icon flex-shrink-0 ${
                        isActive ? 'bg-primary text-white' : ''
                      }`}>
                        <Icon className="w-5 h-5" />
                      </div>

                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-primary mb-2">
                          {feature.title}
                        </h3>
                        <p className="text-secondary text-sm mb-3">
                          {feature.description}
                        </p>
                        <div className="text-sm font-medium text-primary">
                          {feature.stats}
                        </div>
                      </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="mt-4">
                      <div className="data-bar">
                        <motion.div
                          className="data-bar-fill"
                          initial={{ width: 0 }}
                          animate={{ width: isActive ? '85%' : '60%' }}
                          transition={{ duration: 0.5 }}
                        />
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Stats Summary */}
            <motion.div
              className="clean-card p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">25+</div>
                <div className="text-secondary mb-4">Businesses Managed</div>

                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-xl font-semibold text-success">$50K+</div>
                    <div className="text-xs text-secondary">Monthly Revenue</div>
                  </div>
                  <div>
                    <div className="text-xl font-semibold text-primary">99.9%</div>
                    <div className="text-xs text-secondary">Uptime</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Stats Bar */}
        <motion.div
          className="mt-16 pt-8 border-t border-border"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4 }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: '25+', label: 'Active Clients' },
              { value: '50+', label: 'Websites Built' },
              { value: '500+', label: 'Daily Automations' },
              { value: '98%', label: 'Client Satisfaction' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.6 + index * 0.1 }}
              >
                <div className="text-2xl font-bold text-primary">{stat.value}</div>
                <div className="text-sm text-secondary">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}