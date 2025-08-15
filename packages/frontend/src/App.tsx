import { useState } from "react";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import TaskFilter from "./components/TaskFilter";
import TaskSort from "./components/TaskSort";
import ThemeToggle from "./components/ThemeToggle";
import type { Task } from "../../backend/src/interfaces/Task";
import type { FilterOptions, SortOrderOptions } from "./types";
const App = () => {
  const [filter, setFilter] = useState<FilterOptions>("all");
  const [editingTask, setEditingTask] = useState<Task | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState<SortOrderOptions>("date");

  const handleEdit = (task: Task) => {
    setEditingTask(task);
  };

  const handleCancelEdit = () => {
    setEditingTask(null);
  };

  return (
    <div className="container">
      <h1>Task Manager</h1>
      <div className="controls">
        <TaskFilter currentFilter={filter} setFilter={setFilter} />
        <input
          type="text"
          placeholder="Search tasks..."
          className="search-input"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <TaskSort sortOrder={sortOrder} setSortOrder={setSortOrder} />
        <ThemeToggle />
      </div>
      <TaskList filter={filter} onEdit={handleEdit} searchTerm={searchTerm} sortOrder={sortOrder} />
      <TaskForm editingTask={editingTask} onCancelEdit={handleCancelEdit} />
    </div>
  );
};

export default App;
