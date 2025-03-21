import type { Express } from "express";
import { createServer, type Server } from "http";
import path from "path";
import { storage } from "./storage";
import express from 'express';
import fs from 'fs';

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

  // Static files second (if any)
  const publicPath = path.resolve(__dirname, '../public');
  if (fs.existsSync(publicPath)) {
    app.use(express.static(publicPath));
  }

  // Catch-all route last - this ensures React Router handles all other routes
  app.get('*', (req, res) => {
    if (req.url.startsWith('/api')) {
      return res.status(404).json({ error: 'API endpoint not found' });
    }
    res.sendFile(path.resolve(__dirname, '../client/index.html'));
  });

  const httpServer = createServer(app);

  return httpServer;
}
