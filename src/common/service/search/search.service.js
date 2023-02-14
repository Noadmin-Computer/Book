import searchModel from "../../db/model/main/main.model.js";

export async function getSearchByQueryService(query) {
  try {
    const get = await searchModel.find(query, { __v: 0 });
    return get;
  } catch (error) {
    console.log(error.message);
    throw error;
  }
}
