import React from 'react';
import { Checkbox, IconButton, ListItem, ListItemText } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const TodoItem = ({ task, toggleComplete, removeTask }) => {
  return (
    <ListItem
      secondaryAction={
        <IconButton edge="end" aria-label="delete" onClick={() => removeTask(task.id)}>
          <DeleteIcon />
        </IconButton>
      }
    >
      <Checkbox
        checked={task.completed}
        onChange={() => toggleComplete(task.id)}
      />
      <ListItemText primary={task.text} style={{ textDecoration: task.completed ? 'line-through' : 'none' }} />
    </ListItem>
  );
};

export default TodoItem;
