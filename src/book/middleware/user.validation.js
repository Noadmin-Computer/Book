import userValidationSchema from "../../common/validation/user/user.validation.js";

export async function userValidation(request, response, next){
    try {
        const value = await userValidationSchema.validateAsync(request.body);
        console.log(44,value);
        next()
    }
    catch (err) {
        response.json({
            status: 404,
            message: err.message
        })
    }
}