import express from "express";
import cors from "cors";
import { getAllProductsController } from "./controllers/products.js";

import { env } from "./utils/env.js";

const PORT = Number(env("PORT", "8080"));

export const setupServer = () => {
  const app = express();

  app.use(express.json());
  app.use(cors());

  app.get("/products", getAllProductsController);

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};
