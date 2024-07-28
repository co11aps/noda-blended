import Joi from "joi";

export const createProductSchema = Joi.object({
  name: Joi.string().min(2).max(35).required().messages({
    "any.required": "Name is required",
  }),
  price: Joi.number().required().messages({
    "any.required": "Price is required",
  }),
  category: Joi.string().valid("books", "electronics", "clothing", "other"),
  description: Joi.string(),
});
