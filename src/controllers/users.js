import createHttpError from "http-errors";
import { findUserByEmail, createUser } from "../services/users.js";
export const createUserController = async (req, res, next) => {
  const { email, name } = req.body;
  const user = await findUserByEmail(email);
  if (user) {
    throw createHttpError(409, "Email in use");
  }
  await createUser(req.body);
  res.status(201).json({
    status: 201,
    message: "Successfully registered a user!",
    data: { name, email },
  });
};
