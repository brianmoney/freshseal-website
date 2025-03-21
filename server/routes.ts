import type { Express } from "express";
import { createServer, type Server } from "http";
import path from "path";
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

  // Serve client files from the correct directory
  const clientPath = path.resolve(__dirname, '../client');
  console.log('Client path:', clientPath);

  // Serve static files first
  app.use(express.static(path.resolve(__dirname, '../client/dist')));

  // Single catch-all route for SPA
  app.get('*', (req, res) => {
    console.log('Handling request for:', req.url);
    
    // API 404 handler
    if (req.url.startsWith('/api')) {
      return res.status(404).json({ error: 'API endpoint not found' });
    }

    // Always serve index.html for client-side routing
    res.sendFile(path.resolve(__dirname, '../client/dist/index.html'));
  });

  return createServer(app);
}
