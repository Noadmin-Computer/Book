import { Router } from "express";
import { searchGetHandler } from "../../handler/search/search.handler.js";

const router = Router();

router.post("/", searchGetHandler);
export default router;
