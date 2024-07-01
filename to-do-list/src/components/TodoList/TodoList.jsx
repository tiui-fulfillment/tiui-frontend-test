import { Todo } from "../Todo/Todo"
import { TodoFilters } from "../TodoFilters/TodoFilters"

const TodoList = ( { 
    todos, 
    handleSetComplete, 
    handleDelete, 
    handleSetEdit,
    pendingFilter, 
    showPendingTodos, 
    showAllTodos, 
    showCompleteTodos 
} ) => {

    return (
        <div className="flex flex-col mt-10 rounded-md overflow-hidden shadow-md">
            { todos.map(todo => {
                return ( 
                    <Todo 
                        key={todo.id}
                        todo={todo}
                        handleSetComplete={handleSetComplete}
                        handleDelete={handleDelete}
                        handleSetEdit={handleSetEdit}/>
                )
            }) }
            <TodoFilters 
                pendingFilter={pendingFilter}
                total={todos.length}
                showAllTodos={showAllTodos}
                showPendingTodos={showPendingTodos}
                showCompleteTodos={showCompleteTodos}
            />
        </div>
    )
}

export { TodoList }