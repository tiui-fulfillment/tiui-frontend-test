import {useState, useEffect} from 'react'
import { FaEdit } from 'react-icons/fa'
import { AiOutlineSave } from "react-icons/ai";

interface UpdateTaskFunction {
    updateTask: (editing:boolean) => void,
}

function UpdateTask({ updateTask }: UpdateTaskFunction) {
    const [editing, setEditing] = useState<boolean>()
    useEffect(()=>{
        if(editing!==undefined)updateTask(editing)
    },[editing])
    
    function renderComponent(){
        if(editing)return<button className="btn bg-primary text-white ms-1"
        onClick={e=>setEditing(false)}
        type='button'
        >
            {<AiOutlineSave size={25} />}
        </button>
        else return <button className="btn bg-primary text-white ms-1"
        onClick={e=>setEditing(true)}
        type='button'
        >
            {<FaEdit size={25} />}
        </button>
    }
  return (
    renderComponent()
  )
}

export default UpdateTask