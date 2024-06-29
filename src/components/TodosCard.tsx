import Link from "next/link";
import Image from "next/image";
import { ITodo } from '@/models/todo';
import { useState } from "react";


interface Todo extends ITodo {
    id: string;
}

interface TodosCardProps {
    todo: Todo;
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>

}

type Status = 'completed' | 'in process' | string;

export function TodosCard({ todo, setTodos }: TodosCardProps) {

    function getStatusBadgeClass(status : string) {
        if (status === 'completed') {
            return 'badge badge-warning'
        } else if (status === 'in process') {
            return 'badge badge-info'
        } else {
            return 'badge badge-secondary' // Clase por defecto si el estado no coincide
        }
    }

    const [status, setStatus] = useState(todo.status);


    const handleStatusChange = async (newStatus: Status) => {
        setStatus(newStatus);
        await updateTodoStatus(todo.id, newStatus);
    };

    const updateTodoStatus = async (id: string, status: Status) => {
        try {
            const res = await fetch(`/api/todo/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ status }),
            });
            const data = await res.json();
            if (res.ok) {
                console.log('Todo updated successfully', data);
            } else {
                console.error('Error updating todo', data);
            }
        } catch (error) {
            console.error('Error updating todo', error);
        }
    };


    async function deleteTodo(id: string) {
        if (window.confirm("Quieres borrar esta tarea?")) {
            try {
                await fetch(`/api/todo/${id}`, { method: 'DELETE' });
                setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
            } catch (e) {
                return e;
            }
        }
    }

    async function updateTodo(id: string) {
        try {
            const res = await fetch(`/api/todo/${id}`);
            const updatedTodo = await res.json();
            setTodos(prevTodos => prevTodos.map(t => t.id === id ? updatedTodo : t));
        } catch (e) {
            console.error(e);
        }
    }
    return (
        <div className="card todo-card" >
            <div className="row">
                <div className="col-md-6">
                    <h1 className='text-white'>{todo.name}</h1>
                    <p className='text-white'>{todo.description}</p>
                </div>
                <div className="col-md-2 cont-badge-radio-btn">
                    <div className="cont-checkbox">
                        <input
                            className="form-check-input mr-2"
                            type="checkbox"
                            checked={status === 'completed'}
                            onChange={() => handleStatusChange(status === 'completed' ? 'in process' : 'completed')}
                        />
                        <div className={getStatusBadgeClass(status)}>{status}</div>
                    </div>
                </div>
                <div className="col-md-4 cont-btn">
                    <Link href={`/todo/${todo.id}`}>
                        <button className="btn-primary rounded-lg btn-actions" onClick={() => updateTodo(todo.id)}>Editar</button>
                    </Link>
                    <button className="btn-danger rounded-lg btn-actions" onClick={() => deleteTodo(todo.id)}>Eliminar</button>

                </div>
            </div>
        </div>
    )
}
