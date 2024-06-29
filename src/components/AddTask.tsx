import { Box, Button, TextField } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Cancel';
import { InputTask, Task } from "@/types/task";
import { ChangeEventHandler, MouseEventHandler } from "react";

interface AddTaskT {
  task: InputTask;
  onChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  addTask: MouseEventHandler<HTMLButtonElement>;
  editingTask: Task | null;
  cancelEdit: MouseEventHandler<HTMLButtonElement>;
}

export default function AddTask(params: AddTaskT) {
  const {
    task,
    onChange,
    addTask,
    editingTask,
    cancelEdit
  } = params;

  return (
    <Box display="flex" alignItems="flex-start" mb={2}>
      <TextField
        label="Agrega una nueva tarea"
        value={task.text}
        size="small"
        error={!!task.error}
        helperText={task.error || ' '}
        onChange={onChange}
        fullWidth
        variant="outlined"
      />
      <Button
        variant="contained"
        color="primary"
        onClick={addTask}
        startIcon={editingTask ? <SaveIcon /> : <AddIcon />}
        style={{
          marginLeft: '10px',
          whiteSpace: 'nowrap',
          height: '40px', // Ajusta la altura según tus necesidades
          alignSelf: 'flex-start', // Alinea el botón al inicio para mantener la misma altura
        }}
      >
        {editingTask ? 'Guardar' : 'Agregar'}
      </Button>
      {editingTask && (
        <Button
          variant="contained"
          color="secondary"
          onClick={cancelEdit}
          startIcon={<CancelIcon />}
          style={{
            marginLeft: '10px',
            whiteSpace: 'nowrap',
            height: '40px', // Ajusta la altura según tus necesidades
            alignSelf: 'flex-start', // Alinea el botón al inicio para mantener la misma altura
          }}
        >
          Cancelar
        </Button>
      )}
    </Box>
  );
}
