import {
  Box,
  TextField,
  IconButton,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import SaveIcon from "@mui/icons-material/Save";
import CancelIcon from "@mui/icons-material/Cancel";
import { styles } from "./styles";
import { Task } from "../../interfaces";
import { ChangeEvent, useState } from "react";
import { useTask } from "../../custom-hooks/useTask";

interface Props {
  isOpen: boolean;
  task: Task;
  handleToggleMode: () => void;
}

export function EditMode({ isOpen, task, handleToggleMode }: Props) {
  const initialState: Task = {
    createdAt: task.createdAt,
    description: task.description,
    id: task.id,
    isCompleted: task.isCompleted,
    priority: task.priority,
    title: task.title,
  };

  const [updatedTask, setUpdatedTask] = useState(initialState);
  const { updateTask } = useTask();

  const handlePriorityChange = (event: SelectChangeEvent) => {
    setUpdatedTask((prev) => ({ ...prev, priority: event.target.value }));
  };

  const handleTextFieldChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUpdatedTask((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSave = () => {
    updateTask(updatedTask);
    handleToggleMode();
  };

  return (
    <>
      <Box>
        <Box sx={styles.todo__header}>
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

          <Box
            sx={{
              display: "flex",
              gap: 1,
            }}
          >
            <IconButton
              aria-controls={isOpen ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={isOpen ? "true" : undefined}
              onClick={handleSave}
            >
              <SaveIcon />
            </IconButton>

            <IconButton
              aria-controls={isOpen ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={isOpen ? "true" : undefined}
              onClick={handleToggleMode}
            >
              <CancelIcon />
            </IconButton>
          </Box>
        </Box>

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
      </Box>
      <Box>
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
      </Box>
    </>
  );
}
