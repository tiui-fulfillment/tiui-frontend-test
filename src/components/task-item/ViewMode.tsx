import { MouseEvent } from "react";
import {
  Box,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  Chip,
} from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { useTask } from "../../custom-hooks/useTask";
import { Task } from "../../interfaces";
import { styles } from "./styles";

interface Props {
  isOpen: boolean;
  task: Task;
  handleToggleMode: () => void;
  handleOpenMenu: (event: MouseEvent<HTMLButtonElement>) => void;
  handleCloseMenu: () => void;
  anchorEl: null | HTMLElement;
}

export function ViewMode({
  isOpen,
  task,
  handleToggleMode,
  handleOpenMenu,
  handleCloseMenu,
  anchorEl,
}: Props) {
  const { deleteTask } = useTask();

  const handleDelete = () => {
    deleteTask(task.id);
  };

  return (
    <>
      <Box>
        <Box sx={styles.todo__header}>
          <Typography sx={styles.todo__title}>{task.title}</Typography>

          <IconButton
            aria-controls={isOpen ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={isOpen ? "true" : undefined}
            onClick={handleOpenMenu}
          >
            <MoreHorizIcon />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={isOpen}
            onClose={handleCloseMenu}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem onClick={handleToggleMode}>Editar</MenuItem>
            <MenuItem onClick={handleDelete}>Borrar</MenuItem>
          </Menu>
        </Box>
        <Typography sx={styles.todo_description}>{task.description}</Typography>
      </Box>
      <Box>
        <Stack direction="row" spacing={1}>
          <Chip
            label={`Prioridad: ${task.priority}`}
            sx={{
              fontSize: "12px",
              background:
                task.priority === "low"
                  ? "rgba(139, 195, 74, 0.2)"
                  : task.priority === "medium"
                  ? "rgba(255, 235, 59, 0.2)"
                  : "rgba(244, 67, 54, 0.2)",
              border: "1px solid",
              borderColor:
                task.priority === "low"
                  ? "#8BC34A"
                  : task.priority === "medium"
                  ? "#FFEB3B"
                  : "#F44336",
              color:
                task.priority === "low"
                  ? "#4C7A34"
                  : task.priority === "medium"
                  ? "#B1942D"
                  : "#B21F22",
              fontWeight: "bold",
              "&:hover": {
                opacity: 0.8,
              },
            }}
          />
        </Stack>
      </Box>
    </>
  );
}
