import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

interface AddTodoProps {
  onAddTodo: (text: string) => void;
}

const AddTodo: React.FC<AddTodoProps> = ({ onAddTodo }) => {
  const [newTodo, setNewTodo] = useState('');
  const [warning, setWarning] = useState('');

  const handleAdd = () => {
    if (newTodo.trim() !== '') {
      onAddTodo(newTodo);
      setNewTodo('');
      setWarning('');
    } else {
      setWarning('El campo no puede estar vacío');
    }
  };

  return (
    <div className="mb-3">
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="Añadir tarea"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button className="btn btn-primary ms-2" onClick={handleAdd}>
          <FontAwesomeIcon icon={faPlus} /> {/* Plus sign icon */}
        </button>
      </div>
      {warning && <div className="text-danger mt-2">{warning}</div>}
    </div>
  );
};

export default AddTodo;
