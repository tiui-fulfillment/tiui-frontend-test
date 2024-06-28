import {
  Card,
  Checkbox,
  Typography,
  Button,
  CardContent,
  CardActions,
  Box,
  TextField,
} from "@mui/material";
import { useTodos } from "../hooks/useTodos";
import { Todo } from "../types";
import { useState } from "react";

export default function TodoList() {
  const { todos } = useTodos();

  return (
    <Box component="main" sx={{ p: 2, mt: 12 }}>
      <Typography variant="h4">To Do List</Typography>
      {todos.map((todo) => (
        <TodoCard key={todo.id} todo={todo} />
      ))}
    </Box>
  );
}

function TodoCard({ todo }: { todo: Todo }) {
  const { editTodo } = useTodos();
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
          <Typography variant="body1">{todo.description}</Typography>
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
        <Button variant="outlined" color="warning">
          Delete
        </Button>
      </CardActions>
    </Card>
  );
}
