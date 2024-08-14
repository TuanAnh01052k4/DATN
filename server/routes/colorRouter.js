import { Router } from "express";
import {
  create,
  deletecolorById,
  getAll,
  getcolorById,
  updatecolorById,
} from "../controllers/colorController.js";

const router = Router();
router.get("/", getAll);
router.post("/", create);

router.get("/:colorId", getcolorById);
router.delete("/:colorId", deletecolorById);
router.put("/:colorId", updatecolorById);

export default router;
