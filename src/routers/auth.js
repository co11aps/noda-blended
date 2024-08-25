import { Router } from "express";
import { ctrlWrapper } from "../utils/ctrlWrapper.js";
import { validateBody } from "../utils/validateBody.js";
import { createUserSchema } from "../validation/createUserSchema.js";
import {
  createUserController,
  loginUserController,
  logoutUserController,
} from "../controllers/users.js";
import { loginUserSchema } from "../validation/loginUserSchema.js";
import { authenticate } from "../middlewares/authenticate.js";

const router = Router();

router.post(
  "/signup",
  validateBody(createUserSchema),
  ctrlWrapper(createUserController)
);

router.post(
  "/login",
  validateBody(loginUserSchema),
  ctrlWrapper(loginUserController)
);

router.post("/logout", authenticate, ctrlWrapper(logoutUserController));

export default router;
