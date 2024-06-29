import { Box, Button, TextField } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import { InputTask } from "@/types/task";
import { ChangeEventHandler, MouseEventHandler } from "react";

interface AddTaskT {
  task: InputTask
  onChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
  addTask: MouseEventHandler<HTMLButtonElement> 
}

export default function AddTask(params:AddTaskT) {
  const {
    task,
    onChange,
    addTask
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
        startIcon={<AddIcon />}
        style={{
          marginLeft: '10px',
          whiteSpace: 'nowrap',
          height: '40px', // Ajusta la altura según tus necesidades
          alignSelf: 'flex-start', // Alinea el botón al inicio para mantener la misma altura
        }}
      >
        Agregar
      </Button>
    </Box>
  )
    
}