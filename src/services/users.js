import { Session } from "../db/models/Session.js";
import { User } from "../db/models/User.js";
import bcrypt from "bcrypt";
import { createSession } from "../utils/createSession.js";

export const findUserByEmail = (email) => User.findOne({ email });

export const createUser = async (userData) => {
  const hashedPassword = await bcrypt.hash(userData.password, 10);
  return User.create({ ...userData, password: hashedPassword });
};
export const setupSession = async (userId) => {
  await Session.deleteOne({ userId });
  return Session.create({
    userId,
    ...createSession(),
  });
};
