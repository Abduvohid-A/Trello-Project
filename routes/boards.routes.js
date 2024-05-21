import { Router } from "express";
import {getAllBoards, getBoard, createBoard, updateBoard, deleteBoard} 
from "../controllers/boards.controller.js";
import tasksRouter from "./tasks.routes.js";
import columnsRouter from "./columns.routes.js";

const router = Router();

router.use("/tasks", tasksRouter);
router.use("/columns", columnsRouter);

router.get("/", getAllBoards);
router.get("/:boardId", getBoard);
router.post("/", createBoard);
router.put("/:boardId", updateBoard);
router.delete("/:boardId", deleteBoard);


export default router;