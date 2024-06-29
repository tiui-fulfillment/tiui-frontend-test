import ListItem from "@mui/material/ListItem";
import TextField from "@mui/material/TextField";
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import { Button, InputAdornment } from '@mui/material';
import { IconButton } from "@mui/material";
import { useState } from "react";
import AddIcon from '@mui/icons-material/Add';

export default function TodoForm({ addTodo }) {
    const [text, setText] = useState('');

    const handleChange = (evt) => {
        setText(evt.target.value)
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo(text);
        setText('');
    };

    return (
        <ListItem>
            <form onSubmit={handleSubmit} style={{width:'100%', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                <TextField 
                    sx={{
                        width: '80%'
                    }}
                    id='outlined-basic' 
                    label='Task: ' 
                    variant='outlined' 
                    onChange={handleChange}  
                    value={text}
                />
                <Button onClick={handleSubmit} variant="contained" endIcon={<AddIcon />}>
                    Add
                </Button>
            </form>
        </ListItem>
    );
}