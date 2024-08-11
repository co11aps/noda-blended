import { Router } from "express";
import { ctrlWrapper } from "../utils/ctrlWrapper.js";
import { validateBody } from "../utils/validateBody.js";
import { createUserSchema } from "../validation/createUserSchema.js";
import { createUserController } from "../controllers/users.js";
const router = Router();

router.post(
  "/register",
  validateBody(createUserSchema),
  ctrlWrapper(createUserController)
);

export default router;
