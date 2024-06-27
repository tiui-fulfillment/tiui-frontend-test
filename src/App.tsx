import AddTaskForm from "./components/AddTaskForm"
import Header from "./components/Header"
import TaskList from "./components/TaskList"

function App() {
  return (
    <>
      <header className="w-100 bg-dark">
        <Header title="To-Do List" />
      </header>

      <article className="w-75 mx-auto my-0 my-2">
        <h2 className="ps-2 fs-1 py-2">
          Maneja tus tareas y organizate de manera rápida
        </h2>

        <p className="ps-2 fs-4 pb-2">
          Puedes Agregar, Eliminar, Editar y Filtrar tus tareas.
        </p>

        <button
          className="bg-success bg-opacity-75 rounded border-0 px-3 py-2 fw-semibold mb-2 text-white"
          data-bs-toggle="modal"
          data-bs-target="#AddTaskModal"
        >
          Agregar Tarea
        </button>
      </article>

      <main className="w-75 mx-auto my-0">
        <TaskList />
      </main>

      <div className="modal fade" id="AddTaskModal" tabIndex={-1} aria-labelledby="AddTaskModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header bg-dark">
              <h1 className="modal-title fs-5 text-white" id="exampleModalLabel">Nueva Tarea</h1>
              <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <AddTaskForm />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
