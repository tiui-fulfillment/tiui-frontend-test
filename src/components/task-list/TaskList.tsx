import { Box } from "@mui/material";
import { TaskItem } from "../task-item/TaskItem";
import { useTask } from "../../custom-hooks/useTask";

export function TaskList() {
  const { taskState } = useTask();
  return (
    <Box
      sx={{
        my: 5,
        display: "flex",
        flexDirection: "column",
        gap: 2,
      }}
    >
      {taskState.tasks.map((task) => (
        <TaskItem task={task} key={`task-${task.id}-of-the-task-list`} />
      ))}
    </Box>
  );
}
