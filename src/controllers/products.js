import createHttpError from "http-errors";
import {
  deleteProductById,
  getAllProductsService,
  getProductById,
  patchProductById,
  serviceCreate,
} from "../services/products.js";
import parseFilter from "../utils/parseFilter.js";
export const getAllProductsController = async (req, res) => {
  const filters = parseFilter(req.query);
  const products = await getAllProductsService(filters);
  res.json({
    status: 200,
    message: "Successfully found products!",
    data: products,
  });
};
export const getProductByIdController = async (req, res) => {
  console.log("Hello world", req.params);
  const { productId } = req.params;
  const product = await getProductById(productId);
  if (!product) {
    throw createHttpError(404, "Product not found");
  }
  res.json({
    status: 200,
    message: `Successfully found product with id ${productId}!`,
    data: product,
  });
};
export const deleteProductByIdController = async (req, res) => {
  const { productId } = req.params;
  const removedProduct = await deleteProductById(productId);
  if (!removedProduct) {
    throw createHttpError(404, "Product not found");
  }
  res.sendStatus(204);
};
export const postProductController = async (req, res) => {
  const newProduct = await serviceCreate(req.body);
  res.status(201).json({
    status: 201,
    message: "Successfully created a product",
    data: newProduct,
  });
};

export const patchProductController = async (req, res) => {
  const { productId } = req.params;
  const patchProduct = await patchProductById(productId, req.body);
  if (!patchProduct) {
    throw createHttpError(404, "Product not found");
  }

  res.status(200).json({
    status: 200,
    message: "Successfully patch a product",
    data: patchProduct,
  });
};
