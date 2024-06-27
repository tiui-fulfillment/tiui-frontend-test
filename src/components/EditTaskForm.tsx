import { ChangeEvent, FormEvent, useEffect, useMemo, useState } from "react"
import { useTaskStore } from "../store/store"
import { TaskForm } from "../types"

export default function EditTaskForm() {

    const { tasks, taskId, updateTask } = useTaskStore()
    const [values, setValues] = useState<TaskForm>({
        title: '',
        description: '',
        status: false
    })

    const handleChange = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) => {
        let newStatus = values.status
        if (e.target.name === 'status') {
            newStatus = e.target.value === 'true';
        }

        setValues({
            ...values,
            [e.target.id]: e.target.value,
            status: newStatus
        })
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        updateTask(values)

        setValues({
            title: '',
            description: '',
            status: false
        })
    }

    useEffect(() => {
        if (taskId) {
            const activeTask = tasks.filter(task => task.id === taskId)[0]
            setValues({
                title: activeTask.title,
                description: activeTask.description,
                status: activeTask.status
            })
        }
    }, [taskId])

    const options = useMemo(() => {
        const currentValue = values.status;
        const oppositeValue = (!values.status);
        return (
            <>
                <option value={currentValue.toString()}>{currentValue ? 'Completada' : 'Incompleta'}</option>
                <option value={oppositeValue.toString()}>{oppositeValue ? 'Completada' : 'Incompleta'}</option>
            </>
        );
    }, [values.status]);

    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="title" className="form-label">Título</label>
                <input
                    type="text"
                    value={values.title}
                    className="form-control"
                    id="title"
                    onChange={handleChange}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="description" className="form-label">Descripción</label>
                <input
                    type="text"
                    value={values.description}
                    className="form-control"
                    id="description"
                    onChange={handleChange}
                />
            </div>
            <div className="mb-3">
            <label htmlFor="status" className="form-label">Estado</label>
                <select
                    name="status"
                    id="status"
                    value={values.status.toString()}
                    onChange={handleChange}
                    className="form-control"
                >
                    {options}
                </select>
            </div>
            <input
                type="submit"
                className="btn btn-primary"
                data-bs-dismiss="modal"
                value={'Actualizar Tarea'}
            />
        </form>
    );
};