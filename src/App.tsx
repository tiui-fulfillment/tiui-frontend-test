import {useState, useEffect} from 'react';
import './App.css';
import TaskInterface from './Common/interfaces/Task.interface';
import AddTask from './Components/Agregar/AddTask';
import GetTask from './Components/Filtrar/GetTask';

function App() {
  const [tasks, setTasks] = useState<TaskInterface[]>([]);
  const [counter, setCounter] = useState<number>(0)

  useEffect(()=>{
    if(tasks.length>0)setCounter(counter+1)
      //console.log(tasks)
  },[tasks])

  function handdleDelete(id:number){
    setTasks(prev=>prev.filter(task=>task.id!==id))
  }
  function handdleEdit(newtask:TaskInterface){
    setTasks(prev=>prev.map(task=>{
      if(task.id===newtask.id)return newtask
      return task
    }))
  }
  return (
    <div className="">
      <div className='vh-100'>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-lg-9 col-xl-7">
              <div className="card rounded-3">
                <div className="card-body p-4">
                  <h4 className="text-center my-3 pb-3">To Do List</h4>
                  <form className="row row-cols-lg-auto justify-content-center align-items-center ">
                    <div className="col-12 ">
                      <AddTask add={
                        (task:Omit<TaskInterface, 'id'>)=>
                          setTasks((prev)=>
                            [...prev, {...task, id:counter}]
                          )
                        } />
                    </div>
                  </form>
                  <GetTask handdleDelete={handdleDelete} handdleEdit={handdleEdit} tasks={tasks}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
