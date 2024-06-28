// components/AddTodo.js
import { useState } from "react";
import PropTypes from "prop-types";
import { TextField, Button, Box } from "@mui/material";

const AddTodo = ({ addTodos }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      addTodos(text);
      setText("");
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      display="flex"
      sx={{ marginBlock: "3rem", flexDirection: { xs: "column", md: "row" } }}
    >
      <TextField
        id="outlined-basic"
        label="Agregar nuevo to-do"
        variant="outlined"
        fullWidth
        value={text}
        onChange={(e) => setText(e.target.value)}
        sx={{ backgroundColor: "#FFFFFF" }}
      />
      <Button
        type="submit"
        variant="contained"
        sx={{
          marginInline: { md: "1rem", xs: "0" },
          marginBlock: { md: "0", xs: "1rem" },
        }}
      >
        Agregar
      </Button>
    </Box>
  );
};

AddTodo.propTypes = {
  addTodos: PropTypes.func.isRequired,
};

export default AddTodo;
