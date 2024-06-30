import { useState, forwardRef, FormEvent, ChangeEvent } from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  Select,
  MenuItem,
  DialogActions,
  SelectChangeEvent,
  Slide,
  Box,
  FormControl,
  InputLabel,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";
import AddIcon from "@mui/icons-material/Add";
import { v4 as uuidv4 } from "uuid";

import { Task } from "../../interfaces";
import { useTask } from "../../custom-hooks/useTask";

const Transition = forwardRef<
  unknown,
  TransitionProps & { children: React.ReactElement }
>((props, ref) => {
  return <Slide direction="up" ref={ref} {...props} />;
});

const initialTask: Task = {
  id: "",
  title: "",
  description: "",
  isCompleted: false,
  priority: "",
  createdAt: "",
};

export function AddButton() {
  const [dialogToggle, setDialogToggle] = useState(false);
  const [task, setTask] = useState(initialTask);
  const theme = useTheme();
  const { createTask } = useTask();

  // MediaQueries
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const handleDialogToggle = () => {
    setDialogToggle(!dialogToggle);
  };

  const handlePriorityChange = (event: SelectChangeEvent) => {
    setTask({ ...task, priority: event.target.value });
  };

  const handleTextFieldChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTask({ ...task, [event.target.name]: event.target.value });
  };

  const handleSumbit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newTask: Task = {
      ...task,
      id: uuidv4(),
      createdAt: new Date().toString(),
    };

    createTask(newTask);

    setTask(initialTask);
    handleDialogToggle();
  };

  return (
    <>
      <Button
        variant="contained"
        size="large"
        endIcon={<AddIcon />}
        sx={{ height: "56px" }}
        onClick={handleDialogToggle}
      >
        Agregar Tarea
      </Button>

      <Dialog
        open={dialogToggle}
        onClose={handleDialogToggle}
        PaperProps={{
          component: "form",
          onSubmit: handleSumbit,
        }}
        TransitionComponent={Transition}
        keepMounted
        fullScreen={fullScreen}
      >
        <DialogTitle
          sx={{
            width: "500px",
          }}
        >
          Agregar Tarea
        </DialogTitle>
        <DialogContent
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 3,
          }}
        >
          <TextField
            autoFocus
            margin="dense"
            required
            type="text"
            fullWidth
            variant="outlined"
            label="Título"
            name="title"
            value={task.title}
            onChange={handleTextFieldChange}
          />
          <TextField
            margin="dense"
            type="text"
            fullWidth
            variant="outlined"
            label="Notas"
            name="description"
            value={task.description}
            onChange={handleTextFieldChange}
          />
          <Box sx={{ minWidth: 200, background: "white" }}>
            <FormControl fullWidth>
              <InputLabel>Prioridad</InputLabel>
              <Select
                required
                value={task.priority}
                label="Prioridad"
                onChange={handlePriorityChange}
              >
                <MenuItem value="low">Baja</MenuItem>
                <MenuItem value="medium">Media</MenuItem>
                <MenuItem value="high">Alta</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogToggle}>Cancelar</Button>
          <Button type="submit">Crear</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
