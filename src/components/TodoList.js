import React from 'react';
import { List, ListItem, ListItemText, ListItemSecondaryAction, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const TodoList = ({ tasks, deleteTask, editTask, toggleTaskCompletion }) => {
  return (
    <List>
      {tasks.map((task) => (
        <ListItem key={task.id}>
          <ListItemText
            primary={task.content}
            style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
          />
          <ListItemSecondaryAction>
            <IconButton
              edge="end"
              aria-label="edit"
              onClick={() => editTask(task.id, prompt('Edit task', task.content))}
            >
              <EditIcon />
            </IconButton>
            <IconButton
              edge="end"
              aria-label="delete"
              onClick={() => deleteTask(task.id)}
            >
              <DeleteIcon />
            </IconButton>
            <IconButton
              edge="end"
              aria-label="toggle"
              onClick={() => toggleTaskCompletion(task.id)}
            >
              {task.completed ? <CheckCircleIcon /> : <CheckCircleOutlineIcon />}
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      ))}
    </List>
  );
};

export default TodoList;
