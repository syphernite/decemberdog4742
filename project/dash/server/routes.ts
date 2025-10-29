import type { Express } from "express";
import { createServer, type Server } from "http";
import { WebSocketServer, WebSocket } from "ws";
import { storage } from "./storage";
import type { InsertActivity } from "@shared/schema";
import OpenAI from "openai";
import Stripe from "stripe";

// Initialize OpenAI with Replit AI Integrations (following javascript_openai_ai_integrations blueprint)
const openai = new OpenAI({
  apiKey: process.env.AI_INTEGRATIONS_OPENAI_API_KEY,
  baseURL: process.env.AI_INTEGRATIONS_OPENAI_BASE_URL,
});

// Initialize Stripe (following javascript_stripe blueprint)
if (!process.env.STRIPE_SECRET_KEY) {
  console.warn('STRIPE_SECRET_KEY not set - payment features will not work');
}
const stripe = process.env.STRIPE_SECRET_KEY ? new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2025-09-30.clover",
}) : null;

// Mock data generator for activities
const generateMockActivity = (): InsertActivity => {
  const businesses = ['Cafe Luna', 'TechStart Inc', 'Green Gardens', 'FastFit Gym', 'Artisan Bakery', 'Urban Spa'];
  const activityTypes = ['lead', 'sale', 'engagement', 'automation'] as const;
  const templates = {
    automation: ['automated {n} lead follow-ups', 'processed {n} customer inquiries', 'scheduled {n} appointments'],
    lead: ['captured {n} new leads', 'qualified {n} prospects', 'converted {n} inquiries'],
    sale: ['closed {n} deals', 'generated ${n}K revenue', 'completed {n} transactions'],
    engagement: ['Google Profile impressions +{n}%', 'social engagement +{n}%', 'website visits +{n}%'],
  };

  const activityType = activityTypes[Math.floor(Math.random() * activityTypes.length)];
  const template = templates[activityType][Math.floor(Math.random() * templates[activityType].length)];
  const value = Math.floor(Math.random() * 50) + 5;

  return {
    businessName: businesses[Math.floor(Math.random() * businesses.length)],
    activityType,
    description: template.replace('{n}', value.toString()),
    value,
  };
};

