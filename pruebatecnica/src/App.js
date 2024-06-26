import React, { useState } from 'react';
import { Container, Typography, Divider, Select, MenuItem } from '@mui/material';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all');

  const addTask = (text) => {
    const newTask = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  const toggleComplete = (taskId) => {
    setTasks(tasks.map(task => 
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
  };

  const removeTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  const editTask = (taskId) => {
    const newTaskText = prompt('Edita la tarea:');
    setTasks(tasks.map(task => 
      task.id === taskId ? { ...task, text: newTaskText } : task
    ));
  };

  const filteredTasks = () => {
    if (filter === 'completed') return tasks.filter(task => task.completed);
    if (filter === 'pending') return tasks.filter(task => !task.completed);
    return tasks;
  };

  return (
    <Container>
      <Typography variant="h3" gutterBottom>
        Lista de Tareas
      </Typography>
      <TaskForm addTask={addTask} />
      <Divider style={{ margin: '20px 0' }} />
      <Select value={filter} onChange={(e) => setFilter(e.target.value)}>
        <MenuItem value="all">Todas</MenuItem>
        <MenuItem value="completed">Completadas</MenuItem>
        <MenuItem value="pending">Pendientes</MenuItem>
      </Select>
      <TaskList
        tasks={filteredTasks()}
        toggleComplete={toggleComplete}
        removeTask={removeTask}
        editTask={editTask}
      />
    </Container>
  );
};

export default App;
