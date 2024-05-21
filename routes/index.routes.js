import { Router } from "express";
import authRouter from "./auth.routes.js";
import boardsRouter from "./boards.routes.js";

const router = Router();

router.use("/users", authRouter);
router.use("/auth", authRouter);
router.use("/boards", boardsRouter);


export default router;