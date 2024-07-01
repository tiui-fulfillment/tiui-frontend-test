import {TextField,InputAdornment, IconButton } from '@mui/material'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { useRef } from 'react';

// eslint-disable-next-line react/prop-types
const InputAddTodo = ({addTodo, showAlertStatus})=>{
  const newTodoInputRef = useRef();
  
  const handleAddtask = () => {
    if(newTodoInputRef.current.value === ""){
      showAlertStatus(true,"No se puede guardar una tarea como vacia")
      return
    }
    if(newTodoInputRef.current){
      const newTodo = {
        todoId: self.crypto.randomUUID(),
        todo: newTodoInputRef.current.value,
        completed: false
      }
      addTodo(newTodo)
      newTodoInputRef.current.value = ""
    }
  }

  const handleOnKeyUp= e =>{
    if (e.key === 'Enter') {
      handleAddtask()
    }
  }

    return(
        <TextField
        sx={{bgcolor:"#E4FFF9", width:"100%", borderRadius:"5px"}}
        placeholder='Agregar Tarea'
        inputRef={newTodoInputRef}
        onKeyUp={handleOnKeyUp}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                edge="end"
                color='success'
                onClick={handleAddtask}
              >
                <AddCircleOutlineIcon
                  sx={{fontSize:"2rem"}}
                />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    )
}

export default InputAddTodo
    