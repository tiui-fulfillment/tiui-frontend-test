'use client';
import React, { useState } from 'react';
import TodoItem from './TodoItem';

interface Todo {
  text: string;
  completed: boolean;
}

interface TodoListProps {
  todos: Todo[];
  onToggleComplete: (index: number) => void;
  onEditTodo: (index: number, newText: string) => void;
  onRemoveTodo: (index: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, onToggleComplete, onEditTodo, onRemoveTodo }) => {
  const [filter, setFilter] = useState<'all' | 'completed' | 'pending'>('all');

  const filteredTodos = todos.filter(todo => {
    if (filter === 'all') return true;
    if (filter === 'completed') return todo.completed;
    if (filter === 'pending') return !todo.completed;
    return true;
  });

  const handleFilterChange = (newFilter: 'all' | 'completed' | 'pending') => {
    setFilter(newFilter);
  };

  return (
    <div className="container mt-4">
      <div className="mb-3">
        <div className="btn-group">
          <button
            className={`btn btn-outline-primary ${filter === 'all' ? 'active' : ''}`}
            onClick={() => handleFilterChange('all')}
          >
            Todas
          </button>
          <button
            className={`btn btn-outline-success ${filter === 'completed' ? 'active' : ''}`}
            onClick={() => handleFilterChange('completed')}
          >
            Completadas
          </button>
          <button
            className={`btn btn-outline-warning ${filter === 'pending' ? 'active' : ''}`}
            onClick={() => handleFilterChange('pending')}
          >
            Pendientes
          </button>
        </div>
      </div>
      <ul className="list-group">
        {filteredTodos.map((todo, index) => (
          <TodoItem
            key={index}
            index={index}
            todo={todo}
            onToggleComplete={onToggleComplete}
            onEditTodo={onEditTodo}
            onRemoveTodo={onRemoveTodo}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
