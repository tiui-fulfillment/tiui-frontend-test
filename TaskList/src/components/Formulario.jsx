import { React, useContext, useEffect, useState } from 'react'
import { globalContext } from '../context/GlobalContext'
import { Button, Form } from 'react-bootstrap'

const Formulario = () => {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const { createTask, updateTask, filterTasks, taskId, renderTasks,selectRef } = useContext(globalContext)

  const handleSubmit = (event) => {
    event.preventDefault();
    if (taskId) {
      updateTask(
        taskId,
        title,
        description
      )
    } else {
      createTask({
        title,
        description
      })

    }

    setDescription("")
    setTitle("")
  }

  useEffect(() => {
    if (taskId) {
      const taskEdit = renderTasks.find(item => item.id == taskId)
      setTitle(taskEdit.title)
      setDescription(taskEdit.description)
    }

  }, [taskId])


  return (

    <div className='container d-flex flex-column justify-content-center align-items-center p-3'>
      <form onSubmit={handleSubmit} className='w-50'>
        <Form.Group className="mb-3">
          <Form.Label>Crea una Tarea</Form.Label>
          <Form.Control
            placeholder='Escribe la tarea'
            value={title}
            type="text"
            onChange={(event) => setTitle(event.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Descripción</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
        </Form.Group>
        <Form.Group>

          <Button type="submit">{taskId ? "Editar Tarea" : "Crear Tarea"}</Button>
        </Form.Group>
      </form>
      <Form ref={selectRef} className="w-50 p-5">
        <Form.Select  defaultValue={"filtrar"} onChange={(event) => filterTasks(event.target.value)}>
          <option value={"filtrar"} disabled>Filtrar</option>
          <option value="todas">Todas</option>
          <option value="pendientes">Pendientes</option>
          <option value="completadas">Completadas</option>
        </Form.Select>
      </Form>
    </div>

  )
}

export default Formulario
