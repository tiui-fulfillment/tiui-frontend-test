import { Box, Button, TextField } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Cancel';
import { InputTask, Task } from "@/types/task";
import { ChangeEventHandler, MouseEventHandler, KeyboardEventHandler } from "react";

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

  // Maneja la acción de presionar la tecla Enter en el campo de texto
  const handleKeyDown: KeyboardEventHandler<HTMLDivElement> = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      addTask(event as any); // Simula el clic en el botón de agregar/guardar
    }
  };

  return (
    <Box display="flex" alignItems="flex-start" mb={2}>
      <TextField
        label={editingTask ? "Editando una tarea" : "Agrega una nueva tarea"} // Cambia el label según el estado de edición
        value={task.text}
        size="small"
        error={!!task.error}
        onChange={onChange} // Maneja el cambio de texto
        fullWidth
        variant="outlined"
        onKeyDown={handleKeyDown} // Maneja la tecla Enter para agregar/guardar
      />
      <Button
        variant="contained"
        color="primary"
        onClick={addTask}
        startIcon={editingTask ? <SaveIcon /> : <AddIcon />} // Cambia el icono según el estado de edición
        style={{
          marginLeft: '10px',
          whiteSpace: 'nowrap',
          paddingRight: '25px',
          paddingLeft:'25px',
          height: '40px', 
          alignSelf: 'flex-start', 
        }}
      >
        {editingTask ? 'Guardar' : 'Agregar'}
      </Button>
      {editingTask && (
        <Button
          variant="contained"
          color="secondary"
          onClick={cancelEdit} // Llama a la función para cancelar la edición
          startIcon={<CancelIcon />}
          style={{
            marginLeft: '10px',
            paddingRight: '25px',
            paddingLeft:'25px',
            whiteSpace: 'nowrap',
            height: '40px', 
            alignSelf: 'flex-start', 
          }}
        >
          Cancelar
        </Button>
      )}
    </Box>
  );
}
