import { Router } from "express";
import { getAllTasks, getTask, createTask, updateTask, deleteTask }
    from "../controllers/tasks.controller.js";

const router = Router();

router.get("/", getAllTasks);
router.get("/:taskId", getTask);
router.post("/", createTask);
router.put("/:taskId", updateTask);
router.delete("/:taskId", deleteTask);


export default router;