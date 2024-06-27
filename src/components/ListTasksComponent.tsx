import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Task } from '../types/types';
import Calendar from './Calendar';
import DialogComponent from './DialogComponent';
import FilterComponent from './FilterComponent';
import HeaderComponent from './HeaderComponent';
import { TaskComponent } from './TaskComponent';

export default function ListTasksComponent() {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const [filteredTasks, setFilteredTasks] = useState<Task[]>(tasks);

  useEffect(() => {
    handleFilter('Todas');
  }, []);

  const handleFilter = (filter: string) => {
    if (filter === 'Todas') {
      setFilteredTasks(tasks);
    } else if (filter === 'Completadas') {
      setFilteredTasks(tasks.filter((task) => task.completed));
    } else if (filter === 'Sin completar') {
      setFilteredTasks(tasks.filter((task) => !task.completed));
    }
  };

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

  useEffect(() => {
    handleFilter('Todas');
  }, [tasks]);
  const numberOfTasks = tasks.length;
  const numberOfPendients = tasks.filter((task) => !task.completed).length;
  return (
    <div className="bg-neutral-900 h-fit rounded-xl p-6 flex flex-col gap-4 w-full xl:w-4/6 md:w-fit md:min-w-96">
      <HeaderComponent numberOfPendients={numberOfPendients} numberOfTasks={numberOfTasks} />
      <Calendar />
      <FilterComponent handleFilter={handleFilter} />
      <div className="h-72 overflow-y-auto flex flex-col gap-4">
        {filteredTasks.map((task) => (
          <TaskComponent
            key={task.id}
            task={task}
            deleteTask={deleteTask}
            toggleTask={toggleTask}
            editTask={editTask}
          />
        ))}
      </div>
      <DialogComponent addTask={addTask} />
    </div>
  );
}
