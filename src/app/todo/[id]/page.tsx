"use client";

import { useEffect, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { ITodo } from '@/models/todo';
import Link from 'next/link';


interface Todo extends ITodo {
    id: string;
}


export default function EditTodo() {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const router = useRouter();
    const { id } = useParams();

    useEffect(() => {
        const fetchTodo = async () => {
            try {
                if (id) {
                    const res = await fetch(`/api/todo/${id}`);
                    const data = await res.json();

                    if (res.ok && data.todo) {
                        console.log("Tarea cargada:", data.todo);
                        setName(data.todo.name);
                        setDescription(data.todo.description);
                        setStatus(data.todo.status); // Convert price to string for input value
                    } else {
                        setError('Tarea no encontrad no encontrado');
                    }
                }
            } catch (err) {
                setError('Error al cargar los datos de la tarea');
            } finally {
                setLoading(false);
            }
        };

        fetchTodo();
    }, [id]);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
          console.log('Nombre:', name);
          console.log('Descripción:', description);
          console.log('Status:', status);
    
          const res = await fetch(`/api/todo/${id}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, description, status }),
          });
          
          if (res.ok) {
            console.log("Tarea actualizada correctamente");
            router.push('/');
          } else {
            console.error("Error al actualizar la tarea:", res.statusText);
            setError('Error al actualizar la tarea');
          }
        } catch (err) {
          console.error("Error al actualizar el tarea:", err);
          setError('Error al actualizar el tarea');
        }
      };

    if (loading) {
        return <div>Cargando...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div>
            <div className="container pt-5"><h1 className='text-center'>Editar Tarea</h1></div>
            <div className="container cont-form pt-2">
                <form onSubmit={handleSubmit} className='card card-form'>
                    <div className="form-group">
                        <div className="row">
                            <div className="col-md-2"><label>Nombre</label></div>
                            <div className="col-md-8">
                                <input
                                    className='w-100'
                                    required
                                    type="text"
                                    placeholder="Nombre"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="row">
                            <div className="col-md-2"><label>Descripcion</label></div>
                            <div className="col-md-8">
                                <input
                                    className='w-100'
                                    type="text"
                                    placeholder="Descripción"
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="row">
                            <div className="col-md-2">
                                <label>Status</label>
                            </div>
                            <div className="col-md-8">
                                <select className='w-100'
                                    value={status}
                                    onChange={(e) => setStatus(e.target.value)}
                                    required
                                >
                                    <option value="" disabled>Selecciona Status</option>
                                    <option value="in process">In Process</option>
                                    <option value="completed">Completed</option>
                                </select>
                            </div>
                        </div>

                    </div>
                    <div className="form-btn-container">
                        <Link href="/">
                            <button className="mb-4 px-4 py-2 btn btn-warning text-white rounded-lg">Regresar</button>
                        </Link>
                        <button className='mb-4 px-4 py-2 btn btn-success text-white rounded-lg' type="submit">Actualizar</button>
                    </div>
                </form>
            </div>
        </div>
    )
}