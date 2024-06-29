import React from 'react';
import { TableRow, TableCell, Checkbox, IconButton, Switch, Box } from '@mui/material';
import { Task } from '@/types/task';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { format } from 'date-fns';

interface TaskRowProps {
  task: Task;
  onToggleComplete: (taskId: number, isComplete: boolean) => void;
}

const TaskRow: React.FC<TaskRowProps> = ({ task, onToggleComplete }) => {
  const handleToggleComplete = () => {
    onToggleComplete(task.id, !task.isComplete);
  };

  const formattedDate = format(new Date(task.date), 'dd MMM yyyy, hh:mm a');

  return (
    <TableRow
      key={task.id}
      sx={{
        '&:hover': {
          backgroundColor: '#f5f5f5',
        },
        height: '48px', // Fija la altura para evitar saltos
        position: 'relative',
      }}
      className="task-row"
    >
      <TableCell padding="checkbox">
        <Checkbox />
      </TableCell>
      <TableCell sx={{ width: '100%' }}>{task.task}</TableCell>
      <TableCell>
        <Box
          sx={{
            bgcolor: task.isComplete ? 'success.light' : 'grey.300',
            color: task.isComplete ? 'white' : 'text.primary',
            borderRadius: '4px',
            padding: '2px 8px',
            textAlign: 'center',
            display: 'inline-block',
          }}
        >
          {task.isComplete ? 'Completado' : 'Pendiente'}
        </Box>
      </TableCell>
      <TableCell className="task-date-cell" align='right'>
        <span className="task-date">{formattedDate}</span>
        <div className="task-actions">
          <Switch
            checked={task.isComplete}
            onChange={handleToggleComplete}
          />
          <IconButton
            color="inherit"
            sx={{
              color: 'grey',
              '&:hover': {
                color: 'primary.main',
              },
            }}
          >
            <EditIcon />
          </IconButton>
          <IconButton
            color="inherit"
            sx={{
              color: 'grey',
              '&:hover': {
                color: 'secondary.main',
              },
            }}
          >
            <DeleteIcon />
          </IconButton>
        </div>
      </TableCell>
    </TableRow>
  );
};

export default TaskRow;
