import { Router } from "express";
import {
  storeCreateHandler,
  storeDeleteHandler,
  storeGetHandler,
  storeUpdateHandler,
} from "../../handler/store/store.handler.js";
import { storeValidation } from "../../middleware/store.validation.js";

const router = Router();

router
  .route("/")
  .get(storeGetHandler)
  .post(storeValidation, storeCreateHandler)
  .delete(storeDeleteHandler)
  .put(storeUpdateHandler);

export default router;
