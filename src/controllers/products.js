import {
  deleteProductById,
  getAllProductsService,
  getProductById,
  serviceCreate,
} from "../services/products.js";
export const getAllProductsController = async (req, res) => {
  const products = await getAllProductsService();
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
    res.status(404).json({ status: 404, message: "Product not found" });
    return;
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
    res.status(404).json({ status: 404, message: "Product not found" });
    return;
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
