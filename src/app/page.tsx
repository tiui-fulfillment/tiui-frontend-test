"use client";
import { useEffect, useState } from 'react';
import { ITodo } from '@/models/todo';
import { TodosCard } from '@/components/TodosCard';
import { ButttonActions } from '@/components/ButtonsActions';

interface Todo extends ITodo {
  id: string;
}

export default function Home() {
  const [todos, setTodos] = useState<Todo[]>([]);
  useEffect(() => {
    const fetchTodos = async () => {
      const res = await fetch('/api/todos');
      const data = await res.json();
      setTodos(data.data);
    };

    fetchTodos();
  }, []);
  return (
    <>
      <div className="container mx-auto p-4">
        <h1 className="">Todas las tareas</h1>


        <div className="container cont-cards">
          <ButttonActions/>
          {todos.map((todo => (
            <TodosCard key={todo.id} todo={todo} setTodos={setTodos} />
          )))}
        </div>
      </div>
    </>
  );
}
