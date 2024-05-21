import { Router } from "express";
import {
    register, login,
    getAllUsers, getUser,
    UpdateUser, deleteUser
} from "../controllers/auth.controller.js";

const router = Router();

router.post("/register", register);
router.post("/login", login);

router.get("/", getAllUsers);
router.get("/:userId", getUser);
router.put("/:userId", UpdateUser);
router.delete("/:userId", deleteUser);

export default router;