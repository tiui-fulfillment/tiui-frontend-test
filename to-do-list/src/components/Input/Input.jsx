import { useState } from "react"

const Input = ( { addTodo, selectedTodo, updateTodo } ) => {

    const [title, setTitle] = useState('');
    const [selectedTitle, setSelectedTitle] = useState('');

    const handleTodo = (e) => {
        if(e.keyCode === 13){ //Enter
            addTodo(title)
            setTitle('')
        }
    }
    const handleSelectedTodo = (e) => {
        if(e.keyCode === 13){ //Enter
            updateTodo(selectedTodo.id, e.target.value)
            setSelectedTitle('')
        }
    }

    return (
        <div className="mt-4 relative">
            <div className="absolute left-0 pl-3 inset-y-0 flex items-center pointer-events-none">
                <span className="border-4 border-white border-solid p-2 rounded-full"></span>
            </div>
            { selectedTodo ? (
                    <input 
                        type="text"
                        className="font-concertone text-white text-xl focus:shadow-md focus:shadow-slate-500 pl-14 w-full py-3 bg-slate-900 rounded-lg outline-none transition-all duration-200 ease-in-out" 
                        placeholder="Edit to-do... Enter"
                        value={selectedTitle || selectedTodo.title}
                        onChange={e => setSelectedTitle(e.target.value)}
                        onKeyDown={e => handleSelectedTodo(e)}/>
                ): (
                    <input 
                    type="text"
                    className="font-concertone text-white text-xl focus:shadow-md focus:shadow-slate-500 pl-14 w-full py-3 bg-slate-700 rounded-lg outline-none transition-all duration-200 ease-in-out" 
                    placeholder="New to-do... Enter"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    onKeyDown={e => handleTodo(e)}/>
                )
            }
            

                
        </div>
    )
}

export { Input }