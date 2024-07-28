import { Router } from "express"
import { ctrlWrapper } from "../utils/ctrlWrapper.js";
import {
  deleteProductByIdController,
  getAllProductsController,
  getProductByIdController,
  postProductController,
} from "../controllers/products.js";
import { createProductSchema } from "../validation/createProductSchema.js";
import { validateBody } from "../utils/validateBody.js";
import { validateId } from "../middlewares/validateId.js";

const router = Router();

router.get("/", ctrlWrapper(getAllProductsController));
router.get("/:productId", validateId,ctrlWrapper(getProductByIdController));
router.delete("/:productId", validateId, ctrlWrapper(deleteProductByIdController));
router.post("/", validateBody(createProductSchema), ctrlWrapper(postProductController));

export default router;