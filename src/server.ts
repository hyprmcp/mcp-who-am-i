import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { RequestHandlerExtra } from "@modelcontextprotocol/sdk/shared/protocol.js";
import {
  ServerNotification,
  ServerRequest,
} from "@modelcontextprotocol/sdk/types.js";
import { JWTPayload } from "jose";

export function newServer() {
  const server = new McpServer({
    name: "mcp-who-am-i",
    version: "0.1.3", // x-release-please-version
  });

  server.registerTool(
    "who-am-i",
    {
      description:
        "This tools returns information about the authentication provided with the MCP request. " +
        "It answers questions like: 'Who am I?', 'Am I authenticated?' or 'What is my username'",
    },
    (args) => {
      // This is a hack because the SDK provides wrong types for tools without parameters
      const extra = args as RequestHandlerExtra<
        ServerRequest,
        ServerNotification
      >;
      const messageParts: string[] = [];

      if (!extra.authInfo) {
        messageParts.push("The request is not authenticated");
      } else {
        messageParts.push(
          "The following authentication has been provided via JWT:",
        );

        if (!extra.authInfo.extra) {
          messageParts.push("- No additional authentication info available");
        } else {
          // We previously stored the full parsed JWT in extras
          const token = extra.authInfo.extra as JWTPayload;

          if (token.sub) {
            messageParts.push(`- **Subject**: ${token.sub}`);
          }

          if (token["email"]) {
            messageParts.push(`- **E-mail address**: ${token["email"]}`);
          }

          if (token["name"]) {
            messageParts.push(`- **Name**: ${token["name"]}`);
          }

          if (token.exp) {
            messageParts.push(
              `- **Expiration**: ${new Date(token.exp * 1000)}`,
            );
          }
        }
      }

      return {
        content: [
          {
            type: "text",
            text: messageParts.join("\n"),
          },
        ],
      };
    },
  );

  server.registerPrompt(
    "who-am-i",
    { description: "Get auth information about the current MCP request" },
    () => {
      return {
        messages: [
          {
            role: "user",
            content: {
              type: "text",
              text: "Show information about the authentication state of the current who-am-i MCP server config",
            },
          },
        ],
      };
    },
  );

  return server;
}
