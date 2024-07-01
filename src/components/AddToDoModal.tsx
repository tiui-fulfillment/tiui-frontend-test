import { useState, useEffect, useMemo } from 'react'
import { Modal, Typography, Button, TextField, Box } from '@mui/material'
import { AddToDoModalProps } from '../interfaces/interface'

const AddToDoModal = ({ open, setOpen, addTodo, todoEdit, updateTodo }: AddToDoModalProps) => {
  const initialToDo = useMemo(() => ({
    title: todoEdit ? todoEdit.title : '',
    description: todoEdit ? todoEdit.description : ''
  }), [todoEdit])

  const [newToDo, setNewToDo] = useState(initialToDo)

  useEffect(() => {
    if (todoEdit) {
      setNewToDo({
        title: todoEdit.title,
        description: todoEdit.description
      })
    } else {
      setNewToDo(initialToDo)
    }
  }, [todoEdit, initialToDo])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setNewToDo(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleClose = () => {
    setOpen(false)
    setNewToDo(initialToDo)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const saveToDo = {
      id: todoEdit ? todoEdit.id : Date.now(),
      title: newToDo.title,
      description: newToDo.description,
      completed: todoEdit ? todoEdit.completed : false
    }

    if (todoEdit) {
      updateTodo(saveToDo)
    } else {
      addTodo(saveToDo)
    }

    handleClose()
  }

  return (
    <Modal open={ open } onClose={ handleClose } aria-labelledby="Add a new To-Do" aria-describedby="add a ToDo">
      <Box sx={ {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 4
      } }>
        <Typography component="h2" variant="h6" color="primary" gutterBottom>
          { todoEdit ? 'Edit To-Do' : 'Add a new To-Do' }
        </Typography>

        <form onSubmit={ handleSubmit } style={ { display: 'flex', flexDirection: 'column' } }>
          <TextField
            fullWidth
            label="To-Do Title"
            name="title"
            value={ newToDo.title }
            onChange={ handleChange }
            variant="outlined"
            style={ { marginBottom: '20px' } }
            required
          />

          <TextField
            fullWidth
            label="To-Do Description"
            name="description"
            value={ newToDo.description }
            onChange={ handleChange }
            variant="outlined"
            style={ { marginBottom: '20px' } }
            required
          />

          <Box display="flex" justifyContent="flex-end">
            <Button
              variant="outlined"
              color="error"
              size="large"
              style={ { marginRight: '10px' } }
              onClick={ handleClose }
            >
              Cancel
            </Button>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              size="large"
            >
              { todoEdit ? 'Update' : 'Create' }
            </Button>
          </Box>
        </form>
      </Box>
    </Modal>
  )
}

export default AddToDoModal
