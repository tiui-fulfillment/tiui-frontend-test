import { AppBar, Container, Toolbar } from "@mui/material";
import { Title } from "./Title";
import { AccountOptions } from "./AccountOptions";
import { styles } from "./styles";

export function Navbar() {
  return (
    <AppBar sx={styles.navbar__container}>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={styles.navbar}>
          <Title productName="Planner" />
          <AccountOptions
            userInfo={{
              name: "Jesús Murillo Velasco",
              position: "Frontend Developer",
            }}
          />
        </Toolbar>
      </Container>
    </AppBar>
  );
}
