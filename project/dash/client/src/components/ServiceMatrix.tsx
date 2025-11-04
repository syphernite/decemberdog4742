import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Globe,
  Workflow,
  Star,
  MessageSquare,
  TrendingUp,
  Zap,
  Users,
  Calendar,
  Search,
  Cpu,
  Network,
  Database,
  Shield,
  Bot,
  BarChart3
} from 'lucide-react';
import { cn } from '@/lib/utils';

const services = [
  {
    id: 'websites',
    name: 'Website Development',
    description: 'Custom, responsive sites',
    icon: Globe,
    color: 'text-cyan-400',
    metric: { label: 'Avg Load Time', value: '0.8s', change: '-45%' },
    neuralNodes: 12,
    dataFlow: 'HIGH',
  },
  {
    id: 'automation',
    name: 'Front Desk Automation',
    description: 'Smart workflow systems',
    icon: Workflow,
    color: 'text-magenta-400',
    metric: { label: 'Tasks Automated', value: '15/day', change: '+280%' },
    neuralNodes: 18,
    dataFlow: 'CRITICAL',
  },
  {
    id: 'google',
    name: 'Google Business Pro',
    description: 'Profile optimization',
    icon: Star,
    color: 'text-green-400',
    metric: { label: 'Profile Views', value: '3.2K', change: '+127%' },
    neuralNodes: 8,
    dataFlow: 'STABLE',
  },
  {
    id: 'social',
    name: 'Social Media Mgmt',
    description: 'Multi-platform presence',
    icon: MessageSquare,
    color: 'text-blue-400',
    metric: { label: 'Engagement Rate', value: '8.4%', change: '+65%' },
    neuralNodes: 15,
    dataFlow: 'ACTIVE',
  },
  {
    id: 'ads',
    name: 'Ad Campaigns',
    description: 'Targeted advertising',
    icon: TrendingUp,
    color: 'text-orange-400',
    metric: { label: 'ROAS', value: '4.2x', change: '+92%' },
    neuralNodes: 10,
    dataFlow: 'OPTIMAL',
  },
  {
    id: 'analytics',
    name: 'Analytics Hub',
    description: 'Data-driven insights',
    icon: BarChart3,
    color: 'text-purple-400',
    metric: { label: 'Data Points', value: '50K+', change: '+156%' },
    neuralNodes: 22,
    dataFlow: 'MAXIMUM',
  },
  {
    id: 'crm',
    name: 'Client Management',
    description: 'CRM integration',
    icon: Users,
    color: 'text-cyan-400',
    metric: { label: 'Client Retention', value: '94%', change: '+18%' },
    neuralNodes: 14,
    dataFlow: 'SECURE',
  },
  {
    id: 'scheduling',
    name: 'Smart Scheduling',
    description: 'Automated bookings',
    icon: Calendar,
    color: 'text-magenta-400',
    metric: { label: 'Bookings/Week', value: '127', change: '+210%' },
    neuralNodes: 9,
    dataFlow: 'EFFICIENT',
  },
  {
    id: 'seo',
    name: 'SEO Services',
    description: 'Search engine optimization',
    icon: Search,
    color: 'text-green-400',
    metric: { label: 'Organic Traffic', value: '+185%', change: '+185%' },
    neuralNodes: 16,
    dataFlow: 'GROWING',
  },
];

