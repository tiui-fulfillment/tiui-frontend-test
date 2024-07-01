import { useState } from "react";
import Button from "@mui/material/Button";
import FormTodo from "./FormTodo";

export default function AddTodo(props) {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const registerTodoInList = (todo) => {
    props.setTodoList([
      ...props.todoList,
      {
        id: props.todoList.length == 0 ? 1 : createIdTodo(),
        name: todo.name,
        createdAt: new Date().toLocaleString(),
        status: false,
      },
    ]);
  };

  const createIdTodo = () => {
    const ultimateTodo = props.todoList[props.todoList.length - 1];
    return ultimateTodo.id + 1;
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Agregar Todo
      </Button>
      <FormTodo
        open={open}
        action="add"
        handleClose={handleClose}
        registerOrUpdateTodoInList={registerTodoInList}
      />
    </div>
  );
}
