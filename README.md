# MCP, Who am I?

This project is a Model Context Protocol (MCP) server that reports auth information about the current request.
It parses the Authorization header as JWT and reports some decoded payload items from the JWT.
The name is inspired by the `whoami` coreutils package.

## Remote MCP server demo

### Unauthenticated "MCP, Who am I" MCP server?

"MCP, Who am I" is hosted on [HyprMCP](https://hyprmcp.com) and available at:

```
https://demo.hyprmcp.cloud/who-am-i-public/mcp
```

Find specific installation instructions here:

<details name="mcp-install-instructions">
<summary>Cursor</summary>

#### Installation Link

[![Add to Cursor](https://cursor.com/deeplink/mcp-install-dark.svg)](cursor://anysphere.cursor-deeplink/mcp/install?name=who-am-i-public&config=eyJ1cmwiOiJodHRwczovL2RlbW8uaHlwcm1jcC5jbG91ZC93aG8tYW0taS1wdWJsaWMvbWNwIn0=)

#### Manual Installation

Add the following to your `mcp.json` file:

```json
{
  "mcpServers": {
    "who-am-i-public": {
      "url": "https://demo.hyprmcp.cloud/who-am-i-public/mcp"
    }
  }
}
```

</details>

<details name="mcp-install-instructions">
<summary>VSCode</summary>

#### Installation Link

[![Install in VS Code](https://img.shields.io/badge/VS_Code-Install_Server-0098FF?style=for-the-badge&logo=visual-studio-code&logoColor=white)](https://insiders.vscode.dev/redirect?url=vscode:mcp/install?%7B%22type%22%3A%22http%22%2C%22name%22%3A%22who-am-i-public%22%2C%22url%22%3A%22https%3A%2F%2Fdemo.hyprmcp.cloud%2Fwho-am-i-public%2Fmcp%22%7D)

#### Manual Installation

Open a terminal and run the following command:

```
code --add-mcp '{"type":"http","name":"who-am-i-public","url":"https://demo.hyprmcp.cloud/who-am-i-public/mcp"}'
```

Then, from inside VS Code, open the .vscode/mcp.json file and click "Start server".

</details>

<details name="mcp-install-instructions">
<summary>Claude Code</summary>

Open a terminal and run the following command:

```
claude mcp add --transport http who-am-i-public https://demo.hyprmcp.cloud/who-am-i-public/mcp
```

From within Claude Code, you can use the `/mcp` command to get more information about the server.

</details>

<details name="mcp-install-instructions">
<summary>Claude Desktop</summary>

Open Claude Desktop and navigate to Settings > Connectors > Add Custom Connector.

Enter the name as `who-am-i-public` and the remote MCP server URL as `https://demo.hyprmcp.cloud/who-am-i-public/mcp`.

</details>

<details name="mcp-install-instructions">
<summary>Windsurf</summary>

Copy the following JSON to your Windsurf MCP config file:

```json
{
  "mcpServers": {
    "who-am-i-public": {
      "serverUrl": "https://demo.hyprmcp.cloud/who-am-i-public/mcp"
    }
  }
}
```

</details>

<details name="mcp-install-instructions">
<summary>ChatGPT</summary>

_Note: In Team, Enterprise, and Edu workspaces, only workspace owners and admins have permission_

- Navigate to **Settings > Connectors**
- Add a custom connector with the server URL: `https://demo.hyprmcp.cloud/who-am-i-public/mcp`
- It should then be visible in the Composer > Deep research tool
- You may need to add the server as a source

\*Connectors can only be used with **Deep Research\***

</details>

<details name="mcp-install-instructions">
<summary>Gemini CLI</summary>

Add the following JSON to your Gemini CLI configuration file (`~/.gemini/settings.json`):

```json
{
  "mcpServers": {
    "who-am-i-public": {
      "httpUrl": "https://demo.hyprmcp.cloud/who-am-i-public/mcp",
      "headers": {
        "Accept": "application/json, text/event-stream"
      }
    }
  }
}
```

</details>

by [![Hypr MCP](https://hyprmcp.com/hyprmcp_20px.svg)](https://hyprmcp.com/)

### Authenticated "MCP, Who am I" MCP server?

"MCP, Who am I" is hosted on [HyprMCP](https://hyprmcp.com) and available at:

```
https://demo.hyprmcp.cloud/who-am-i/mcp
```

Find specific installation instructions here:

<details name="mcp-install-instructions">
<summary>Cursor</summary>

#### Installation Link

[![Add to Cursor](https://cursor.com/deeplink/mcp-install-dark.svg)](cursor://anysphere.cursor-deeplink/mcp/install?name=who-am-i-public&config=eyJ1cmwiOiJodHRwczovL2RlbW8uaHlwcm1jcC5jbG91ZC93aG8tYW0taS1wdWJsaWMvbWNwIn0=)

#### Manual Installation

Add the following to your `mcp.json` file:

```json
{
  "mcpServers": {
    "who-am-i-public": {
      "url": "https://demo.hyprmcp.cloud/who-am-i-public/mcp"
    }
  }
}
```

</details>

<details name="mcp-install-instructions">
<summary>VSCode</summary>

#### Installation Link

[![Install in VS Code](https://img.shields.io/badge/VS_Code-Install_Server-0098FF?style=for-the-badge&logo=visual-studio-code&logoColor=white)](https://insiders.vscode.dev/redirect?url=vscode:mcp/install?%7B%22type%22%3A%22http%22%2C%22name%22%3A%22who-am-i-public%22%2C%22url%22%3A%22https%3A%2F%2Fdemo.hyprmcp.cloud%2Fwho-am-i-public%2Fmcp%22%7D)

#### Manual Installation

Open a terminal and run the following command:

```
code --add-mcp '{"type":"http","name":"who-am-i-public","url":"https://demo.hyprmcp.cloud/who-am-i-public/mcp"}'
```

Then, from inside VS Code, open the .vscode/mcp.json file and click "Start server".

</details>

<details name="mcp-install-instructions">
<summary>Claude Code</summary>

Open a terminal and run the following command:

```
claude mcp add --transport http who-am-i-public https://demo.hyprmcp.cloud/who-am-i-public/mcp
```

From within Claude Code, you can use the `/mcp` command to get more information about the server.

</details>

<details name="mcp-install-instructions">
<summary>Claude Desktop</summary>

Open Claude Desktop and navigate to Settings > Connectors > Add Custom Connector.

Enter the name as `who-am-i-public` and the remote MCP server URL as `https://demo.hyprmcp.cloud/who-am-i-public/mcp`.

</details>

<details name="mcp-install-instructions">
<summary>Windsurf</summary>

Copy the following JSON to your Windsurf MCP config file:

```json
{
  "mcpServers": {
    "who-am-i-public": {
      "serverUrl": "https://demo.hyprmcp.cloud/who-am-i-public/mcp"
    }
  }
}
```

</details>

<details name="mcp-install-instructions">
<summary>ChatGPT</summary>

_Note: In Team, Enterprise, and Edu workspaces, only workspace owners and admins have permission_

- Navigate to **Settings > Connectors**
- Add a custom connector with the server URL: `https://demo.hyprmcp.cloud/who-am-i-public/mcp`
- It should then be visible in the Composer > Deep research tool
- You may need to add the server as a source

\*Connectors can only be used with **Deep Research\***

</details>

<details name="mcp-install-instructions">
<summary>Gemini CLI</summary>

Add the following JSON to your Gemini CLI configuration file (`~/.gemini/settings.json`):

```json
{
  "mcpServers": {
    "who-am-i-public": {
      "httpUrl": "https://demo.hyprmcp.cloud/who-am-i-public/mcp",
      "headers": {
        "Accept": "application/json, text/event-stream"
      }
    }
  }
}
```

</details>

by [![Hypr MCP](https://hyprmcp.com/hyprmcp_20px.svg)](https://hyprmcp.com/)

## Local Usage

You can run the MCP server using NPM:

```shell
npx @hyprmcp/mcp-who-am-i@latest
```

Or you can use Docker:

```shell
docker run --rm -p 3000:3000 ghcr.io/hyprmcp/mcp-who-am-i
```

## Development

We recommend that you use `mise` to manage tool installations.
If you prefer to manage tool installations manually, ensure that `node` and `pnpm` are installed.

Tasks:

- `pnpm install` - install dependencies
- `pnpm build` - compile typescript files
- `pnpm start` - start the MCP server
