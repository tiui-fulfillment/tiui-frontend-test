import { Box } from "@mui/material";
import { Task } from "../../interfaces";

interface Props {
  tasks: Task[];
}

export function TaskList({ tasks }: Props) {
  return (
    <Box
      sx={{
        mt: 5,
        display: "flex",
        flexDirection: "column",
        gap: 3,
      }}
    >
      {tasks.map((task) => (
        <div>{task.title}</div>
      ))}
    </Box>
  );
}
