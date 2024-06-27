'use client'
import { useState } from 'react';

const TodoList = () => {
  const [todos, setTodos] = useState<string[]>([]);
  const [newTodo, setNewTodo] = useState<string>('');

  const handleAddTodo = () => {
    if (newTodo.trim() !== '') {
      setTodos([...todos, newTodo]);
      setNewTodo('');
    }
  };

  const handleRemoveTodo = (index: number) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div className="container">
      <h1>Lista de tareas Luis García</h1>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Añadir tarea"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button className="btn" onClick={handleAddTodo}>
          Añadir tarea
        </button>
      </div>
      <ul className="list-group">
        {todos.map((todo, index) => (
          <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
            {todo}
            <button className="btn" onClick={() => handleRemoveTodo(index)}>
              Borrar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
