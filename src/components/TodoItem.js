import { useState } from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import EditIcon from '@mui/icons-material/Edit';
import TextField from '@mui/material/TextField';

export default function TodoItem ({ todo, remove, toggle, edit }) {
    const [editing, setEditing] = useState(false);
    const [editedText, setEditedText] = useState(todo.text);

    const labelId = `checkbox-list-label-${todo.id}`;

    const handleEditChange = (event) => {
        setEditedText(event.target.value);
    };

    const handleEditSave = () => {
        edit(todo.id, editedText);
        setEditing(false);
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            handleEditSave();
        }
    };

    const removeTodo = () => {
        remove(todo.id);
    };

    const handleEditToggle = () => {
        setEditing(true);
    };

    const handleCancelEdit = () => {
        setEditing(false);
        setEditedText(todo.text);
    };

    return (
        <ListItem key={todo.id} disablePadding>
            <ListItemButton role={undefined} dense>
                <ListItemIcon>
                    {!editing && (<Checkbox
                        edge="start"
                        checked={todo.completed}
                        tabIndex={-1}
                        disableRipple
                        inputProps={{ 'aria-labelledby': labelId }}
                        onChange={toggle}
                        icon={<RadioButtonUncheckedIcon />}
                        checkedIcon={<CheckCircleOutlineIcon />}
                        color='warning'
                    />)}
                    
                </ListItemIcon>
                {editing ? (
                    <TextField
                        id="edited-text"
                        label="Edit Todo"
                        variant="standard"
                        value={editedText}
                        onChange={handleEditChange}
                        onKeyDown={handleKeyDown}
                        fullWidth
                        autoFocus
                    />
                ) : (
                    <ListItemText id={labelId} primary={todo.text} />
                )}
                <IconButton onClick={editing ? handleEditSave : handleEditToggle}>
                    {editing ? <CheckCircleOutlineIcon sx={{ color: '#4caf50' }} /> : <EditIcon sx={{ color: '#ff9100' }} />}
                </IconButton>
                {!editing && (
                    <IconButton onClick={removeTodo} edge="end" aria-label="delete">
                        <DeleteOutlineIcon sx={{ color: 'red' }} />
                    </IconButton>
                )}
                {editing && (
                    <IconButton onClick={handleCancelEdit} edge="end" aria-label="cancel">
                        <DeleteOutlineIcon sx={{ color: 'grey' }} />
                    </IconButton>
                )}
            </ListItemButton>
        </ListItem>
    );
}
