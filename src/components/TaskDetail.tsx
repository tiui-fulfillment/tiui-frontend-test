import { useTaskStore } from "../store/store";
import { Task } from "../types";
import EditTaskForm from "./EditTaskForm";

type TaskDetailProps = {
    task: Task
}

export default function TaskDetail({ task }: TaskDetailProps) {

    const { selectTask, removeTask } = useTaskStore()

    return (
        <div className="bg-light w-100 bg-opacity-75 p-2 rounded">
            <div className="d-flex align-items-center">
                <div>
                    <h3 className="ms-2">{task.title}</h3>
                </div>
            </div>

            <div className="ms-2">
                {task.description}
            </div>

            <div className="d-flex gap-2 flex-wrap mt-3 ms-2 mb-1">
                <button
                    className="bg-info border-0 rounded px-3 py-1"
                    onClick={() => selectTask(task.id)}
                    data-bs-toggle="modal"
                    data-bs-target="#EditTaskModal"
                >
                    <img
                        src="/pencil-square.svg"
                        alt="EditIcon"
                    />
                    <span className="ms-2">Editar</span>
                </button>

                <button
                    className="bg-danger border-0 rounded px-3 py-1"
                    onClick={() => removeTask(task.id)}
                >
                    <img
                        src="/trash.svg"
                        alt="DeleteIcon"
                    />
                    <span className="ms-2">Eliminar</span>
                </button>
            </div>

            <div className="modal fade" id="EditTaskModal" tabIndex={-1} aria-labelledby="EditTaskModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header bg-dark">
                            <h1 className="modal-title fs-5 text-white" id="exampleModalLabel">Editar Tarea</h1>
                            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <EditTaskForm />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};