export function ServiceMatrix() {
  const [hoveredService, setHoveredService] = useState<string | null>(null);
  const [neuralPulses, setNeuralPulses] = useState<Record<string, boolean>>({});
  const [dataStreams, setDataStreams] = useState<string[]>([]);

  // Neural pulse animation
  useEffect(() => {
    const interval = setInterval(() => {
      const newPulses: Record<string, boolean> = {};
      services.forEach(service => {
        newPulses[service.id] = Math.random() > 0.7;
      });
      setNeuralPulses(newPulses);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  // Data stream animation
  useEffect(() => {
    const streams = Array.from({ length: 8 }, () =>
      Math.random().toString(36).substring(2, 15)
    );
    setDataStreams(streams);

    const interval = setInterval(() => {
      setDataStreams(prev => prev.map(() =>
        Math.random().toString(36).substring(2, 15)
      ));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const getDataFlowColor = (flow: string) => {
    switch (flow) {
      case 'CRITICAL': return 'text-red-400';
      case 'MAXIMUM': return 'text-orange-400';
      case 'ACTIVE': return 'text-cyan-400';
      case 'OPTIMAL': return 'text-green-400';
      case 'STABLE': return 'text-blue-400';
      case 'SECURE': return 'text-purple-400';
      case 'EFFICIENT': return 'text-magenta-400';
      case 'GROWING': return 'text-yellow-400';
      default: return 'text-gray-400';
    }
  };

  return (
    <section className="relative py-20 md:py-32 px-4 overflow-hidden" data-testid="service-matrix">
      {/* Neural Network Background */}
      <div className="absolute inset-0 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 1200 800">
          {/* Connection Lines */}
          {services.map((service, i) =>
            services.slice(i + 1).map((otherService, j) => (
              <motion.line
                key={`${service.id}-${otherService.id}`}
                x1={100 + (i % 3) * 300}
                y1={150 + Math.floor(i / 3) * 200}
                x2={100 + ((i + j + 1) % 3) * 300}
                y2={150 + Math.floor((i + j + 1) / 3) * 200}
                stroke="rgba(0, 255, 255, 0.2)"
                strokeWidth="1"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, delay: i * 0.1 }}
              />
            ))
          )}

          {/* Neural Nodes */}
          {services.map((service, i) => (
            <motion.circle
              key={`node-${service.id}`}
              cx={100 + (i % 3) * 300}
              cy={150 + Math.floor(i / 3) * 200}
              r="4"
              fill="#00ffff"
              opacity={neuralPulses[service.id] ? 1 : 0.3}
              animate={{
                scale: neuralPulses[service.id] ? [1, 1.5, 1] : 1,
                opacity: neuralPulses[service.id] ? [0.3, 1, 0.3] : 0.3,
              }}
              transition={{ duration: 0.5 }}
            />
          ))}
        </svg>
      </div>

      {/* Data Streams */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        {dataStreams.map((stream, i) => (
          <motion.div
            key={i}
            className="absolute text-cyan-400 font-mono text-xs opacity-20"
            style={{
              left: `${10 + i * 12}%`,
              top: '-20px',
            }}
            animate={{
              y: ['0vh', '120vh'],
            }}
            transition={{
              duration: 6 + i,
              repeat: Infinity,
              delay: i * 0.8,
              ease: 'linear',
            }}
          >
            {stream.split('').map((char, j) => (
              <motion.span
                key={j}
                animate={{ opacity: [0.2, 1, 0.2] }}
                transition={{ duration: 0.5, delay: j * 0.1 }}
              >
                {char}
              </motion.span>
            ))}
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center gap-3 cyber-card px-6 py-3 mb-6"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: "spring" }}
          >
            <Network className="w-5 h-5 text-cyan-400" />
            <span className="text-sm font-mono text-cyan-400 tracking-wider">
              NEURAL SERVICE MATRIX v3.1.4
            </span>
          </motion.div>

          <motion.h2
            className="text-5xl md:text-7xl font-mono font-bold mb-6 hologram-text"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            SERVICE MATRIX
          </motion.h2>

          <motion.p
            className="text-xl md:text-2xl text-gray-300 font-mono max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            Interconnected <span className="text-cyan-400">cybernetic solutions</span> that power your
            digital presence through <span className="text-magenta-400">neural network optimization</span>
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
                initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
                whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                onHoverStart={() => setHoveredService(service.id)}
                onHoverEnd={() => setHoveredService(null)}
                className="relative group"
                data-testid={`service-card-${service.id}`}
              >
                {/* Holographic Card */}
                <motion.div
                  className={cn(
                    'cyber-card p-8 h-full relative overflow-hidden cursor-pointer',
                    isHovered && 'scale-105'
                  )}
                  animate={{
                    boxShadow: isHovered
                      ? '0 0 50px rgba(0, 255, 255, 0.5), inset 0 0 50px rgba(0, 255, 255, 0.1)'
                      : '0 0 20px rgba(0, 255, 255, 0.2)',
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Scan Lines */}
                  <div className="scan-line absolute inset-0" />

                  {/* Neural Activity Indicator */}
                  <motion.div
                    className="absolute top-4 right-4 w-3 h-3 rounded-full"
                    style={{ backgroundColor: service.color.replace('text-', '') }}
                    animate={{
                      scale: neuralPulses[service.id] ? [1, 1.5, 1] : 1,
                      opacity: neuralPulses[service.id] ? [0.5, 1, 0.5] : 0.5,
                    }}
                    transition={{ duration: 0.5 }}
                  />

                  {/* Service Icon */}
                  <motion.div
                    className={cn(
                      'p-4 rounded-lg mb-6 relative',
                      isHovered ? 'bg-cyan-400/20' : 'bg-gray-800/50'
                    )}
                    animate={{
                      rotate: isHovered ? [0, 5, -5, 0] : 0,
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <Icon className={cn('w-8 h-8', service.color)} />
                    {isHovered && (
                      <motion.div
                        className="absolute inset-0 rounded-lg"
                        style={{
                          background: `conic-gradient(from 0deg, ${service.color.replace('text-', '')}40, transparent, ${service.color.replace('text-', '')}40)`,
                        }}
                        animate={{ rotate: 360 }}
                        transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                      />
                    )}
                  </motion.div>

                  {/* Service Info */}
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-mono font-bold mb-2 text-white">
                        {service.name}
                      </h3>
                      <p className="text-gray-400 font-mono text-sm">
                        {service.description}
                      </p>
                    </div>

                    {/* Neural Stats */}
                    <div className="space-y-2">
                      <div className="flex justify-between items-center text-xs font-mono">
                        <span className="text-cyan-400">NEURAL NODES:</span>
                        <span className="text-white">{service.neuralNodes}</span>
                      </div>
                      <div className="flex justify-between items-center text-xs font-mono">
                        <span className="text-cyan-400">DATA FLOW:</span>
                        <span className={getDataFlowColor(service.dataFlow)}>
                          {service.dataFlow}
                        </span>
                      </div>
                    </div>

                    {/* Metrics */}
                    <AnimatePresence>
                      {isHovered && (
                        <motion.div
                          initial={{ opacity: 0, height: 0, y: 20 }}
                          animate={{ opacity: 1, height: 'auto', y: 0 }}
                          exit={{ opacity: 0, height: 0, y: 20 }}
                          transition={{ duration: 0.3 }}
                          className="pt-4 border-t border-cyan-400/30"
                        >
                          <div className="space-y-3">
                            <div className="flex justify-between items-center">
                              <span className="text-sm font-mono text-cyan-400">
                                {service.metric.label}
                              </span>
                              <span className="text-sm font-mono font-bold text-white">
                                {service.metric.value}
                              </span>
                            </div>

                            <div className="space-y-1">
                              <div className="flex justify-between text-xs font-mono">
                                <span className="text-gray-400">PERFORMANCE:</span>
                                <span className="text-green-400">{service.metric.change}</span>
                              </div>
                              <div className="w-full bg-gray-800 rounded-none h-1 overflow-hidden">
                                <motion.div
                                  initial={{ width: 0 }}
                                  animate={{ width: '85%' }}
                                  transition={{ duration: 1, delay: 0.2 }}
                                  className="h-full bg-gradient-to-r from-cyan-400 to-magenta-400"
                                />
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Connection Ports */}
                  <div className="absolute bottom-4 left-4 flex gap-1">
                    {Array.from({ length: 3 }, (_, i) => (
                      <motion.div
                        key={i}
                        className="w-1 h-1 rounded-full bg-cyan-400"
                        animate={{
                          opacity: isHovered ? [0.3, 1, 0.3] : 0.3,
                          scale: isHovered ? [1, 1.2, 1] : 1,
                        }}
                        transition={{
                          duration: 1,
                          delay: i * 0.2,
                          repeat: isHovered ? Infinity : 0,
                        }}
                      />
                    ))}
                  </div>
                </motion.div>

                {/* Hover Glow Effect */}
                {isHovered && (
                  <motion.div
                    className="absolute inset-0 pointer-events-none"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div className="absolute inset-0 bg-gradient-radial from-cyan-400/20 via-transparent to-transparent rounded-lg blur-xl" />
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* System Status Footer */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
        >
          <div className="cyber-card p-6 max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-4 mb-4">
              <Cpu className="w-5 h-5 text-cyan-400" />
              <span className="text-sm font-mono text-cyan-400 tracking-wider">
                MATRIX STATUS: ALL SYSTEMS OPERATIONAL
              </span>
              <Shield className="w-5 h-5 text-green-400" />
            </div>
            <p className="text-xs font-mono text-gray-400">
              Neural connections established • Data flows optimized • Cybernetic enhancement active
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
