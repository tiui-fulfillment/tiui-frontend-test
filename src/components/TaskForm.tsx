import { Edit } from '@mui/icons-material';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  FormControlLabel,
  FormLabel,
  IconButton,
  Radio,
  RadioGroup,
  TextField,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'sonner';
import { v4 as uuidv4 } from 'uuid';
import { TaskContext } from '../context/TaskContext';
import { Task } from '../types/task';

interface TaskFormProps {
  taskToEdit?: Task;
}

const TaskForm: React.FC<TaskFormProps> = ({ taskToEdit }) => {
  const { addTask, editTask } = useContext(TaskContext)!;
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const [title, setTitle] = useState(taskToEdit ? taskToEdit.title : '');
  const [description, setDescription] = useState(taskToEdit ? taskToEdit.description : '');
  const [priority, setPriority] = useState(taskToEdit ? taskToEdit.priority : 'low');

  useEffect(() => {
    if (taskToEdit) {
      setTitle(taskToEdit.title);
      setDescription(taskToEdit.description);
      setPriority(taskToEdit.priority);
    }
  }, [taskToEdit]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const validateTask = (): boolean => {
    if (title.trim() === '') {
      toast.error('El título no puede estar vacío');
      return false;
    } else if (description.trim() === '') {
      toast.error('La descripción no puede estar vacía');
      return false;
    }
    return true;
  };

  const handleAddOrEditTask = () => {
    if (!validateTask()) return;

    if (taskToEdit) {
      editTask({ ...taskToEdit, title, description, priority });
    } else {
      addTask({ id: uuidv4(), title, description, completed: false, priority });
    }

    setTitle('');
    setDescription('');
    setPriority('low');
    handleClose();
  };

  return (
    <React.Fragment>
      {taskToEdit ? (
        <IconButton aria-label="edit" onClick={handleClickOpen} size="small">
          <Edit fontSize="inherit" />
        </IconButton>
      ) : (
        <Button className="w-full" variant="outlined" onClick={handleClickOpen}>
          Nueva Tarea
        </Button>
      )}
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title">
        <DialogTitle id="responsive-dialog-title">
          {taskToEdit ? 'Editar Tarea' : 'Crear Tarea'}
        </DialogTitle>
        <DialogContent>
          <TextField
            fullWidth
            size="small"
            id="title"
            label="Título de la tarea"
            variant="outlined"
            margin="dense"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <TextField
            fullWidth
            size="small"
            id="description"
            label="Descripción de la tarea"
            variant="outlined"
            margin="dense"
            multiline
            rows={4}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">Prioridad</FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              value={priority}
              name="radio-buttons-group"
              onChange={(e) => setPriority(e.target.value as 'low' | 'medium' | 'high')}>
              <FormControlLabel value="high" control={<Radio color="error" />} label="high" />
              <FormControlLabel value="medium" control={<Radio color="warning" />} label="medium" />
              <FormControlLabel value="low" control={<Radio color="success" />} label="low" />
            </RadioGroup>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancelar</Button>
          <Button onClick={handleAddOrEditTask} variant="contained" color="primary">
            {taskToEdit ? 'Editar' : 'Agregar'}
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};

export default TaskForm;
