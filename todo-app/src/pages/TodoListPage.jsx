import { useState, useEffect } from 'react';
import axios from 'axios';
import AddTask from '../components/AddTask';
import TaskCard from '../components/TaskCard';

const API_URL = "https://project-management-api-4641927fee65.herokuapp.com";

function TodoListPage() {
    const [tasks, setTasks] = useState([]);
    const [filter, setFilter] = useState('all');

    const getAllTasks = () => {
        axios
            .get(`${API_URL}/tasks`)
            .then((response) => setTasks(response.data))
            .catch((error) => console.log(error));
    };

    useEffect(() => {
        getAllTasks();
    }, [] );

    const filterTasks = () => {
        if(filter === "completed") {
            return tasks.filter(task => task.completed);
        } else if (filter === 'pending') {
            return tasks.filter(task => !task.completed);
        }

        return tasks;
    };

    return (
        <div className='TodoListPage'>
            <AddTask refreshTasks={getAllTasks} />
            <div>
                <button onClick={() => setFilter('all')}>Todas</button>
                <button onClick={() => setFilter('completed')}>Completadas</button>
                <button onClick={() => setFilter('pending')}>Pendientes</button>
            </div>
            {filterTasks().map((task) => (
                <TaskCard key={task.id} task={task} refreshTasks={getAllTasks}/>
            ))}
        </div>
    );
}

export default TodoListPage;