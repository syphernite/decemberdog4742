import React, { useState } from 'react';
import { GlassCard } from '@/components/GlassCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Circle, Plus, Trash2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Task {
  id: string;
  title: string;
  completed: boolean;
  priority: 'low' | 'medium' | 'high';
  dueDate?: string;
}

const initialTasks: Task[] = [
  { id: '1', title: 'Review website analytics', completed: false, priority: 'high' },
  { id: '2', title: 'Update Google Business profile', completed: true, priority: 'medium' },
  { id: '3', title: 'Schedule social media posts', completed: false, priority: 'low' },
  { id: '4', title: 'Follow up with client inquiry', completed: false, priority: 'high' },
];

export function TaskManager() {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim()) {
      const task: Task = {
        id: Date.now().toString(),
        title: newTask,
        completed: false,
        priority: 'medium',
      };
      setTasks([...tasks, task]);
      setNewTask('');
    }
  };

  const toggleTask = (id: string) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (id: string) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const priorityColors = {
    low: 'bg-green-500/20 text-green-400',
    medium: 'bg-yellow-500/20 text-yellow-400',
    high: 'bg-red-500/20 text-red-400',
  };

  return (
    <GlassCard className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold">Task Manager</h3>
        <Badge variant="outline" className="glass">
          {tasks.filter(t => !t.completed).length} pending
        </Badge>
      </div>

      <div className="flex gap-2 mb-6">
        <Input
          placeholder="Add new task..."
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && addTask()}
          className="glass"
        />
        <Button onClick={addTask} size="icon" className="glass">
          <Plus className="w-4 h-4" />
        </Button>
      </div>

      <div className="space-y-3 max-h-96 overflow-y-auto">
        <AnimatePresence>
          {tasks.map((task) => (
            <motion.div
              key={task.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="flex items-center gap-3 p-3 rounded-lg glass hover:bg-card/50 transition-colors"
            >
              <Button
                variant="ghost"
                size="icon"
                onClick={() => toggleTask(task.id)}
                className="w-6 h-6 p-0"
              >
                {task.completed ? (
                  <CheckCircle className="w-5 h-5 text-green-400" />
                ) : (
                  <Circle className="w-5 h-5 text-muted-foreground" />
                )}
              </Button>

              <span className={`flex-1 ${task.completed ? 'line-through text-muted-foreground' : ''}`}>
                {task.title}
              </span>

              <Badge className={`text-xs ${priorityColors[task.priority]}`}>
                {task.priority}
              </Badge>

              <Button
                variant="ghost"
                size="icon"
                onClick={() => deleteTask(task.id)}
                className="w-6 h-6 p-0 text-muted-foreground hover:text-red-400"
              >
                <Trash2 className="w-4 h-4" />
              </Button>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </GlassCard>
  );
}