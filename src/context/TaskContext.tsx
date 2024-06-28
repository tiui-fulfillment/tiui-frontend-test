import React, { ReactNode, createContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Task } from '../types/task';

interface TaskContextType {
  tasks: Task[];
  addTask: (task: Task) => void;
  deleteTask: (id: string) => void;
  toggleTask: (id: string) => void;
  editTask: (task: Task) => void;
}

export const TaskContext = createContext<TaskContextType | undefined>(undefined);

interface TaskProviderProps {
  children: ReactNode;
}

export const TaskProvider: React.FC<TaskProviderProps> = ({ children }) => {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: uuidv4(),
      title: 'UI Design',
      description: 'Terminar la interfaz de usuario',
      completed: false,
      priority: 'high',
    },
    {
      id: uuidv4(),
      title: 'Conectar DB',
      description: 'Conectar la base de datos con la aplicación',
      completed: false,
      priority: 'medium',
    },
    {
      id: uuidv4(),
      title: 'Api Rest',
      description: 'Crear la API Rest para la aplicación',
      completed: true,
      priority: 'low',
    },
  ]);

  const addTask = (task: Task) => {
    const updatedTasks = [...tasks, { ...task, id: uuidv4() }];
    setTasks(updatedTasks);
  };

  const deleteTask = (id: string) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  const toggleTask = (id: string) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  const editTask = (editedTask: Task) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === editedTask.id) {
        return editedTask;
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask, deleteTask, toggleTask, editTask }}>
      {children}
    </TaskContext.Provider>
  );
};
