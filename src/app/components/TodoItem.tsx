'use client';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faEdit, faTrash, faSave, faTimes } from '@fortawesome/free-solid-svg-icons';

interface Todo {
  text: string;
  completed: boolean;
}

interface TodoItemProps {
  index: number;
  todo: Todo;
  onToggleComplete: (index: number) => void;
  onEditTodo: (index: number, newText: string) => void;
  onRemoveTodo: (index: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ index, todo, onToggleComplete, onEditTodo, onRemoveTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(todo.text);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setEditedText(todo.text);
  };

  const handleSaveEdit = () => {
    onEditTodo(index, editedText);
    setIsEditing(false);
  };

  return (
    <li className={`list-group-item d-flex justify-content-between align-items-center ${todo.completed ? 'bg-light text-muted' : ''}`}>
      {isEditing ? (
        <>
          <input
            type="text"
            className={`form-control ${todo.completed ? 'bg-light text-muted' : ''}`}
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
          />
          <div className="d-flex">
            <button className="btn btn-outline-secondary btn-sm ms-2 text-muted border-0" onClick={handleSaveEdit}>
              <FontAwesomeIcon icon={faSave} />
            </button>
            <button className="btn btn-outline-secondary btn-sm ms-2 text-muted border-0" onClick={handleCancelEdit}>
              <FontAwesomeIcon icon={faTimes} />
            </button>
          </div>
        </>
      ) : (
        <>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              checked={todo.completed}
              onChange={() => onToggleComplete(index)}
              id={`todo-checkbox-${index}`}
            />
            <label
              className={`form-check-label ${todo.completed ? 'text-muted' : ''}`}
              htmlFor={`todo-checkbox-${index}`}
            >
              {todo.text}
            </label>
          </div>
          <div className="d-flex">
            <button className={`btn btn-outline-secondary btn-sm ms-2 text-muted border-0 ${todo.completed ? 'bg-light' : ''}`} onClick={handleEdit}>
              <FontAwesomeIcon icon={faEdit} />
            </button>
            <button className={`btn btn-outline-secondary btn-sm ms-2 text-muted border-0 ${todo.completed ? 'bg-light' : ''}`} onClick={() => onRemoveTodo(index)}>
              <FontAwesomeIcon icon={faTrash} />
            </button>
          </div>
        </>
      )}
    </li>
  );
};

export default TodoItem;
