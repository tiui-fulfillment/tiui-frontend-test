import { ThemeProvider } from '@mui/material';
import './App.css';
import TodoList from './components/TodoList';
import { theme } from './theme/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <TodoList/>
    </ThemeProvider>
  );
}

export default App;
