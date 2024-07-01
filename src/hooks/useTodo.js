import { useEffect, useState } from "react";
import { filterOptions } from "../constants/constants ";

export const useTodo = ()=>{
    const baseCountTodo = {
        "completed":0,
        "pending":0,
        "all":0
    }
    const [todos, setTodos] = useState();
    const [countTodos, setConutTodos] = useState(baseCountTodo)
    const [filter, setFilter] = useState()
    const [alert, setAlert] = useState(false)
    const [alertMsg, setAlertMsg] = useState("")

    useEffect(()=>{
        const jsonString = localStorage.getItem("todos")
        const initTodos = JSON.parse(jsonString);
        setTodos(initTodos)
    }, [])

    useEffect(()=>{
        if(todos){
        const newCountTodos = {...baseCountTodo}
            todos.forEach((todo)=>{
                if(todo.completed) newCountTodos.completed+=1
                else newCountTodos.pending+=1
                newCountTodos.all+=1
            })
            
            setConutTodos(newCountTodos)
            localStorage.setItem("todos", JSON.stringify(todos));
        }
    }, [todos])

    const filteredTodos = todos? todos.filter((todo) => {
        if (filter === filterOptions.pending) return !todo.completed;
        if (filter === filterOptions.completed) return todo.completed;
        return true;
    }) : []

    const updateTodo = (todoId, newDesc) =>{
        if(newDesc === ""){
            setAlertMsg("No se pueden insertar tareas vacias")
            setAlert(true)
            return
          }
        const updatedTodos = todos.map((todo)=>{
            if(todo.todoId === todoId){
                return {...todo, todo: newDesc}
            }else return todo
        })

        setTodos(updatedTodos)
    }

    const addTodo = newTodo =>{
        if(newTodo === ""){
            setAlertMsg("No se pueden insertar tareas vacias")
            setAlert(true)
            return
        }
        setTodos(todos.length > 0 ? [...todos, newTodo]:[newTodo])
    }
    const deleteTodo = todoId =>{
        const baseTodos = todos.filter((todo)=>todo.todoId !== todoId)
        setTodos(baseTodos)
    }

    const applyFilter = (newFilter)=>{
        setFilter(newFilter)
    }

    const updTodoCheck = (todoId) =>{
        const todosUpd = todos.map((todo)=>{
            if(todo.todoId === todoId){
                return {...todo, completed: !todo.completed}
            }else return todo
        })
        setTodos(todosUpd)
    }
    
    const showAlertStatus = (status, warningAlertMsg) =>{
        setAlert(status)
        setAlertMsg(warningAlertMsg||"")
    }


    return {todos:filteredTodos, updateTodo, addTodo, updTodoCheck, countTodos, deleteTodo, applyFilter, alert, alertMsg, showAlertStatus}
}

 