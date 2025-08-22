#!/usr/bin/env node

import { StreamableHTTPServerTransport } from "@modelcontextprotocol/sdk/server/streamableHttp.js";
import express from "express";
import { log } from "node:console";
import { jwtMiddleware } from "./auth.js";
import { newServer } from "./server.js";

const transport = new StreamableHTTPServerTransport({
  sessionIdGenerator: undefined,
});

await newServer().connect(transport);

const app = express();
app.use(express.json(), jwtMiddleware());
app.post(
  "/mcp",
  async (req, res) => await transport.handleRequest(req, res, req.body),
);
app.get("/mcp", async (req, res) => await transport.handleRequest(req, res));
app.delete("/mcp", (_, res) => res.sendStatus(405));

log("listening on port 3000");
app.listen(3000);
