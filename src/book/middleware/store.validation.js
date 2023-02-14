import storeValidationSchema from "../../common/validation/store/store.validation.js";

export async function storeValidation(request, response, next){
    try {
        const value = await storeValidationSchema.validateAsync(request.body);
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