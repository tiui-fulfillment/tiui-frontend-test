import { TextField } from "@mui/material";
import { FormEvent, useState } from "react";

interface TodoFormProps {
  onSubmit: (newItem: string) => void;
}

const TodoForm = ({ onSubmit }: TodoFormProps) => {
  const [newItem, setNewItem] = useState("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (newItem === "") return;

    onSubmit(newItem);

    setNewItem("");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="new-item-form container"
      style={{ backgroundColor: "#D4E7C5" }}
    >
      <div className="form-col">
        <label htmlFor="item" className="form-title">
          ¿Qué tienes por hacer?
        </label>
        <div className="form-row">
          <TextField
            id="standard-basic"
            label="Escribe tus tareas aquí..."
            variant="standard"
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            type="text"
            className="form-input"
            placeholder="Ir al gimnasio..."
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

          <button className="btn">+</button>
        </div>
      </div>
    </form>
  );
};

export default TodoForm;
