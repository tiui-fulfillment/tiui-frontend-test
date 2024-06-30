import React from 'react';
import { ButtonGroup, Button } from '@mui/material';

const TodoFilters = ({ tasks, setTasks }) => {
  const showAllTasks = () => {
    setTasks(tasks);
  };

  const showCompletedTasks = () => {
    const completedTasks = tasks.filter(task => task.completed);
    setTasks(completedTasks);
  };

  const showPendingTasks = () => {
    const pendingTasks = tasks.filter(task => !task.completed);
    setTasks(pendingTasks);
  };

  return (
    <ButtonGroup variant="contained" aria-label="outlined primary button group">
      <Button onClick={showAllTasks}>All</Button>
      <Button onClick={showCompletedTasks}>Completed</Button>
      <Button onClick={showPendingTasks}>Pending</Button>
    </ButtonGroup>
  );
};

export default TodoFilters;
