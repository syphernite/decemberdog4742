import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GlassCard } from './GlassCard';
import { TrendingUp, Users, Globe, Zap, Loader2, AlertCircle } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useQuery } from '@tanstack/react-query';
import type { Metric as BackendMetric } from '@shared/schema';

interface DisplayMetric {
  id: string;
  label: string;
  value: string;
  change: string;
  icon: any;
  color: string;
  data: number[];
}

const metricIcons: Record<string, any> = {
  'website-traffic': Globe,
  'conversion-rate': TrendingUp,
  'social-engagement': Users,
  'tasks-automated': Zap,
};

const metricColors: Record<string, string> = {
  'website-traffic': 'text-primary',
  'conversion-rate': 'text-secondary',
  'social-engagement': 'text-accent',
  'tasks-automated': 'text-chart-5',
};

export function OrbitalMetrics() {
  const [hoveredMetric, setHoveredMetric] = useState<string | null>(null);

  const { data: backendMetrics = [], isLoading, isError, error } = useQuery<BackendMetric[]>({
    queryKey: ['/api/metrics/demo-business-1'],
    refetchInterval: 10000, // Refetch every 10 seconds for real-time updates
  });

  const displayMetrics: DisplayMetric[] = backendMetrics.map(metric => ({
    id: metric.metricType,
    label: metric.label,
    value: metric.value,
    change: metric.change,
    icon: metricIcons[metric.metricType] || Globe,
    color: metricColors[metric.metricType] || 'text-primary',
    data: metric.history,
  }));

  if (isLoading) {
    return (
      <div className="grid grid-cols-2 gap-4" data-testid="orbital-metrics">
        {[...Array(4)].map((_, i) => (
          <GlassCard key={i} className="p-4 h-[140px] flex items-center justify-center">
            <Loader2 className="w-6 h-6 animate-spin text-primary" />
          </GlassCard>
        ))}
      </div>
    );
  }

  if (isError) {
    return (
      <div className="grid grid-cols-2 gap-4" data-testid="orbital-metrics">
        <GlassCard className="col-span-2 p-6 text-center">
          <AlertCircle className="w-10 h-10 mx-auto mb-2 text-destructive" />
          <p className="text-sm font-medium mb-1">Failed to load metrics</p>
          <p className="text-xs text-muted-foreground">
            {error instanceof Error ? error.message : 'Please try again later'}
          </p>
        </GlassCard>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-4" data-testid="orbital-metrics">
      {displayMetrics.map((metric, index) => {
        const Icon = metric.icon;
        const isHovered = hoveredMetric === metric.id;

        return (
          <motion.div
            key={metric.id}
            initial={{ opacity: 0, scale: 0.8, rotate: -180 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ delay: index * 0.1, type: "spring" }}
            onHoverStart={() => setHoveredMetric(metric.id)}
            onHoverEnd={() => setHoveredMetric(null)}
            data-testid={`metric-card-${metric.id}`}
          >
            <GlassCard
              className={cn(
                'p-4 transition-all duration-300',
                isHovered && 'glow-cyan scale-105'
              )}
              hoverable
            >
              <div className="flex items-start justify-between mb-3">
                <div className={cn('p-2 rounded-md glass-elevated', metric.color)}>
                  <Icon className="w-4 h-4" />
                </div>
                <div className={cn('px-2 py-1 rounded-full text-xs font-medium glass', metric.color)}>
                  {metric.change}
                </div>
              </div>

              <div className="space-y-1">
                <p className="text-xs text-muted-foreground">{metric.label}</p>
                <p className="text-2xl font-bold">{metric.value}</p>
              </div>

              <AnimatePresence>
                {isHovered && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-4 pt-3 border-t border-border/50"
                  >
                    <div className="flex items-end justify-between gap-1 h-16">
                      {metric.data.map((value, i) => (
                        <motion.div
                          key={i}
                          className={cn('flex-1 rounded-t-sm bg-gradient-to-t', 
                            metric.color === 'text-primary' ? 'from-primary/20 to-primary' :
                            metric.color === 'text-secondary' ? 'from-secondary/20 to-secondary' :
                            metric.color === 'text-accent' ? 'from-accent/20 to-accent' :
                            'from-chart-5/20 to-chart-5'
                          )}
                          initial={{ height: 0 }}
                          animate={{ height: `${(value / Math.max(...metric.data)) * 100}%` }}
                          transition={{ delay: i * 0.05 }}
                        />
                      ))}
                    </div>
                    <div className="flex justify-between text-[10px] text-muted-foreground mt-1">
                      <span>7d ago</span>
                      <span>Today</span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </GlassCard>
          </motion.div>
        );
      })}
    </div>
  );
}
