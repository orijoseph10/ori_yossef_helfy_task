import { z } from "zod";
export interface Task {
  id: number;
  title: string;
  description: string;
  completed: boolean;
  createdAt: Date;
  priority: "low" | "medium" | "high";
}

export const createTaskSchema = z.object({
  title: z.string().min(1, "Title cannot be empty."),
  description: z.string().min(1, "Description cannot be empty."),
  priority: z.enum(["low", "medium", "high"]).optional().default("low"),
});

export const updateTaskSchema = z.object({
  title: z.string().min(1, "Title cannot be empty.").optional(),
  description: z.string().min(1, "Description cannot be empty.").optional(),
  priority: z.enum(["low", "medium", "high"]).optional(),
  completed: z.boolean().optional(),
});

export type CreateTaskDto = z.infer<typeof createTaskSchema>;
export type UpdateTaskDto = z.infer<typeof updateTaskSchema>;
