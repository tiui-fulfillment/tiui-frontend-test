/* eslint-disable react/prop-types */
import TodoItem from "./todo-item"
import { Typography, Box } from "@mui/material"

export const TodoList = ({todos, updTodoCheck, updateTodo, deleteTodo, showAlertStatus}) => 
    <Box
    py={1}
    px={3}
    sx={{
      overflow: "hidden",
      overflowY: "auto",
      height: "100%",
      display: "flex",
      flexDirection: "column",
    }}
  >
    {todos.length > 0 ? (
      todos.map((todo) => (
        <TodoItem
          key={todo.todoId}
          todoId={todo.todoId}
          todo={todo.todo}
          completed={todo.completed}
          updTodoCheck={updTodoCheck}
          updateTodo={updateTodo}
          deleteTodo={deleteTodo}
          showAlertStatus={showAlertStatus}
        />
      ))
    ) : (
      <Typography
        variant="p"
        component="p"
        fontSize={"1rem"}
        color={"black"}
        textAlign={"center"}
      >
        Parece que no hay tareas.
      </Typography>
    )}
    {}
  </Box>
