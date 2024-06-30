import { useReducer } from 'react';
import { Task, InputTask } from '@/types/task';

type State = {
  tasks: Task[];
  task: InputTask;
  page: number;
  rowsPerPage: number;
  filter: string;
  editingTask: Task | null;
  selectedTasks: number[];
};

type Action =
  | { type: 'ADD_TASK'; payload: Task }
  | { type: 'SET_TASK'; payload: InputTask }
  | { type: 'EDIT_TASK'; payload: Task }
  | { type: 'DELETE_TASK'; payload: number }
  | { type: 'TOGGLE_COMPLETE'; payload: { taskId: number; isComplete: boolean } }
  | { type: 'CHANGE_PAGE'; payload: number }
  | { type: 'CHANGE_ROWS_PER_PAGE'; payload: number }
  | { type: 'SET_FILTER'; payload: string }
  | { type: 'START_EDIT_TASK'; payload: Task }
  | { type: 'CANCEL_EDIT' }
  | { type: 'SELECT_TASK'; payload: number }
  | { type: 'SELECT_ALL'; payload: number[] }
  | { type: 'DESELECT_ALL' }
  | { type: 'COMPLETE_SELECTED' }
  | { type: 'PENDING_SELECTED' }
  | { type: 'DELETE_SELECTED' };

const initialState: State = {
  tasks: [],
  task: { text: '', error: '' },
  page: 0,
  rowsPerPage: 10,
  filter: 'Todos',
  editingTask: null,
  selectedTasks: [],
};

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'ADD_TASK':
      return { ...state, tasks: [action.payload, ...state.tasks], task: { text: '', error: '' } };
    case 'SET_TASK':
      return { ...state, task: action.payload };
    case 'EDIT_TASK':
      return {
        ...state,
        tasks: state.tasks.map((t) => (t.id === action.payload.id ? { ...t, task: action.payload.task } : t)),
        editingTask: null,
        task: { text: '', error: '' }
      };
    case 'DELETE_TASK':
      return { ...state, tasks: state.tasks.filter((task) => task.id !== action.payload) };
    case 'TOGGLE_COMPLETE':
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload.taskId ? { ...task, isComplete: action.payload.isComplete } : task
        ),
      };
    case 'CHANGE_PAGE':
      return { ...state, page: action.payload };
    case 'CHANGE_ROWS_PER_PAGE':
      return { ...state, rowsPerPage: action.payload, page: 0 };
    case 'SET_FILTER':
      return { ...state, filter: action.payload };
    case 'START_EDIT_TASK':
      return { ...state, task: { text: action.payload.task, error: '' }, editingTask: action.payload };
    case 'CANCEL_EDIT':
      return { ...state, task: { text: '', error: '' }, editingTask: null };
    case 'SELECT_TASK':
      const selectedIndex = state.selectedTasks.indexOf(action.payload);
      let newSelectedTasks: number[] = [];
      if (selectedIndex === -1) {
        newSelectedTasks = newSelectedTasks.concat(state.selectedTasks, action.payload);
      } else if (selectedIndex === 0) {
        newSelectedTasks = newSelectedTasks.concat(state.selectedTasks.slice(1));
      } else if (selectedIndex === state.selectedTasks.length - 1) {
        newSelectedTasks = newSelectedTasks.concat(state.selectedTasks.slice(0, -1));
      } else if (selectedIndex > 0) {
        newSelectedTasks = newSelectedTasks.concat(
          state.selectedTasks.slice(0, selectedIndex),
          state.selectedTasks.slice(selectedIndex + 1)
        );
      }
      return { ...state, selectedTasks: newSelectedTasks };
    case 'SELECT_ALL':
      return { ...state, selectedTasks: action.payload };
    case 'DESELECT_ALL':
      return { ...state, selectedTasks: [] };
    case 'COMPLETE_SELECTED':
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          state.selectedTasks.includes(task.id) ? { ...task, isComplete: true } : task
        ),
        selectedTasks: [],
      };
    case 'PENDING_SELECTED':
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          state.selectedTasks.includes(task.id) ? { ...task, isComplete: false } : task
        ),
        selectedTasks: [],
      };
    case 'DELETE_SELECTED':
      return {
        ...state,
        tasks: state.tasks.filter((task) => !state.selectedTasks.includes(task.id)),
        selectedTasks: [],
      };
    default:
      return state;
  }
};

export const useTaskReducer = () => {
  return useReducer(reducer, initialState);
};
