import { useState } from "react";
import axios from "axios";

const API_URL = "https://project-management-api-4641927fee65.herokuapp.com";

function TaskCard({ task, refreshTasks }) {
  const [isEditing, setEditing] = useState(false);
  const [title, setTitle] = useState(task.title);
  const[description, setDescription] = useState(task.description);

  const handleDelete = () => {
    axios
    .delete(`${API_URL}/tasks/${task.id}`)
    .then(() => refreshTasks())
    .catch((error) => console.log(error));
  };

  const toggleCompleted = () => {
    const updatedTask = {...task, completed: !task.completed};
    axios
    .put(`${API_URL}/tasks/${task.id}`, updatedTask)
    .then(() => refreshTasks())
    .catch((error) => console.log(error));
  };

  const handleEdit = (e) => {
    e.preventDefault();
    const updatedTask = {title, description, completed: task.completed};
    axios
    .put(`${API_URL}/tasks/${task.id}`, updatedTask)
    .then(() => {
      setEditing(false);
      refreshTasks();
    })
    .catch((error) => console.log(error));
  }

  return (
    <div className="TaskCard card">
    {isEditing ? (
      <form onSubmit={handleEdit}>
        <label>Titulo: </label>
        <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        />
        <label>Descripcion: </label>
        <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        />

        <button type="submit">Guardar</button>
        <button onClick={() => setIsEditing(false)}>Cancelar</button>
      </form>
    ) : (
      <>
        <h3>{title}</h3>
        <p>{task.description}</p>
        <button onClick={toggleCompleted}>
          {task.completed ? 'Desmarcar' : 'Marcar como completada'}
        </button>
        <button onClick={() => setIsEditing(true)}>Editar</button>
        <button onClick={handleDelete}>Eliminar</button>
      </>
    )}
    </div>
  );
}
 
export default TaskCard;