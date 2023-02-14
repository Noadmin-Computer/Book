import { Router } from "express";

import {
  userCreateHandler,
  userDeleteHandler,
  userLoginHandler,
  userUpdateHandler,
} from "../../handler/user/user.handler.js";
import { userValidation } from "../../middleware/user.validation.js";

const router = Router();

router
  .route("/")
  .post(userValidation, userCreateHandler)
  .delete(userDeleteHandler)
  .put(userUpdateHandler);

router.post("/login", userLoginHandler)

export default router;
