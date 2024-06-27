import { ReactNode, useState } from "react";
import { TodosContext } from "./TodosContext";
import { Todo } from "../types";

export function TodosProvider({ children }: { children: ReactNode }) {
  const [todos, setTodos] = useState<Todo[]>([]);

  function addTodo(description: string) {
    const todo: Todo = {
      id: crypto.randomUUID() as string,
      description,
      completed: false,
    };
    setTodos((prevTodos) => {
      return [...prevTodos, todo];
    });
  }

  function editTodo(todo: Todo) {
    setTodos((prevTodos) => {
      return prevTodos.map((currTodo) => {
        if (currTodo.id === todo.id) {
          return todo;
        } else {
          return currTodo;
        }
      });
    });
  }

  function deleteTodo(id: string) {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== id);
    });
  }

  return (
    <TodosContext.Provider value={{ todos, addTodo, editTodo, deleteTodo }}>
      {children}
    </TodosContext.Provider>
  );
}
