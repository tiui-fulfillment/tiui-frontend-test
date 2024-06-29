import './App.css';
import { TodoList } from './components/todoList';
import { AddPendiente } from './components/addPendiente';
import { useTodo } from './hooks/useTodo';

function App() {
  const {
    todos,
    todosCount,
    pendientesTodos,
    handleNewTodo,
    handleDeleteTodo,
    handleCompleteTodo,
    handleUpdateTodo,
    handleFilterChange,
    filter
  } = useTodo();

  return (
    <div className="App container mt-4">
      <div className="todolist card shadow-sm p-4">
        <h1 className="text-center mb-4">Pendientes</h1>
        <div className="contador-todo d-flex justify-content-around mb-3">
          <h3 className="fw-light">Tareas totales: <span className="fw-bold">{todosCount}</span></h3>
          <h3 className="fw-light">Tareas pendientes: <span className="fw-bold">{pendientesTodos}</span></h3>
          <select
            className="form-select w-auto d-inline"
            value={filter}
            onChange={(e) => handleFilterChange(e.target.value)}
          >
            <option value="all">Todas</option>
            <option value="completed">Completadas</option>
            <option value="pending">Pendientes</option>
          </select>
        </div>

        <div className="add-lista mb-4">
          <h3 className="text-center mb-3">Agregar pendiente</h3>
          <AddPendiente handleNewTodo={handleNewTodo} />
        </div>

        <div className="filter-dropdown mb-4 text-center">

        </div>

        <TodoList
          todos={todos}
          handleDeleteTodo={handleDeleteTodo}
          handleCompleteTodo={handleCompleteTodo}
          handleUpdateTodo={handleUpdateTodo}
        />
      </div>
    </div>
  );
}

export default App;
