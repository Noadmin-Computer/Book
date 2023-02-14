import { Router } from "express";
import {
  mainCreateHandler,
  mainDeleteHandler,
  mainGetHandler,
  mainUpdateHandler,
} from "../../handler/main/main.handler.js";
import { mainValidation } from "../../middleware/main.validation.js";

const router = Router();

router
  .route("/")
  .get(mainGetHandler)
  .post(mainValidation, mainCreateHandler)
  .delete(mainDeleteHandler)
  .put(mainUpdateHandler);
  
export default router;
