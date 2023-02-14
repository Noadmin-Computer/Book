import searchValidationSchema from "../../common/validation/search/search.validation.js";

export async function searchValidation(request, response, next){
    try {
        const value = await searchValidationSchema.validateAsync(request.body);
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