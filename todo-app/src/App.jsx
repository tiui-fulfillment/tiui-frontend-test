import './App.css'
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import TodoListPage from './pages/TodoListPage';


function App() {
    return (
    <div className='App'>
      <Navbar />

      <Routes>
        <Route path='/' element={ <HomePage /> } />
        <Route path='/todos' element={ <TodoListPage/> } />
      </Routes>
    </div>
  );
}

export default App;
