import { createContext, useRef, useState } from "react"

export const globalContext = createContext()

export const ContextProvider = (params) => {

    const [tasks, setTasks] = useState([])
    const [renderTasks, setRenderTasks] = useState([])
    const [taskId, setTaskId] = useState("")
    const selectRef = useRef(null);

    const createTask = (newTask) => {
        const taskCreate = [
            ...tasks,
            {
                id: tasks.length + 1,
                title: newTask.title,
                complete: false,
                description: newTask.description
            }
        ]
        setTasks(taskCreate)
        setRenderTasks(taskCreate)
    }

    const deleteTask = (id) => {
        const deleteTask = tasks.filter(item => item.id !== id)
        setTasks(deleteTask)
        setRenderTasks(deleteTask)
    }

    const updateTask = (id, title = '', description = '') => {
        const taskComplete = tasks.find(item => item.id === id);
        if (taskComplete) {
            // Actualiza la tarea solo si se proporciona un título o descripción
            if (title || description) {
                const updatedTask = {
                    ...taskComplete,
                    title: title ? title : taskComplete.title,
                    description: description ? description : taskComplete.description
                };
                const updatedTasks = tasks.map(item =>
                    item.id === id ? updatedTask : item
                );
                setTasks(updatedTasks);
                setRenderTasks(updatedTasks)
                setTaskId("")
                if (selectRef.current) {
                    selectRef.current.reset(); // Esto resetea el select
                }
            } else {
                const updatedTask = { ...taskComplete, complete: !taskComplete.complete };

                const updatedTasks = tasks.map(task =>
                    task.id === id ? updatedTask : task
                );

                setTasks(updatedTasks);
                setRenderTasks(updatedTasks)
            }


        } else {
            console.log(`No se encontró ninguna tarea con el ID ${id}`);
        }
    };

    const filterTasks = (value) => {
        let filteredTasks = [];

        switch (value) {
            case "todas":
                filteredTasks = tasks;
                break;
            case "completadas":
                filteredTasks = tasks.filter(item => item.complete);
                break;
            case "pendientes":
                filteredTasks = tasks.filter(item => !item.complete);
                break;
            default:
                filteredTasks = tasks;
                break;
        }

        setRenderTasks(filteredTasks);
    };



    return (<globalContext.Provider value={
        {
            tasks,
            renderTasks,
            taskId,
            selectRef,
            setTaskId,
            createTask,
            deleteTask,
            updateTask,
            filterTasks,
        }
    }>
        {params.children}
    </globalContext.Provider>)
}
