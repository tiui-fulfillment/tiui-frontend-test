import { useState } from "react";
import {
  Box,
  Checkbox,
  Chip,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  Typography,
} from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Task } from "../../interfaces";
import { useTask } from "../../custom-hooks/useTask";

interface Props {
  task: Task;
}

export function TaskItem({ task }: Props) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const { deleteTask, toggleTask } = useTask();

  const open = Boolean(anchorEl);
  const { description, id, isCompleted, priority, title } = task;
  const label = { inputProps: { "aria-label": "Checkbox Task" } };

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDelete = () => {
    deleteTask(id);
    handleClose();
  };

  const handleToggle = () => {
    console.log("cambia?");
    toggleTask(id);
  };

  return (
    <Box
      sx={{
        border: "1px solid #ccc",
        padding: "10px",
        display: "flex",
        gap: 3,
        borderRadius: "4px",
        background: "#fff",
      }}
    >
      <Box>
        <Checkbox
          {...label}
          size="large"
          checked={isCompleted ? true : false}
          onChange={handleToggle}
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
        <Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography sx={{ fontSize: "24px" }}>{title}</Typography>

            <IconButton
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              <MoreHorizIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem onClick={handleClose}>Edit</MenuItem>
              <MenuItem onClick={handleDelete}>Delete</MenuItem>
            </Menu>
          </Box>
          <Typography sx={{ fontSize: "16px", color: "#666" }}>
            {description}
          </Typography>
        </Box>
        <Box>
          {/* BODY_FOOTER */}
          <Stack spacing={1}>
            <Stack direction="row" spacing={1}>
              <Chip
                label={`Prioridad: ${priority}`}
                sx={{
                  background:
                    priority === "low"
                      ? "rgba(139, 195, 74, 0.2)"
                      : priority === "medium"
                      ? "rgba(255, 235, 59, 0.2)"
                      : "rgba(244, 67, 54, 0.2)",
                  border: "1px solid",
                  borderColor:
                    priority === "low"
                      ? "#8BC34A"
                      : priority === "medium"
                      ? "#FFEB3B"
                      : "#F44336",
                  color:
                    priority === "low"
                      ? "#4C7A34"
                      : priority === "medium"
                      ? "#B1942D"
                      : "#B21F22",
                  fontWeight: "bold",
                  "&:hover": {
                    opacity: 0.8,
                  },
                }}
              />
            </Stack>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
}
