import { useContext, useEffect, useState } from 'react';
import { TaskContext } from '../context/TaskContext';
import { Task } from '../types/task';

export const useFilteredTasks = () => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error('useFilteredTasks must be used within a TaskProvider');
  }
  const { tasks } = context;
  const [filteredTasks, setFilteredTasks] = useState<Task[]>(tasks);

  useEffect(() => {
    setFilteredTasks(tasks);
  }, [tasks]);

  const handleFilter = (filter: string) => {
    if (filter === 'Todas') {
      setFilteredTasks(tasks);
    } else if (filter === 'Completadas') {
      setFilteredTasks(tasks.filter((task) => task.completed));
    } else if (filter === 'Sin completar') {
      setFilteredTasks(tasks.filter((task) => !task.completed));
    }
  };

  return { filteredTasks, handleFilter };
};
