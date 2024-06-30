import React from 'react';
import { TableBody, TableCell, TableRow, Box, Typography } from '@mui/material';
import { Task } from '@/types/task';
import TaskRow from './TaskRow';

interface TaskListProps {
  tasks: Task[];
  onToggleComplete: (taskId: number, isComplete: boolean) => void;
  onEditTask: (task: Task) => void;
  onDeleteTask: (taskId: number) => void;
  onSelectClick: (taskId: number) => void;
  selectedTasks: number[];
}

const TaskList: React.FC<TaskListProps> = ({ tasks, onToggleComplete, onEditTask, onDeleteTask, onSelectClick, selectedTasks }) => {
  return (
    <TableBody>
      {tasks.length === 0 ? (
        <TableRow className="fullHeightRow">
          <TableCell colSpan={4}>
            <Box display="flex" justifyContent="center" alignItems="center" height="100%">
              <Typography variant="body1" color="textSecondary" align='center'>
                No hay tareas. <br /> Agrega una nueva tarea para comenzar.
              </Typography>
            </Box>
          </TableCell>
        </TableRow>
      ) : (
        tasks.map((task) => (
          <TaskRow
            key={task.id}
            task={task}
            onToggleComplete={onToggleComplete}
            onEditTask={onEditTask}
            onDeleteTask={onDeleteTask}
            onSelectClick={onSelectClick}
            isSelected={selectedTasks.includes(task.id)} // Verifica si la tarea está seleccionada
          />
        ))
      )}
    </TableBody>
  );
};

export default TaskList;
