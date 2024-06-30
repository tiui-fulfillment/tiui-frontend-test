import { ChangeEvent, useState } from "react";
import {
  Box,
  Checkbox,
  Chip,
  FormControl,
  IconButton,
  InputLabel,
  Menu,
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import SaveIcon from "@mui/icons-material/Save";
import CancelIcon from "@mui/icons-material/Cancel";
import { Task } from "../../interfaces";
import { useTask } from "../../custom-hooks/useTask";

interface Props {
  task: Task;
}

export function TaskItem({ task }: Props) {
  const { description, id, isCompleted, priority, title, createdAt } = task;
  const initialTask: Task = {
    id,
    title,
    description,
    isCompleted,
    priority,
    createdAt,
  };
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [isEdit, setIsEdit] = useState(false);
  const { deleteTask, toggleTask, updateTask } = useTask();
  const [updatedTask, setUpdatedTask] = useState(initialTask);

  const open = Boolean(anchorEl);
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

  const handleEdit = () => {
    setIsEdit(!isEdit);
    handleClose();
  };

  const handlePriorityChange = (event: SelectChangeEvent) => {
    setUpdatedTask({ ...task, priority: event.target.value });
  };

  const handleTextFieldChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUpdatedTask({ ...task, [event.target.name]: event.target.value });
  };

  const handleSave = () => {
    updateTask(updatedTask);
    setIsEdit(!isEdit);
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
              gap: 5,
            }}
          >
            {!isEdit ? (
              <Typography sx={{ fontSize: "24px" }}>{title}</Typography>
            ) : (
              <TextField
                margin="dense"
                type="text"
                fullWidth
                variant="outlined"
                label="Título"
                name="title"
                value={updatedTask.title}
                onChange={handleTextFieldChange}
              />
            )}

            {!isEdit ? (
              <>
                <IconButton
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
                  <MenuItem onClick={handleEdit}>Edit</MenuItem>
                  <MenuItem onClick={handleDelete}>Delete</MenuItem>
                </Menu>
              </>
            ) : (
              <Box
                sx={{
                  display: "flex",
                  gap: 1,
                }}
              >
                <IconButton
                  aria-controls={open ? "basic-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={handleSave}
                >
                  <SaveIcon />
                </IconButton>

                <IconButton
                  aria-controls={open ? "basic-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={() => setIsEdit(!isEdit)}
                >
                  <CancelIcon />
                </IconButton>
              </Box>
            )}
          </Box>
          {!isEdit ? (
            <Typography sx={{ fontSize: "16px", color: "#666" }}>
              {description}
            </Typography>
          ) : (
            <TextField
              margin="dense"
              type="text"
              fullWidth
              variant="outlined"
              label="Notas"
              name="description"
              value={updatedTask.description}
              onChange={handleTextFieldChange}
            />
          )}
        </Box>
        <Box>
          {!isEdit ? (
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
          ) : (
            <Box sx={{ minWidth: 200, background: "white" }}>
              <FormControl fullWidth>
                <InputLabel>Prioridad</InputLabel>
                <Select
                  required
                  value={updatedTask.priority}
                  label="Prioridad"
                  onChange={handlePriorityChange}
                >
                  <MenuItem value="low">Baja</MenuItem>
                  <MenuItem value="medium">Media</MenuItem>
                  <MenuItem value="high">Alta</MenuItem>
                </Select>
              </FormControl>
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
}
