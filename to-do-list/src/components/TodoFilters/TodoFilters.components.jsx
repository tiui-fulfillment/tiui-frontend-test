const FiltersContainer = ( { children } ) => {
    return (
        <div className="flex items-center justify-between p-3 bg-slate-400 border-b border-solid border-gray-500">
            { children }
        </div>
    )
}

const TodosLeft = ( { total = 0 }) => {
    return (
        <p className="text-sm text-gray-600">
            { total } todos
        </p>
    )
}

const FilterButtonContainer = ( { children }) => {
    return (
        <div className="flex items-center space-x-2">
            { children }
        </div>
    )
}

const FilterButton = ( { action, pending, filter } ) => {
    return ( 
        <button onClick={action} className={`hover:text-white cursor-pointer transition-all ease-in-out duration-300` 
            + (pending.toLowerCase().includes(filter.toLowerCase()) ? ' text-gray-800' : ' text-gray-600')
            }>
            { filter }
        </button>
    )
}

export { FiltersContainer, TodosLeft, FilterButtonContainer, FilterButton }