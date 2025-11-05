import { sql } from "drizzle-orm";
import { pgTable, text, varchar, integer, timestamp, boolean, jsonb} from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// Input validation schemas
export const loginSchema = z.object({
  username: z.string().min(1).max(100),
  password: z.string().min(1).max(255),
});

export const createMetricSchema = z.object({
  businessId: z.string().min(1).max(100),
  metricType: z.string().min(1).max(50),
  value: z.number().int().min(0),
  label: z.string().min(1).max(100),
});

export const createWorkflowSchema = z.object({
  businessId: z.string().min(1).max(100),
  name: z.string().min(1).max(200),
  description: z.string().max(1000).optional(),
  nodes: z.array(z.object({
    id: z.string(),
    type: z.string(),
    label: z.string(),
    position: z.object({ x: z.number(), y: z.number() }),
    connections: z.array(z.string()),
  })),
});

export const createTaskSchema = z.object({
  businessId: z.string().min(1).max(100),
  title: z.string().min(1).max(200),
  description: z.string().max(1000).optional(),
  priority: z.enum(['low', 'medium', 'high']).default('medium'),
});

export const updateTaskStatusSchema = z.object({
  status: z.enum(['pending', 'in-progress', 'completed', 'cancelled']),
});

export const createActivitySchema = z.object({
  businessName: z.string().min(1).max(100),
  activityType: z.enum(['lead', 'sale', 'engagement', 'automation']),
  description: z.string().min(1).max(500),
  value: z.number().int().optional(),
});

export const chatMessageSchema = z.object({
  messages: z.array(z.object({
    role: z.enum(['user', 'assistant', 'system']),
    content: z.string().min(1).max(10000),
  })).min(1).max(50),
});

export const paymentIntentSchema = z.object({
  amount: z.number().positive().max(10000), // Max $10,000
});

// Business Metrics
export const metrics = pgTable("metrics", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  businessId: varchar("business_id").notNull(),
  metricType: text("metric_type").notNull(),
  value: integer("value").notNull(),
  label: text("label").notNull(),
  timestamp: timestamp("timestamp").defaultNow().notNull(),
});

export type Metric = typeof metrics.$inferSelect;

// N8N Workflows
export const workflows = pgTable("workflows", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  businessId: varchar("business_id").notNull(),
  name: text("name").notNull(),
  description: text("description"),
  nodes: jsonb("nodes").notNull().$type<WorkflowNode[]>(),
  status: text("status").notNull().default('active'),
  lastTriggered: timestamp("last_triggered"),
  executionCount: integer("execution_count").default(0),
});

export type WorkflowNode = {
  id: string;
  type: string;
  label: string;
  position: { x: number; y: number };
  connections: string[];
};

export type Workflow = typeof workflows.$inferSelect;

// Tasks / System Alerts
export const tasks = pgTable("tasks", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  businessId: varchar("business_id").notNull(),
  title: text("title").notNull(),
  description: text("description"),
  priority: text("priority").notNull().default('medium'),
  status: text("status").notNull().default('pending'),
  source: text("source"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export type Task = typeof tasks.$inferSelect;

// Activity Feed (Live Client Pulse)
export const activities = pgTable("activities", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  businessName: text("business_name").notNull(),
  activityType: text("activity_type").notNull(),
  description: text("description").notNull(),
  value: integer("value"),
  timestamp: timestamp("timestamp").defaultNow().notNull(),
});

export type Activity = typeof activities.$inferSelect;
export type InsertActivity = typeof activities.$inferInsert;

// Users (existing schema updated)
export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
  businessId: varchar("business_id").unique(),
  businessName: text("business_name"),
});

export type User = typeof users.$inferSelect;

// Service definitions for the Service Matrix
export type Service = {
  id: string;
  name: string;
  description: string;
  icon: string;
  metricLabel: string;
  metricValue: string;
  metricChange: string;
};
