import { createContext } from "react";
import { Todo } from "../types";

type TodosContextType = {
  todos: Todo[];
  addTodo: (description: string) => void;
  deleteTodo: (id: string) => void;
  editTodo: (todo: Todo) => void;
};

export const TodosContext = createContext<TodosContextType | null>(null);
