import createHttpError from "http-errors";
import { findUserByEmail, createUser } from "../services/users.js";
// import bcrypt from "bcrypt";
// import { setupSession } from "../services/users.js";
// import { setupCookies } from "../utils/setupCookies.js";
export const createUserController = async (req, res) => {
  const { email, name } = req.body;
  const user = await findUserByEmail(email);
  if (user) {
    throw createHttpError(409, "Email in use");
  }
  const createdUser = await createUser(req.body);
  // res.status(201).json({
  //   status: 201,
  //   message: "Successfully registered a user!",
  //   data: { name, email },
  // });
};
// export const loginUserController = async (req, res) => {
//   const { email, password } = req.body;
//   const user = await findUserByEmail(email);
//   if (!user) {
//     throw createHttpError(401, "Unauthorized");
//   }
//   const isEqual = await bcrypt.compare(password, user.password);
//   if (!isEqual) {
//     throw createHttpError(401, "Unauthorized");
//   }
//   const session = await setupSession(user._id);
//   setupCookies(res, session);
//   res.status(200).json({
//     status: 200,
//     message: "Successfully logged in an user!",
//     data: { accessToken: session.accessToken },
//   });
// };
