import React, { useState } from 'react'
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button'
import { Filters } from './Filters';
import TASKS from '../tasks.json'
import { FaEdit, FaTrash } from 'react-icons/fa';
import { AddTask } from './AddTask';
import EditTaskModal from './EditTaskModal';
import DeleteTaskModal from './DeleteTaskModal';
import { v4 as uuidv4 } from 'uuid';


export const TaskList = () => {

  const [taskList, setTaskList] = useState(TASKS.tasks)
  const [filter, setFilter] = useState("todas")

  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [currentTask, setCurrentTask] = useState(null);
  
  const handleToggleTask = (id) => {
    setTaskList(taskList.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t)))
  }

  const handleAddTask = (newTask) => {
    setTaskList([...taskList, { id: uuidv4(), text: newTask, completed: false }]);
  };

  const handleEditTask = (id) => {
    const taskToEdit = taskList.find((task) => task.id === id);
    setCurrentTask(taskToEdit);
    setShowEditModal(true);
  };

  const saveEditedTask = (newText) => {
    setTaskList(taskList.map((task) => (task.id === currentTask.id ? { ...task, text: newText } : task)));
    setShowEditModal(false);
  };

  const handleDeleteTask = (id) => {
    setCurrentTask(taskList.find((task) => task.id === id));
    setShowDeleteModal(true);
  };

  const confirmDeleteTask = () => {
    setTaskList(taskList.filter((task) => task.id !== currentTask.id));
    setShowDeleteModal(false);
  };
  
  const filterTasks = () => {
    switch (filter) {
      case "completadas":
        return taskList.filter((task) => task.completed);
      case "pendientes":
        return taskList.filter((task) => !task.completed);
      default:
        return taskList
    }
  }

  return (
    <div className='Task-container'>
        <h2>Lista de tareas</h2>
        <AddTask addTask={handleAddTask} />

        <Filters setFilter={setFilter} />
        
        <div className='TaskList-container '>
          <ListGroup>
            {
              filterTasks().map((t) => (
                <ListGroup.Item key={t.id} className='TaskItem'>
                  <div className='Task-content'>
                    <label className={`Task-check ${t.completed ? 'checked' : ''}`}>
                      <input 
                        id={'checkbox'+t.id} 
                        type='checkbox' 
                        onChange={() => handleToggleTask(t.id)} 
                        checked={t.completed}
                      />
                    </label>
                    <span className={t.completed ? 'completed' : ''}>
                      {t.text}
                    </span>
                    <div className="Task-buttons">
                      <Button 
                        variant="primary" 
                        size="m" 
                        onClick={() => handleEditTask(t.id)}
                        title='Editar tarea'
                        >
                        <FaEdit />
                      </Button>
                      <Button 
                        variant="danger" 
                        size="m" 
                        onClick={() => handleDeleteTask(t.id)}
                        title='Eliminar tarea'
                        >
                        <FaTrash />
                      </Button>
                    </div>
                  </div>
                </ListGroup.Item>
              ))
            }
          </ListGroup>
        </div>
        
        <EditTaskModal
          show={showEditModal}
          handleClose={() => setShowEditModal(false)}
          taskText={currentTask ? currentTask.text : ''}
          handleSave={saveEditedTask}
        />

        
        <DeleteTaskModal
          show={showDeleteModal}
          handleClose={() => setShowDeleteModal(false)}
          handleDelete={confirmDeleteTask}
        />
    </div>
  )
}
