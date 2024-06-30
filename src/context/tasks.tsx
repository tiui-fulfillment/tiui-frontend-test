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
}

const INITIAL_STATE: TaskState = { tasks: tasks };

export const TasksContext = createContext<TaskContextType>({
  taskState: INITIAL_STATE,
  createTask: () => {},
});

export function TasksProvider({ children }: TaskProviderProps) {
  const [taskState, dispatch] = useReducer(taskReducer, INITIAL_STATE);

  const createTask = (newTask: Task) => {
    dispatch({ type: "ADD_TASK", payload: newTask });
  };

  return (
    <TasksContext.Provider value={{ taskState, createTask }}>
      {children}
    </TasksContext.Provider>
  );
}
