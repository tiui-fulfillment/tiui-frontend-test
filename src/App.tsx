import { Container } from "@mui/material";
import { Navbar, WelcomeTaskSummary } from "./components";

function App() {
  return (
    <>
      <Navbar />
      <Container maxWidth="xl" sx={{ mt: "100px" }}>
        <WelcomeTaskSummary />
      </Container>
    </>
  );
}

export default App;
