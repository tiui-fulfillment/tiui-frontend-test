import { Task } from "../interfaces";

interface TaskState {
  tasks: Task[];
}

export type TaskAction =
  | { type: "ADD_TASK"; payload: Task }
  | { type: "TOGGLE_TASK"; payload: string }
  | { type: "DELETE_TASK"; payload: string };

export function taskReducer(state: TaskState, action: TaskAction): TaskState {
  switch (action.type) {
    case "ADD_TASK":
      return { tasks: [...state.tasks, action.payload] };
    case "DELETE_TASK":
      return {
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };
    case "TOGGLE_TASK":
      return {
        tasks: state.tasks.map((task) => {
          if (task.id === action.payload) {
            return {
              ...task,
              isCompleted: !task.isCompleted,
            };
          }
          return task;
        }),
      };
    default:
      return state;
  }
}
