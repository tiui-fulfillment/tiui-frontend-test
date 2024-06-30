import { create } from 'zustand';
import { FilterType, TodoList, TodoType } from '../components/types/todo';
import { FILTERS, INITIAL_TODO } from '../components/types/todo.const';
import { addLocal } from '../services/storage';

interface TodoState {
  todoList: TodoList;
  filter: FilterType;
  addTodo: (todo: TodoType) => void;
  todoUpdate: (id: string, newTitle: string) => void;
  todoChangeStatus: (id: string) => void;
  todoDelete: (id: string) => void;
  setTodos: (todos: TodoList) => void;
  setFilter: (filter: FilterType) => void;
}

export const useTodoStore = create<TodoState>()((set, get) => ({
  todoList: [INITIAL_TODO],
  filter: 'all',
  addTodo: todo => {
    set(state => ({ todoList: [...state.todoList, todo] }));
    addLocal([...get().todoList]);
  },
  todoUpdate: (id, newTitle) => {
    const newList = get().todoList.map(todo => {
      if (id === todo.id) todo.title = newTitle;
      return todo;
    });

    set(() => ({ todoList: newList }));
  },
  todoChangeStatus: id => {
    const newList = get().todoList.map(todo => {
      if (id === todo.id)
        todo.completed =
          todo.completed === FILTERS.COMPLETED
            ? FILTERS.PENDING
            : FILTERS.COMPLETED;
      return todo;
    });

    set(() => ({ todoList: newList }));
  },
  todoDelete: id => {
    const newList = get().todoList.filter(todo => id !== todo.id);
    set(() => ({ todoList: newList }));
    addLocal(newList);
  },
  setTodos: todos => set(() => ({ todoList: todos })),
  setFilter: filter => set({ filter: filter })
}));
