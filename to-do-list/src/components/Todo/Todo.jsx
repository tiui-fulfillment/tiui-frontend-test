const Todo = ( { todo, handleSetComplete, handleDelete, handleSetEdit } ) => {

    const { id, title, complete } = todo

    return (
        <div className="flex items-center justify-between p-4 bg-slate-400 border-b border-solid border-gray-500">
            <div className="flex items-center">
                {
                    complete ? (
                        <div onClick={() => handleSetComplete(id)} className="bg-green-700 rounded-full cursor-pointer">
                            <img src="/check.svg" alt="Check Icon" className="h-7 w-7"/>
                        </div>
                    ): (
                        <span onClick={() => handleSetComplete(id)} className="border-solid border-4 border-gray-700 rounded-full p-2 cursor-pointer"></span>
                    )
                }
                <p className={ "pl-3 text-gray-700 " + (complete && " line-through")}>
                    { title }
                </p>
            </div>
            <div className="flex">
                { !complete ? (
                    <img onClick={() => handleSetEdit(todo)} src="/edit.svg" alt="Edit Icon" className="cursor-pointer transition-all duration-200 ease-in h-7 w-7"/>
                ): ( '' )
                }
                <img onClick={() => handleDelete(id)} src="/close.svg" alt="Close Icon" className="cursor-pointer transition-all duration-200 ease-in h-7 w-7"/>
            </div>
        </div>
    )
}

export { Todo }