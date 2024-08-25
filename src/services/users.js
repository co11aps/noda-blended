import { User } from "../db/models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { env } from "../utils/env.js";

export const findUserByEmail = (email) => User.findOne({ email });
const updateUserWithToken = (id) => {
  const token = jwt.sign(
    {
      id,
    },
    env("JWT_SECRET")
  );

  return User.findByIdAndUpdate(id, { token }, { new: true });
};
export const createUser = async (userData) => {
  const hashedPassword = await bcrypt.hash(userData.password, 10);

  const newUser = await User.create({ ...userData, password: hashedPassword });
  return updateUserWithToken(newUser._id);
};
