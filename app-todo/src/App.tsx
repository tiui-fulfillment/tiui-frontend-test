import { useEffect } from 'react';
import { TodoPage } from './components/TodoPage/TodoPage';
import { getTodos } from './services/storage';
import { useTodoStore } from './context/todoStore';

function App() {
  const setTodos = useTodoStore(state => state.setTodos);
  useEffect(() => {
    setTodos(getTodos());
  }, []);

  return (
    <div className='container-app'>
      <header>
        <h1>App todo</h1>
      </header>
      <main>
        <TodoPage />
      </main>
    </div>
  );
}

export default App;
