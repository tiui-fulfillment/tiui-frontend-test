import { TodoList } from "./components/TodoList"
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

function App() {

  return (
    <>
      <header className="py-8 max-h-72 shadow-lg bg-white">
        <h1 className="uppercase text-center font-black text-3xl">TODO App</h1>
      </header>

      <main className="max-w-3xl mx-auto py-10">
        <TodoList />

        {/* <TodoForm /> */}
      </main>
    </>
  )
}

export default App
