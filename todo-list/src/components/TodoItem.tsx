import { TodoItemProps } from "../types";
import "./Todo.css";

const TodoItem = ({
  completed,
  id,
  title,
  toggleTodo,
  editTodo,
  deleteTodo,
  handleDragStart,
  handleDragEnter,
  handleDragEnd,
}: TodoItemProps) => {
  const handleItemClick = (e: React.MouseEvent) => {
    if (!(e.target as HTMLElement).closest("button")) {
      toggleTodo(id, !completed);
    }
  };

  return (
    <li
      className={`todo-item ${completed ? "completed" : ""}`}
      onClick={handleItemClick}
      draggable
      onDragStart={handleDragStart}
      onDragEnter={handleDragEnter}
      onDragEnd={handleDragEnd}
      onDragOver={(e) => e.preventDefault()}
    >
      <label className="todo-label">
        <input
          type="checkbox"
          checked={completed}
          onChange={(e) => toggleTodo(id, e.target.checked)}
          onClick={(e) => e.stopPropagation()}
        />
        <div
          className={`todo-title ${completed ? "todo-title-completed" : ""}`}
        >
          {title}
        </div>
      </label>
      <div className="todo-buttons">
        <button onClick={() => editTodo(id)} className="btn btn-edit">
          Editar
        </button>
        <button onClick={() => deleteTodo(id)} className="btn btn-danger">
          &times;
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
