import React, { useContext } from 'react';
import { TaskContext } from '../context/TaskContext';
import { useFilteredTasks } from '../hooks/useFilteredTasks';
import Calendar from './Calendar';
import FilterComponent from './Filter';
import HeaderComponent from './Header';
import TaskForm from './TaskForm';
import { TaskItem } from './TaskItem';

const TaskList: React.FC = () => {
  const { tasks, deleteTask, toggleTask, editTask } = useContext(TaskContext)!;
  const { filteredTasks, handleFilter } = useFilteredTasks();

  const numberOfTasks = tasks.length;
  const numberOfPendients = tasks.filter((task) => !task.completed).length;

  return (
    <div className="bg-neutral-900 h-fit rounded-xl p-6 flex flex-col gap-4 w-full xl:w-4/6 md:w-fit md:min-w-96">
      <HeaderComponent numberOfPendients={numberOfPendients} numberOfTasks={numberOfTasks} />
      <Calendar />
      <FilterComponent handleFilter={handleFilter} />
      <div className="h-72 overflow-y-auto flex flex-col gap-4">
        {filteredTasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            deleteTask={deleteTask}
            toggleTask={toggleTask}
            editTask={editTask}
          />
        ))}
      </div>
      <TaskForm />
    </div>
  );
};

export default TaskList;
