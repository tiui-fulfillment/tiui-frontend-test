import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import { FaPlus } from 'react-icons/fa';

export const AddTask = ({ addTask }) => {

    const [newTask, setNewTask] = useState("");

    const handleAddTask = () => {
        if (newTask.trim() !== "") {
            addTask(newTask);
            setNewTask("");
        }
    };  

    return (
        <div className='Add-task'>
            <input 
            className='Input-add' 
            type='text' 
            placeholder='Añade una nueva tarea' 
            value={newTask} 
            onChange={(e) => setNewTask(e.target.value)}
            >
            </input>
            <div className='Btn-add'>
                <Button 
                className='Button-add' 
                id="addTask" 
                variant="primary" 
                onClick={handleAddTask} title="Añadir nueva tarea"
                >
                    <FaPlus />
                </Button>
            </div>
        </div>
    )
}
