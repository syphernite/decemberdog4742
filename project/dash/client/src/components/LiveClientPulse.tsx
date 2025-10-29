import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GlassCard } from './GlassCard';
import { Activity as ActivityIcon, TrendingUp, Users, Zap, WifiOff } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useWebSocket } from '@/hooks/useWebSocket';
import type { Activity } from '@shared/schema';

type ActivityType = 'lead' | 'sale' | 'engagement' | 'automation';

const activityColors: Record<ActivityType, string> = {
  lead: 'text-primary',
  sale: 'text-secondary',
  engagement: 'text-accent',
  automation: 'text-chart-5',
};

const activityIcons: Record<ActivityType, any> = {
  lead: Users,
  sale: TrendingUp,
  engagement: ActivityIcon,
  automation: Zap,
};

export function LiveClientPulse() {
  const [activities, setActivities] = useState<Activity[]>([]);
  const { data, isConnected, error } = useWebSocket('/ws');

  useEffect(() => {
    if (!data) return;

    if (data.type === 'initial' && data.activities) {
      setActivities(data.activities);
    } else if (data.type === 'activity' && data.activity) {
      setActivities(prev => [data.activity, ...prev.slice(0, 4)]);
    }
  }, [data]);

  return (
    <section className="py-20 md:py-32 px-4 bg-gradient-to-b from-background to-muted/20" data-testid="live-client-pulse">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 glass rounded-full px-6 py-3 mb-6"
          >
            {isConnected ? (
              <>
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
                <span className="text-sm font-medium">Real-Time Network Activity</span>
              </>
            ) : (
              <>
                <WifiOff className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm font-medium text-muted-foreground">Connecting...</span>
              </>
            )}
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            The Network is <span className="text-primary">Alive</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-muted-foreground"
          >
            Live feed from businesses powered by Built4You
          </motion.p>
        </div>

        <div className="space-y-3">
          <AnimatePresence mode="popLayout">
            {activities.map((activity) => {
              const Icon = activityIcons[activity.activityType as ActivityType];
              const colorClass = activityColors[activity.activityType as ActivityType];

              return (
                <motion.div
                  key={activity.id}
                  initial={{ opacity: 0, x: -50, scale: 0.9 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: 50, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  layout
                  data-testid={`activity-${activity.id}`}
                >
                  <GlassCard className="p-4">
                    <div className="flex items-center gap-4">
                      <div className={cn('p-3 rounded-md glass-elevated', colorClass)}>
                        <Icon className="w-5 h-5" />
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-baseline gap-2 flex-wrap">
                          <span className="font-semibold truncate">{activity.businessName}</span>
                          <span className="text-muted-foreground">just</span>
                          <span className="text-foreground">{activity.description}</span>
                        </div>
                        <div className="text-xs text-muted-foreground mt-1">
                          {new Date(activity.timestamp).toLocaleTimeString()}
                        </div>
                      </div>

                      <div className={cn('px-3 py-1 rounded-full text-xs font-medium glass-elevated', colorClass)}>
                        {activity.activityType}
                      </div>
                    </div>
                  </GlassCard>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-muted-foreground text-sm">
            Showing live activity from <span className="text-primary font-semibold">247 active businesses</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
