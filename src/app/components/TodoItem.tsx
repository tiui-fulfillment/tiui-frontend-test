import React, { useState } from 'react';

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
              Guardar
            </button>
            <button className="btn btn-outline-secondary btn-sm ms-2" onClick={handleCancelEdit}>
              Cancelar
            </button>
          </div>
        </>
      ) : (
        <>
          <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
            {todo.text}
          </span>
          <div>
            <button className="btn btn-secondary btn-sm ms-2" onClick={() => onToggleComplete(index)}>
              {todo.completed ? 'Desmarcar' : 'Completar'}
            </button>
            <button className="btn btn-primary btn-sm ms-2" onClick={handleEdit}>
              Editar
            </button>
            <button className="btn btn-danger btn-sm ms-2" onClick={() => onRemoveTodo(index)}>
              Borrar
            </button>
          </div>
        </>
      )}
    </li>
  );
};

export default TodoItem;
