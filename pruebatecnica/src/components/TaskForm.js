import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';

const TaskForm = ({ addTask }) => {
  const [taskText, setTaskText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(taskText);
    setTaskText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Nueva Tarea"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
        fullWidth
      />
      <Button type="submit" variant="contained" color="primary">
        Agregar
      </Button>
    </form>
  );
};

export default TaskForm;
