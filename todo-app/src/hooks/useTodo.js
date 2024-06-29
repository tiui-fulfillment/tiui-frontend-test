import { useEffect, useReducer, useState } from "react";
import { todoReducer } from "../todoReducer";

export const useTodo = () => {
  const initialState = [];
  const init = () => JSON.parse(localStorage.getItem("todos")) || [];

  const [todos, dispatch] = useReducer(todoReducer, initialState, init);
  const [filter, setFilter] = useState("all"); // Nueva variable de estado para el filtro

  const todosCount = todos.length;
  const pendientesTodos = todos.filter((todo) => !todo.done).length;

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleNewTodo = (todo) => {
    dispatch({ type: "Add Todo", payload: todo });
  };

  const handleDeleteTodo = (id) => {
    dispatch({ type: "Delete Todo", payload: id });
  };

  const handleCompleteTodo = (id) => {
    dispatch({ type: "Complete Todo", payload: id });
  };

  const handleUpdateTodo = (id, descripcion) => {
    dispatch({ type: "Update Todo", payload: { id, descripcion } });
  };

  // Nueva función para cambiar el filtro
  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  // Filtrar los todos según el filtro actual
  const filteredTodos = todos.filter((todo) => {
    if (filter === "completed") return todo.done;
    if (filter === "pending") return !todo.done;
    return true;
  });

  return {
    todos: filteredTodos,
    todosCount,
    pendientesTodos,
    handleNewTodo,
    handleDeleteTodo,
    handleCompleteTodo,
    handleUpdateTodo,
    handleFilterChange, // Exportar la función de cambio de filtro
    filter, // Exportar el filtro actual
  };
};
