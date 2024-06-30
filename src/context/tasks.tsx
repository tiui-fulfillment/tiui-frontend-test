import { createContext, useReducer } from "react";
import { Task } from "../interfaces";
import { taskReducer } from "../reducers/tasks";
import { tasks } from "../mocks/tasks.json";

interface TaskProviderProps {
  children: JSX.Element | JSX.Element[];
}

interface TaskState {
  tasks: Task[];
}

export interface TaskContextType {
  taskState: TaskState;
  createTask: (newTask: Task) => void;
  deleteTask: (id: string) => void;
  toggleTask: (id: string) => void;
}

const INITIAL_STATE: TaskState = { tasks: tasks };

export const TasksContext = createContext<TaskContextType>({
  taskState: INITIAL_STATE,
  createTask: () => {},
  deleteTask: () => {},
  toggleTask: () => {},
});

export function TasksProvider({ children }: TaskProviderProps) {
  const [taskState, dispatch] = useReducer(taskReducer, INITIAL_STATE);

  const createTask = (newTask: Task) => {
    dispatch({ type: "ADD_TASK", payload: newTask });
  };

  const deleteTask = (id: string) => {
    dispatch({ type: "DELETE_TASK", payload: id });
  };

  const toggleTask = (id: string) => {
    dispatch({ type: "TOGGLE_TASK", payload: id });
  };

  return (
    <TasksContext.Provider
      value={{ taskState, createTask, deleteTask, toggleTask }}
    >
      {children}
    </TasksContext.Provider>
  );
}
