import { Router } from "express";
import { ctrlWrapper } from "../utils/ctrlWrapper.js";
import { validateBody } from "../utils/validateBody.js";
import { createUserSchema } from "../validation/createUserSchema.js";
import {
  createUserController,
  //   loginUserController,
} from "../controllers/users.js";
// import { loginUserSchema } from "../validation/loginUserSchema.js";
const router = Router();

router.post(
  "/signup",
  validateBody(createUserSchema),
  ctrlWrapper(createUserController)
);

// router.post(
//   "/login",
//   validateBody(loginUserSchema),
//   ctrlWrapper(loginUserController)
// );

export default router;
