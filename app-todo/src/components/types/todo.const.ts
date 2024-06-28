import { TodoList, TodoType } from './todo';

export const INITIAL_TODO: TodoType = {
  id: '1',
  completed: false,
  title: 'Add New Todo'
};

export const INITIAL_lIST: TodoList = [
  {
    ...INITIAL_TODO
  }
];
