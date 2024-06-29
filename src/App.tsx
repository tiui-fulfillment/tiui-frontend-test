import { Container } from "@mui/material";
import { Navbar, TaskActionPanel, WelcomeTaskSummary } from "./components";

function App() {
  return (
    <>
      <Navbar />
      <Container maxWidth="xl" sx={{ mt: "100px" }}>
        <WelcomeTaskSummary />
        <TaskActionPanel />
      </Container>
    </>
  );
}

export default App;
