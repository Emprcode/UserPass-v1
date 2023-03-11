import Joi from "joi";

export const validationProcessor = (req, res, next, schema) => {
  try {
    const { error } = schema.validate(req.body);

    error
      ? res.json({
          status: "error",
          message: error,
        })
      : next();
  } catch (error) {
    next(error);
  }
};

//user registration Validation

export const userRegistrationValidation = (req, res, next) => {
  const schema = Joi.object({
    name: Joi.string().max(50).required(),
    email: Joi.string().email({ minDomainSegments: 2 }).required(),
    password: Joi.string().max(50).min(4).required(),
  });
  return validationProcessor(req, res, next, schema);
};

//user login validation
export const userLoginValidation = (req, res, next) => {
  const schema = Joi.object({
    email: Joi.string().email({ minDomainSegments: 2 }).required(),
    password: Joi.string().max(50).min(4).required(),
  });
  return validationProcessor(req, res, next, schema);
};
