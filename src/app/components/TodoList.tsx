'use client'
import { useState } from 'react';

const TodoList = () => {
  const [todos, setTodos] = useState<string[]>([]);
  const [newTodo, setNewTodo] = useState<string>('');
  const [editIndex, setEditIndex] = useState<number | null>(null);
  const [editedTodo, setEditedTodo] = useState<string>('');

  const handleAddTodo = () => {
    if (newTodo.trim() !== '') {
      setTodos([...todos, newTodo]);
      setNewTodo('');
    }
  };

  const handleRemoveTodo = (index: number) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
    if (editIndex === index) {
      setEditIndex(null);
      setEditedTodo('');
    }
  };

  const handleEditStart = (index: number) => {
    setEditIndex(index);
    setEditedTodo(todos[index]);
  };

  const handleEditCancel = () => {
    setEditIndex(null);
    setEditedTodo('');
  };

  const handleEditSave = () => {
    if (editedTodo.trim() !== '') {
      const updatedTodos = [...todos];
      updatedTodos[editIndex as number] = editedTodo;
      setTodos(updatedTodos);
      setEditIndex(null);
      setEditedTodo('');
    }
  };

  return (
    <div className="container mt-4">
      <h1>Lista de tareas</h1>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Añadir tarea"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button className="btn btn-primary ms-2" onClick={handleAddTodo}>
          Añadir tarea
        </button>
      </div>
      <ul className="list-group">
        {todos.map((todo, index) => (
          <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
            {editIndex === index ? (
              <>
                <input
                  type="text"
                  className="form-control"
                  value={editedTodo}
                  onChange={(e) => setEditedTodo(e.target.value)}
                />
                <div>
                  <button className="btn btn-success btn-sm ms-2" onClick={handleEditSave}>
                    Guardar
                  </button>
                  <button className="btn btn-outline-secondary btn-sm ms-2" onClick={handleEditCancel}>
                    Cancelar
                  </button>
                </div>
              </>
            ) : (
              <>
                <span>{todo}</span>
                <div>
                  <button className="btn btn-primary btn-sm ms-2" onClick={() => handleEditStart(index)}>
                    Editar
                  </button>
                  <button className="btn btn-danger btn-sm ms-2" onClick={() => handleRemoveTodo(index)}>
                    Borrar
                  </button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
