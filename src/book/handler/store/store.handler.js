import {
    createStoreService,
    deleteStoreByQueryService,
    getStoreByQueryService,
    updateStoreByQueryService,
  } from "../../../common/service/store/store.service.js";
  
  export async function storeCreateHandler(request, response) {
    try {
      const data = request.body;
      const res = await createStoreService(data);
      return response.json({
        status: 200,
        message: "Ok",
        data: res,
      });
    } catch (error) {
      response.json({
        status: 400,
        message: error.message,
      });
    }
  }
  
  export async function storeGetHandler(request, response) {
    try {
      const get = await getStoreByQueryService();
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
  
  export async function storeDeleteHandler(request, response) {
    try {
      const data = request.body;
      const deleted = await deleteStoreByQueryService(data);
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
  
  export async function storeUpdateHandler(request, response) {
    try {
      const data = request.body;
      const update = await updateStoreByQueryService(data);
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
  