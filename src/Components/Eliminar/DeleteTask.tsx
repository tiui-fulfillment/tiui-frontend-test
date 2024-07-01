import React from 'react'
import { MdDelete } from 'react-icons/md'

interface DeleteTaskFunction {
    deleteTask: () => void
}
function DeleteTask({ deleteTask }:DeleteTaskFunction) {
  return (
    <button type='button' className="btn btn-danger" onClick={()=>deleteTask()}>{<MdDelete size={25}/>}</button>
  )
}

export default DeleteTask