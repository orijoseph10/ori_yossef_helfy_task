import { useTasks } from "../../hooks/useTasks";
import TaskItem from "../TaskItem/TaskItem";
import type { Task } from "../../../../backend/src/interfaces/Task";
import "./TaskList.css";
import type { FilterOptions, SortOrderOptions } from "../../types";
import { getFilteredAndSortedTasks } from "../../utils/getFilteredAndSortedTasks";

interface Props {
  filter: FilterOptions;
  onEdit: (task: Task) => void;
  searchTerm: string;
  sortOrder: SortOrderOptions;
}

const TaskList = ({ filter, onEdit, searchTerm, sortOrder }: Props) => {
  const { tasks, isLoading, isError, error } = useTasks();

  if (isLoading) return <div className="loading">Loading tasks...</div>;
  if (isError) return <div className="error">Error: {error?.message}</div>;

  const filteredAndSortedTasks = getFilteredAndSortedTasks(tasks || [], filter, searchTerm, sortOrder);

  return (
    <div className="task-list">
      {filteredAndSortedTasks && filteredAndSortedTasks.length > 0 ? (
        filteredAndSortedTasks.map((task) => <TaskItem key={task.id} task={task} onEdit={onEdit} />)
      ) : (
        <p>No tasks found.</p>
      )}
    </div>
  );
};

export default TaskList;
