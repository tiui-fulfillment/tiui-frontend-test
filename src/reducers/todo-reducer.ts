import { v4 as uuidv4 } from 'uuid';
import { Category, DraftTodo, Todo } from "../types";
import dayjs from 'dayjs';

export type TodoActions =
    { type: 'add-todo', payload: { todo: DraftTodo } } |
    { type: 'delete-todo', payload: { id: Todo['id'] } } |
    { type: 'get-todo-by-id', payload: { id: Todo['id'] } } |
    { type: 'update-todo', payload: { todo: Todo } } |
    { type: 'toggle-todo', payload: { id: Todo['id'] } } |
    { type: 'add-filter-category', payload: { id: Category['id'] } } | 
    { type: 'reset-form', }

export type TodoState = {
    todos: Todo[],
    modal: boolean,
    editingId: Todo['id'],
    currentCategory: Category['id'],
}

const getLocalStorageTodos = (): Todo[] => {
    const localStorageTodos = localStorage.getItem('todos');
    const items = localStorageTodos ? JSON.parse(localStorageTodos) : [];

    const todos = items.map((todo: Todo) => {
        if (todo.expirationDate) {
            todo.expirationDate = dayjs(todo.expirationDate);
            return todo
        }
        return todo
    });

    return todos || [];
}

export const initialState: TodoState = {
    todos: getLocalStorageTodos(),
    editingId: '',
    modal: false,
    currentCategory: ''
}

const createTodo = (draftTodo: DraftTodo): Todo => {
    return {
        ...draftTodo,
        id: uuidv4(),
    }
}

export const todoReducer = (state = initialState, action: TodoActions) => {
    if (action.type === 'add-todo') {
        const todo = createTodo(action.payload.todo);

        return {
            ...state,
            todos: [...state.todos, todo],
        }
    }

    if (action.type === 'delete-todo') {
        return {
            ...state,
            todos: state.todos.filter(todo => todo.id !== action.payload.id),
        }
    }

    if (action.type === 'get-todo-by-id') {
        return {
            ...state,
            editingId: action.payload.id,
            modal: true
        }
    }

    if (action.type === 'update-todo') {
        return {
            ...state,
            todos: state.todos.map(todo => todo.id === action.payload.todo.id ? action.payload.todo : todo),
            editingId: '',
        }
    }

    if (action.type === 'add-filter-category') {
        return {
            ...state,
            currentCategory: action.payload.id,
        }
    }

    if (action.type === 'toggle-todo') {
        return {
            ...state,
            todos: state.todos.map(todo => todo.id === action.payload.id ? { ...todo, completed: !todo.completed } : todo),
        }
    }

    if(action.type === 'reset-form') {
        return {
            ...state,
            editingId: '',
            modal: false
        }
    }

    return state
}