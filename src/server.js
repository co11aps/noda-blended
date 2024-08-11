import express from "express";
import cors from "cors";
import { notFoundError } from "./middlewares/notFoundError.js";
import productRouter from "./routers/products.js";
import userRouter from "./routers/auth.js";
import { errorHandler } from "./middlewares/errorHandler.js";

import { env } from "./utils/env.js";

const PORT = Number(env("PORT", "8080"));

export const setupServer = () => {
  const app = express();

  app.use(express.json());
  app.use(cors());
  app.use("/users", userRouter);
  app.use("/products", productRouter);
  app.use("*", notFoundError);
  app.use(errorHandler);

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};
