import { Product } from "../db/models/Product.js";
export const getAllProductsService = () => Product.find();
export const getProductById = (productId) => Product.findById(productId);
export const deleteProductById = (productId) =>
  Product.findByIdAndDelete(productId);
export const serviceCreate = (productData) => Product.create(productData);
