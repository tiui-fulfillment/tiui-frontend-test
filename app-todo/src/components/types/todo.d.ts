import { FILTERS } from './todo.const';

export interface Todo {
  id: string;
  title: string;
  completed: FilterType;
}

export interface StateTodo {
  update: boolean;
  delete: boolean;
}

export type TodoType = Todo;
export type TodoList = Todo[];
export type FilterType = (typeof FILTERS)[keyof typeof FILTERS];
