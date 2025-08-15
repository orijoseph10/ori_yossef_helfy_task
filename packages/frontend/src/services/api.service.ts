import { apiClient } from "../constants";
import type { Task, CreateTaskDto, UpdateTaskDto } from "../../../backend/src/interfaces/Task";

export const getTasks = async (): Promise<Task[]> => {
  try {
    const response = await apiClient.get("/tasks");
    return response.data;
  } catch (error) {
    console.error("Failed to fetch tasks:", error);
    throw new Error("Failed to fetch tasks");
  }
};

export const createTask = async (task: CreateTaskDto): Promise<Task> => {
  try {
    const response = await apiClient.post("/tasks", task);
    return response.data;
  } catch (error) {
    console.error("Failed to create task:", error);
    throw new Error("Failed to create task");
  }
};

export const updateTask = async ({ id, ...task }: { id: number } & UpdateTaskDto): Promise<Task> => {
  try {
    const response = await apiClient.put(`/tasks/${id}`, task);
    return response.data;
  } catch (error) {
    console.error("Failed to update task:", error);
    throw new Error("Failed to update task");
  }
};

export const toggleTaskCompletion = async (id: number): Promise<Task> => {
  try {
    const response = await apiClient.patch(`/tasks/${id}/toggle`);
    return response.data;
  } catch (error) {
    console.error("Failed to toggle task completion:", error);
    throw new Error("Failed to toggle task completion");
  }
};

export const deleteTask = async (id: number): Promise<void> => {
  try {
    await apiClient.delete(`/tasks/${id}`);
  } catch (error) {
    console.error("Failed to delete task:", error);
    throw new Error("Failed to delete task");
  }
};
