import {useEffect, useState} from 'react'
import TaskInterface from '../Common/interfaces/Task.interface';
import DeleteTask from './Eliminar/DeleteTask';
import UpdateTask from './Editar/UpdateTask';

interface NumeredTask extends TaskInterface{
  number:number
  deleteTask:(id:number)=>void
  editTask:(task:TaskInterface)=>void
}

function Task({id, task, completed, number, deleteTask, editTask}:NumeredTask) {
  const[completedTask, setComplitedTask] = useState(completed);
  const [editing, setEditing] = useState<boolean>()
  const [text, setText] = useState<string>(task)

  useEffect(()=>{
    editTask({id, task, completed:completedTask})
  },[completedTask])
  useEffect(()=>{
    if(editing!==undefined){
      if(text!==''){
        editTask({id, task:text, completed})  
      }else alert('La tarea está vacía')
    }
  },[editing])

  function handdleUpdate(editing:boolean){
    setEditing(editing)  
  }
  function renderTask(){
    return editing
      ?<input type="text" value={text} onChange={e=>setText(e.target.value)} className="form-control" placeholder='Change Task'/>
      :<label className='form-control'>{task}</label>
  }
  return (
    <tr className={`${completedTask?'bg-success text-white':''}`}>
      <td>
        <input type="checkbox" checked={completedTask} onChange={e=>setComplitedTask(e.target.checked)}/>
      </td>
      <td>{number}</td>
      <td>{renderTask()}</td>
      <td>
        <DeleteTask deleteTask={()=>deleteTask(id)}/>
      </td>
      <td>
        <UpdateTask updateTask={handdleUpdate}/>
      </td>
  </tr>
  );
}

export default Task