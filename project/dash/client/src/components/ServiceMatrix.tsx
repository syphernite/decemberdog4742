import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GlassCard } from './GlassCard';
import { 
  Globe, 
  Workflow, 
  Star, 
  MessageSquare, 
  TrendingUp, 
  Zap,
  Users,
  Calendar,
  Search
} from 'lucide-react';
import { cn } from '@/lib/utils';

const services = [
  {
    id: 'websites',
    name: 'Website Development',
    description: 'Custom, responsive sites',
    icon: Globe,
    color: 'text-primary',
    metric: { label: 'Avg Load Time', value: '0.8s', change: '-45%' },
  },
  {
    id: 'automation',
    name: 'Front Desk Automation',
    description: 'Smart workflow systems',
    icon: Workflow,
    color: 'text-secondary',
    metric: { label: 'Tasks Automated', value: '15/day', change: '+280%' },
  },
  {
    id: 'google',
    name: 'Google Business Pro',
    description: 'Profile optimization',
    icon: Star,
    color: 'text-accent',
    metric: { label: 'Profile Views', value: '3.2K', change: '+127%' },
  },
  {
    id: 'social',
    name: 'Social Media Mgmt',
    description: 'Multi-platform presence',
    icon: MessageSquare,
    color: 'text-primary',
    metric: { label: 'Engagement Rate', value: '8.4%', change: '+65%' },
  },
  {
    id: 'ads',
    name: 'Ad Campaigns',
    description: 'Targeted advertising',
    icon: TrendingUp,
    color: 'text-secondary',
    metric: { label: 'ROAS', value: '4.2x', change: '+92%' },
  },
  {
    id: 'analytics',
    name: 'Analytics Hub',
    description: 'Data-driven insights',
    icon: Zap,
    color: 'text-accent',
    metric: { label: 'Data Points', value: '50K+', change: '+156%' },
  },
  {
    id: 'crm',
    name: 'Client Management',
    description: 'CRM integration',
    icon: Users,
    color: 'text-primary',
    metric: { label: 'Client Retention', value: '94%', change: '+18%' },
  },
  {
    id: 'scheduling',
    name: 'Smart Scheduling',
    description: 'Automated bookings',
    icon: Calendar,
    color: 'text-secondary',
    metric: { label: 'Bookings/Week', value: '127', change: '+210%' },
  },
  {
    id: 'seo',
    name: 'SEO Services',
    description: 'Search engine optimization',
    icon: Search,
    color: 'text-accent',
    metric: { label: 'Organic Traffic', value: '+185%', change: '+185%' },
  },
];

export function ServiceMatrix() {
  const [hoveredService, setHoveredService] = useState<string | null>(null);

  return (
    <section className="py-20 md:py-32 px-4" data-testid="service-matrix">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            The Service Matrix
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-muted-foreground"
          >
            Interconnected solutions that power your digital presence
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isHovered = hoveredService === service.id;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                onHoverStart={() => setHoveredService(service.id)}
                onHoverEnd={() => setHoveredService(null)}
                data-testid={`service-card-${service.id}`}
              >
                <GlassCard
                  className={cn(
                    'p-6 h-full transition-all duration-300 transform-gpu',
                    isHovered && 'glow-emerald scale-105 rotate-y-12'
                  )}
                  hoverable
                >
                  <div className="space-y-4">
                    <div className="flex items-start justify-between">
                      <div className={cn('p-3 rounded-md glass-elevated', service.color)}>
                        <Icon className="w-6 h-6" />
                      </div>
                      {isHovered && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          className="px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-medium"
                        >
                          Active
                        </motion.div>
                      )}
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-1">{service.name}</h3>
                      <p className="text-sm text-muted-foreground">{service.description}</p>
                    </div>

                    <AnimatePresence>
                      {isHovered && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="overflow-hidden"
                        >
                          <div className="pt-4 border-t border-border/50 space-y-2">
                            <div className="flex justify-between items-center">
                              <span className="text-sm text-muted-foreground">{service.metric.label}</span>
                              <span className="text-sm font-semibold">{service.metric.value}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                                <motion.div
                                  initial={{ width: 0 }}
                                  animate={{ width: '75%' }}
                                  transition={{ duration: 0.8, delay: 0.2 }}
                                  className="h-full bg-gradient-to-r from-primary to-secondary"
                                />
                              </div>
                              <span className="text-xs text-primary font-medium">{service.metric.change}</span>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
