import { useEffect, useState } from 'react';
import './App.css';
import { Header } from './components/Header';
import { Input } from './components/Input';
import { TodoList } from './components/TodoList';

function App() {

  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "first todo",
      complete: true,
    },
    {
      id: 2,
      title: "second todo",
      complete: false,
    },
    {
      id: 3,
      title: "third todo",
      complete: false,
    }
  ])

  const [pendingFilter, setPendingFilter] = useState('all')
  const [filteredTodos, setFilteredTodos] = useState(todos)
  const [selectedTodo, setSelectedTodo] = useState('')

  const addTodo = (title) => {
    const lastId = todos.length > 0 ? todos[todos.length - 1].id : 1;

    const newTodo = {
      id: lastId + 1,
      title,
      complete: false
    }

    const todoList = [...todos];
    todoList.push(newTodo);
    setTodos(todoList);
  }

  const handleSetComplete = (id) => {
    const updatedList = todos.map(todo => {
      if(todo.id === id){
        return { ...todo, complete: !todo.complete}
      }
      return todo
    })

    setTodos(updatedList)
  }

  const handleSetEdit = (todo) => {
    //console.log(todo)
    setSelectedTodo(todo)
  }

  const updateTodo = (id, title) => {
    const updatedList = todos.map(todo => {
      if(todo.id === id){
        return { ...todo, title: title}
      }
      return todo
    })

    setTodos(updatedList)
    setSelectedTodo(null)
  }

  const handleDelete = (id) => {
    const updatedList = todos.filter(todo => todo.id !== id)
    setTodos(updatedList)
  }

  const showAllTodos = () => {
    setPendingFilter('all')
  }

  const showPendingTodos = () => {
    setPendingFilter('pending')
  }

  const showCompleteTodos = () => {
    setPendingFilter('complete')
  }

  useEffect(() => {
    if(pendingFilter === 'all'){
      setFilteredTodos(todos)
    } else if(pendingFilter === 'pending'){ 
      const pendingTodos = todos.filter(todo => todo.complete === false)
      setFilteredTodos(pendingTodos)
    } else if(pendingFilter === 'complete'){
      const completeTodos = todos.filter(todo => todo.complete === true)
      setFilteredTodos(completeTodos)
    }
  }, [pendingFilter, todos])

  return (
    <div className="bg-gray-300 min-h-screen h-full flex items-center justify-center py-12 px-4 font-concertone">
        <div className="container flex flex-col max-w-lg">
          <div className='container'>
            <Header />
            <Input 
              addTodo={addTodo}
              selectedTodo={selectedTodo}
              updateTodo={updateTodo}/>
            <TodoList 
              todos={filteredTodos}
              pendingFilter={pendingFilter}
              handleSetComplete={handleSetComplete}
              handleDelete={handleDelete}
              handleSetEdit={handleSetEdit}
              showAllTodos={showAllTodos}
              showPendingTodos={showPendingTodos}
              showCompleteTodos={showCompleteTodos}/>
          </div>
        </div>
    </div>
  );
}

export default App;
