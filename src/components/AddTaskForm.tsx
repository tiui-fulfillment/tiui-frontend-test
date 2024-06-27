import { ChangeEvent, FormEvent, useState } from "react"
import { TaskForm } from "../types";
import { useTaskStore } from "../store/store";

export default function AddTaskForm() {

  const { addTask } = useTaskStore()
  const [values, setValues] = useState<TaskForm>({
    title: '',
    description: '',
    status: false
  })

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      [e.target.id]: e.target.value
    })
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    addTask(values)

    setValues({
      title: '',
      description: '',
      status: false
    })
  }

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
      <input
        type="submit"
        className="btn btn-primary"
        value={'Agregar Tarea'}
      />
    </form>
  );
};