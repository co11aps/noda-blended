import createHttpError from "http-errors";
import { findUserByEmail, createUser, resetToken } from "../services/users.js";
import bcrypt from "bcrypt";
import { updateUserWithToken } from "../services/users.js";

export const createUserController = async (req, res) => {
  const { email, name } = req.body;
  const user = await findUserByEmail(email);
  if (user) {
    throw createHttpError(409, "Email in use");
  }
  const createdUser = await createUser(req.body);
  res.status(201).json({
    user: {
      name,
      email,
    },
    token: createdUser.token,
  });
};

export const loginUserController = async (req, res) => {
  const { email, password } = req.body;
  const user = await findUserByEmail(email);
  if (!user) {
    throw createHttpError(401, "Unauthorized");
  }
  const isEqual = await bcrypt.compare(password, user.password);
  if (!isEqual) {
    throw createHttpError(401, "Unauthorized");
  }
  const loggedUser = await updateUserWithToken(user._id);
  res.status(200).json({
    user: {
      name: loggedUser.name,
      email,
    },
    token: loggedUser.token,
  });
};

export const logoutUserController = async (req, res) => {
  await resetToken(req.user._id);
  res.status(204).end();
};
