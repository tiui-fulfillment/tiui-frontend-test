import SettingsIcon from '@mui/icons-material/Settings';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import BackspaceIcon from '@mui/icons-material/Backspace';
import SyncAltIcon from '@mui/icons-material/SyncAlt';
import { Checkbox, Tooltip } from '@mui/material';
import './todo.css';
import { TodoType } from '../../types/todo';
import { grey } from '@mui/material/colors';
import { InputShared } from '../FormFields/InputShared';
import { useState } from 'react';

interface Props extends TodoType {
  changeStatus: (id: string) => void;
  updateTodo: (value: string, id: string) => void;
}

export const Todo: React.FC<Props> = ({
  id,
  completed,
  title,
  changeStatus,
  updateTodo
}) => {
  const [newText, setNewText] = useState<string>(title);
  const [updateText, setUpdateText] = useState<boolean>(false);

  return (
    <div>
      <div className='todo-container'>
        <Checkbox
          value={completed}
          onChange={() => changeStatus(id)}
        />
        <p className={completed ? 'underline' : ''}>{title}</p>
        <div className='todo-icons'>
          <Tooltip
            title='Update'
            placement='left'
            onClick={() => setUpdateText(prev => !prev)}>
            <SettingsIcon sx={{ color: grey[400] }} />
          </Tooltip>
          <Tooltip
            title='Delete'
            placement='right'>
            <DeleteForeverIcon sx={{ color: grey[400] }} />
          </Tooltip>
        </div>
      </div>
      <div className={`new-todo ${updateText ? 'view' : ''}`}>
        <InputShared
          name='New text'
          value={newText ?? ''}
          onChange={setNewText}
        />
        <div className='buttons-update'>
          <Tooltip
            title='Clear Field'
            placement='left'
            onClick={() => setNewText('')}>
            <BackspaceIcon sx={{ color: '#ffccbc' }} />
          </Tooltip>
          <Tooltip
            title='Update Todo'
            placement='right'
            onClick={() => updateTodo(newText, id)}>
            <SyncAltIcon sx={{ color: '#ffc107' }} />
          </Tooltip>
        </div>
      </div>
    </div>
  );
};
