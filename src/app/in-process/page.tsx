"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { TodosCard } from '@/components/TodosCard';
import { ITodo } from '@/models/todo';

interface Todo extends ITodo {
    id: string;
}

export default function CompletedTodos() {
    const [todos, setTodos] = useState<Todo[]>([]);

    useEffect(() => {
        const fetchTodos = async () => {
            const res = await fetch('/api/todos?status=in process');
            const data = await res.json();
            setTodos(data.data);
        };

        fetchTodos();
    }, []);

    return (
        <>
            <div className="container mx-auto p-4">
                <h1 className="">Todas Las Tareas En Proceso</h1>
                <Link href="/">
                    <button className="mb-4 px-4 py-2 btn btn-primary text-white rounded-lg">Volver a Todos las Tareas</button>
                </Link>
                <div className="container cont-cards show-hide">
                    {todos.map((todo) => (
                        <TodosCard key={todo.id} todo={todo} setTodos={setTodos} />
                    ))}
                </div>
            </div>
        </>
    );
}
