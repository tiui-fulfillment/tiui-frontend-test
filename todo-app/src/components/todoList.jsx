import React from "react";
import { TodoItem } from "./todoItem";

export const TodoList= ({
    todos, 
    handleUpdateTodo, 
    handleDeleteTodo, 
    handleCompleteTodo
})=>{
    return(
       <ul>
        {todos.map(todo=>
             <TodoItem    
             key={todo.id}              
             todo={todo}
             handleDeleteTodo={handleDeleteTodo}
             handleCompleteTodo={handleCompleteTodo}
             handleUpdateTodo={handleUpdateTodo}/>
        )}
       </ul>
    )
}