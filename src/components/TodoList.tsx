import { Button, Dialog, Switch } from "@mui/material"
import { TodoItem } from "./TodoItem"
import { useEffect, useMemo, useState } from "react";
import { TodoForm } from "./TodoForm";
import { useTodo } from "../hooks/useTodo";
import { FilterByCategory } from "./FilterByCategory";

export const TodoList = () => {
  const { state, totalTodos, dispatch } = useTodo();
  const [open, setOpen] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const filteredTodos = state.todos.filter((todo) => {
    const categoryMatches = state.currentCategory ? todo.category === state.currentCategory : true;
    const completedMatches = isChecked ? todo.completed === true : true;
    return categoryMatches && completedMatches;
  });

  
  const isEmpty = useMemo(() => filteredTodos.length === 0, [filteredTodos]);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(state.todos))
  }, [state])

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    dispatch({ type: 'reset-form' });
  };

  const handleSwitchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked);
  }

  return (
    <div className='w-full shadow-sm rounded-md bg-white flex flex-col justify-between'>
      <header className="p-5 border-b border-slate-200 border-solid flex justify-between items-center">
        <h1 className="font-semibold flex gap-2">Lista de tareas
          <span className="bg-slate-100 text-center rounded-full h-6 w-6 flex items-center justify-center">
            {totalTodos}
          </span>
        </h1>

        <Button variant="contained" color="primary" onClick={handleClickOpen}>Nueva Tarea</Button>
      </header>

      <div className="px-5 min-h-5">
        <div className="flex justify-between border-b border-slate-200 border-solid">
          <FilterByCategory />

          <div className="flex items-center">
            <label className="ml-4">Completadas</label>
            <Switch onChange={handleSwitchChange}/>
          </div>
        </div>

        <p className="text-slate-400 my-2 mb-5"><span className="font-semibold">Nota:</span> Desliza hacia la izquierda o derecha para realizar una acción</p>

        <div className="min-h-24 flex justify-center flex-col items-center">
          {
            isEmpty ?
              <p className="text-slate-400 text-center mt-5">No hay tareas...</p>
              :
              (
                <>
                  {filteredTodos.map((expense) => (
                    <TodoItem key={expense.id} todo={expense} handleClickOpen={handleClickOpen} />
                  ))}
                </>
              )}
        </div>
      </div>

      <footer className="p-5">
       
      </footer>


      <Dialog open={open}>
        <TodoForm handleClose={handleClose} />
      </Dialog>
    </div>
  )
}