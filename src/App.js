import React, { useState } from 'react';
import { Container, Typography, Box, TextField, Button, Select, MenuItem } from '@mui/material';
import NoteList from './components/NoteList';

const App = () => {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [filter, setFilter] = useState('all');

  const addNote = () => {
    const newNote = {
      id: Date.now(),
      title,
      content,
      completed: false, 
    };
    setNotes([...notes, newNote]);
    setTitle('');
    setContent('');
  };

  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  const toggleComplete = (id) => {
    setNotes(
      notes.map((note) =>
        note.id === id ? { ...note, completed: !note.completed } : note
      )
    );
  };

  const filteredNotes = notes.filter((note) => {
    if (filter === 'completo') {
      return note.completed;
    }
    if (filter === 'pendiente') {
      return !note.completed;
    }
    return true;
  });

  return (
    <Container>
      <Typography variant="h3" gutterBottom>
        To Do List
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, marginBottom: 2 }}>
        <TextField
          label="Titulo"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          variant="outlined"
        />
        <TextField
          label="Descripcion"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          variant="outlined"
          multiline
          rows={4}
        />
        <Button variant="contained" color="primary" onClick={addNote}>
          Agregar
        </Button>
        <Select value={filter} onChange={(e) => setFilter(e.target.value)}>
          <MenuItem value="all">Todos</MenuItem>
          <MenuItem value="completo">Completo</MenuItem>
          <MenuItem value="pendiente">Pendiente</MenuItem>
        </Select>
      </Box>
      <NoteList notes={filteredNotes} deleteNote={deleteNote} toggleComplete={toggleComplete} />
    </Container>
  );
};

export default App;
