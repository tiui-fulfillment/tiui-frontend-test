import './App.css';
import * as React from 'react';

import Grid from '@mui/material/Grid';  
import Container from '@mui/material/Container';

import {TodoList} from './components/todoList';


function App() {

  return (
    <div className="App">
      <header className="App-header">
        <h1>Lista de tareas</h1>
      </header>
      <Container className='note-bg' maxWidth="sm">
      <Grid item xs={12} md={6}>
            {
            <TodoList />
            }
        </Grid>
      </Container>
    </div>
  );
}

export default App;
