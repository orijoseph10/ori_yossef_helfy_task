import React, { useState, useEffect } from "react";
import { useTasks } from "../../hooks/useTasks";
import type { Task } from "../../../../backend/src/interfaces/Task";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./AddTaskForm.css";

interface Props {
  editingTask: Task | null;
  onCancelEdit: () => void;
}

const AddTaskForm = ({ editingTask, onCancelEdit }: Props) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState<"low" | "medium" | "high">("medium");
  const [dueDate, setDueDate] = useState<Date | null>(null);
  const { createTask, updateTask } = useTasks();

  useEffect(() => {
    if (editingTask) {
      setTitle(editingTask.title);
      setDescription(editingTask.description);
      setPriority(editingTask.priority);
      setDueDate(editingTask.dueDate ? new Date(editingTask.dueDate) : null);
    } else {
      setTitle("");
      setDescription("");
      setPriority("medium");
      setDueDate(null);
    }
  }, [editingTask]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !description.trim()) return;

    const taskData = {
      title,
      description,
      priority,
      dueDate: dueDate || undefined,
    };

    if (editingTask) {
      updateTask({ id: editingTask.id, ...taskData });
      onCancelEdit();
    } else {
      createTask(taskData);
    }

    setTitle("");
    setDescription("");
    setPriority("medium");
    setDueDate(null);
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <h1>{editingTask ? "Edit Existing Task" : "Add New Task"}</h1>
      <input type="text" placeholder="Task Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
      <textarea
        placeholder="Task Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <div className="form-row">
        <select value={priority} onChange={(e) => setPriority(e.target.value as "low" | "medium" | "high")}>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
        <DatePicker selected={dueDate} onChange={(date: Date | null) => setDueDate(date)} placeholderText="Due Date" />
      </div>
      <div className="form-actions">
        <button type="submit">{editingTask ? "Update Task" : "Add Task"}</button>
        {editingTask && (
          <button type="button" onClick={onCancelEdit}>
            Cancel
          </button>
        )}
      </div>
    </form>
  );
};

export default AddTaskForm;
