import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { muiTheme } from "./config/mui-theme";
import { TasksProvider } from "./context/tasks.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <CssBaseline />
    <ThemeProvider theme={muiTheme}>
      <TasksProvider>
        <App />
      </TasksProvider>
    </ThemeProvider>
  </React.StrictMode>
);
