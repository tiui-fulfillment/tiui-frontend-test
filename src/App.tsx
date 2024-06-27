import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import DialogComponent from './components/DialogComponent';
import FilterComponent from './components/FilterComponent';
import HeaderComponent from './components/HeaderComponent';
import { TaskComponent } from './components/TaskComponent';
import { Task } from './types/types';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#0d9488',
    },
    secondary: {
      main: '#f50057',
    },
  },
});

function App() {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: uuidv4(),
      title: 'UI work',
      description: 'Terminar la interfaz de las tareas',
      completed: false,
    },
  ]);

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

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div className="min-h-[100vh] w-full p-8 grid md:place-items-center bg-[#0F0F0F] text-neutral-200">
        <div className="bg-neutral-900 h-fit rounded-xl p-6 flex flex-col gap-4 w-full xl:w-4/6 md:w-fit md:min-w-96">
          <HeaderComponent />
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
      </div>
    </ThemeProvider>
  );
}

export default App;
