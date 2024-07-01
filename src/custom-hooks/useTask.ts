import { useContext } from "react";
import { TaskContextType, TasksContext } from "../context/tasks";

export function useTask(): TaskContextType {
  const context = useContext(TasksContext);

  return context;
}
