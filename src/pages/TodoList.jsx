import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import Todo from "../components/todo/Todo";
import AddTodo from "../components/todo/AddTodo";
import FilterTodo from "../components/todo/FilterTodo";
import { Stack, Typography } from "@mui/material";

export default function TodoList() {
  const [todoList, setTodoList] = useState([]);
  const [todoFilter, setTodoFilter] = useState("all");

  const filteredTodoList =
    todoFilter === "all"
      ? todoList
      : todoList.filter((todo) => todo.status == (todoFilter == "true"));

  useEffect(() => {
    getTodosLocalStorage();
  }, []);

  useEffect(() => {
    setTodosLocalStorage();
  }, [todoList]);

  const getTodosLocalStorage = () => {
    const storedTodos = JSON.parse(localStorage.getItem("todos"));
    if (storedTodos) {
      setTodoList(storedTodos);
    }
  };

  const setTodosLocalStorage = () => {
    localStorage.setItem("todos", JSON.stringify(todoList));
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
        }}
      >
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={2}
          marginY={"40px"}
        >
          <FilterTodo todoFilter={todoFilter} setTodoFilter={setTodoFilter} />
          <AddTodo todoList={todoList} setTodoList={setTodoList} />
        </Stack>

        <Grid container spacing={1} sx={{ flexGrow: 1 }}>
          {filteredTodoList.length > 0 ? (
            filteredTodoList.map((tl, index) => (
              <>
              {
                  index > 0 && <Divider component="li" sx={{ width: "100%" }} />
                }
                <Grid key={index} item sm={12} width={"100%"}>
                  <Todo
                    key={index}
                    todo={tl}
                    todoList={todoList}
                    setTodoList={setTodoList}
                  />
                </Grid>
                
              </>
            ))
          ) : (
            <Typography align="end" variant="h3">Sin resultados</Typography>
          )}
        </Grid>
      </Box>
    </>
  );
}
