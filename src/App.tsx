import { Button, Typography } from "@mui/material";
import TodoList from "./Components/TodoList";
import { TodosProvider } from "./Context/TodosProvider";

function App() {
  return (
    <TodosProvider>
      <nav>
        <Typography variant="h1">EasyTask</Typography>
        <Button variant="contained">New ToDo</Button>
      </nav>
      <main>
        <Typography variant="h3">To Do List</Typography>
        <TodoList />
      </main>
    </TodosProvider>
  );
}

export default App;
