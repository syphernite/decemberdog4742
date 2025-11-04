import { motion } from 'framer-motion';
import { GlassCard } from '@/components/GlassCard';
import { CentralHologram } from '@/components/CentralHologram';
import { N8NNexus } from '@/components/N8NNexus';
import { OrbitalMetrics } from '@/components/OrbitalMetrics';
import { MissionControl } from '@/components/MissionControl';
import { ClientManagement } from '@/components/ClientManagement';
import { AnalyticsHub } from '@/components/AnalyticsHub';
import { TaskManager } from '@/components/TaskManager';
import { ThreeScene } from '@/components/ThreeScene';
import { LogOut, Settings, Bell } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useNavigate } from 'react-router-dom';

export default function DashboardPage() {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="min-h-screen p-6"
      data-testid="page-dashboard"
    >
      {/* Command Center Header */}
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, type: "spring" }}
        className="mb-6"
      >
        <GlassCard className="p-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold mb-1">Command Center</h1>
              <p className="text-sm text-muted-foreground">Business Operations Dashboard</p>
            </div>
            <div className="flex items-center gap-3">
              <Button
                variant="ghost"
                size="icon"
                className="glass relative"
                data-testid="button-notifications"
              >
                <Bell className="w-5 h-5" />
                <Badge className="absolute -top-1 -right-1 h-5 w-5 p-0 flex items-center justify-center text-xs">
                  3
                </Badge>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="glass"
                data-testid="button-settings"
              >
                <Settings className="w-5 h-5" />
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="glass"
                onClick={() => navigate('/')}
                data-testid="button-logout"
              >
                <LogOut className="w-4 h-4 mr-2" />
                Exit
              </Button>
            </div>
          </div>
        </GlassCard>
      </motion.div>

      {/* Main Dashboard Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column - Mission Control */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4, type: "spring" }}
          className="lg:col-span-1"
        >
          <MissionControl />
        </motion.div>

        {/* Center Column - Central Hologram & N8N Nexus */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, type: "spring" }}
          className="lg:col-span-1 space-y-6"
        >
          <GlassCard className="p-6" elevated>
            <h3 className="text-xl font-bold mb-4">3D Neural Network</h3>
            <ThreeScene />
          </GlassCard>

          <N8NNexus />
        </motion.div>

        {/* Right Column - Orbital Metrics */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.6, type: "spring" }}
          className="lg:col-span-1"
        >
          <GlassCard className="p-6" elevated>
            <h3 className="text-xl font-bold mb-6">Key Metrics</h3>
            <OrbitalMetrics />
          </GlassCard>

          {/* Additional Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-6"
          >
            <GlassCard className="p-6">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">System Status</span>
                  <Badge variant="default" className="glass">
                    All Systems Operational
                  </Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Uptime</span>
                  <span className="text-sm font-semibold">99.98%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Active Workflows</span>
                  <span className="text-sm font-semibold">12</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Data Processed Today</span>
                  <span className="text-sm font-semibold">2.4GB</span>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        </motion.div>
      </div>

      {/* Additional Sections */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className="mt-8 space-y-6"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <ClientManagement />
          <TaskManager />
        </div>
        <AnalyticsHub />
      </motion.div>
    </motion.div>
  );
}
