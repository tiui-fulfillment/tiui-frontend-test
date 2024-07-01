import { Dispatch, ReactNode, createContext, useMemo, useReducer } from "react";
import { TodoActions, TodoState, initialState, todoReducer } from "../reducers/todo-reducer";

type TodoContextProps = {
    state: TodoState;
    dispatch: Dispatch<TodoActions>
    totalTodos: number
}

type TodoProviderProps = {
    children: ReactNode
}

export const TodoContext = createContext<TodoContextProps>(null!);

export const TodoProvider = ({ children }: TodoProviderProps) => {

    const [state, dispatch] = useReducer(todoReducer, initialState);

    const totalTodos = useMemo(() => state.todos.length, [state.todos]);

    return (
        <TodoContext.Provider
            value={{
                state,
                dispatch,
                totalTodos
            }}
        >
            {children}
        </TodoContext.Provider>
    )
}