// components/TodoItem.js
import { useState } from "react";
import PropTypes from "prop-types";
import {
  Box,
  Typography,
  IconButton,
  Checkbox,
  TextField,
  Button,
} from "@mui/material";
import { Edit, Delete } from "@mui/icons-material";

const TodoItem = ({ todo, editTodo, deleteTodo, toggleTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    editTodo(todo.id, newText);
    setIsEditing(false);
  };

  return (
    <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
      <Checkbox checked={todo.completed} onChange={() => toggleTodo(todo.id)} />
      {isEditing ? (
        <TextField
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
          variant="outlined"
          size="small"
          sx={{ flexGrow: 1, marginRight: "1rem" }}
        />
      ) : (
        <Typography
          variant="body1"
          sx={{
            flexGrow: 1,
            textDecoration: todo.completed ? "line-through" : "none",
          }}
        >
          {todo.text}
        </Typography>
      )}
      {isEditing ? (
        <Button onClick={handleSave} variant="contained" size="small">
          Save
        </Button>
      ) : (
        <>
          <IconButton onClick={handleEdit}>
            <Edit />
          </IconButton>
          <IconButton onClick={() => deleteTodo(todo.id)}>
            <Delete />
          </IconButton>
        </>
      )}
    </Box>
  );
};

TodoItem.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
  editTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  toggleTodo: PropTypes.func.isRequired,
};

export default TodoItem;
