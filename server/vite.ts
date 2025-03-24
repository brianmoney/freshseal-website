import express, { type Express } from "express";
import fs from "fs";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import { createServer as createViteServer, createLogger } from "vite";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
import { type Server } from "http";
import viteConfig from "../vite.config";
import { nanoid } from "nanoid";

const viteLogger = createLogger();

export function log(message: string, source = "express") {
  const formattedTime = new Date().toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });

  console.log(`${formattedTime} [${source}] ${message}`);
}

export async function setupVite(app: Express, server: Server) {
  const serverOptions = {
    middlewareMode: true,
    hmr: { server },
    allowedHosts: true,
  };

  const vite = await createViteServer({
    ...viteConfig,
    configFile: false,
    customLogger: {
      ...viteLogger,
      error: (msg, options) => {
        viteLogger.error(msg, options);
        process.exit(1);
      },
    },
    server: {
      ...serverOptions,
      middlewareMode: true,
      hmr: { server },
      allowedHosts: true
    },
    appType: "custom",
  });

  app.use(vite.middlewares);
  
  // Single catch-all route for development
  app.use('*', async (req, res, next) => {
    const url = req.originalUrl;
    console.log('Vite handling request for:', url);

    // Skip API routes
    if (url.startsWith('/api')) {
      return next();
    }

    try {
      const clientPath = path.resolve(__dirname, '../client');
      const indexPath = path.resolve(clientPath, 'index.html');
      console.log('Reading template from:', indexPath);

      if (!fs.existsSync(indexPath)) {
        console.error('index.html not found at:', indexPath);
        return res.status(404).send('index.html not found');
      }

      const template = await fs.promises.readFile(indexPath, 'utf-8');
      const html = await vite.transformIndexHtml(url, template);
      res.status(200).set({ 'Content-Type': 'text/html' }).end(html);
    } catch (e) {
      console.error('Error processing request:', e);
      next(e);
    }
  });
}

// Remove or simplify serveStatic as it's not needed in development
export function serveStatic(app: Express) {
  // This should only run in production
  console.log('serveStatic called - this should only run in production');
  
  // Fallback route for client-side routing in production
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../dist", "index.html"));
  });
  
}
