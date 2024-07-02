import "./Todo.css";
import ToggleButtonsMultiple from "./ExclusiveSelection";

const TodoFilters = ({
  filter,
  onFilterChange,
}: {
  filter: string;
  onFilterChange: (newFilter: string) => void;
}) => {
  return (
    <div className="filter-container">
      <ToggleButtonsMultiple filter={filter} onFilterChange={onFilterChange} />
    </div>
  );
};

export default TodoFilters;
