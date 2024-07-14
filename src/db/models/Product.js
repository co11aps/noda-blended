// name - string, required
// price - number, required
// category - string, enum('books', 'electronics', 'clothing', 'other'), required, default 'other'
// description - string, optional
// createdAt - дата створення
// updatedAt - дата оновлення
// Для останніх двох полів достатньо використати параметр timestamps: true при створенні моделі.

import { model, Schema } from "mongoose";

const productSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    category: {
      type: String,
      enum: ["books", "electronics", "clothing", "other"],
      default: "other",
      required: true,
    },
    description: {
      type: String,
    },
  },
  { timestamps: true, versionKey: false }
);

export const Product = model("product", productSchema);
