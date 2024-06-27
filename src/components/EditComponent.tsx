import { Edit } from '@mui/icons-material';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  TextField,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import * as React from 'react';
import { Task } from '../types/types';

type EditComponentProps = {
  task: Task;
  editTask: (editedTask: Task) => void;
};

export default function EditComponent({ task, editTask }: EditComponentProps) {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const [title, setTitle] = React.useState(task.title);
  const [description, setDescription] = React.useState(task.description);
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleEditTask = () => {
    const editedTask: Task = {
      ...task,
      title: title,
      description: description,
    };
    editTask(editedTask);
    setOpen(false);
  };

  return (
    <React.Fragment>
      <IconButton aria-label="edit" onClick={handleClickOpen} size="small">
        <Edit fontSize="inherit" />
      </IconButton>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title">
        <DialogTitle id="responsive-dialog-title">{'Editar Tarea'}</DialogTitle>
        <DialogContent>
          <TextField
            fullWidth
            size="small"
            id="title"
            label="Título de la tarea"
            variant="outlined"
            value={title}
            margin="dense"
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
            value={description}
            rows={4}
            onChange={(e) => setDescription(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancelar</Button>
          <Button onClick={handleEditTask} variant="contained" color="primary">
            Aceptar
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
