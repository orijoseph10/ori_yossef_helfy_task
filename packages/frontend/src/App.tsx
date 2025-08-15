import { useState } from "react";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import TaskFilter from "./components/TaskFilter";
import type { Task } from "../../backend/src/interfaces/Task";

const App = () => {
  const [filter, setFilter] = useState<"all" | "completed" | "pending">("all");
  const [editingTask, setEditingTask] = useState<Task | null>(null);

  const handleEdit = (task: Task) => {
    setEditingTask(task);
  };

  const handleCancelEdit = () => {
    setEditingTask(null);
  };

  return (
    <div className="container">
      <h1>Task Manager</h1>
      <TaskFilter currentFilter={filter} setFilter={setFilter} />
      <TaskList filter={filter} onEdit={handleEdit} />
      <TaskForm editingTask={editingTask} onCancelEdit={handleCancelEdit} />
    </div>
  );
};

export default App;
