import createHttpError from "http-errors";
import { isValidObjectId } from "mongoose";

export const validateId = (req, res, next) => {
    const { productId } = req.params;
    if (!isValidObjectId(productId)) {
        next(createHttpError(404, "Not found"));
        return;
    }
    next();
};