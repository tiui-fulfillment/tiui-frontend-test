import {
  Card,
  Checkbox,
  Typography,
  Button,
  CardContent,
  CardActions,
  Box,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  SelectChangeEvent,
} from "@mui/material";
import { useTodos } from "../hooks/useTodos";
import { Todo } from "../types";
import { useState } from "react";

enum ShowState {
  All = "All",
  Completed = "Completed",
  NotCompleted = "Not Completed",
}

export default function TodoList() {
  const { todos } = useTodos();
  const [filterName, setFilterName] = useState("");
  const [showedTodos, setShowedTodos] = useState<ShowState>(ShowState.All);

  const filteredTodos = todos.filter((todo) => {
    if (showedTodos !== ShowState.All) {
      if (showedTodos === ShowState.Completed && !todo.completed) {
        return false;
      }
      if (showedTodos === ShowState.NotCompleted && todo.completed) {
        return false;
      }
    }
    return todo.description.includes(filterName);
  });

  function handleSelect(event: SelectChangeEvent) {
    setShowedTodos(event.target.value as ShowState);
  }

  return (
    <Box component="main" sx={{ p: 2, mt: 12 }}>
      <Typography variant="h4">To Do List</Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          my: 2,
          alignItems: "center",
        }}
      >
        <FormControl>
          <InputLabel id="show-filter">Show</InputLabel>
          <Select
            labelId="show-filter"
            value={showedTodos}
            onChange={handleSelect}
            label="Show"
            size="small"
          >
            <MenuItem value={ShowState.All}>{ShowState.All}</MenuItem>
            <MenuItem value={ShowState.NotCompleted}>
              {ShowState.NotCompleted}
            </MenuItem>
            <MenuItem value={ShowState.Completed}>
              {ShowState.Completed}
            </MenuItem>
          </Select>
        </FormControl>

        <TextField
          value={filterName}
          onChange={(e) => setFilterName(e.target.value)}
          label="Find Description"
          size="small"
          variant="standard"
        />
      </Box>
      {filteredTodos.map((todo) => (
        <TodoCard key={todo.id} todo={todo} />
      ))}
    </Box>
  );
}

function TodoCard({ todo }: { todo: Todo }) {
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
