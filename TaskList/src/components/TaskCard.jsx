import React from 'react'
import { Card, Button, Col, Row } from 'react-bootstrap';
import { globalContext } from '../context/GlobalContext';
import { useContext } from 'react';

const TaskCard = ({ task }) => {

  const { deleteTask, updateTask, setTaskId } = useContext(globalContext)
  return (
    <Card className='w-100 shadow-lg border-0 bg-secondary text-white taskCard'>
      {
        task.complete ? <Card.Img width={28} height={28} src='/assets/complete.svg' className='mt-4'></Card.Img> :

          <Card.Img width={28} height={28} src='/assets/pending.svg' className='mt-4'></Card.Img>
      }
      <Card.Body>
        <Card.Text className=''>
          {task.title}
        </Card.Text>
        <Card.Text className='mt-3 mb-4'>
          {task.description}
        </Card.Text>
        <Row className="d-flex">
          <Col>
            {
              task.complete ?
                <Card.Img width={24} height={24} src='/assets/pending.svg' onClick={() => updateTask(task.id)} className='boton'></Card.Img> : <Card.Img width={24} height={24} src='/assets/complete.svg' onClick={() => updateTask(task.id)} className='boton'></Card.Img>
            }
          </Col>

          <Col>
            <Card.Img width={24} height={24} src='/assets/pen.svg' className='boton' onClick={() => setTaskId(task.id)}></Card.Img>
          </Col>
          <Col>
            <Card.Img width={24} height={24} src='/assets/delete.svg' className='boton' onClick={() => deleteTask(task.id)}></Card.Img>
          </Col>

        </Row>



      </Card.Body>

    </Card>

  );
}
export default TaskCard