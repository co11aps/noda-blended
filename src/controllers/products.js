import { getAllProductsService } from "../services/products.js";
export const getAllProductsController = async (req, res) => {
  try {
    const products = await getAllProductsService();
    res.json({
      status: 200,
      message: "Successfully found products!",
      data: products,
    });
  } catch (err) {
    console.log(err);
    throw err;
  }
};
