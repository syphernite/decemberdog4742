import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GlassCard } from './GlassCard';
import { Play, Pause, Activity, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';
import { useQuery } from '@tanstack/react-query';
import type { Workflow } from '@shared/schema';

interface WorkflowNode {
  id: string;
  type: string;
  label: string;
  position: { x: number; y: number };
  connections: string[];
  status?: 'active' | 'paused' | 'error';
}

export function N8NNexus() {
  const [selectedNode, setSelectedNode] = useState<string | null>(null);
  const [dataFlowActive, setDataFlowActive] = useState(true);
  const [workflowNodes, setWorkflowNodes] = useState<WorkflowNode[]>([]);

  // Fetch workflows from backend
  const { data: workflows = [], isLoading, isError, error } = useQuery<Workflow[]>({
    queryKey: ['/api/workflows/demo-business-1'],
  });

  useEffect(() => {
    if (workflows.length > 0) {
      // Use the first workflow's nodes
      const nodes = workflows[0].nodes.map(node => ({
        ...node,
        status: 'active' as const,
      }));
      setWorkflowNodes(nodes);
    }
  }, [workflows]);

  if (isLoading) {
    return (
      <GlassCard className="p-6 h-full" elevated data-testid="n8n-nexus">
        <div className="flex items-center justify-center h-[500px]">
          <Loader2 className="w-8 h-8 animate-spin text-primary" />
        </div>
      </GlassCard>
    );
  }

  if (isError) {
    return (
      <GlassCard className="p-6 h-full" elevated data-testid="n8n-nexus">
        <div className="flex items-center justify-center h-[500px]">
          <div className="text-center">
            <AlertCircle className="w-12 h-12 mx-auto mb-3 text-destructive" />
            <p className="text-sm font-medium mb-1">Failed to load workflows</p>
            <p className="text-xs text-muted-foreground">
              {error instanceof Error ? error.message : 'Please try again later'}
            </p>
          </div>
        </div>
      </GlassCard>
    );
  }

  return (
    <GlassCard className="p-6 h-full" elevated data-testid="n8n-nexus">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-xl font-bold mb-1">N8N Nexus</h3>
          <p className="text-sm text-muted-foreground">Workflow automation circuit board</p>
        </div>
        <Button
          size="sm"
          variant="outline"
          className="glass"
          onClick={() => setDataFlowActive(!dataFlowActive)}
          data-testid="button-toggle-dataflow"
        >
          {dataFlowActive ? <Pause className="w-4 h-4 mr-2" /> : <Play className="w-4 h-4 mr-2" />}
          {dataFlowActive ? 'Pause' : 'Resume'}
        </Button>
      </div>

      <div className="relative h-[400px] overflow-hidden rounded-md bg-background/50 p-8">
        <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 0 }}>
          {workflowNodes.map(node => {
            return node.connections.map(targetId => {
              const targetNode = workflowNodes.find(n => n.id === targetId);
              if (!targetNode) return null;

              return (
                <g key={`${node.id}-${targetId}`}>
                  <line
                    x1={node.position.x + 40}
                    y1={node.position.y + 20}
                    x2={targetNode.position.x}
                    y2={targetNode.position.y + 20}
                    stroke="url(#circuit-gradient)"
                    strokeWidth="2"
                    opacity="0.5"
                  />
                  {dataFlowActive && (
                    <motion.circle
                      r="4"
                      fill="#00F5FF"
                      initial={{ 
                        cx: node.position.x + 40, 
                        cy: node.position.y + 20 
                      }}
                      animate={{ 
                        cx: targetNode.position.x, 
                        cy: targetNode.position.y + 20 
                      }}
                      transition={{ 
                        duration: 2, 
                        repeat: Infinity, 
                        ease: "linear" 
                      }}
                    >
                      <animate
                        attributeName="opacity"
                        values="0;1;1;0"
                        dur="2s"
                        repeatCount="indefinite"
                      />
                    </motion.circle>
                  )}
                </g>
              );
            });
          })}
          <defs>
            <linearGradient id="circuit-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#00F5FF" stopOpacity="0.2" />
              <stop offset="50%" stopColor="#00F5FF" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#00F5FF" stopOpacity="0.2" />
            </linearGradient>
          </defs>
        </svg>

        {workflowNodes.map(node => {
          const isSelected = selectedNode === node.id;
          const IconComponent = node.status === 'active' ? CheckCircle :
                               node.status === 'error' ? AlertCircle : Activity;

          return (
            <motion.div
              key={node.id}
              className={cn(
                'absolute cursor-pointer z-10',
                isSelected && 'ring-2 ring-primary'
              )}
              style={{
                left: node.position.x,
                top: node.position.y,
              }}
              onClick={() => setSelectedNode(isSelected ? null : node.id)}
              whileHover={{ scale: 1.05 }}
              data-testid={`workflow-node-${node.id}`}
            >
              <div className="glass-elevated rounded-md p-3 min-w-[120px]">
                <div className="flex items-center gap-2 mb-1">
                  <IconComponent className={cn(
                    'w-4 h-4',
                    node.status === 'active' ? 'text-primary' :
                    node.status === 'error' ? 'text-destructive' : 'text-muted-foreground'
                  )} />
                  <span className="text-xs font-medium truncate">{node.label}</span>
                </div>
                <div className="text-[10px] text-muted-foreground">{node.type}</div>
              </div>
            </motion.div>
          );
        })}
      </div>

      <AnimatePresence>
        {selectedNode && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-4 glass rounded-md p-4"
            data-testid="node-details"
          >
            <h4 className="text-sm font-semibold mb-2">Node Details</h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Executions (24h):</span>
                <span className="font-medium">247</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Success Rate:</span>
                <span className="font-medium text-primary">98.4%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Avg Duration:</span>
                <span className="font-medium">1.2s</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </GlassCard>
  );
}
