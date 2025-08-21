import { AuthInfo } from "@modelcontextprotocol/sdk/server/auth/types.js";
import { RequestHandler } from "express";
import { decodeJwt } from "jose";

export function jwtMiddleware(): RequestHandler {
  return (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (authHeader) {
      const [type, token] = authHeader.split(" ");
      if (type.toLowerCase() === "bearer" && token) {
        try {
          const parsedToken = decodeJwt(token);

          // The SDK looks for the parsed AuthInfo in the request "auth" property, but we have to coerce it into
          // accepting it because it's not part of the standard express type definition
          (req as { auth?: AuthInfo }).auth = {
            token: token,
            expiresAt: parsedToken.exp,
            extra: parsedToken,

            // We don't use these fields, but the type definition requires them
            clientId: "",
            scopes: [],
          };
        } catch (e) {}
      }
    }

    next();
  };
}
