import type { Express } from "express";
import { createServer, type Server } from "http";
import path from "path";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // Define API routes if needed
  app.get('/api/products', (_req, res) => {
    res.json({
      status: 'success',
      message: 'Products API endpoint'
    });
  });

  // Add catch-all route for client-side routing
  app.get('*', (req, res, next) => {
    // Skip this handler for API routes
    if (req.url.startsWith('/api')) {
      return next();
    }
    res.sendFile(path.resolve(__dirname, '../client/index.html'));
  });

  const httpServer = createServer(app);

  return httpServer;
}
