import React from 'react';
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
  return (
    <ul className="list-group">
      {todos.map((todo, index) => (
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
  );
};

export default TodoList;
