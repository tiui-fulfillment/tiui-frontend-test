import {
  Box,
  Card,
  Checkbox,
  Typography,
  Button,
  CardContent,
  CardActions,
} from "@mui/material";
import { useTodos } from "../hooks/useTodos";
import { Todo } from "../types";

export default function TodoList() {
  const { todos } = useTodos();

  return (
    <>
      {todos.map((todo) => (
        <TodoCard key={todo.id} todo={todo} />
      ))}
    </>
  );
}

function TodoCard({ todo }: { todo: Todo }) {
  return (
    <Card
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        p: 1,
        mb: 1,
      }}
    >
      <CardContent sx={{ display: "flex", alignItems: "center" }}>
        <Checkbox checked={todo.completed} />
        <Typography variant="body1">{todo.description}</Typography>
      </CardContent>
      <CardActions>
        <Button variant="outlined" color="primary" sx={{ mr: 1 }}>
          Edit
        </Button>
        <Button variant="outlined" color="warning">
          Delete
        </Button>
      </CardActions>
    </Card>
  );
}
