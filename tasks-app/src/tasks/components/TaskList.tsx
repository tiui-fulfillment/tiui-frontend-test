import React, { useState, useEffect } from 'react';
import { Grid } from '@mui/material';
import TaskFabFilters from '../components/TaskFabFilters';
import TaskItem from '../components/TaskItem';
import { Task } from '../types/Task';
import { FilterTask } from '../services/FilterTask';
import TaskEdit from './TaskEdit';
import TaskAdd from './TaskAdd';
import Alert from './Alert';

const TaskList: React.FC = () => {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [filteredTasks, setFilteredTasks] = useState<Task[]>([]);
    const [filter, setFilter] = useState<string>('ALL');
    const [isEditing, setIsEditing] = useState<boolean>(false);
    const [editingTask, setEditingTask] = useState<Task | null>(null);
    const [alertOpen, setAlertOpen] = useState<boolean>(false);
    const [alertMessage, setAlertMessage] = useState<string>('');
    const [alertSuccess, setAlertSuccess] = useState<boolean>(true);

    const style = {
        marginRight: 2,
        marginLeft: 2,
        marginBottom: 1
    };

    useEffect(() => {
        const existingTasks: Task[] = JSON.parse(localStorage.getItem('tasks') || '[]');
        setTasks(existingTasks);
        setFilteredTasks(existingTasks);
    }, []);

    useEffect(() => {
        const filtered = FilterTask(tasks, filter);
        setFilteredTasks(filtered);
    }, [filter, tasks]);

    const handleAddTask = (newTask: Task) => {
        const updatedTasks = [...tasks, newTask];
        setTasks(updatedTasks);
        setFilteredTasks(updatedTasks);
        localStorage.setItem('tasks', JSON.stringify(updatedTasks));
        showAlert('Task added successfully!', true);
    };

    const handleEditTask = (task: Task) => {
        setIsEditing(true);
        setEditingTask(task);
    };

    const handleSaveTask = (updatedTask: Task) => {
        const updatedTasks = tasks.map(task => 
            task.id === updatedTask.id ? updatedTask : task
        );
        setTasks(updatedTasks);
        localStorage.setItem('tasks', JSON.stringify(updatedTasks));
        showAlert('Task updated successfully!', true);
    };

    const handleDeleteTask = (taskId: string) => {
        const updatedTasks = tasks.filter(task => task.id !== taskId);
        setTasks(updatedTasks);
        localStorage.setItem('tasks', JSON.stringify(updatedTasks));
        showAlert('Task deleted successfully!', true);
    };

    const handleEndTask = (taskId: string, isDone: boolean) => {
        const updatedTasks = tasks.map(task => 
            task.id === taskId ? { ...task, isDone } : task
        );
        setTasks(updatedTasks);
        localStorage.setItem('tasks', JSON.stringify(updatedTasks));
        showAlert('Task status updated successfully!', true);
    };

    const handleFilterChange = (newFilter: string) => {
        setFilter(newFilter);
    };

    const handleDrawerClose = () => {
        setIsEditing(false);
        setEditingTask(null);
    };

    const showAlert = (message: string, isSuccess: boolean) => {
        setAlertMessage(message);
        setAlertSuccess(isSuccess);
        setAlertOpen(true);
    };

    const handleAlertClose = () => {
        setAlertOpen(false);
    };

    return (
        <Grid container>
            <Grid item xs={12}>
                <TaskFabFilters onFilterChange={handleFilterChange} />
            </Grid>
            {filteredTasks.map((task) => (
                <Grid item xs={12} key={task.id} sx={style}>
                    <TaskItem 
                        task={task} 
                        onEdit={handleEditTask} 
                        onDelete={handleDeleteTask} 
                        onEnd={handleEndTask}
                    />
                </Grid>
            ))}
            <TaskEdit
                open={isEditing}
                onClose={handleDrawerClose}
                task={editingTask}
                onSave={handleSaveTask}
            />
            <TaskAdd onAdd={handleAddTask} />
            <Alert 
                message={alertMessage} 
                isSuccess={alertSuccess} 
                open={alertOpen} 
                onClose={handleAlertClose} 
            />
        </Grid>
    );
};

export default TaskList;
