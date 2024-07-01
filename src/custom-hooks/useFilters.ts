import { useContext } from "react";
import { FiltersContext } from "../context/filters";
import { Task } from "../interfaces";

// Hook para usar los filtros
export function useFilters() {
  const { filters, setFilters } = useContext(FiltersContext);

  const filterTasks = (tasks: Task[]) => {
    return tasks.filter((task) => {
      const statusMatch =
        filters.status === "all" ||
        (filters.status === "completed" && task.isCompleted) ||
        (filters.status === "pending" && !task.isCompleted);

      const priorityMatch =
        filters.priority === "all" || task.priority === filters.priority;

      const searchTerm = filters.search.toLowerCase();
      const searchMatch =
        task.title.toLowerCase().includes(searchTerm) ||
        task.description.toLowerCase().includes(searchTerm);

      return statusMatch && priorityMatch && searchMatch;
    });
  };

  return { filters, setFilters, filterTasks };
}
