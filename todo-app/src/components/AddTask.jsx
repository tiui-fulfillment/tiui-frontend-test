import { useState  } from "react";
import axios from "axios";

const API_URL = "https://project-management-api-4641927fee65.herokuapp.com";


function AddTask({ refreshTasks }) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit =(e) => {
        e.preventDefault();
        const requestBody = {title, description, completed: false};

        axios
        .post(`${API_URL}/tasks`, requestBody)
        .then(() => {
            setTitle("");
            setDescription("");
            refreshTasks();
        })
        .catch((error) => console.log(error));

    };

    return(
        <div className="AddTask">
            <h3>Agrega una nueva tarea</h3>

            <form onSubmit={handleSubmit}>
                <label>Titulo:</label>
                <input
                type="text"
                name="titulo"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                />

                <label>Instrucciones:</label>
                <textarea
                type="text"
                name="instrucciones"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                />

                <button type="submit">Agregar tarea</button>
            </form>
        </div>
    );
}

export default AddTask;