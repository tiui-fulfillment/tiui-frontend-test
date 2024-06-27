import React, { useState } from 'react';

interface AddTodoProps {
  onAddTodo: (text: string) => void;
}

const AddTodo: React.FC<AddTodoProps> = ({ onAddTodo }) => {
  const [newTodo, setNewTodo] = useState('');

  const handleAdd = () => {
    if (newTodo.trim() !== '') {
      onAddTodo(newTodo);
      setNewTodo('');
    }
  };

  return (
    <div className="mb-3">
      <input
        type="text"
        className="form-control"
        placeholder="Añadir tarea"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button className="btn btn-primary ms-2" onClick={handleAdd}>
        Añadir tarea
      </button>
    </div>
  );
};

export default AddTodo;
