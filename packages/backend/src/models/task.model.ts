import { CreateTaskDto, UpdateTaskDto, Task } from "../interfaces/Task";

// Database data
let nextId = 3;
let tasks: Task[] = [
  {
    id: 1,
    title: "Task 1",
    description: "Task 1 description",
    completed: true,
    createdAt: new Date(),
    priority: "high",
  },
  {
    id: 2,
    title: "Task 2",
    description: "Task 2 description",
    completed: false,
    createdAt: new Date(),
    priority: "medium",
  },
];

export const getAllTasks = (): Task[] => {
  return tasks;
};

export const getTaskById = (id: number): Task | undefined => {
  return tasks.find((task) => task.id === id);
};

export const createTask = (taskData: CreateTaskDto): Task => {
  const newTask: Task = {
    id: nextId++,
    ...taskData,
    completed: false,
    createdAt: new Date(),
  };
  tasks.push(newTask);
  return newTask;
};

export const updateTask = (id: number, taskData: UpdateTaskDto): Task | null => {
  const taskIndex = tasks.findIndex((task) => task.id === id);
  if (taskIndex === -1) {
    return null;
  }
  tasks[taskIndex] = { ...tasks[taskIndex], ...taskData };
  return tasks[taskIndex];
};

export const deleteTask = (id: number): boolean => {
  const initialLength = tasks.length;
  tasks = tasks.filter((task) => task.id !== id);
  return tasks.length < initialLength;
};
