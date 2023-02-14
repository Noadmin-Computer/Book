import { getSearchByQueryService } from "../../../common/service/search/search.service.js";

export async function searchGetHandler(request, response) {
  try {
    const data = request.body;
    const get = await getSearchByQueryService(data);
    return response.json({
      status: 200,
      message: "ok",
      data: get,
    });
  } catch (error) {
    response.json({
      status: 400,
      message: error.message,
    });
  }
}
