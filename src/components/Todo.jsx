import { useState } from "react";
import { Container, Box, Typography } from "@mui/material";
import TodoList from "./TodoList";
import AddTodo from "./AddTodo";
import Filter from "./FIlter";
import useTodoService from "../services/todoService";

const Todo = () => {
  const { todos, addTodo, editTodo, deleteTodo, toggleTodo } = useTodoService();
  const [filter, setFilter] = useState("all");

  const filteredTodos = todos.filter((todo) => {
    if (filter === "completed") return todo.completed;
    if (filter === "pending") return !todo.completed;
    return true;
  });

  return (
    <Container sx={{ marginBlock: "5rem" }}>
      <Box
        sx={{
          bgcolor: "#f8f9fa",
          height: "100%",
          borderRadius: "1.5rem",
          padding: "4rem",
        }}
      >
        <Typography variant="h4" align="center" color="primary" gutterBottom>
          My TodoList
        </Typography>
        <AddTodo addTodos={addTodo} />
        <Filter setFilter={setFilter} />
        <TodoList
          todo={filteredTodos}
          editTodo={editTodo}
          deleteTodo={deleteTodo}
          toggleTodo={toggleTodo}
        />
      </Box>
    </Container>
  );
};

export default Todo;
