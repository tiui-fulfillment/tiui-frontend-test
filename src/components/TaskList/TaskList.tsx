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
  onSelectClick: (taskId: number) => void;
  selectedTasks: number[];
}

const TaskList: React.FC<TaskListProps> = ({ tasks, page, rowsPerPage, onToggleComplete, onEditTask, onDeleteTask, onSelectClick, selectedTasks }) => {
  return (
    <TableBody>
      {tasks.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((task) => (
        <TaskRow
          key={task.id}
          task={task}
          onToggleComplete={onToggleComplete}
          onEditTask={onEditTask}
          onDeleteTask={onDeleteTask}
          onSelectClick={onSelectClick}
          isSelected={selectedTasks.includes(task.id)}
        />
      ))}
    </TableBody>
  );
};

export default TaskList;
