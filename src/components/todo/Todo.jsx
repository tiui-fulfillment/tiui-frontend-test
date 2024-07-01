import { Button, Checkbox, Grid } from "@mui/material";
import { useState } from "react";
import FormTodo from "./FormTodo";

export default function Todo(props) {
  const [open, setOpen] = useState(false);

  const changeStatusTodo = (id) => {
    const updatedTodos = props.todoList.map((todo) =>
      todo.id === id ? { ...todo, status: !todo.status } : todo
    );
    props.setTodoList(updatedTodos);
  };

  const deleteTodo = (id) => {
    const todos = props.todoList.filter((todo) => todo.id !== id);
    props.setTodoList(todos);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const updateTodo = (todo) => {
    const todos = props.todoList.map((tl) => {
      if (tl.id == props.todo.id) {
        return {
          id: props.todo.id,
          name: todo.name,
          createdAt: props.todo.createdAt,
          status: props.todo.status,
        };
      } else {
        return tl;
      }
    });
    props.setTodoList(todos);
  };

  return (
    <>
      <Grid
        item
        sm={12}
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignItems: "center",
          background: props.todo.status ? "#ccffcc" : "#f0f0f0", // Verde muy clarito y gris muy clarito
        }}
      >
        <div>
          <Grid
            item
            sm={12}
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div>
              <h2>{props.todo.name}</h2>
              <label>{props.todo.createdAt}</label>
              <p>{props.todo.status ? "Realizado" : "Sin realizar"}</p>
            </div>
            <div>
              <Checkbox
                onClick={() => changeStatusTodo(props.todo.id)}
                checked={props.todo.status}
                sx={{
                  marginLeft: "20px",
                }}
              />
            </div>
          </Grid>
        </div>
        <div>
          <Grid
            item
            sm={12}
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Button
              onClick={() => deleteTodo(props.todo.id)}
              variant="contained"
              color="error"
              sx={{ marginRight: "4px" }}
            >
              Eliminar
            </Button>
            <Button onClick={() => handleClickOpen()} variant="contained">
              Editar
            </Button>
          </Grid>
        </div>
      </Grid>

      <FormTodo
        open={open}
        action="update"
        handleClose={handleClose}
        registerOrUpdateTodoInList={updateTodo}
        todo={props.todo}
      />
    </>
  );
}
