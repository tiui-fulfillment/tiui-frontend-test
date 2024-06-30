import { Box } from "@mui/material";
import { TaskItem } from "../task-item/TaskItem";
import { useTask } from "../../custom-hooks/useTask";
import { useFilters } from "../../custom-hooks/useFilters";

export function TaskList() {
  const { taskState } = useTask();
  const { filterTasks } = useFilters();

  const filteredTasks = filterTasks(taskState.tasks);

  return (
    <Box
      sx={{
        my: 5,
        display: "flex",
        flexDirection: "column",
        gap: 2,
      }}
    >
      {filteredTasks.map((task) => (
        <TaskItem task={task} key={`task-${task.id}-of-the-task-list`} />
      ))}
    </Box>
  );
}
