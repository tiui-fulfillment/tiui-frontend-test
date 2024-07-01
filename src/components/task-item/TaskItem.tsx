import { MouseEvent, useState } from "react";
import { Box, Checkbox } from "@mui/material";
import { useTask } from "../../custom-hooks/useTask";
import { ViewMode } from "./ViewMode";
import { EditMode } from "./EditMode";
import { Task } from "../../interfaces";
import { styles } from "./styles";

interface Props {
  task: Task;
}

export function TaskItem({ task }: Props) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [isEdit, setIsEdit] = useState(true);
  const { toggleTask } = useTask();
  const open = Boolean(anchorEl);

  const handleOpenMenu = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleToggleMode = () => {
    setIsEdit(!isEdit);
    handleCloseMenu();
  };

  const handleToggleTaskState = () => {
    toggleTask(task.id);
  };

  return (
    <Box sx={styles.todo}>
      <Box>
        <Checkbox
          size="large"
          checked={task.isCompleted ? true : false}
          onChange={handleToggleTaskState}
        />
      </Box>
      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          gap: "5px",
        }}
      >
        {isEdit ? (
          <ViewMode
            isOpen={open}
            task={task}
            handleToggleMode={handleToggleMode}
            handleOpenMenu={handleOpenMenu}
            handleCloseMenu={handleCloseMenu}
            anchorEl={anchorEl}
          />
        ) : (
          <EditMode
            isOpen={open}
            task={task}
            handleToggleMode={handleToggleMode}
          />
        )}
      </Box>
    </Box>
  );
}
