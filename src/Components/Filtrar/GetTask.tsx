import {useState, useEffect} from 'react'
import TaskInterface from '../../Common/interfaces/Task.interface'
import TaskComponent from '../Task'
import quicksort from '../../Common/tools/Quicksort'

interface Props{
    tasks:TaskInterface[]
    handdleDelete:(id:number)=>void
    handdleEdit: (newtask:TaskInterface)=>void
}

function GetTask({tasks, handdleDelete, handdleEdit}: Props) {
    const [showed, setShowed] = useState<TaskInterface[]>([])
    const [completed, setComplited] = useState<boolean>(true)
    const [uncompleted, setUncomplited] = useState<boolean>(true)
    const [desc, setDesc] = useState<boolean>();
    useEffect(()=>{
        setShowed([...tasks])
    },[tasks])
    useEffect(()=>{
        if(desc!==undefined){
            setShowed(prev=>quicksort(prev, 'task', desc))
        }
    },[desc])

  return (
    <div className='text-center'>
        <label className='text-center my-3 pb-3'>Filtrar</label>
        <div className="col-12">
            <button type="button"
            className={`${completed&&uncompleted? 'btn bg-primary text-white' : 'btn bg-white text-primary'}`}
            onClick={()=>{
                setComplited(true)
                setUncomplited(true)
            }}
            >
                Todas
            </button>
            <button type="button"
            className={`${completed? 'btn bg-primary text-white' : 'btn bg-white text-primary'}`}
            onClick={()=>{
                setComplited(true)
                setUncomplited(false)
            }}
            >
                Completadas
            </button>
            <button type="button"
            className={`${uncompleted? 'btn bg-primary text-white' : 'btn bg-white text-primary'}`}
            onClick={()=>{
                setComplited(false)
                setUncomplited(true)
            }}
            >
                Pendientes
            </button>
        </div>
        <br />
        <div className='col'>
            <label>Ordenar</label>
            <button type="button"
            className={`${desc===undefined? 'btn bg-primary text-white' : 'btn bg-white text-primary'}`}
            onClick={()=>{
                setDesc(!desc);
            }}
            >
                {desc?'Descendente':'Ascendente'}
            </button>
        </div>
        <br />
        <table className={`mb-4`}>
            <thead>
            <tr>
            <th scope="col"></th>
                <th scope="col">No.</th>
                <th scope="col">Tarea</th>
                <th scope="col">Eliminar</th>
                <th scope="col">Editar</th>
            </tr>
            </thead>
            <tbody>
            {showed.filter(task=>((completed&&task.completed)||(uncompleted&&!task.completed))).map((taskElement, index)=>{
                const {id, task, completed} = taskElement
                return <TaskComponent 
                task={task} 
                id={id} 
                completed={completed} 
                number={index+1} 
                key={`${id}-${task}`}
                deleteTask={handdleDelete}
                editTask={handdleEdit}
                />
            })}
            </tbody>
        </table>
    </div>
  )
}

export default GetTask