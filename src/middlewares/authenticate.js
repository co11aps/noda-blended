import createHttpError from "http-errors";
import { findUser } from "../services/users.js";
import jwt from "jsonwebtoken";
import { env } from "../utils/env.js";
export const authenticate = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer")) {
    next(createHttpError(401, "Authorization header missing or invalid"));
    return;
  }

  const token = authHeader.split(" ")[1];
  const { id } = jwt.verify(token, env("JWT_SECRET"));
  const user = await findUser(id);

  if (!user || !user.token || user.token !== token) {
    next(createHttpError(401, "Unauthorized!"));
    return;
  }

  req.user = user;
  next();
};
