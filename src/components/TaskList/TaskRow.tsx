import React from 'react';
import { TableRow, TableCell, Checkbox } from '@mui/material';
import { Task } from '@/types/task';

interface TaskRowProps {
  task: Task;
}

const TaskRow: React.FC<TaskRowProps> = ({ task }) => {
  return (
    <TableRow key={task.id}>
      <TableCell padding='checkbox'>
        <Checkbox checked={task.isComplete} />
      </TableCell>
      <TableCell>{task.task}</TableCell>
      <TableCell>{task.date}</TableCell>
    </TableRow>
  );
};

export default TaskRow;
