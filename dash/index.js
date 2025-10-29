// server/index.ts
import express2 from "express";

// server/routes.ts
import { createServer } from "http";
import { WebSocketServer, WebSocket } from "ws";

// server/storage.ts
import { randomUUID } from "crypto";
var MemStorage = class {
  users;
  metrics;
  workflows;
  tasks;
  activities;
  constructor() {
    this.users = /* @__PURE__ */ new Map();
    this.metrics = /* @__PURE__ */ new Map();
    this.workflows = /* @__PURE__ */ new Map();
    this.tasks = /* @__PURE__ */ new Map();
    this.activities = /* @__PURE__ */ new Map();
    this.seedDemoData();
  }
  seedDemoData() {
    const demoUser = {
      id: randomUUID(),
      username: "demo",
      password: "demo",
      businessId: "demo-business-1",
      businessName: "Demo Business"
    };
    this.users.set(demoUser.id, demoUser);
    const demoWorkflow = {
      id: randomUUID(),
      businessId: "demo-business-1",
      name: "Lead Processing Automation",
      description: "Automated lead capture and follow-up system",
      status: "active",
      executionCount: 247,
      lastTriggered: /* @__PURE__ */ new Date(),
      nodes: [
        { id: "1", type: "trigger", label: "New Form Submission", position: { x: 50, y: 100 }, connections: ["2", "3"] },
        { id: "2", type: "action", label: "Add to Google Sheet", position: { x: 200, y: 60 }, connections: ["4"] },
        { id: "3", type: "action", label: "Send to CRM", position: { x: 200, y: 140 }, connections: ["4"] },
        { id: "4", type: "action", label: "Send Welcome Email", position: { x: 350, y: 100 }, connections: ["5"] },
        { id: "5", type: "complete", label: "Log Activity", position: { x: 500, y: 100 }, connections: [] }
      ]
    };
    this.workflows.set(demoWorkflow.id, demoWorkflow);
    const demoTasks = [
      {
        id: randomUUID(),
        businessId: "demo-business-1",
        title: "Approve Ad Copy",
        description: "Review and approve new campaign creative for Facebook Ads",
        priority: "high",
        status: "pending",
        source: "Marketing Automation",
        createdAt: new Date(Date.now() - 2 * 60 * 60 * 1e3)
      },
      {
        id: randomUUID(),
        businessId: "demo-business-1",
        title: "Review Lead Qualification",
        description: "5 new leads require manual qualification",
        priority: "medium",
        status: "pending",
        source: "CRM Integration",
        createdAt: new Date(Date.now() - 4 * 60 * 60 * 1e3)
      }
    ];
    demoTasks.forEach((task) => this.tasks.set(task.id, task));
  }
  // User methods
  async getUser(id) {
    return this.users.get(id);
  }
  async getUserByUsername(username) {
    return Array.from(this.users.values()).find(
      (user) => user.username === username
    );
  }
  async createUser(insertUser) {
    const id = randomUUID();
    const user = {
      ...insertUser,
      id,
      businessId: randomUUID(),
      businessName: `${insertUser.username}'s Business`
    };
    this.users.set(id, user);
    return user;
  }
  // Metric methods
  async getMetrics(businessId) {
    return Array.from(this.metrics.values()).filter((m) => m.businessId === businessId);
  }
  async getMetricsByType(businessId, metricType) {
    return Array.from(this.metrics.values()).filter(
      (m) => m.businessId === businessId && m.metricType === metricType
    );
  }
  async createMetric(metric) {
    const id = randomUUID();
    const newMetric = { ...metric, id, timestamp: /* @__PURE__ */ new Date() };
    this.metrics.set(id, newMetric);
    return newMetric;
  }
  // Workflow methods
  async getWorkflows(businessId) {
    return Array.from(this.workflows.values()).filter((w) => w.businessId === businessId);
  }
  async getWorkflow(id) {
    return this.workflows.get(id);
  }
  async createWorkflow(workflow) {
    const id = randomUUID();
    const newWorkflow = {
      ...workflow,
      id,
      lastTriggered: null,
      executionCount: 0
    };
    this.workflows.set(id, newWorkflow);
    return newWorkflow;
  }
  async updateWorkflow(id, updates) {
    const workflow = this.workflows.get(id);
    if (!workflow) return void 0;
    const updated = { ...workflow, ...updates };
    this.workflows.set(id, updated);
    return updated;
  }
  // Task methods
  async getTasks(businessId) {
    return Array.from(this.tasks.values()).filter((t) => t.businessId === businessId);
  }
  async getTask(id) {
    return this.tasks.get(id);
  }
  async createTask(task) {
    const id = randomUUID();
    const newTask = { ...task, id, createdAt: /* @__PURE__ */ new Date() };
    this.tasks.set(id, newTask);
    return newTask;
  }
  async updateTaskStatus(id, status) {
    const task = this.tasks.get(id);
    if (!task) return void 0;
    const updated = { ...task, status };
    this.tasks.set(id, updated);
    return updated;
  }
  async deleteTask(id) {
    return this.tasks.delete(id);
  }
  // Activity methods
  async getActivities(limit = 10) {
    const all = Array.from(this.activities.values());
    return all.sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime()).slice(0, limit);
  }
  async createActivity(activity) {
    const id = randomUUID();
    const newActivity = { ...activity, id, timestamp: /* @__PURE__ */ new Date() };
    this.activities.set(id, newActivity);
    const all = Array.from(this.activities.entries());
    if (all.length > 50) {
      const sorted = all.sort((a, b) => b[1].timestamp.getTime() - a[1].timestamp.getTime());
      sorted.slice(50).forEach(([id2]) => this.activities.delete(id2));
    }
    return newActivity;
  }
};
var storage = new MemStorage();

