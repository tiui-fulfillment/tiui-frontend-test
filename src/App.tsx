import { useState } from "react"
import { Box, Button, Typography } from "@mui/material"

import AddToDoModal from "./components/AddToDoModal"
import ToDoList from "./components/ToDoList"
import Filter from "./components/Filter"

import { useToDo } from "./hooks/useToDo"
import type { ToDo } from "./interfaces/interface"

function App () {
  const [open, setOpen] = useState<boolean>(false)
  const [filter, setFilter] = useState<string>('all')
  const [todoEdit, setTodoEdit] = useState<ToDo | undefined>()

  const { todos, addToDo, updateToDo, markAsCompleted, deleteToDo } = useToDo()

  const handleOpen = () => {
    setOpen(true)
    setTodoEdit(undefined)
  }

  const filteredTodos = filter === 'all'
    ? todos
    : filter === 'completed'
      ? todos.filter((todo) => todo.completed)
      : todos.filter((todo) => !todo.completed)

  return (
    <>
      <AddToDoModal
        open={ open }
        setOpen={ setOpen }
        addTodo={ addToDo }
        updateTodo={ updateToDo }
        todoEdit={ todoEdit }
      />


      <Box sx={ { display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', padding: 5, gap: 2 } }>
        <Typography variant="h5" gutterBottom> Welcome to To-Do-List</Typography>

        <Filter filter={ filter } setFilter={ setFilter } />

        <ToDoList
          todos={ filteredTodos }
          handleOpen={ handleOpen }
          setToDoEdit={ setTodoEdit }
          markAsCompleted={ markAsCompleted }
          deleteToDo={ deleteToDo }
        />

        <Button
          variant="contained"
          color="primary"
          onClick={ handleOpen }
        >
          Add To-Do
        </Button>
      </Box>
    </>
  )
}

export default App
