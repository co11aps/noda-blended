import createHttpError from "http-errors";

export const validateBody = (schema) => {
    return async (req, res, next) => {
        try {
            await schema.validateAsync(req.body, { abortEarly: false });
            next();
        } catch (err) {
            next(
                createHttpError(400, "Bad request", {
                    errors: err.details,
                })
            );
        }
    };
};