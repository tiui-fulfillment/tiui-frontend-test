import { Button, Typography } from "@mui/material";
import TodoList from "./Components/TodoList";

function App() {
  return (
    <>
      <nav>
        <Typography variant="h1">EasyTask</Typography>
        <Button variant="contained">New ToDo</Button>
      </nav>
      <main>
        <Typography variant="h3">To Do List</Typography>
        <TodoList />
      </main>
    </>
  );
}

export default App;
