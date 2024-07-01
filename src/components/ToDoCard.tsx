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
        sx={ {
          position: 'absolute',
          top: 12,
          right: 44,
          '& .MuiBadge-badge': {
            backgroundColor: todo.completed ? 'green' : '#1664C0',
            color: 'white',
            padding: '0 6px',
            borderRadius: '4px',
            fontSize: '0.75rem',
          },
        } }
        badgeContent={ todo.completed ? 'Completed' : 'Pending' }
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          { todo.title }
        </Typography>
        <Typography variant="body2" color="text.secondary">
          { todo.description }
        </Typography>

        <Box display="flex" justifyContent="space-between" marginTop={ 2 }>
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