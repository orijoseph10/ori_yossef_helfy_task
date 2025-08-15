import { Request, Response } from "express";
import * as TaskModel from "../models/task.model";
import { createTaskSchema, updateTaskSchema } from "../interfaces/Task";

export const getAllTasks = (req: Request, res: Response): void => {
  const tasks = TaskModel.getAllTasks();
  res.status(200).json(tasks);
};

export const createTask = (req: Request, res: Response): void => {
  const validationResult = createTaskSchema.safeParse(req.body);

  if (!validationResult.success) {
    res.status(400).json({ errors: validationResult.error });
    return;
  }

  const createdTask = TaskModel.createTask(validationResult.data);
  res.status(201).json(createdTask);
};

export const updateTask = (req: Request, res: Response): void => {
  const id = Number(req.params.id);
  if (isNaN(id)) {
    res.status(400).json({ message: "Invalid task ID." });
    return;
  }

  const validationResult = updateTaskSchema.safeParse(req.body);

  if (!validationResult.success) {
    res.status(400).json({ errors: validationResult.error });
    return;
  }

  if (Object.keys(validationResult.data).length === 0) {
    res.status(400).json({ message: "Request body must contain at least one field to update." });
    return;
  }

  const updatedTask = TaskModel.updateTask(id, validationResult.data);

  if (!updatedTask) {
    res.status(404).json({ message: "Task not found." });
    return;
  }

  res.status(200).json(updatedTask);
};

export const deleteTask = (req: Request, res: Response): void => {
  const id = Number(req.params.id);
  if (isNaN(id)) {
    res.status(400).json({ message: "Invalid task ID." });
    return;
  }
  const success = TaskModel.deleteTask(id);

  if (!success) {
    res.status(404).json({ message: "Task not found." });
    return;
  }

  res.status(204).send();
};

export const toggleTask = (req: Request, res: Response): void => {
  const id = Number(req.params.id);
  if (isNaN(id)) {
    res.status(400).json({ message: "Invalid task ID." });
    return;
  }
  const task = TaskModel.getTaskById(id);

  if (!task) {
    res.status(404).json({ message: "Task not found." });
    return;
  }

  const updatedTask = TaskModel.updateTask(id, { completed: !task.completed });
  res.status(200).json(updatedTask);
};
