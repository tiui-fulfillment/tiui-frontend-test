import React from 'react'
import { Card, Button } from 'react-bootstrap';
import { globalContext } from '../context/GlobalContext';
import { useContext } from 'react';

const TaskCard = ({task}) => {

  const {deleteTask, updateTask, setTaskId} = useContext(globalContext)
  return (
   <Card className='w-100 shadow-lg border-0 bg-secondary text-white'>
      <Card.Body>
        <Card.Title className='mb-3'>{task.title}</Card.Title>
        {
          task.complete ? <Card.Subtitle className='bg-primary p-2'>Completada</Card.Subtitle> : <Card.Subtitle className='bg-success p-2'>Pendiente</Card.Subtitle>
        }
        
        <Card.Text className='mt-3'>
          {task.description}
        </Card.Text>
        <Button variant='danger' className='mr-4' onClick={()=>deleteTask(task.id)}>Borrar</Button>
        {
          task.complete ? <Button variant='success' onClick={()=>updateTask(task.id)}>Tarea Pendiente</Button> : <Button variant='primary' onClick={()=>updateTask(task.id)}>Completar Tarea</Button> 
        }
        <Button variant='warning' className='ml-4' onClick={() => setTaskId(task.id)}>Editar Tarea</Button>
        
      </Card.Body>
    </Card>

  );
}
export default TaskCard