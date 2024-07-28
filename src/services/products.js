import { Product } from "../db/models/Product.js";

export const getAllProductsService = (filter) => {
  const productQuery = Product.find();
  if (filter.minPrice) {
    productQuery.where("price").gte(filter.minPrice);
  }
  if (filter.maxPrice) {
    productQuery.where("price").lte(filter.maxPrice);
  }
  if (filter.category) {
    productQuery.where("category").equals(filter.category);
  }
  return Product.find().merge(productQuery).exec();
};
export const getProductById = (productId) => Product.findById(productId);
export const deleteProductById = (productId) =>
  Product.findByIdAndDelete(productId);
export const serviceCreate = (productData) => Product.create(productData);
export const patchProductById = (productId, productData) =>
  Product.findByIdAndUpdate(productId, productData, { new: true });
