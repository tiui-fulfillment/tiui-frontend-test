import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableRow, Paper, Checkbox } from '@mui/material';
import { Task } from '@/types/task';
import TaskRow from './TaskRow';

interface TaskListProps {
  tasks: Task[];
  page: number;
  rowsPerPage: number;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, page, rowsPerPage }) => {
  return (
    // <TableContainer component={Paper} className="tableContainer">
    //   <Table size="small" aria-label="a dense table">
        <TableBody>
          {tasks.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((task) => (
            <TaskRow key={task.id} task={task} />
          ))}
        </TableBody>
    //   </Table>
    // </TableContainer>
  );
};

export default TaskList;
