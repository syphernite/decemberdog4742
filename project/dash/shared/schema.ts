import { sql } from "drizzle-orm";
import { pgTable, text, varchar, integer, timestamp, boolean, jsonb} from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

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
