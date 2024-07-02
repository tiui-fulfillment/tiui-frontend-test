import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './utils/todoListReducer';

export const store = configureStore({
  reducer: {
    todolist: todoReducer,
  },
});