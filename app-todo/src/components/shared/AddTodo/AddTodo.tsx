import { Alert, Button, Collapse, IconButton, TextField } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useEffect, useRef, useState } from 'react';
import { TodoType } from '../../types/todo';
import { v4 as uuidv4 } from 'uuid';
import './add.Todo.css';
import { useTodoStore } from '../../../context/todoStore';
import { validTodo } from './valid/validTodo';

export const AddTodo = () => {
  const [todo, setTodo] = useState<string>('');
  const [viewAlert, setViewAlert] = useState<boolean>(false);
  const firstLoad = useRef<number>(0);
  const repeatTodo = useRef<string>('');
  const errors = useRef<string[]>([]);

  const addTodo = useTodoStore(state => state.addTodo);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (repeatTodo.current === todo) {
      handleSetErrors(['Repeated task']);
    }
    if (errors.current.length === 0) {
      const form = new FormData(e.currentTarget);
      const { todo } = Object.fromEntries(form);
      const newTodo: TodoType = {
        id: uuidv4(),
        completed: 'pending',
        title: String(todo)
      };
      addTodo(newTodo);
      repeatTodo.current = newTodo.title;
    }
  };

  const handleSetText = (value: string) => {
    firstLoad.current = 1;
    setTodo(value);
  };

  const handleSetErrors = (errorsArray: string[]) => {
    errors.current = errorsArray;
    if (errorsArray.length > 0) setViewAlert(true);
    else setViewAlert(false);
  };

  useEffect(() => {
    const error = validTodo(firstLoad.current, todo);
    handleSetErrors(error);
  }, [todo]);

  return (
    <form onSubmit={e => handleSubmit(e)}>
      <div className='add-todo'>
        <TextField
          id='standard-basic'
          label='Add Todo'
          variant='standard'
          value={todo}
          name='todo'
          onChange={e => handleSetText(e.currentTarget.value)}
        />
        <Button
          variant='outlined'
          type='submit'
          className='clamp'>
          Add
        </Button>
      </div>
      <div className='alert container'>
        <Collapse in={viewAlert}>
          <Alert
            hidden
            severity='error'
            action={
              <IconButton
                aria-label='close'
                color='inherit'
                size='small'
                onClick={() => setViewAlert(prev => !prev)}>
                <CloseIcon fontSize='inherit' />
              </IconButton>
            }>
            {errors.current[0]}
          </Alert>
        </Collapse>
      </div>
    </form>
  );
};
