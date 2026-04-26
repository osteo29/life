import type { Express } from "express";
import { createServer } from "http";
import { createApp } from "../server/_core/index";

let appPromise: Promise<Express> | null = null;

function getApp() {
  if (!appPromise) {
    appPromise = createApp();
  }
  return appPromise;
}

export default async function handler(req: any, res: any) {
  const app = await getApp();
  const server = createServer(app);
  server.emit("request", req, res);
}
