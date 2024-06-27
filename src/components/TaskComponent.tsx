import { Delete } from '@mui/icons-material';
import { Checkbox, IconButton } from '@mui/material';
import { Task } from '../types/types';
import EditComponent from './EditComponent';

export function TaskComponent({
  task,
  deleteTask,
  toggleTask,
  editTask,
}: {
  task: Task;
  deleteTask: (id: string) => void;
  toggleTask: (id: string) => void;
  editTask: (editedTask: Task) => void;
}) {
  const { id, title, description, completed, priority } = task;

  const handleDelete = () => {
    deleteTask(id);
  };

  const handleToggle = () => {
    toggleTask(id);
  };
  const label = { inputProps: { 'aria-label': 'Checkbox completed' } };
  let borderClass = '';
  switch (priority) {
    case 'high':
      borderClass = 'border-red-500';
      break;
    case 'medium':
      borderClass = 'border-yellow-500';
      break;
    case 'low':
      borderClass = 'border-green-500';
      break;
    default:
      borderClass = 'border-neutral-300';
      break;
  }

  return (
    <div id={id} className={`bg-neutral-800 rounded-lg p-4 border-2 ${borderClass}`}>
      <div className="flex items-center justify-between">
        <div className="w-1/3">
          <Checkbox
            checked={completed}
            onChange={handleToggle}
            {...label}
            inputProps={{ 'aria-label': 'Checkbox complete task' }}
          />
        </div>
        <div className="w-2/3 h-fit">
          <h3 className="overflow-y-scroll w-full">{title}</h3>
          <div className="overflow-y-scroll h-8">
            <p className="opacity-75 w-full">{description}</p>
          </div>
        </div>
        <div className="w-1/3 flex items-center justify-center">
          <div className="w-fit">
            <EditComponent task={task} editTask={editTask} />
            <IconButton onClick={handleDelete} color="secondary" aria-label="delete" size="small">
              <Delete fontSize="inherit" />
            </IconButton>
          </div>
        </div>
      </div>
    </div>
  );
}
