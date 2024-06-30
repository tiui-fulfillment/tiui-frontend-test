import { Container } from "@mui/material";
import {
  Navbar,
  TaskActionPanel,
  TaskList,
  WelcomeTaskSummary,
} from "./components";

function App() {
  return (
    <>
      <Navbar />
      <Container maxWidth="xl" sx={{ mt: "100px" }}>
        <WelcomeTaskSummary />
        <TaskActionPanel />
        <TaskList />
      </Container>
    </>
  );
}

export default App;
