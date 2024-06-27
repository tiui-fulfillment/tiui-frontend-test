import { useContext } from "react";
import { TodosContext } from "../Context/TodosContext";

export function useTodos() {
  const todosContext = useContext(TodosContext);
  if (todosContext === null) {
    throw new Error("Must use withing provider");
  }

  return todosContext;
}
