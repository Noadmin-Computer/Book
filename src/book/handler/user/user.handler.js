import jwt from "../../../common/utils/jwt.js";
import {
  createUserService,
  deleteUserByQueryService,
  getUserByQueryService,
  loginService,
  updateUserByQueryService,
} from "../../../common/service/user/user.service.js";

export async function userCreateHandler(request, response){
  try {
      const data = request.body
      const res = await createUserService(data)
      const token = jwt.sign(data)
      return response.json({
          status: 200,
          message: "Ok",
          token,
          data: res
      })
  } catch (error) {
      response.json({
          status: 400,
          message: error.message
      })
  }
}


export async function userLoginHandler(request, response) {
  try {
    const data = request.body;
    const res = await loginService(data);
    const token = jwt.sign(data);
    return response.json({
      status: 200,
      message: "Ok",
      token,
      data: res,
    });
  } catch (error) {
    response.json({
      status: 400,
      message: error.message,
    });
  }
}

export async function userDeleteHandler(request, response) {
  try {
    const data = request.body;
    const deleted = await deleteUserByQueryService(data);
    return response.json({
      status: 200,
      message: "ok",
      data: deleted,
    });
  } catch (error) {
    response.json({
      status: 400,
      message: error.message,
    });
  }
}

export async function userUpdateHandler(request, response) {
  try {
    const data = request.body;
    const update = await updateUserByQueryService(data);
    return response.json({
      status: 200,
      message: "OK",
      data: update,
    });
  } catch (error) {
    response.json({
      status: 400,
      message: error.message,
    });
  }
}
