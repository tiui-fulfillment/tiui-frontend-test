import { TodoList } from '../components/types/todo';

export const addLocal = (todoList: TodoList) => {
  const objectTodo = JSON.stringify(todoList);
  localStorage.setItem('todos', objectTodo);
};

export const getTodos = (): TodoList => {
  const todoslocal = localStorage.getItem('todos');
  const todoList: TodoList = todoslocal ? JSON.parse(todoslocal) : [];
  return todoList;
};
