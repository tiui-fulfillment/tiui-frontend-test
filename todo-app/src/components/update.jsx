import React, { useRef, useState } from "react";
import {GrUpdate} from 'react-icons/gr';
import { useForm } from "../hooks/useForm";
export const Update = ({ todo, handleUpdateTodo, }) => {
  const {updateDescripcion, onInputChange}=useForm({
    updateDescripcion:todo.descripcion
  })

  const [disable, setDisable]=useState(true)
  const focusInputRef=useRef()

  const onSubmitUpdate=e=>{
    e.preventDefault()
    const id=todo.id
    const descripcion=updateDescripcion
    handleUpdateTodo(id,descripcion);

    setDisable(!disable)
    focusInputRef.current.focus()
  }
  return (
    <form onSubmit={onSubmitUpdate}>
      <input
        type="text"
        className={`input-update ${todo.done ? 'text-decoration-dashed': ''}`}
        name="updateDescripcion"
        value={updateDescripcion}
        onChange={onInputChange}
        readOnly={disable}
        ref={focusInputRef}
      />
      <button className="btn btn-primary" type="submit">
        <GrUpdate></GrUpdate>
      </button>
    </form>
  );
};
