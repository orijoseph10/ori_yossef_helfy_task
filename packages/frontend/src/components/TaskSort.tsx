import type { SortOrderOptions } from "../types";

interface Props {
  sortOrder: SortOrderOptions;
  setSortOrder: (sortOrder: SortOrderOptions) => void;
}

const TaskSort = ({ sortOrder, setSortOrder }: Props) => {
  return (
    <div className="task-sort">
      <label htmlFor="sort-order">Sort by: </label>
      <select id="sort-order" value={sortOrder} onChange={(e) => setSortOrder(e.target.value as SortOrderOptions)}>
        <option value="date">Date</option>
        <option value="priority">Priority</option>
        <option value="title">Title</option>
      </select>
    </div>
  );
};

export default TaskSort;
