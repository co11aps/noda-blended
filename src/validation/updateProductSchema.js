import Joi from "joi";

export const updateProductSchema = Joi.object({
  name: Joi.string().min(2).max(35),
  price: Joi.number(),
  category: Joi.string().valid("books", "electronics", "clothing", "other"),
  description: Joi.string(),
});
