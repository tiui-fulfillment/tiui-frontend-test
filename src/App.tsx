import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Toaster } from 'sonner';
import ListTasksComponent from './components/ListTasksComponent';

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
      <Toaster richColors theme="dark" />
      <div className="min-h-[100vh] w-full p-8 grid md:place-items-center bg-[#0F0F0F] text-neutral-200">
        <ListTasksComponent />
      </div>
    </ThemeProvider>
  );
}

export default App;
