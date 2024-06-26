import { useEffect, useState } from 'react';

interface Task {
  task: string;
  done: boolean;
}

function App() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filter, setFilter] = useState<'all' | 'completed' | 'pending'>('all');
  const [filteredTasks, setFilteredTasks] = useState<Task[]>([]);

  useEffect(() => {
    if (filter === 'all') return setFilteredTasks(tasks);

    if (filter === 'completed') return setFilteredTasks(tasks.filter(task => task.done));

    setFilteredTasks(tasks.filter(task => !task.done));
  }, [filter, tasks]);

  const addTask = (): void => {
    if (task.trim().length > 0) {
      const newTask: Task = { task, done: false };
      setTasks([...tasks, newTask]);
      setTask('');
    }
  };

  const handleTaskToggle = (index: number): void => {
    const newTasks = [...tasks];
    newTasks[index].done = !newTasks[index].done;
    setTasks(newTasks);
  };

  const handleTaskDelete = (index: number): void => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  return (
    <div className="min-vw-100 min-vh-100 d-flex justify-content-center align-items-center flex-column justify-content-around">

      <div className='w-25 d-flex flex-column gap-5'>

        <div className="btn-group w-auto" role="group" aria-label="Basic outlined example">
          <button
            type="button"
            className={`btn ${filter === 'all' ? 'btn-secondary' : 'btn-outline-secondary'}`}
            onClick={() => setFilter('all')}
          >
            Todas
          </button>
          <button
            type="button"
            className={`btn ${filter === 'completed' ? 'btn-secondary' : 'btn-outline-secondary'}`}
            onClick={() => setFilter('completed')}
          >
            Completadas
          </button>
          <button
            type="button"
            className={`btn ${filter === 'pending' ? 'btn-secondary' : 'btn-outline-secondary'}`}
            onClick={() => setFilter('pending')}
          >
            Pendientes
          </button>
        </div>

        <ul className="list-group">
          {filteredTasks.map((task: Task, index: number) => (
            <li key={index} className={`list-group-item d-flex gap-2 align-items-center ${task.done ? 'text-decoration-line-through' : ''}`}>
              <input
                type="checkbox"
                checked={task.done}
                onChange={() => handleTaskToggle(index)}
              />
              {task.task}
              <button
                type="button"
                className="btn-close ms-auto"
                aria-label="Close"
                onClick={() => handleTaskDelete(index)}
              ></button>
            </li>
          ))}
        </ul>
      </div>

      <div className="d-flex gap-2">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          className="form-control"
          placeholder="Tarea"
        />
        <button
          type="button"
          className="btn btn-primary"
          onClick={addTask}
        >
          Agregar
        </button>
      </div>
    </div>
  );
}

export default App;
