import storeModel from "../../db/model/store/store.model.js";

export async function getStoreByQueryService(query = {}) {
  try {
    const get = await storeModel.find(query, { __v: 0 });
    return get;
  } catch (error) {
    console.log(error.message);
    throw error;
  }
}

export async function createStoreService(data) {
  try {
    const create = await storeModel.create(data);
    return create;
  } catch (error) {
    console.log(error.message);
    throw error;
  }
}

export async function deleteStoreByQueryService(query) {
  try {
    const deleted = await storeModel.deleteOne(query);
    return deleted;
  } catch (error) {
    console.log(error.message);
    throw error;
  }
}

export async function updateStoreByQueryService(query) {
  try {
    const updated = await storeModel.updateOne(query);
    return updated;
  } catch (error) {
    console.log(error.message);
    throw error;
  }
}
