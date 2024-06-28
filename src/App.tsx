import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Toaster } from 'sonner';
import TaskList from './components/TaskList';
import { TaskProvider } from './context/TaskContext';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#0d9488',
    },
    secondary: {
      main: '#134e4a',
    },
    error: {
      main: '#f50057',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Toaster position="top-right" theme="dark" />
      <div className="min-h-[100vh] w-full p-8 grid md:place-items-center bg-[#0F0F0F] text-neutral-200">
        <TaskProvider>
          <TaskList />
        </TaskProvider>
      </div>
    </ThemeProvider>
  );
}

export default App;
