import express from "express";
import cors from "cors";
import { ctrlWrapper } from "./utils/ctrlWrapper.js";
import { notFoundError } from "./middlewares/notFoundError.js";
import {
  deleteProductByIdController,
  getAllProductsController,
  getProductByIdController,
  postProductController,
} from "./controllers/products.js";

import { env } from "./utils/env.js";

const PORT = Number(env("PORT", "8080"));

export const setupServer = () => {
  const app = express();

  app.use(express.json());
  app.use(cors());

  app.get("/products", ctrlWrapper(getAllProductsController));
  app.get("/products/:productId", ctrlWrapper(getProductByIdController));
  app.delete("/products/:productId", ctrlWrapper(deleteProductByIdController));
  app.post("/products", ctrlWrapper(postProductController));
  app.use("*", notFoundError);
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};
