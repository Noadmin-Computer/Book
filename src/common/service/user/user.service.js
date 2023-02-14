import userModel from "../../db/model/user/user.model.js";
import sha256 from "sha256";
import { Types } from "mongoose";

export async function createUserService(data) {
  try {
      data.password=sha256(data.password)
      const user = await userModel.create(data)
      return user
  } catch (error) {
      console.log(error.message);
      throw error
  }
}


export async function loginService(data) {
  try {
    let password = sha256(data.password);
    const login = await userModel.findOne({
      password: password,
      email: data.email,
    });
    return login;
  } catch (error) {
    console.log(error.message);
    throw error;
  }
}

export async function getUserByQueryService(query) {
  try {
    const get = await userModel.find(query, { __v: 0 });
    return get;
  } catch (error) {
    console.log(error.message);
    throw error;
  }
}

export async function deleteUserByQueryService(query) {
  try {
    const deleted = await userModel.deleteOne(query);
    return deleted;
  } catch (error) {
    console.log(error.message);
    throw error;
  }
}

export async function updateUserByQueryService(query) {
  try {
    if (query._id) {
      if (typeof query._id === "string") {
        query._id = new Types.ObjectId(query._id);
      }
    } else {
      throw new Error("_id must be provided!");
    }
    console.log(query);
    const updated = await userModel.updateOne({ _id: query._id }, query);
  } catch (error) {
    console.log(error.message);
    throw error;
  }
}
