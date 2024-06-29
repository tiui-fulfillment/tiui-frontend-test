import { Container } from "@mui/material";
import {
  Navbar,
  TaskActionPanel,
  TaskList,
  WelcomeTaskSummary,
} from "./components";
import { tasks } from "./mocks/tasks.json";

function App() {
  return (
    <>
      <Navbar />
      <Container maxWidth="xl" sx={{ mt: "100px" }}>
        <WelcomeTaskSummary />
        <TaskActionPanel />
        <TaskList tasks={tasks} />
      </Container>
    </>
  );
}

export default App;
