import type { Express } from "express";
import { createServer, type Server } from "http";
import path from "path";
import { storage } from "./storage";
import express from 'express';

export async function registerRoutes(app: Express): Promise<Server> {
  // Define API routes if needed
  app.get('/api/products', (_req, res) => {
    res.json({
      status: 'success',
      message: 'Products API endpoint'
    });
  });

  // Serve static files from the 'pages' directory
  const pagesPath = path.resolve(__dirname, '../client/src/pages');
  app.use('/pages', express.static(pagesPath));

  // Add catch-all route for client-side routing
  app.get('*', (req, res, next) => {
    // Skip this handler for API routes and /pages route
    if (req.url.startsWith('/api') || req.url.startsWith('/pages')) {
      return next();
    }
    res.sendFile(path.resolve(__dirname, '../client/index.html'));
  });

  const httpServer = createServer(app);

  return httpServer;
}
