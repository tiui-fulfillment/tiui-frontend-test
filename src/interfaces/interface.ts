export interface ToDoListProps {
  todos: ToDo[]
  handleOpen: () => void
  setToDoEdit: (todo: ToDo) => void
  markAsCompleted: (todoId: number) => void
  deleteToDo: (todoId: number) => void
}

export interface AddToDoModalProps {
  open: boolean
  todoEdit?: ToDo
  setOpen: (open: boolean) => void
  addTodo: (todo: ToDo) => void
  updateTodo: (todo: ToDo) => void
}

export interface ToDoCardProps {
  todo: ToDo
  deleteTodo: (todoId: number) => void
  markAsCompleted: (todoId: number) => void
  handleOpen: () => void
  setToDoEdit: (todo: ToDo) => void
}

export interface FilterProps {
  filter: string
  setFilter: (filter: string) => void
}

export interface ToDo {
  id: number
  title: string
  description: string
  completed: boolean
}