import type { FilterOptions } from "../../types";
import "./TaskFilter.css";

interface Props {
  currentFilter: FilterOptions;
  setFilter: (filter: FilterOptions) => void;
}

const TaskFilter = ({ currentFilter, setFilter }: Props) => {
  return (
    <div className="task-filter">
      <button className={currentFilter === "all" ? "active" : ""} onClick={() => setFilter("all")}>
        All
      </button>
      <button className={currentFilter === "completed" ? "active" : ""} onClick={() => setFilter("completed")}>
        Completed
      </button>
      <button className={currentFilter === "pending" ? "active" : ""} onClick={() => setFilter("pending")}>
        Pending
      </button>
    </div>
  );
};

export default TaskFilter;
