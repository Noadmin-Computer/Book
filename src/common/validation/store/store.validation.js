import Joi from "joi";

export default Joi.object({
    book_id : Joi.string().required(),
    name : Joi.string().min(3).max(30).required(),
    pic : Joi.string().min(3).max(30),
    price : Joi.number().min(3),
    author : Joi.string(),
    description : Joi.string(),
});