// server/routes.ts
import OpenAI from "openai";
import Stripe from "stripe";
var openai = new OpenAI({
  apiKey: process.env.AI_INTEGRATIONS_OPENAI_API_KEY,
  baseURL: process.env.AI_INTEGRATIONS_OPENAI_BASE_URL
});
if (!process.env.STRIPE_SECRET_KEY) {
  console.warn("STRIPE_SECRET_KEY not set - payment features will not work");
}
var stripe = process.env.STRIPE_SECRET_KEY ? new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2025-09-30.clover"
}) : null;
var generateMockActivity = () => {
  const businesses = ["Cafe Luna", "TechStart Inc", "Green Gardens", "FastFit Gym", "Artisan Bakery", "Urban Spa"];
  const activityTypes = ["lead", "sale", "engagement", "automation"];
  const templates = {
    automation: ["automated {n} lead follow-ups", "processed {n} customer inquiries", "scheduled {n} appointments"],
    lead: ["captured {n} new leads", "qualified {n} prospects", "converted {n} inquiries"],
    sale: ["closed {n} deals", "generated ${n}K revenue", "completed {n} transactions"],
    engagement: ["Google Profile impressions +{n}%", "social engagement +{n}%", "website visits +{n}%"]
  };
  const activityType = activityTypes[Math.floor(Math.random() * activityTypes.length)];
  const template = templates[activityType][Math.floor(Math.random() * templates[activityType].length)];
  const value = Math.floor(Math.random() * 50) + 5;
  return {
    businessName: businesses[Math.floor(Math.random() * businesses.length)],
    activityType,
    description: template.replace("{n}", value.toString()),
    value
  };
};
async function registerRoutes(app2) {
  const httpServer = createServer(app2);
  const wss = new WebSocketServer({ server: httpServer, path: "/ws" });
  const clients = /* @__PURE__ */ new Set();
  wss.on("connection", (ws) => {
    console.log("WebSocket client connected");
    clients.add(ws);
    storage.getActivities(10).then((activities) => {
      if (ws.readyState === WebSocket.OPEN) {
        ws.send(JSON.stringify({ type: "initial", activities }));
      }
    });
    ws.on("close", () => {
      console.log("WebSocket client disconnected");
      clients.delete(ws);
    });
    ws.on("error", (error) => {
      console.error("WebSocket error:", error);
      clients.delete(ws);
    });
  });
  const broadcastActivity = (activity) => {
    const message = JSON.stringify({ type: "activity", activity });
    clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(message);
      }
    });
  };
  setInterval(async () => {
    const activity = await storage.createActivity(generateMockActivity());
    broadcastActivity(activity);
  }, 5e3);
  app2.post("/api/auth/login", async (req, res) => {
    try {
      const { username, password } = req.body;
      if (!username || !password) {
        return res.status(400).json({ error: "Username and password required" });
      }
      const user = await storage.getUserByUsername(username);
      if (!user || user.password !== password) {
        return res.status(401).json({ error: "Invalid credentials" });
      }
      const { password: _, ...userWithoutPassword } = user;
      res.json({ user: userWithoutPassword });
    } catch (error) {
      console.error("Login error:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  });
  app2.get("/api/metrics/:businessId", async (req, res) => {
    try {
      const { businessId } = req.params;
      const metrics = await storage.getMetrics(businessId);
      res.json(metrics);
    } catch (error) {
      console.error("Get metrics error:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  });
  app2.post("/api/metrics", async (req, res) => {
    try {
      const metric = await storage.createMetric(req.body);
      res.json(metric);
    } catch (error) {
      console.error("Create metric error:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  });
  app2.get("/api/workflows/:businessId", async (req, res) => {
    try {
      const { businessId } = req.params;
      const workflows = await storage.getWorkflows(businessId);
      res.json(workflows);
    } catch (error) {
      console.error("Get workflows error:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  });
  app2.get("/api/workflow/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const workflow = await storage.getWorkflow(id);
      if (!workflow) {
        return res.status(404).json({ error: "Workflow not found" });
      }
      res.json(workflow);
    } catch (error) {
      console.error("Get workflow error:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  });
  app2.post("/api/workflows", async (req, res) => {
    try {
      const workflow = await storage.createWorkflow(req.body);
      res.json(workflow);
    } catch (error) {
      console.error("Create workflow error:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  });
  app2.patch("/api/workflow/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const workflow = await storage.updateWorkflow(id, req.body);
      if (!workflow) {
        return res.status(404).json({ error: "Workflow not found" });
      }
      res.json(workflow);
    } catch (error) {
      console.error("Update workflow error:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  });
  app2.get("/api/tasks/:businessId", async (req, res) => {
    try {
      const { businessId } = req.params;
      const tasks = await storage.getTasks(businessId);
      res.json(tasks);
    } catch (error) {
      console.error("Get tasks error:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  });
  app2.post("/api/tasks", async (req, res) => {
    try {
      const task = await storage.createTask(req.body);
      res.json(task);
    } catch (error) {
      console.error("Create task error:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  });
  app2.patch("/api/task/:id/status", async (req, res) => {
    try {
      const { id } = req.params;
      const { status } = req.body;
      const task = await storage.updateTaskStatus(id, status);
      if (!task) {
        return res.status(404).json({ error: "Task not found" });
      }
      res.json(task);
    } catch (error) {
      console.error("Update task status error:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  });
  app2.delete("/api/task/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const deleted = await storage.deleteTask(id);
      if (!deleted) {
        return res.status(404).json({ error: "Task not found" });
      }
      res.json({ success: true });
    } catch (error) {
      console.error("Delete task error:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  });
  app2.get("/api/activities", async (req, res) => {
    try {
      const limit = req.query.limit ? parseInt(req.query.limit) : 10;
      const activities = await storage.getActivities(limit);
      res.json(activities);
    } catch (error) {
      console.error("Get activities error:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  });
  app2.post("/api/activities", async (req, res) => {
    try {
      const activity = await storage.createActivity(req.body);
      broadcastActivity(activity);
      res.json(activity);
    } catch (error) {
      console.error("Create activity error:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  });
  app2.post("/api/chat", async (req, res) => {
    try {
      const { messages } = req.body;
      if (!messages || !Array.isArray(messages)) {
        return res.status(400).json({ error: "Messages array required" });
      }
      const completion = await openai.chat.completions.create({
        model: "gpt-5",
        messages: [
          {
            role: "system",
            content: "You are a helpful AI assistant for Built4You, a digital services company. Help users with questions about web development, automation, SEO, social media management, and our other services. Be friendly, professional, and concise."
          },
          ...messages
        ]
      });
      const message = completion.choices[0]?.message?.content || "I'm sorry, I couldn't generate a response.";
      res.json({ message });
    } catch (error) {
      console.error("Chat error:", error);
      res.status(500).json({ error: "Failed to process chat request" });
    }
  });
  app2.post("/api/create-payment-intent", async (req, res) => {
    if (!stripe) {
      return res.status(503).json({ error: "Payment processing not configured" });
    }
    try {
      const { amount } = req.body;
      if (!amount || amount <= 0) {
        return res.status(400).json({ error: "Valid amount required" });
      }
      const paymentIntent = await stripe.paymentIntents.create({
        amount: Math.round(amount * 100),
        currency: "usd",
        automatic_payment_methods: {
          enabled: true
        }
      });
      res.json({ clientSecret: paymentIntent.client_secret });
    } catch (error) {
      console.error("Payment intent error:", error);
      res.status(500).json({ error: "Error creating payment intent: " + error.message });
    }
  });
  return httpServer;
}

// server/vite.ts
import express from "express";
import fs2 from "fs";
import path3 from "path";
import { createServer as createViteServer, createLogger } from "vite";

// vite.config.ts
import { defineConfig } from "vite";

// vite.seo.ts
import fs from "fs";
import path from "path";
function esc(s) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}
function seoPlugin() {
  return {
    name: "b4y-seo-inject",
    transformIndexHtml(html) {
      const cfgPath = path.resolve(process.cwd(), "seo.config.json");
      if (!fs.existsSync(cfgPath)) return html;
      const raw = fs.readFileSync(cfgPath, "utf8");
      const seo = JSON.parse(raw);
      const robots = seo.noindex ? "noindex, nofollow" : "index, follow";
      const canonical = seo.siteUrl.replace(/index\.html?$/i, "");
      const tags = [
        `<meta name="robots" content="${robots}" />`,
        `<link rel="canonical" href="${esc(canonical)}" />`,
        `<title>${esc(seo.title)}</title>`,
        `<meta name="description" content="${esc(seo.description)}" />`,
        seo.keywords?.length ? `<meta name="keywords" content="${esc(seo.keywords.join(", "))}" />` : "",
        `<meta property="og:type" content="website" />`,
        `<meta property="og:title" content="${esc(seo.title)}" />`,
        `<meta property="og:description" content="${esc(seo.description)}" />`,
        `<meta property="og:url" content="${esc(canonical)}" />`,
        seo.ogImage ? `<meta property="og:image" content="${esc(new URL(seo.ogImage, canonical).toString())}" />` : "",
        `<meta name="twitter:card" content="summary_large_image" />`,
        `<meta name="twitter:title" content="${esc(seo.title)}" />`,
        `<meta name="twitter:description" content="${esc(seo.description)}" />`,
        seo.ogImage ? `<meta name="twitter:image" content="${esc(new URL(seo.ogImage, canonical).toString())}" />` : ""
      ].filter(Boolean).join("");
      const localBusiness = !seo.noindex && seo.address ? `
<script type="application/ld+json">
${JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": seo.title,
        "url": canonical,
        "telephone": seo.phone || void 0,
        "address": {
          "@type": "PostalAddress",
          "streetAddress": seo.address.street,
          "addressLocality": seo.address.locality,
          "addressRegion": seo.address.region,
          "postalCode": seo.address.postalCode,
          "addressCountry": seo.address.country
        }
      }, null, 2)}
</script>` : "";
      return html.replace(/<\/head>/i, `${tags}
${localBusiness}
</head>`);
    }
  };
}

// vite.config.ts
import react from "@vitejs/plugin-react";
import path2 from "path";
var vite_config_default = defineConfig({
  // Ensures assets resolve correctly under /demo/
  base: "/dash/",
  plugins: [
    react(),
    seoPlugin(),
    ,
    ...process.env.NODE_ENV !== "production" && process.env.REPL_ID !== void 0 ? [
      await import("@replit/vite-plugin-cartographer").then((m) => m.cartographer()),
      await import("@replit/vite-plugin-dev-banner").then((m) => m.devBanner())
    ] : []
  ],
  resolve: {
    alias: {
      "@": path2.resolve(import.meta.dirname, "client/src"),
      "@shared": path2.resolve(import.meta.dirname, "shared"),
      "@assets": path2.resolve(import.meta.dirname, "attached_assets")
    }
  },
  root: path2.resolve(import.meta.dirname, "client"),
  build: {
    // Output index.html at dist/ for GitHub Pages workflow copy
    outDir: path2.resolve(import.meta.dirname, "dist"),
    emptyOutDir: true
  },
  server: {
    fs: { strict: true, deny: ["**/.*"] }
  }
});

// server/vite.ts
import { nanoid } from "nanoid";
var viteLogger = createLogger();
function log(message, source = "express") {
  const formattedTime = (/* @__PURE__ */ new Date()).toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true
  });
  console.log(`${formattedTime} [${source}] ${message}`);
}
async function setupVite(app2, server) {
  const serverOptions = {
    middlewareMode: true,
    hmr: { server },
    allowedHosts: true
  };
  const vite = await createViteServer({
    ...vite_config_default,
    configFile: false,
    customLogger: {
      ...viteLogger,
      error: (msg, options) => {
        viteLogger.error(msg, options);
        process.exit(1);
      }
    },
    server: serverOptions,
    appType: "custom"
  });
  app2.use(vite.middlewares);
  app2.use("*", async (req, res, next) => {
    const url = req.originalUrl;
    try {
      const clientTemplate = path3.resolve(
        import.meta.dirname,
        "..",
        "client",
        "index.html"
      );
      let template = await fs2.promises.readFile(clientTemplate, "utf-8");
      template = template.replace(
        `src="/src/main.tsx"`,
        `src="/src/main.tsx?v=${nanoid()}"`
      );
      const page = await vite.transformIndexHtml(url, template);
      res.status(200).set({ "Content-Type": "text/html" }).end(page);
    } catch (e) {
      vite.ssrFixStacktrace(e);
      next(e);
    }
  });
}
function serveStatic(app2) {
  const distPath = path3.resolve(import.meta.dirname, "public");
  if (!fs2.existsSync(distPath)) {
    throw new Error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`
    );
  }
  app2.use(express.static(distPath));
  app2.use("*", (_req, res) => {
    res.sendFile(path3.resolve(distPath, "index.html"));
  });
}

// server/index.ts
var app = express2();
app.use(express2.json({
  verify: (req, _res, buf) => {
    req.rawBody = buf;
  }
}));
app.use(express2.urlencoded({ extended: false }));
app.use((req, res, next) => {
  const start = Date.now();
  const path4 = req.path;
  let capturedJsonResponse = void 0;
  const originalResJson = res.json;
  res.json = function(bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };
  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path4.startsWith("/api")) {
      let logLine = `${req.method} ${path4} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }
      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "\u2026";
      }
      log(logLine);
    }
  });
  next();
});
(async () => {
  const server = await registerRoutes(app);
  app.use((err, _req, res, _next) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    res.status(status).json({ message });
    throw err;
  });
  if (app.get("env") === "development") {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }
  const port = parseInt(process.env.PORT || "5000", 10);
  server.listen({
    port,
    host: "0.0.0.0",
    reusePort: true
  }, () => {
    log(`serving on port ${port}`);
  });
})();
