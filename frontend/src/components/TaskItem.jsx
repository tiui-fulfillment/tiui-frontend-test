import { useState } from 'react'
import { Checkbox, Button, IconButton, ListItem, ListItemText, TextField } from '@mui/material'
import { Delete, Edit, Save } from "@mui/icons-material"

export default function TaskItem({ task, deleteTask, editTask, toggleCompleted }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(task.text);

  const handleEdit= () => {
    editTask(task.id, newText);
    setIsEditing(false);
  }

  return (
    <ListItem>
      <Checkbox checked={task.completed} onChange={() => toggleCompleted(task.id)} />
        {isEditing ? (
          <TextField value={newText} onChange={(e) => setNewText(e.target.value)} fullWidth />
        ) : (
          <ListItemText primary={task.text} sx={{ textDecoration: task.completed ? "line-through" : "none", color: task.completed ? "gray" : "black" }} />
        )}
        {isEditing ? (
          <IconButton onClick={handleEdit} edge="end" color="primary">
            <Save />
          </IconButton>
        ) : (
          <IconButton onClick={() => setIsEditing(true)} edge="end" color="primary">
            <Edit />
          </IconButton>
        )}
        <IconButton onClick={() => deleteTask(task.id)} edge="end" color="error">
          <Delete />
        </IconButton>
    </ListItem>
  )
}
