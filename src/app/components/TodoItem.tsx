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
    <li className="list-group-item d-flex justify-content-between align-items-center">
      {isEditing ? (
        <>
          <input
            type="text"
            className="form-control"
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
          />
          <div>
            <button className="btn btn-success btn-sm ms-2" onClick={handleSaveEdit}>
              <FontAwesomeIcon icon={faSave} />
            </button>
            <button className="btn btn-outline-secondary btn-sm ms-2" onClick={handleCancelEdit}>
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
              className={`form-check-label ${todo.completed ? 'completed' : ''}`}
              htmlFor={`todo-checkbox-${index}`}
            >
              {todo.text}
            </label>
          </div>
          <div>
            <button className="btn btn-primary btn-sm ms-2" onClick={handleEdit}>
              <FontAwesomeIcon icon={faEdit} />
            </button>
            <button className="btn btn-danger btn-sm ms-2" onClick={() => onRemoveTodo(index)}>
              <FontAwesomeIcon icon={faTrash} />
            </button>
          </div>
        </>
      )}
    </li>
  );
};

export default TodoItem;
