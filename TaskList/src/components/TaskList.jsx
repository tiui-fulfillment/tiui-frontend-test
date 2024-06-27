import React from 'react';
import TaskCard from './TaskCard';
import { globalContext } from '../context/GlobalContext';
import { useContext } from 'react';

const TaskList = () => {
    const { renderTasks } = useContext(globalContext);

    if (renderTasks.length === 0) {
        return <div className="container">
            <h1 className=''>No hay tareas</h1>
        </div>;
    }

    return (
        <div className='container p-5'>

            <div className='row'>
                {renderTasks.map((task) => (
                    <div key={task.id} className='col-md-4 mb-4'>
                        <TaskCard task={task} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default TaskList;
