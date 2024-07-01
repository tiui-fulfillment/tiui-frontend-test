import {
  Paper,
  Checkbox,
  Typography,
  Grid,
  IconButton,
  TextField,
} from "@mui/material";
// import { useState } from 'react';
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import DisabledByDefaultIcon from '@mui/icons-material/DisabledByDefault';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import { useState } from "react";

// eslint-disable-next-line react/prop-types
const TodoItem = ({ todoId, todo, completed, updTodoCheck, updateTodo, deleteTodo, showAlertStatus }) => {
  const [editing, setEditing] = useState(false);
  const [inputVal, setInputVal] = useState("")


  const handeleAllowEdit = () => {
    if(completed){
      showAlertStatus(true, "No se Pueden editar tareas ya completadas")
      return
    }
    setEditing(true);
  };

  const handelCancelEdit = () => {
    setEditing(false);
  };

  const handleUpdateTodoCheck = ()=>{
    updTodoCheck(todoId)
  }

  const handleUpdateTodo = () =>{
    if(inputVal === ""){
      showAlertStatus(true, "La tarea estaba vacia o no se modifico")
      handelCancelEdit()
      return
    }
    updateTodo(todoId, inputVal)
    setEditing(false)
  }

  const handleDeleteTodo = () =>{
    deleteTodo(todoId)
  }

  const handleOnChange = (e) =>{
    setInputVal(e.target.value);
  }

  const handleKeyUp = (e) =>{
    if (e.key === 'Enter') {
      handleUpdateTodo()
    }
    if (e.key === 'Escape') {
      handelCancelEdit()
    }
  }

  return (
    <Paper
      sx={{ p: "2px 10px", display: "flex", alignItems: "center", mb: 1.5 }}
      key={todoId}
    >
      <Grid container spacing={1}>
        <Grid item xs={1} flex={1} alignContent={"center"}>
          <Checkbox
            color="success"
            size="large"
            sx={{ padding: 0 }}
            checked={completed}
            onClick={handleUpdateTodoCheck}
          />
        </Grid>
        <Grid item xs={9} sx={{ display: "flex", alignItems: "center" }}>
          {editing ? (
            <TextField type="text" defaultValue={todo} fullWidth onChange={handleOnChange} onKeyUp={handleKeyUp}/>
          ) : (
            <Typography
              variant="p"
              component="p"
              fontSize={"1rem"}
              color={"black"}
              sx={{textDecoration:completed? "line-through" : "none" }}
            >
              {todo}
            </Typography>
          )}
        </Grid>
        <Grid item xs={1} flex={1} alignContent={"center"}>
          {editing ? (
            <IconButton edge="end" color={"success"} onClick={handleUpdateTodo}>
              <CheckBoxIcon sx={{ fontSize: "2rem" }} />
            </IconButton>
          ) : (
            <IconButton edge="end" color={"warning"} onClick={handeleAllowEdit}>
              <EditIcon sx={{ fontSize: "2rem" }} />
            </IconButton>
          )}
        </Grid>
        <Grid item xs={1} flex={1} alignContent={"center"} onClick={handelCancelEdit}>
          {editing ? (
            <IconButton edge="end" color={"error"}>
              <DisabledByDefaultIcon sx={{ fontSize: "2rem" }} />
            </IconButton>
          ) : (
            <IconButton size="large" edge="end" color="error" onClick={handleDeleteTodo}>
              <DeleteForeverIcon sx={{ fontSize: "2rem" }} />
            </IconButton>
          )}

          
        </Grid>
      </Grid>
    </Paper>
  );
};

export default TodoItem;
