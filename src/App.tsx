import { Container } from "@mui/material";
import { Navbar, TaskActionPanel, TaskList } from "./components";

function App() {
  return (
    <>
      <Navbar />
      <Container maxWidth="xl" sx={{ mt: "100px" }}>
        <TaskActionPanel />
        <TaskList />
      </Container>
    </>
  );
}

export default App;
