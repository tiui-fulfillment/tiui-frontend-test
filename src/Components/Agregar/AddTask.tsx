import { useState, useEffect } from 'react'
import { IoIosAddCircle } from "react-icons/io";
import Task from '../../Common/interfaces/Task.interface';

interface AddTaskFunction {
    add: (task: Omit<Task, 'id'>) => void;
}

function AddTask({ add }:AddTaskFunction) {
    const [added, setAdded] = useState<Omit<Task, 'id'>>()
    const [text, setText] = useState<string>('')
    useEffect(()=>{
        if(added!==undefined){
            if(added.task!==''){
                add(added)
                setAdded(undefined)
                setText('')
            }else alert('La tarea está vacía')
        }
    }, [added]);
    function handdleAdd(){
        setAdded({
            task:text,
            completed:false
        })
    }
  return (
    <div className="input-group mb-3">
        <input 
        type="text" 
        value={text} 
        onChange={e=>setText(e.target.value)} 
        className="form-control" 
        placeholder='New Task'
        onKeyDown={e=>{
            if(e.key==='Enter'){
                e.preventDefault()
                handdleAdd()
            }
        }}
        />
        <span className='mb-2'/>
        <button type="button" className="btn btn-primary" onClick={handdleAdd}>
            {<IoIosAddCircle size={25}/>}
        </button>
    </div>
  )
}

export default AddTask