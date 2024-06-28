import { Button, TextField } from '@mui/material';
import { useState } from 'react';
import { TodoType } from '../../types/todo';
import { v4 as uuidv4 } from 'uuid';
import './add.Todo.css';

interface Props {
  addTodo: (todo: TodoType) => void;
}

export const AddTodo: React.FC<Props> = ({ addTodo }) => {
  const [todo, setTodo] = useState<string>('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const { todo } = Object.fromEntries(form);
    const newTodo: TodoType = {
      id: uuidv4(),
      completed: false,
      title: String(todo)
    };
    addTodo(newTodo);
  };

  return (
    <form onSubmit={e => handleSubmit(e)}>
      <div className='add-todo'>
        <TextField
          id='standard-basic'
          label='Standard'
          variant='standard'
          value={todo}
          name='todo'
          onChange={e => setTodo(e.currentTarget.value)}
        />
        <Button
          variant='outlined'
          type='submit'>
          Add Todo
        </Button>
      </div>
    </form>
  );
};
