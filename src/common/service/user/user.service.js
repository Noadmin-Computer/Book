import userModel from "../../db/model/user/user.model.js";
import { Types } from "mongoose";

export async function createUserService(data) {
  try {
    const create = await userModel.create(data);
    return create;
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
