import { Container } from "@mui/material";
import TodoList from "./Components/TodoList";
import { TodosProvider } from "./Context/TodosProvider";
import NavBar from "./Components/NavBar";

function App() {
  return (
    <Container>
      <TodosProvider>
        <NavBar />
        <TodoList />
      </TodosProvider>
    </Container>
  );
}

export default App;
