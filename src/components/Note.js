import React from 'react';
import { Card, CardContent, Typography, IconButton, Checkbox, Box } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const Note = ({ note, deleteNote, toggleComplete }) => {
  return (
    <Card sx={{ minWidth: 150, maxWidth: 150, margin: 1, backgroundColor: note.completed ? '#c8e6c9' : note.color }}>
      <CardContent>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="h6">{note.title}</Typography>
          <Checkbox checked={note.completed} onChange={() => toggleComplete(note.id)} />
        </Box>
        <Typography variant="body2" style={{ textDecoration: note.completed ? 'line-through' : 'none' }}>
          {note.content}
        </Typography>
        <IconButton aria-label="delete" onClick={() => deleteNote(note.id)}>
          <DeleteIcon />
        </IconButton>
      </CardContent>
    </Card>
  );
};

export default Note;
