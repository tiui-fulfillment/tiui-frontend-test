import React from 'react';
import { Checkbox, IconButton, ListItem, ListItemText, ListItemSecondaryAction } from '@mui/material';
import { Edit, Delete } from '@mui/icons-material';

const Task = ({ task, toggleComplete, removeTask, editTask }) => {
  return (
    <ListItem>
      <Checkbox checked={task.completed} onChange={() => toggleComplete(task.id)} />
      <ListItemText primary={task.text} style={{ textDecoration: task.completed ? 'line-through' : 'none' }} />
      <ListItemSecondaryAction>
        <IconButton edge="end" aria-label="edit" onClick={() => editTask(task.id)}>
          <Edit />
        </IconButton>
        <IconButton edge="end" aria-label="delete" onClick={() => removeTask(task.id)}>
          <Delete />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default Task;
