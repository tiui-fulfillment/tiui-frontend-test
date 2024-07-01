import { Badge, Box, Card, CardContent, IconButton, Typography } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked'
import DeleteIcon from '@mui/icons-material/Delete'

import type { ToDoCardProps } from '../interfaces/interface'

const ToDoCard = ({ todo, handleOpen, deleteTodo, setToDoEdit, markAsCompleted }: ToDoCardProps) => {

  const handleEdit = () => {
    handleOpen()
    setToDoEdit(todo)
  }
  return (
    <Card sx={ { maxWidth: '100%', position: 'relative' } }>
      <Badge
        sx={ { position: 'absolute', top: 12, right: 44, } }
        color={ todo.completed ? 'success' : 'primary' }
        badgeContent={ todo.completed ? 'Completed' : 'Pending' }
      />

      <CardContent sx={ { minHeight: '200px', display: 'flex', flexDirection: 'column', justifyContent: 'space-around' } }>
        <Box marginY='15px'>
          <Typography variant="h5" component="div">
            { todo.title }
          </Typography>

          <Typography variant="body2" color="text.secondary">
            { todo.description }
          </Typography>
        </Box>

        <Box sx={ { display: 'flex', justifyContent: 'flex-end', marginTop: '10px' } }>
          <IconButton onClick={ handleEdit }>
            <EditIcon />
          </IconButton>

          <IconButton onClick={ () => markAsCompleted(todo.id) }>
            { todo.completed ? <CheckCircleIcon color="success" /> : <RadioButtonUncheckedIcon color="primary" /> }
          </IconButton>
          <IconButton color="error" onClick={ () => deleteTodo(todo.id) }>
            <DeleteIcon />
          </IconButton>
        </Box>
      </CardContent>
    </Card>
  )
}

export default ToDoCard