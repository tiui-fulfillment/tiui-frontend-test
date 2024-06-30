import SettingsIcon from '@mui/icons-material/Settings';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import BackspaceIcon from '@mui/icons-material/Backspace';
import SyncAltIcon from '@mui/icons-material/SyncAlt';
import { Checkbox, Tooltip } from '@mui/material';
import './todo.css';
import { StateTodo, TodoType } from '../../types/todo';
import { grey } from '@mui/material/colors';
import { InputShared } from '../FormFields/InputShared';
import { useState } from 'react';
import { FILTERS, INITIAL_STATE_TODO } from '../../types/todo.const';

interface Props extends TodoType {
  changeStatus: (id: string) => void;
  updateTodo: (value: string, id: string) => void;
  todoDelete: (id: string) => void;
}

export const Todo: React.FC<Props> = ({
  id,
  completed,
  title,
  changeStatus,
  updateTodo,
  todoDelete
}) => {
  const [newText, setNewText] = useState<string>(title);
  const [updateText, setUpdateText] = useState<StateTodo>(INITIAL_STATE_TODO);

  const handleUpdate = () => {
    if (updateText.update) setNewText(title);
    setUpdateText({ ...updateText, update: !updateText.update });
  };

  const handleDelete = () => {
    setUpdateText({ ...updateText, delete: !updateText.delete });
    setTimeout(() => {
      todoDelete(id);
    }, 500);
  };

  const deleteAnimation = updateText.delete ? 'deleteAnimation' : '';
  const check = completed === FILTERS.COMPLETED ? true : false;
  const underline = completed === FILTERS.COMPLETED ? 'underline' : '';
  const viewNewText = updateText.update ? 'view' : '';

  return (
    <div className={deleteAnimation}>
      <div className='todo-container'>
        <Checkbox
          checked={check}
          onChange={() => changeStatus(id)}
        />
        <p className={underline}>{title}</p>
        <div className='todo-icons'>
          <Tooltip
            title='Update'
            placement='left'
            onClick={() => handleUpdate()}>
            <SettingsIcon sx={{ color: grey[400] }} />
          </Tooltip>
          <Tooltip
            title='Delete'
            placement='right'
            onClick={() => handleDelete()}>
            <DeleteForeverIcon sx={{ color: grey[400] }} />
          </Tooltip>
        </div>
      </div>
      <div className={`new-todo ${viewNewText}`}>
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
            onClick={() => updateTodo(id, newText)}>
            <SyncAltIcon sx={{ color: '#ffc107' }} />
          </Tooltip>
        </div>
      </div>
    </div>
  );
};
