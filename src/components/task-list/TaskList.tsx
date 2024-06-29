import { Box } from "@mui/material";
import { TaskItem } from "../task-item/TaskItem";
import { Task } from "../../interfaces";

interface Props {
  tasks: Task[];
}

export function TaskList({ tasks }: Props) {
  return (
    <Box
      sx={{
        my: 5,
        display: "flex",
        flexDirection: "column",
        gap: 2,
      }}
    >
      {tasks.map((task) => (
        <TaskItem task={task} key={`task-${task.id}-of-the-task-list`} />
      ))}
    </Box>
  );
}
