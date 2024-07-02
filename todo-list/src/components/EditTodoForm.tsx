import { TextField } from "@mui/material";
import { EditTodoFormProps } from "../types";
import "./Todo.css";
import { FormEvent, useState } from "react";

const EditTodoForm = ({ editTodo, todo }: EditTodoFormProps) => {
  const [value, setValue] = useState(todo.title);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    editTodo(value, todo.id);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="edit-todo-form"
      style={{
        marginTop: 20,
        marginBottom: 20,
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        padding: "0 16px",
      }}
    >
      <TextField
        id="standard-basic"
        label="Actualiza la tarea..."
        variant="standard"
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="form-input"
        placeholder="Actualiza la tarea..."
        fullWidth
        InputProps={{
          sx: {
            color: "#658147",
            "& .MuiInput-underline:before": {
              borderBottomColor: "#99bc85",
            },
            "& .MuiInput-underline:after": { borderBottomColor: "#99bc85" },
            "&:hover:not(.Mui-disabled):before": {
              borderBottomColor: "#99bc85",
            },
          },
        }}
        InputLabelProps={{
          sx: {
            color: "#658147",
            "&.Mui-focused": {
              color: "#658147",
            },
          },
        }}
      />
      <button type="submit" className="btn" style={{ width: "100%" }}>
        ✔️
      </button>
    </form>
  );
};

export default EditTodoForm;
