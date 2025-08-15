import { Router } from "express";
import { getAllTasks, createTask, updateTask, deleteTask, toggleTask } from "../controllers/task.controller";

const router = Router();

router.get("/", getAllTasks);
router.post("/", createTask);
router.put("/:id", updateTask);
router.delete("/:id", deleteTask);
router.patch("/:id/toggle", toggleTask);

export default router;
