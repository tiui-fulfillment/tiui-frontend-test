import React, { useState } from 'react';
import { TextField, Button, Grid } from '@mui/material';

const TodoForm = ({ addTask }) => {
  const [task, setTask] = useState('');

  const handleInputChange = (event) => {
    setTask(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (task.trim()) {
      addTask(task);
      setTask('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <TextField
            fullWidth
            variant="outlined"
            label="Add a new task"
            value={task}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={4}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
          >
            Add Task
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default TodoForm;
