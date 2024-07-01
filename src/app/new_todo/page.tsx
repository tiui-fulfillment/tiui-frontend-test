"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function NewTodo() {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState('');
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        await fetch('/api/todos', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, description, status }),
        });
        router.push('/');
    };

    return (
        <div>
            <div className="container pt-5"><h1 className='text-center'>Crear Nueva Tarea</h1></div>
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
                        <button className='mb-4 px-4 py-2 btn btn-success text-white rounded-lg' type="submit">Crear</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
