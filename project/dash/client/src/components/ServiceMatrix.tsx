import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Globe,
  Workflow,
  Star,
  MessageSquare,
  TrendingUp,
  Users,
  Calendar,
  Search,
  BarChart3,
  CheckCircle,
  ArrowUpRight
} from 'lucide-react';

const services = [
  {
    id: 'websites',
    name: 'Website Development',
    description: 'Custom, responsive websites with integrated business management tools',
    icon: Globe,
    metric: { label: 'Avg Load Time', value: '0.8s', change: '-45%', positive: true },
    features: ['Mobile Responsive', 'SEO Optimized', 'Fast Loading', 'Custom Design']
  },
  {
    id: 'automation',
    name: 'Front Desk Automation',
    description: 'Smart workflow systems that handle scheduling and customer service',
    icon: Workflow,
    metric: { label: 'Tasks Automated', value: '15/day', change: '+280%', positive: true },
    features: ['Auto Scheduling', 'Customer Alerts', 'Workflow Optimization', 'Real-time Updates']
  },
  {
    id: 'google',
    name: 'Google Business Pro',
    description: 'Complete Google Business Profile optimization and management',
    icon: Star,
    metric: { label: 'Profile Views', value: '3.2K', change: '+127%', positive: true },
    features: ['Profile Optimization', 'Review Management', 'Local SEO', 'Analytics']
  },
  {
    id: 'social',
    name: 'Social Media Management',
    description: 'Multi-platform social media presence and engagement',
    icon: MessageSquare,
    metric: { label: 'Engagement Rate', value: '8.4%', change: '+65%', positive: true },
    features: ['Content Creation', 'Community Management', 'Analytics', 'Growth Strategy']
  },
  {
    id: 'ads',
    name: 'Ad Campaigns',
    description: 'Targeted advertising campaigns across multiple platforms',
    icon: TrendingUp,
    metric: { label: 'ROAS', value: '4.2x', change: '+92%', positive: true },
    features: ['Google Ads', 'Facebook Ads', 'Performance Tracking', 'A/B Testing']
  },
  {
    id: 'analytics',
    name: 'Analytics Hub',
    description: 'Comprehensive data-driven insights and reporting',
    icon: BarChart3,
    metric: { label: 'Data Points', value: '50K+', change: '+156%', positive: true },
    features: ['Real-time Analytics', 'Custom Reports', 'Performance Insights', 'ROI Tracking']
  },
  {
    id: 'crm',
    name: 'Client Management',
    description: 'Complete CRM integration and customer relationship management',
    icon: Users,
    metric: { label: 'Client Retention', value: '94%', change: '+18%', positive: true },
    features: ['Customer Database', 'Communication Tools', 'Loyalty Programs', 'Support Tracking']
  },
  {
    id: 'scheduling',
    name: 'Smart Scheduling',
    description: 'Automated booking and appointment management system',
    icon: Calendar,
    metric: { label: 'Bookings/Week', value: '127', change: '+210%', positive: true },
    features: ['Online Booking', 'Calendar Sync', 'Reminder System', 'Capacity Management']
  },
  {
    id: 'seo',
    name: 'SEO Services',
    description: 'Search engine optimization for maximum online visibility',
    icon: Search,
    metric: { label: 'Organic Traffic', value: '+185%', change: '+185%', positive: true },
    features: ['Keyword Research', 'Content Optimization', 'Link Building', 'Performance Monitoring']
  },
];

export function ServiceMatrix() {
  const [hoveredService, setHoveredService] = useState<string | null>(null);

  return (
    <section className="relative py-20 md:py-32 px-4 bg-surface">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: "spring" }}
          >
            <BarChart3 className="w-4 h-4" />
            Complete Service Ecosystem
          </motion.div>

          <motion.h2
            className="text-4xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <span className="built4you-gradient">Built4You</span>
            <span className="block text-primary">Service Ecosystem</span>
          </motion.h2>

          <motion.p
            className="text-xl text-secondary max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            From websites to automation, marketing to analytics - we provide
            comprehensive digital solutions that grow your business.
          </motion.p>
        </motion.div>

        {/* Service Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isHovered = hoveredService === service.id;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onHoverStart={() => setHoveredService(service.id)}
                onHoverEnd={() => setHoveredService(null)}
                className="group"
              >
                <div className={`clean-card p-8 h-full transition-all duration-300 ${
                  isHovered ? 'ring-2 ring-primary shadow-lg' : ''
                }`}>
                  {/* Service Icon */}
                  <motion.div
                    className="business-icon p-3 mb-6 inline-flex"
                  >
                    <Icon className="w-6 h-6" />
                  </motion.div>

                  {/* Service Info */}
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-semibold text-primary mb-2">
                        {service.name}
                      </h3>
                      <p className="text-secondary text-sm leading-relaxed">
                        {service.description}
                      </p>
                    </div>

                    {/* Key Features */}
                    <div className="space-y-2">
                      {service.features.slice(0, 2).map((feature, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-success flex-shrink-0" />
                          <span className="text-sm text-secondary">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Performance Metric */}
                    <div className="pt-4 border-t border-border">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-secondary">
                          {service.metric.label}
                        </span>
                        <div className="flex items-center gap-1">
                          <span className="text-sm font-semibold text-primary">
                            {service.metric.value}
                          </span>
                          <span className={`text-xs font-medium ${
                            service.metric.positive ? 'text-success' : 'text-error'
                          }`}>
                            {service.metric.change}
                          </span>
                        </div>
                      </div>

                      {/* Progress Bar */}
                      <div className="data-bar">
                        <motion.div
                          className="data-bar-fill"
                          initial={{ width: 0 }}
                          whileInView={{ width: '75%' }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: index * 0.1 }}
                        />
                      </div>
                    </div>

                    {/* Expandable Features */}
                    <AnimatePresence>
                      {isHovered && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="pt-4 space-y-2"
                        >
                          {service.features.slice(2).map((feature, i) => (
                            <div key={i} className="flex items-center gap-2">
                              <CheckCircle className="w-4 h-4 text-success flex-shrink-0" />
                              <span className="text-sm text-secondary">{feature}</span>
                            </div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Hover Indicator */}
                  <motion.div
                    className="mt-6 flex items-center justify-between"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isHovered ? 1 : 0.7 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className="text-sm text-secondary">
                      {isHovered ? 'View Details' : 'Hover for more'}
                    </span>
                    <ArrowUpRight className={`w-4 h-4 transition-transform duration-300 ${
                      isHovered ? 'translate-x-0.5 -translate-y-0.5' : ''
                    }`} />
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Stats */}
        <motion.div
          className="mt-20 pt-12 border-t border-border"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: '25+', label: 'Businesses Served' },
              { value: '99.9%', label: 'Service Uptime' },
              { value: '24/7', label: 'Support Available' },
              { value: '50+', label: 'Active Projects' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-sm text-secondary">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
