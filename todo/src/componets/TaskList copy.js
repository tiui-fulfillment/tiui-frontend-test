import React, { useState } from 'react'
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal';
import { Filters } from './Filters';
import TASKS from '../tasks.json'
import { FaEdit, FaTrash, FaPlus } from 'react-icons/fa';
import { AddTask } from './AddTask';


export const TaskList = () => {

  const [taskList, setTaskList] = useState(TASKS.tasks)
  const [filter, setFilter] = useState("todas")

  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [currentTask, setCurrentTask] = useState(null);
  const [editedText, setEditedText] = useState("");

  const handleToggleTask = (id) => {
      setTaskList(taskList.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t)))
  }

  const handleAddTask = (newTask) => {
    setTaskList([...taskList, { id: taskList.length + 1, text: newTask, completed: false }]);
  };

  const handleEditTask = (id) => {
    const taskToEdit = taskList.find((task) => task.id === id);
    setCurrentTask(taskToEdit);
    setEditedText(taskToEdit.text);
    setShowEditModal(true);
  };

  const saveEditedTask = () => {
    setTaskList(taskList.map((task) => (task.id === currentTask.id ? { ...task, text: editedText } : task)));
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
        console.log(taskList.filter((task) => task.completed));
        return taskList.filter((task) => task.completed)
      case "pendientes":
        console.log(taskList.filter((task) => !task.completed));
        return taskList.filter((task) => !task.completed)
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
        
        <Modal show={showEditModal} onHide={() => setShowEditModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Editar tarea</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <input
              type="text"
              className="form-control"
              value={editedText}
              onChange={(e) => setEditedText(e.target.value)}
            />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowEditModal(false)}>
              Cancelar
            </Button>
            <Button variant="primary" onClick={saveEditedTask}>
              Guardar cambios
            </Button>
          </Modal.Footer>
        </Modal>

        <Modal show={showDeleteModal} onHide={() => setShowDeleteModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Confirmar eliminación</Modal.Title>
          </Modal.Header>
          <Modal.Body>¿Estás seguro de eliminar esta tarea?</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowDeleteModal(false)}>
              Cancelar
            </Button>
            <Button variant="danger" onClick={confirmDeleteTask}>
              Eliminar
            </Button>
          </Modal.Footer>
        </Modal>
    </div>
  )
}
