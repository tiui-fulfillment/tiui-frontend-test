import { useState } from "react";
import { useTodos } from "../hooks/useTodos";
import { Todo } from "../types";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Checkbox,
  TextField,
  Typography,
} from "@mui/material";

export default function TodoCard({ todo }: { todo: Todo }) {
  const { editTodo, deleteTodo } = useTodos();
  const [isComplete, setIsComplete] = useState(todo.completed);
  const [isEditing, setIsEditing] = useState(false);
  const [description, setDescription] = useState(todo.description);

  function handleCompleteChange() {
    editTodo({ ...todo, completed: !isComplete });
    setIsComplete((prev) => !prev);
  }

  function handleEditing() {
    if (isEditing) {
      const updatedTodo = { ...todo, description: description };
      editTodo(updatedTodo);
    }
    setIsEditing((prev) => !prev);
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === "Enter") {
      handleEditing();
    }
  }

  function handleDelete() {
    deleteTodo(todo.id);
  }

  return (
    <Card
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        p: 1,
        mb: 1,
        opacity: isComplete ? 0.7 : 1,
      }}
    >
      <CardContent
        sx={{
          display: "flex",
          alignItems: "center",
          textDecoration: isComplete ? "line-through" : "none",
        }}
      >
        <Checkbox
          checked={isComplete}
          onChange={handleCompleteChange}
          disabled={isEditing}
        />
        {isEditing ? (
          <TextField
            autoFocus
            value={description}
            variant="standard"
            onChange={(e) => setDescription(e.target.value)}
            onKeyDown={handleKeyDown}
          />
        ) : (
          <Typography
            variant="body1"
            onClick={() => !isComplete && handleEditing()}
          >
            {todo.description}
          </Typography>
        )}
      </CardContent>
      <CardActions>
        <Button
          variant="outlined"
          color="primary"
          sx={{ mr: 1 }}
          disabled={isComplete}
          onClick={handleEditing}
        >
          {isEditing ? "Save" : "Edit"}
        </Button>
        <Button variant="outlined" color="warning" onClick={handleDelete}>
          Delete
        </Button>
      </CardActions>
    </Card>
  );
}
