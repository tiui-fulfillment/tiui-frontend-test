import React from 'react';
import { Grid } from '@mui/material';
import Note from './Note';

const NoteList = ({ notes, deleteNote, toggleComplete }) => {
  return (
    <Grid container spacing={2}>
      {notes.map((note) => (
        <Grid item key={note.id}>
          <Note note={note} deleteNote={deleteNote} toggleComplete={toggleComplete} />
        </Grid>
      ))}
    </Grid>
  );
};

export default NoteList;
