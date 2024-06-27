import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
} from '@mui/material';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import * as React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Task } from '../types/types';

export default function DialogComponent({ addTask }: { addTask: (task: Task) => void }) {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const [title, setTitle] = React.useState('');
  const [priority, setPriority] = React.useState<'low' | 'medium' | 'high'>('low');
  const [description, setDescription] = React.useState('');
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAddTask = () => {
    const newTask: Task = {
      id: uuidv4(),
      title: title,
      description: description,
      completed: false,
      priority: priority,
    };
    addTask(newTask);
    setPriority('low');
    setTitle('');
    setDescription('');
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button className="w-full" variant="outlined" onClick={handleClickOpen}>
        Nueva Tarea
      </Button>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title">
        <DialogTitle id="responsive-dialog-title">{'Crear Tarea'}</DialogTitle>
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
              defaultValue="low"
              name="radio-buttons-group"
              onChange={(e) => setPriority(e.target.value as 'low' | 'medium' | 'high')}>
              <FormControlLabel value="high" control={<Radio color="secondary" />} label="high" />
              <FormControlLabel value="medium" control={<Radio color="warning" />} label="medium" />
              <FormControlLabel value="low" control={<Radio color="success" />} label="low" />
            </RadioGroup>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancelar</Button>
          <Button onClick={handleAddTask} variant="contained" color="primary">
            Agregar
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
