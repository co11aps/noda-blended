import { Product } from "../db/models/Product.js";
export const getAllProductsService = () => Product.find();
