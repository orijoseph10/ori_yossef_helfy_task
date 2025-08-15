import type { Task } from "../../../backend/interfaces/Task";
import { useTasks } from "../hooks/useTasks";

interface Props {
  task: Task;
  onEdit: (task: Task) => void;
}

const TaskItem = ({ task, onEdit }: Props) => {
  const { deleteTask, toggleTask } = useTasks();

  const handleDelete = () => {
    if (window.confirm(`Are you sure you want to delete "${task.title}"?`)) {
      deleteTask(task.id);
    }
  };

  const getPriorityClassName = () => {
    return `priority-${task.priority}`;
  };

  return (
    <div className={`task-item ${task.completed ? "completed" : ""}`}>
      <div className="task-details">
        <h3>{task.title}</h3>
        <p>{task.description}</p>
        <span className={`priority-badge ${getPriorityClassName()}`}>{task.priority}</span>
      </div>
      <div className="task-actions">
        <button onClick={() => toggleTask(task.id)}>{task.completed ? "Mark Pending" : "Mark Completed"}</button>
        <button onClick={() => onEdit(task)}>Edit</button>
        <button onClick={handleDelete} className="delete-btn">
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
