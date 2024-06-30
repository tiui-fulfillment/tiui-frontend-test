import React, { useState } from 'react';
import { Container, Grid, Typography, Paper, Box } from '@mui/material'; // Asegúrate de importar solo lo que estás utilizando
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import TodoFilters from './components/TodoFilters'; // Asegúrate de importar solo lo que estás utilizando

const App = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, { id: tasks.length + 1, content: task, completed: false }]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const editTask = (id, newContent) => {
    const updatedTasks = tasks.map(task =>
      task.id === id ? { ...task, content: newContent } : task
    );
    setTasks(updatedTasks);
  };

  const toggleTaskCompletion = (id) => {
    const updatedTasks = tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <Container maxWidth="md" style={{ marginTop: 40 }}>
      <Paper elevation={3} style={{ padding: 20 }}>
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12}>
            <Typography variant="h4" align="center" gutterBottom>
              Todo List
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Box mb={2}>
              <TodoForm addTask={addTask} />
            </Box>
          </Grid>
          <Grid item xs={12}>
            <TodoFilters tasks={tasks} setTasks={setTasks} />
          </Grid>
          <Grid item xs={12}>
            <Paper elevation={0} style={{ backgroundColor: '#f0f0f0', padding: 20 }}>
              <TodoList
                tasks={tasks}
                deleteTask={deleteTask}
                editTask={editTask}
                toggleTaskCompletion={toggleTaskCompletion}
              />
            </Paper>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default App;
