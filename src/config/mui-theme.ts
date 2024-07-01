import { ThemeOptions, createTheme } from "@mui/material";

export const muiTheme: ThemeOptions = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#4f97a4",
    },
    secondary: {
      main: "#1c1c1c",
    },
  },
});
