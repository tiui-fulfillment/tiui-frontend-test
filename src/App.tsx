import { Container } from "@mui/material";
import TodoList from "./Components/TodoList";
import { TodosProvider } from "./Context/TodosProvider";
import NavBar from "./Components/NavBar";

function App() {
  return (
    <TodosProvider>
      <Container>
        <NavBar />
        <TodoList />
      </Container>
    </TodosProvider>
  );
}

export default App;
