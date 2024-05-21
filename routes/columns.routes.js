import { Router } from "express";
import {getAllColumns, getColumn, createColumn, updateColumn, deleteColumn} 
from "../controllers/columns.controller.js";

const router = Router();

router.get("/", getAllColumns);
router.get("/:columnId", getColumn);
router.post("/", createColumn);
router.put("/:columnId", updateColumn);
router.delete("/:columnId", deleteColumn);


export default router;