import { useState } from 'react';
import { AddTodo } from '../shared/AddTodo/AddTodo';
import { Todos } from '../shared/Todos/Todos';
import { TodoList, TodoType } from '../types/todo';
import { INITIAL_lIST } from '../types/todo.const';

export function TodoPage() {
  const [todoList, setTodoList] = useState<TodoList>(INITIAL_lIST);

  const handleAddTodo = (todo: TodoType) => {
    setTodoList(todos => [...todos, todo]);
  };

  const handleChangeStatus = (idTodo: string) => {
    const todoChange = todoList.map(todo => {
      if (todo.id === idTodo) todo.completed = !todo.completed;
      return todo;
    });

    setTodoList(todoChange);
  };

  return (
    <>
      <AddTodo addTodo={handleAddTodo} />
      <Todos
        todoList={todoList}
        changeStatus={handleChangeStatus}
      />
    </>
  );
}
