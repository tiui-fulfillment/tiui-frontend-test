import SettingsIcon from '@mui/icons-material/Settings';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { Checkbox, Tooltip } from '@mui/material';
import './todo.css';
import { TodoType } from '../../types/todo';
import { grey } from '@mui/material/colors';

interface Props extends TodoType {
  changeStatus: (id: string) => void;
}

export const Todo: React.FC<Props> = ({
  id,
  completed,
  title,
  changeStatus
}) => {
  return (
    <div className='todo-container'>
      <Checkbox
        value={completed}
        onChange={() => changeStatus(id)}
      />
      <p className={completed ? 'underline' : ''}>{title}</p>
      <div className='todo-icons'>
        <Tooltip
          title='Update'
          placement='left'>
          <SettingsIcon sx={{ color: grey[400] }} />
        </Tooltip>
        <Tooltip
          title='Delete'
          placement='right'>
          <DeleteForeverIcon sx={{ color: grey[400] }} />
        </Tooltip>
      </div>
    </div>
  );
};
