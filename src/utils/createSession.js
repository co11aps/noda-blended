import crypto from "node:crypto";
export const createSession = () => ({
  accessToken: crypto.randomBytes(30).toString("base64"),
  refreshToken: crypto.randomBytes(30).toString("base64"),
  accessTokenValidUntil: Date.now() + 1000 * 60 * 15,
  refreshTokenValidUntil: Date.now() + 1000 * 60 * 60 * 24 * 30,
});
