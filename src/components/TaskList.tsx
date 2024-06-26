import { useMemo } from "react";
import { useTaskStore } from "../store/store";
import TaskDetail from "./TaskDetail";

export default function TaskList() {
    const { tasks } = useTaskStore();
    const existTask = useMemo(() => tasks.length > 0, [tasks]);

    const completedTasks = useMemo(() => tasks.filter(task => task.status === true), [tasks]);
    const incompleteTasks = useMemo(() => tasks.filter(task => task.status === false), [tasks]);

    return (
        <div>
            {existTask ? (
                <div className="container">
                    <div className="row">
                        <div className="col-md-5 me-md-2 mt-2 border border-dark rounded">
                            <div className="">
                                <h3 className="text-center p-3">Tareas <span className="text-white bg-dark rounded px-2 py-1">Incompletas</span></h3>
                            </div>
                            <div className="d-flex flex-wrap gap-2 justify-content-center align-items-center p-3">
                                {incompleteTasks.map(task => (
                                    <TaskDetail key={task.id} task={task} />
                                ))}
                            </div>
                        </div>
                        <div className="col-md-5 ms-md-2 mt-2 border border-success rounded">
                            <div>
                                <h3 className="text-center p-3">Tareas <span className="text-white bg-success rounded px-2 py-1" >Completas</span></h3>
                            </div>
                            <div className="d-flex flex-wrap gap-2 justify-content-center align-items-center p-3">
                                {completedTasks.map(task => (
                                    <TaskDetail key={task.id} task={task} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="">
                    <h5>No hay nada por hacer ...</h5>
                </div>
            )}
        </div>
    );
};
