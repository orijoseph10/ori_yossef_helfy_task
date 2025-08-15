import "./ConfirmDelete.css";
export const ConfirmDelete = ({
  closeToast,
  taskId,
  deleteTask,
}: {
  closeToast: () => void;
  taskId: number;
  deleteTask: (id: number) => void;
}) => (
  <div>
    <p>Are you sure you want to delete this task?</p>
    <button
      className="toast-btn toast-btn-yes"
      onClick={() => {
        deleteTask(taskId);
        closeToast();
      }}
    >
      Yes
    </button>
    <button className="toast-btn toast-btn-no" onClick={closeToast}>
      No
    </button>
  </div>
);