export async function registerRoutes(app: Express): Promise<Server> {
  const httpServer = createServer(app);

  // WebSocket server setup (following javascript_websocket blueprint)
  const wss = new WebSocketServer({ server: httpServer, path: '/ws' });

  // Store connected clients
  const clients = new Set<WebSocket>();

  wss.on('connection', (ws: WebSocket) => {
    console.log('WebSocket client connected');
    clients.add(ws);

    // Send initial activities
    storage.getActivities(10).then(activities => {
      if (ws.readyState === WebSocket.OPEN) {
        ws.send(JSON.stringify({ type: 'initial', activities }));
      }
    });

    ws.on('close', () => {
      console.log('WebSocket client disconnected');
      clients.delete(ws);
    });

    ws.on('error', (error) => {
      console.error('WebSocket error:', error);
      clients.delete(ws);
    });
  });

  // Broadcast new activity to all connected clients
  const broadcastActivity = (activity: any) => {
    const message = JSON.stringify({ type: 'activity', activity });
    clients.forEach(client => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(message);
      }
    });
  };

  // Generate mock activities periodically
  setInterval(async () => {
    const activity = await storage.createActivity(generateMockActivity());
    broadcastActivity(activity);
  }, 5000);

  // API Routes

  // Authentication
  app.post('/api/auth/login', async (req, res) => {
    try {
      const { username, password } = req.body;
      
      if (!username || !password) {
        return res.status(400).json({ error: 'Username and password required' });
      }

      const user = await storage.getUserByUsername(username);
      
      if (!user || user.password !== password) {
        return res.status(401).json({ error: 'Invalid credentials' });
      }

      // In a real app, you'd set up a session or JWT here
      const { password: _, ...userWithoutPassword } = user;
      res.json({ user: userWithoutPassword });
    } catch (error) {
      console.error('Login error:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });

  // Metrics
  app.get('/api/metrics/:businessId', async (req, res) => {
    try {
      const { businessId } = req.params;
      const metrics = await storage.getMetrics(businessId);
      res.json(metrics);
    } catch (error) {
      console.error('Get metrics error:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });

  app.post('/api/metrics', async (req, res) => {
    try {
      const metric = await storage.createMetric(req.body);
      res.json(metric);
    } catch (error) {
      console.error('Create metric error:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });

  // Workflows
  app.get('/api/workflows/:businessId', async (req, res) => {
    try {
      const { businessId } = req.params;
      const workflows = await storage.getWorkflows(businessId);
      res.json(workflows);
    } catch (error) {
      console.error('Get workflows error:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });

  app.get('/api/workflow/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const workflow = await storage.getWorkflow(id);
      
      if (!workflow) {
        return res.status(404).json({ error: 'Workflow not found' });
      }
      
      res.json(workflow);
    } catch (error) {
      console.error('Get workflow error:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });

  app.post('/api/workflows', async (req, res) => {
    try {
      const workflow = await storage.createWorkflow(req.body);
      res.json(workflow);
    } catch (error) {
      console.error('Create workflow error:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });

  app.patch('/api/workflow/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const workflow = await storage.updateWorkflow(id, req.body);
      
      if (!workflow) {
        return res.status(404).json({ error: 'Workflow not found' });
      }
      
      res.json(workflow);
    } catch (error) {
      console.error('Update workflow error:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });

  // Tasks
  app.get('/api/tasks/:businessId', async (req, res) => {
    try {
      const { businessId } = req.params;
      const tasks = await storage.getTasks(businessId);
      res.json(tasks);
    } catch (error) {
      console.error('Get tasks error:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });

  app.post('/api/tasks', async (req, res) => {
    try {
      const task = await storage.createTask(req.body);
      res.json(task);
    } catch (error) {
      console.error('Create task error:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });

  app.patch('/api/task/:id/status', async (req, res) => {
    try {
      const { id } = req.params;
      const { status } = req.body;
      
      const task = await storage.updateTaskStatus(id, status);
      
      if (!task) {
        return res.status(404).json({ error: 'Task not found' });
      }
      
      res.json(task);
    } catch (error) {
      console.error('Update task status error:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });

  app.delete('/api/task/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const deleted = await storage.deleteTask(id);
      
      if (!deleted) {
        return res.status(404).json({ error: 'Task not found' });
      }
      
      res.json({ success: true });
    } catch (error) {
      console.error('Delete task error:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });

  // Activities
  app.get('/api/activities', async (req, res) => {
    try {
      const limit = req.query.limit ? parseInt(req.query.limit as string) : 10;
      const activities = await storage.getActivities(limit);
      res.json(activities);
    } catch (error) {
      console.error('Get activities error:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });

  app.post('/api/activities', async (req, res) => {
    try {
      const activity = await storage.createActivity(req.body);
      broadcastActivity(activity);
      res.json(activity);
    } catch (error) {
      console.error('Create activity error:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });

  // AI Chat endpoint (following javascript_openai_ai_integrations blueprint)
  app.post('/api/chat', async (req, res) => {
    try {
      const { messages } = req.body;

      if (!messages || !Array.isArray(messages)) {
        return res.status(400).json({ error: 'Messages array required' });
      }

      const completion = await openai.chat.completions.create({
        model: "gpt-5",
        messages: [
          {
            role: "system",
            content: "You are a helpful AI assistant for Built4You, a digital services company. Help users with questions about web development, automation, SEO, social media management, and our other services. Be friendly, professional, and concise."
          },
          ...messages
        ],
      });

      const message = completion.choices[0]?.message?.content || "I'm sorry, I couldn't generate a response.";
      res.json({ message });
    } catch (error) {
      console.error('Chat error:', error);
      res.status(500).json({ error: 'Failed to process chat request' });
    }
  });

  // Stripe payment routes (following javascript_stripe blueprint)
  app.post("/api/create-payment-intent", async (req, res) => {
    if (!stripe) {
      return res.status(503).json({ error: 'Payment processing not configured' });
    }

    try {
      const { amount } = req.body;
      
      if (!amount || amount <= 0) {
        return res.status(400).json({ error: 'Valid amount required' });
      }

      const paymentIntent = await stripe.paymentIntents.create({
        amount: Math.round(amount * 100),
        currency: "usd",
        automatic_payment_methods: {
          enabled: true,
        },
      });

      res.json({ clientSecret: paymentIntent.client_secret });
    } catch (error: any) {
      console.error('Payment intent error:', error);
      res.status(500).json({ error: "Error creating payment intent: " + error.message });
    }
  });

  return httpServer;
}
