import React from 'react';
import { Table, TableBody, TableContainer, Paper } from '@mui/material';
import { Task } from '@/types/task';
import TaskRow from './TaskRow';

interface TaskListProps {
  tasks: Task[];
  page: number;
  rowsPerPage: number;
  onToggleComplete: (taskId: number, isComplete: boolean) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, page, rowsPerPage, onToggleComplete }) => {
  return (
        <TableBody>
          {tasks.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((task) => (
            <TaskRow key={task.id} task={task} onToggleComplete={onToggleComplete} />
          ))}
        </TableBody>
  );
};

export default TaskList;
