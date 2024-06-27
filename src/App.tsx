import { Box, Typography } from "@mui/material";
import TodoList from "./Components/TodoList";
import { TodosProvider } from "./Context/TodosProvider";
import NavBar from "./Components/NavBar";

function App() {
  return (
    <TodosProvider>
      <NavBar />
      <Box component="main" sx={{ p: 2, mt: 12 }}>
        <Typography variant="h4">To Do List</Typography>
        <TodoList />
      </Box>
    </TodosProvider>
  );
}

export default App;
