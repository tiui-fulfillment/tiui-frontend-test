import React from 'react';
import { TableRow, TableCell, Checkbox, IconButton, Switch, Box, Tooltip } from '@mui/material';
import { Task } from '@/types/task';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { format, parseISO } from 'date-fns';

interface TaskRowProps {
  task: Task;
  onToggleComplete: (taskId: number, isComplete: boolean) => void;
  onEditTask: (task: Task) => void;
  onDeleteTask: (taskId: number) => void;
  onSelectClick: (taskId: number) => void;
  isSelected: boolean;
}

const StatusBox: React.FC<{ isComplete: boolean }> = ({ isComplete }) => (
  <Box
    sx={{
      bgcolor: isComplete ? 'success.light' : 'grey.300',
      color: isComplete ? 'white' : 'text.primary',
      borderRadius: '4px',
      padding: '2px 8px',
      textAlign: 'center',
      display: 'inline-block',
    }}
  >
    {isComplete ? 'Completado' : 'Pendiente'}
  </Box>
);

const TaskActions: React.FC<{
  taskId: number;
  isComplete: boolean;
  onToggleComplete: () => void;
  onEditTask: () => void;
  onDeleteTask: () => void;
}> = ({ taskId, isComplete, onToggleComplete, onEditTask, onDeleteTask }) => (
  <div className="task-actions">
    <Tooltip leaveTouchDelay={0} title={isComplete ? 'Marcar como Pendiente' : 'Marcar como Completado'}>
      <Switch checked={isComplete} onChange={onToggleComplete} />
    </Tooltip>
    <Tooltip title="Editar tarea">
      <IconButton
        color="inherit"
        onClick={onEditTask}
      >
        <EditIcon />
      </IconButton>
    </Tooltip>
    <Tooltip title="Eliminar tarea">
      <IconButton
        color="inherit"
        onClick={onDeleteTask}
      >
        <DeleteIcon />
      </IconButton>
    </Tooltip>
  </div>
);

const TaskRow: React.FC<TaskRowProps> = ({ task, onToggleComplete, onEditTask, onDeleteTask, onSelectClick, isSelected }) => {
  const handleToggleComplete = () => {
    onToggleComplete(task.id, !task.isComplete);
  };

  const formattedDate = format(parseISO(task.date), 'dd MMM yyyy, hh:mm a');

  return (
    <TableRow key={task.id} className="task-row">
      <TableCell padding="checkbox">
        <Tooltip title="Seleccionar tarea">
          <Checkbox
            checked={isSelected}
            onChange={() => onSelectClick(task.id)}
          />
        </Tooltip>
      </TableCell>
      <TableCell className="task-cell">{task.task}</TableCell>
      <TableCell className="task-status-cell" align="center">
        <StatusBox isComplete={task.isComplete} />
      </TableCell>
      <TableCell className="task-date-cell" align="right">
        <span className="task-date">{formattedDate}</span>
        <TaskActions
          taskId={task.id}
          isComplete={task.isComplete}
          onToggleComplete={handleToggleComplete}
          onEditTask={() => onEditTask(task)}
          onDeleteTask={() => onDeleteTask(task.id)}
        />
      </TableCell>
    </TableRow>
  );
};

export default TaskRow;
