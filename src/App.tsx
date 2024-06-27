import { Typography } from "@mui/material";
import TodoList from "./Components/TodoList";
import { TodosProvider } from "./Context/TodosProvider";
import NavBar from "./Components/NavBar";

function App() {
  return (
    <TodosProvider>
      <NavBar />
      <main>
        <Typography variant="h3">To Do List</Typography>
        <TodoList />
      </main>
    </TodosProvider>
  );
}

export default App;
