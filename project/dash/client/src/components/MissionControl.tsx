import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GlassCard } from './GlassCard';
import { AlertCircle, CheckCircle, Clock, X, Loader2 } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { cn } from '@/lib/utils';
import { useQuery, useMutation } from '@tanstack/react-query';
import { queryClient } from '@/lib/queryClient';
import type { Task } from '@shared/schema';

const priorityConfig = {
  high: { color: 'text-destructive', bg: 'bg-destructive/10', label: 'URGENT' },
  medium: { color: 'text-secondary', bg: 'bg-secondary/10', label: 'STANDARD' },
  low: { color: 'text-accent', bg: 'bg-accent/10', label: 'LOW' },
};

export function MissionControl() {
  const [completedTasks, setCompletedTasks] = useState<string[]>([]);

  // Fetch tasks - using demo business ID
  const { data: tasks = [], isLoading, isError, error } = useQuery<Task[]>({
    queryKey: ['/api/tasks/demo-business-1'],
  });

  const updateTaskMutation = useMutation({
    mutationFn: async ({ id, status }: { id: string; status: string }) => {
      const response = await fetch(`/api/task/${id}/status`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status }),
      });
      if (!response.ok) throw new Error('Failed to update task');
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/tasks/demo-business-1'] });
    },
    onError: (err) => {
      console.error('Failed to update task:', err);
    },
  });

  const deleteTaskMutation = useMutation({
    mutationFn: async (id: string) => {
      const response = await fetch(`/api/task/${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) throw new Error('Failed to delete task');
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/tasks/demo-business-1'] });
    },
    onError: (err) => {
      console.error('Failed to delete task:', err);
    },
  });

  const handleAcknowledge = (taskId: string) => {
    setCompletedTasks(prev => [...prev, taskId]);
    setTimeout(() => {
      updateTaskMutation.mutate({ id: taskId, status: 'completed' });
      setCompletedTasks(prev => prev.filter(id => id !== taskId));
    }, 1000);
  };

  const handleDismiss = (taskId: string) => {
    deleteTaskMutation.mutate(taskId);
  };

  const getTimeAgo = (dateString: string) => {
    const date = new Date(dateString);
    const hours = Math.floor((Date.now() - date.getTime()) / (1000 * 60 * 60));
    return `${hours}h ago`;
  };

  return (
    <GlassCard className="p-6 h-full" elevated data-testid="mission-control">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-xl font-bold mb-1">Mission Control</h3>
          <p className="text-sm text-muted-foreground">System alerts & pending tasks</p>
        </div>
        <Badge variant="secondary" className="glass" data-testid="badge-task-count">
          {isLoading ? <Loader2 className="w-3 h-3 animate-spin" /> : `${tasks.length} Active`}
        </Badge>
      </div>

      <div className="space-y-3 max-h-[500px] overflow-y-auto pr-2">
        {isLoading ? (
          <div className="flex items-center justify-center py-12">
            <Loader2 className="w-8 h-8 animate-spin text-primary" />
          </div>
        ) : isError ? (
          <div className="glass-elevated p-6 rounded-md text-center">
            <AlertCircle className="w-12 h-12 mx-auto mb-3 text-destructive" />
            <p className="text-sm font-medium mb-1">Failed to load tasks</p>
            <p className="text-xs text-muted-foreground">
              {error instanceof Error ? error.message : 'Please try again later'}
            </p>
          </div>
        ) : (
          <AnimatePresence mode="popLayout">
            {tasks.map((task) => {
            const config = priorityConfig[task.priority];
            const isCompleted = completedTasks.includes(task.id);

            return (
              <motion.div
                key={task.id}
                layout
                initial={{ opacity: 0, x: -20 }}
                animate={{ 
                  opacity: isCompleted ? 0.5 : 1, 
                  x: 0,
                  scale: isCompleted ? 0.95 : 1
                }}
                exit={{ opacity: 0, x: 20, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                data-testid={`task-${task.id}`}
              >
                <GlassCard className={cn(
                  'p-4 border-l-4',
                  config.color === 'text-destructive' ? 'border-l-destructive' :
                  config.color === 'text-secondary' ? 'border-l-secondary' :
                  'border-l-accent'
                )}>
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-2">
                        <AlertCircle className={cn('w-4 h-4 flex-shrink-0', config.color)} />
                        <span className={cn('text-xs font-bold px-2 py-0.5 rounded', config.bg, config.color)}>
                          {config.label}
                        </span>
                      </div>

                      <h4 className="font-semibold mb-1 truncate">{task.title}</h4>
                      <p className="text-sm text-muted-foreground mb-2 line-clamp-2">
                        {task.description}
                      </p>

                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {getTimeAgo(task.createdAt)}
                        </div>
                        <div>Source: {task.source}</div>
                      </div>
                    </div>

                    <div className="flex flex-col gap-2">
                      <Button
                        size="sm"
                        variant="default"
                        onClick={() => handleAcknowledge(task.id)}
                        disabled={isCompleted}
                        data-testid={`button-acknowledge-${task.id}`}
                      >
                        {isCompleted ? (
                          <CheckCircle className="w-4 h-4" />
                        ) : (
                          'Acknowledge'
                        )}
                      </Button>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => handleDismiss(task.id)}
                        data-testid={`button-dismiss-${task.id}`}
                      >
                        <X className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            );
          })}
          </AnimatePresence>
        )}

        {!isLoading && tasks.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <CheckCircle className="w-12 h-12 mx-auto mb-3 text-primary" />
            <p className="text-sm text-muted-foreground">All systems operational</p>
            <p className="text-xs text-muted-foreground mt-1">No pending tasks</p>
          </motion.div>
        )}
      </div>
    </GlassCard>
  );
}
