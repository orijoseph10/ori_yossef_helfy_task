import { useTasks } from "../hooks/useTasks";
import TaskItem from "./TaskItem";
import type { Task } from "../../../backend/src/interfaces/Task";

interface Props {
  filter: "all" | "completed" | "pending";
  onEdit: (task: Task) => void;
}

const TaskList = ({ filter, onEdit }: Props) => {
  const { tasks, isLoading, isError, error } = useTasks();

  if (isLoading) return <div className="loading">Loading tasks...</div>;
  if (isError) return <div className="error">Error: {error?.message}</div>;

  const filteredTasks = tasks?.filter((task) => {
    if (filter === "completed") return task.completed;
    if (filter === "pending") return !task.completed;
    return true;
  });

  return (
    <div className="task-list">
      {filteredTasks && filteredTasks.length > 0 ? (
        filteredTasks.map((task) => <TaskItem key={task.id} task={task} onEdit={onEdit} />)
      ) : (
        <p>No tasks found.</p>
      )}
    </div>
  );
};

export default TaskList;
