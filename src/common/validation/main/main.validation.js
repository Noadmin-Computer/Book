import Joi from "joi";

export default Joi.object({
    name : Joi.string().min(3).max(30).required(),
    pic : Joi.string().min(3).max(30).required(),
    price : Joi.number().min(3).required(),
    author : Joi.string().required,
    description : Joi.string().min(3).max(120).required()
});
