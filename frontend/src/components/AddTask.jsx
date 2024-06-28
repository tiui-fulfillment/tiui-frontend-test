import { Button, Grid, TextField } from '@mui/material';
import { useState } from 'react'

export default function AddTask({ addTask }) {
  const [task, setTask] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      addTask(task);
      setTask("");
    } else {
      alert("La tarea no puede estar vacía");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2} sx={{ display: "flex", alignItems: "center" }}>
        <Grid item xs={8}>
          <TextField 
            label="Nueva Tarea"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            fullWidth
            margin="normal"
          />
        </Grid>
        <Grid item xs={4}>
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Agregar
          </Button>
        </Grid>
      </Grid>
    </form>
  )
}
