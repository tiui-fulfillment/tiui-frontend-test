import { Grid, Typography, Box } from "@mui/material"
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied'
import SouthIcon from '@mui/icons-material/South'

import type { ToDoListProps } from "../interfaces/interface"
import ToDoCard from "./ToDoCard"

const ToDoList = ({ todos, handleOpen, setToDoEdit, markAsCompleted, deleteToDo }: ToDoListProps) => {
  return (
    <>
      {
        todos.length === 0 ?
          <Box sx={ { display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 3 } }>
            <SentimentVeryDissatisfiedIcon fontSize='large' />
            <Typography variant="h4" gutterBottom>No To-Do's</Typography>
            <Typography variant="body1" gutterBottom>Add a new ToDo</Typography>
            <SouthIcon />
          </Box> :
          <Grid container spacing={ { xs: 2, md: 3 } } >
            {
              todos.map((todo) => (
                <Grid item xs={ 12 } sm={ 6 } md={ 3 } key={ todo.id }>
                  <ToDoCard
                    key={ todo.id }
                    todo={ todo }
                    deleteTodo={ deleteToDo }
                    markAsCompleted={ markAsCompleted }
                    handleOpen={ handleOpen }
                    setToDoEdit={ setToDoEdit }
                  />
                </Grid>
              ))
            }
          </Grid>
      }
    </>
  )
}

export default ToDoList