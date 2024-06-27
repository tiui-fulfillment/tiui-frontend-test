import React from 'react';
import { List } from '@mui/material';
import TodoItem from './ToDoItem';

const TodoList = ({ tasks, toggleComplete, removeTask }) => {
  return (
    <List>
      {tasks.map((task) => (
        <TodoItem
          key={task.id}
          task={task}
          toggleComplete={toggleComplete}
          removeTask={removeTask}
        />
      ))}
    </List>
  );
};

export default TodoList;
