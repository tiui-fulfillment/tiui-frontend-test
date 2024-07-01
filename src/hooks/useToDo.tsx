import { useState, useEffect } from "react"
import type { ToDo } from "../interfaces/interface"

export const useToDo = () => {
  const [todos, setTodos] = useState<ToDo[]>(() => {
    const storedTodos = localStorage.getItem("todos")
    return storedTodos ? JSON.parse(storedTodos) : []
  })

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  const addToDo = (todo: ToDo) => {
    setTodos([...todos, todo])
  }

  const updateToDo = (updatedTodo: ToDo) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === updatedTodo.id ? updatedTodo : todo
    )
    setTodos(updatedTodos)
  }

  const markAsCompleted = (todoId: number) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === todoId) {
        return {
          ...todo,
          completed: !todo.completed
        }
      }
      return todo
    })
    setTodos(updatedTodos)
  }

  const deleteToDo = (todoId: number) => {
    const updatedTodos = todos.filter((todo) => todo.id !== todoId)
    setTodos(updatedTodos)
  }

  return {
    todos,
    addToDo,
    updateToDo,
    deleteToDo,
    markAsCompleted
  }
}