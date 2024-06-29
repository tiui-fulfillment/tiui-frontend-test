import React from 'react';
import { Table, TableBody, TableContainer, Paper } from '@mui/material';
import { Task } from '@/types/task';
import TaskRow from './TaskRow';

interface TaskListProps {
  tasks: Task[];
  page: number;
  rowsPerPage: number;
  onToggleComplete: (taskId: number, isComplete: boolean) => void;
  onEditTask: (task: Task) => void;
  onDeleteTask: (taskId: number) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, page, rowsPerPage, onToggleComplete, onEditTask, onDeleteTask }) => {
  return (
    <TableBody>
      {tasks.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((task) => (
        <TaskRow
          key={task.id}
          task={task}
          onToggleComplete={onToggleComplete}
          onEditTask={onEditTask}
          onDeleteTask={onDeleteTask}
        />
      ))}
    </TableBody>
  );
};

export default TaskList;
