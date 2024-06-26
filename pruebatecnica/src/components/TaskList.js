import React from 'react';
import { List } from '@mui/material';
import Task from './Task';

const TaskList = ({ tasks, toggleComplete, removeTask, editTask }) => {
  return (
    <List>
      {tasks.map(task => (
        <Task
          key={task.id}
          task={task}
          toggleComplete={toggleComplete}
          removeTask={removeTask}
          editTask={editTask}
        />
      ))}
    </List>
  );
};

export default TaskList;
