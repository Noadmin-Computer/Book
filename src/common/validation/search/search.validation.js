import Joi from "joi";

export default Joi.object({
  name: Joi.string().min(3).max(30).required(),
  price: Joi.number(),
  author : Joi.string(),
});
