# MCP, Who am I?

This project is a Model Context Protocol (MCP) server that reports auth information about the current request.
It parses the Authorization header as JWT and reports some decoded payload items from the JWT.
The name is inspired by the `whoami` coreutils package.

## Usage

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
