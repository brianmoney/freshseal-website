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

  // Add a test API endpoint
  app.get('/api/test', (_req, res) => {
    try {
      console.log('Test API endpoint was hit!'); // Add log here
      res.json({
        status: 'success',
        message: 'Test API endpoint'
      });
    } catch (error) {
      console.error('Error in /api/test:', error);
      res.status(500).json({
        status: 'error',
        message: 'Internal Server Error'
      });
    }
  });

  // Serve static files from the 'pages' directory
  const pagesPath = path.resolve(__dirname, '../client/src/pages');
  console.log(`Serving static files from: ${pagesPath}`); // Log the static file path
  app.use('/pages', express.static(pagesPath));

  // Add catch-all route for client-side routing
  app.get('*', (req, res, next) => {
    console.log(`Catch-all route triggered for: ${req.url}`); // Log the URL

    // Skip this handler for API routes and /pages route
    if (req.url.startsWith('/api') || req.url.startsWith('/pages')) {
      console.log(`Skipping catch-all for: ${req.url}`); // Log when skipping
      return next();
    }
    console.log(`Serving index.html for: ${req.url}`); // Log when serving index.html
    res.sendFile(path.resolve(__dirname, '../client/index.html'));
  });

  const httpServer = createServer(app);

  return httpServer;
}
