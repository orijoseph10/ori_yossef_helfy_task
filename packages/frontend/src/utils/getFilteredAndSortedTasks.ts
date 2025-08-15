import type { Task } from "../../../backend/src/interfaces/Task";
import type { SortOrderOptions, FilterOptions } from "../types";

const priorityOrder = { high: 1, medium: 2, low: 3 };
export const getFilteredAndSortedTasks = (
  tasks: Task[],
  filter: FilterOptions,
  searchTerm: string,
  sortOrder: SortOrderOptions
) => {
  if (!tasks) return [];
  return tasks
    ?.filter((task) => {
      if (filter === "completed") return task.completed;
      if (filter === "pending") return !task.completed;
      return true;
    })
    .filter(
      (task) =>
        task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        task.description.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      switch (sortOrder) {
        case "priority":
          return priorityOrder[a.priority] - priorityOrder[b.priority];
        case "title":
          return a.title.localeCompare(b.title);
        case "date":
        default:
          return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
      }
    });
};
