import { StateTodo, TodoList, TodoType } from './todo';

export const INITIAL_TODO: TodoType = {
  id: '1',
  completed: 'pending',
  title: 'Add New Todo'
};

export const INITIAL_lIST: TodoList = [
  {
    ...INITIAL_TODO
  }
];

export const INITIAL_STATE_TODO: StateTodo = {
  delete: false,
  update: false
};

export const FILTERS = {
  COMPLETED: 'completed',
  PENDING: 'pending',
  ALL: 'all'
} as const;
