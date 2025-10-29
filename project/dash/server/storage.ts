import { 
  type User, 
  type InsertUser,
  type Metric,
  type InsertMetric,
  type Workflow,
  type InsertWorkflow,
  type Task,
  type InsertTask,
  type Activity,
  type InsertActivity,
} from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  // User methods
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Metric methods
  getMetrics(businessId: string): Promise<Metric[]>;
  getMetricsByType(businessId: string, metricType: string): Promise<Metric[]>;
  createMetric(metric: InsertMetric): Promise<Metric>;
  
  // Workflow methods
  getWorkflows(businessId: string): Promise<Workflow[]>;
  getWorkflow(id: string): Promise<Workflow | undefined>;
  createWorkflow(workflow: InsertWorkflow): Promise<Workflow>;
  updateWorkflow(id: string, updates: Partial<Workflow>): Promise<Workflow | undefined>;
  
  // Task methods
  getTasks(businessId: string): Promise<Task[]>;
  getTask(id: string): Promise<Task | undefined>;
  createTask(task: InsertTask): Promise<Task>;
  updateTaskStatus(id: string, status: string): Promise<Task | undefined>;
  deleteTask(id: string): Promise<boolean>;
  
  // Activity methods
  getActivities(limit?: number): Promise<Activity[]>;
  createActivity(activity: InsertActivity): Promise<Activity>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private metrics: Map<string, Metric>;
  private workflows: Map<string, Workflow>;
  private tasks: Map<string, Task>;
  private activities: Map<string, Activity>;

  constructor() {
    this.users = new Map();
    this.metrics = new Map();
    this.workflows = new Map();
    this.tasks = new Map();
    this.activities = new Map();
    
    // Initialize with demo data
    this.seedDemoData();
  }

  private seedDemoData() {
    // Create demo user
    const demoUser: User = {
      id: randomUUID(),
      username: "demo",
      password: "demo",
      businessId: "demo-business-1",
      businessName: "Demo Business",
    };
    this.users.set(demoUser.id, demoUser);

    // Create demo workflow
    const demoWorkflow: Workflow = {
      id: randomUUID(),
      businessId: "demo-business-1",
      name: "Lead Processing Automation",
      description: "Automated lead capture and follow-up system",
      status: "active",
      executionCount: 247,
      lastTriggered: new Date(),
      nodes: [
        { id: '1', type: 'trigger', label: 'New Form Submission', position: { x: 50, y: 100 }, connections: ['2', '3'] },
        { id: '2', type: 'action', label: 'Add to Google Sheet', position: { x: 200, y: 60 }, connections: ['4'] },
        { id: '3', type: 'action', label: 'Send to CRM', position: { x: 200, y: 140 }, connections: ['4'] },
        { id: '4', type: 'action', label: 'Send Welcome Email', position: { x: 350, y: 100 }, connections: ['5'] },
        { id: '5', type: 'complete', label: 'Log Activity', position: { x: 500, y: 100 }, connections: [] },
      ],
    };
    this.workflows.set(demoWorkflow.id, demoWorkflow);

    // Create demo tasks
    const demoTasks: Task[] = [
      {
        id: randomUUID(),
        businessId: "demo-business-1",
        title: "Approve Ad Copy",
        description: "Review and approve new campaign creative for Facebook Ads",
        priority: "high",
        status: "pending",
        source: "Marketing Automation",
        createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000),
      },
      {
        id: randomUUID(),
        businessId: "demo-business-1",
        title: "Review Lead Qualification",
        description: "5 new leads require manual qualification",
        priority: "medium",
        status: "pending",
        source: "CRM Integration",
        createdAt: new Date(Date.now() - 4 * 60 * 60 * 1000),
      },
    ];
    demoTasks.forEach(task => this.tasks.set(task.id, task));
  }

  // User methods
  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { 
      ...insertUser, 
      id,
      businessId: randomUUID(),
      businessName: `${insertUser.username}'s Business`,
    };
    this.users.set(id, user);
    return user;
  }

  // Metric methods
  async getMetrics(businessId: string): Promise<Metric[]> {
    return Array.from(this.metrics.values()).filter(m => m.businessId === businessId);
  }

  async getMetricsByType(businessId: string, metricType: string): Promise<Metric[]> {
    return Array.from(this.metrics.values()).filter(
      m => m.businessId === businessId && m.metricType === metricType
    );
  }

  async createMetric(metric: InsertMetric): Promise<Metric> {
    const id = randomUUID();
    const newMetric: Metric = { ...metric, id, timestamp: new Date() };
    this.metrics.set(id, newMetric);
    return newMetric;
  }

  // Workflow methods
  async getWorkflows(businessId: string): Promise<Workflow[]> {
    return Array.from(this.workflows.values()).filter(w => w.businessId === businessId);
  }

  async getWorkflow(id: string): Promise<Workflow | undefined> {
    return this.workflows.get(id);
  }

  async createWorkflow(workflow: InsertWorkflow): Promise<Workflow> {
    const id = randomUUID();
    const newWorkflow: Workflow = { 
      ...workflow, 
      id, 
      lastTriggered: null,
      executionCount: 0,
    };
    this.workflows.set(id, newWorkflow);
    return newWorkflow;
  }

  async updateWorkflow(id: string, updates: Partial<Workflow>): Promise<Workflow | undefined> {
    const workflow = this.workflows.get(id);
    if (!workflow) return undefined;
    
    const updated = { ...workflow, ...updates };
    this.workflows.set(id, updated);
    return updated;
  }

  // Task methods
  async getTasks(businessId: string): Promise<Task[]> {
    return Array.from(this.tasks.values()).filter(t => t.businessId === businessId);
  }

  async getTask(id: string): Promise<Task | undefined> {
    return this.tasks.get(id);
  }

  async createTask(task: InsertTask): Promise<Task> {
    const id = randomUUID();
    const newTask: Task = { ...task, id, createdAt: new Date() };
    this.tasks.set(id, newTask);
    return newTask;
  }

  async updateTaskStatus(id: string, status: string): Promise<Task | undefined> {
    const task = this.tasks.get(id);
    if (!task) return undefined;
    
    const updated = { ...task, status };
    this.tasks.set(id, updated);
    return updated;
  }

  async deleteTask(id: string): Promise<boolean> {
    return this.tasks.delete(id);
  }

  // Activity methods
  async getActivities(limit: number = 10): Promise<Activity[]> {
    const all = Array.from(this.activities.values());
    return all
      .sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime())
      .slice(0, limit);
  }

  async createActivity(activity: InsertActivity): Promise<Activity> {
    const id = randomUUID();
    const newActivity: Activity = { ...activity, id, timestamp: new Date() };
    this.activities.set(id, newActivity);
    
    // Auto-cleanup old activities (keep only last 50)
    const all = Array.from(this.activities.entries());
    if (all.length > 50) {
      const sorted = all.sort((a, b) => b[1].timestamp.getTime() - a[1].timestamp.getTime());
      sorted.slice(50).forEach(([id]) => this.activities.delete(id));
    }
    
    return newActivity;
  }
}

export const storage = new MemStorage();
