import { Router } from "express";
import { ctrlWrapper } from "../utils/ctrlWrapper.js";
import {
  deleteProductByIdController,
  getAllProductsController,
  getProductByIdController,
  patchProductController,
  postProductController,
} from "../controllers/products.js";
import { createProductSchema } from "../validation/createProductSchema.js";
import { validateBody } from "../utils/validateBody.js";
import { validateId } from "../middlewares/validateId.js";
import { updateProductSchema } from "../validation/updateProductSchema.js";

const router = Router();

router.get("/", ctrlWrapper(getAllProductsController));
router.get("/:productId", validateId, ctrlWrapper(getProductByIdController));
router.delete(
  "/:productId",
  validateId,
  ctrlWrapper(deleteProductByIdController)
);
router.post(
  "/",
  validateBody(createProductSchema),
  ctrlWrapper(postProductController)
);
router.patch(
  "/:productId",
  validateId,
  validateBody(updateProductSchema),
  ctrlWrapper(patchProductController)
);

export default router;
