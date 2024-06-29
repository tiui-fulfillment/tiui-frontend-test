import { Typography } from "@mui/material";

export function WelcomeTaskSummary() {
  return (
    <>
      <Typography sx={{ fontSize: "34px" }}>Hola, Jesús 👋</Typography>
      <Typography sx={{ fontSize: "20px", color: "#808080", fontWeight: 300 }}>
        Tienes{" "}
        <Typography component="span" sx={{ color: "#222", fontWeight: 700 }}>
          11
        </Typography>{" "}
        tareas competadas y{" "}
        <Typography component="span" sx={{ color: "#222", fontWeight: 700 }}>
          19
        </Typography>{" "}
        pendientes
      </Typography>
    </>
  );
}
