import { Typography, Box } from "@mui/material";
import { useTodos } from "../hooks/useTodos";
import { ShowState } from "../types";
import { useState } from "react";
import FilterFields from "./FilterFields";
import TodoCard from "./TodoCard";

export default function TodoList() {
  const { todos } = useTodos();
  const [filterName, setFilterName] = useState("");
  const [showedTodos, setShowedTodos] = useState<ShowState>(ShowState.All);

  const filteredTodos = todos.filter((todo) => {
    if (showedTodos !== ShowState.All) {
      if (showedTodos === ShowState.Completed && !todo.completed) {
        return false;
      }
      if (showedTodos === ShowState.NotCompleted && todo.completed) {
        return false;
      }
    }
    return todo.description.toLowerCase().includes(filterName.toLowerCase());
  });

  return (
    <Box component="main" sx={{ p: 2, mt: 12 }}>
      <Typography variant="h4">To Do List</Typography>
      <FilterFields
        filterName={filterName}
        showedTodos={showedTodos}
        setFilterName={setFilterName}
        setShowedTodos={setShowedTodos}
      />
      {filteredTodos.map((todo) => (
        <TodoCard key={todo.id} todo={todo} />
      ))}
    </Box>
  );
}
