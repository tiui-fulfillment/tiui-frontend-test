import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';

const TodoForm = ({ addTask }) => {
  const [task, setTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      addTask(task);
      setTask('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="New Task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        variant="outlined"
      />
      <Button type="submit" variant="contained" color="primary">
        Add
      </Button>
    </form>
  );
};

export default TodoForm;
