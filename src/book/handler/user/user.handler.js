import jwt from "../../../common/utils/jwt.js";
import {
  createUserService,
  deleteUserByQueryService,
  getUserByQueryService,
  updateUserByQueryService,
} from "../../../common/service/user/user.service.js";

export async function userCreateHandler(request, response) {
  try {
    const data = request.body;
    let newUser = await createUserService(data);

    return response.json({
      status: 200,
      message: "Ok",
      token: jwt.sign({ _id: newUser._id }),
      data: newUser,
    });
  } catch (error) {
    response.json({
      status: 400,
      message: error.message,
    });
  }
}

export async function userLoginHandler(request, response) {
  try {
    const data = request.body;
    const query = {
      email: data.email,
      password: data.password,
    };
    let user = await getUserByQueryService(query);
    console.log(user);

    return response.json({
      status: 200,
      message: "ok",
      token: jwt.sign({ _id: user._id }),
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
