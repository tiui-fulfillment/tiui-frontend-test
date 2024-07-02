export interface Todo {
  id: string;
  title: string;
  isEditing: boolean;
  completed: boolean;
}

export interface TodoFormProps {
  onSubmit: (newItem: string) => void;
}

export interface TodoListProps {
  todos: Todo[];
  toggleTodo: (id: string, completed: boolean) => void;
  editTodo: (id: string) => void;
  deleteTodo: (id: string) => void;
  editTodoForm: (title: string, id: string) => void;
  setTodos: (todos: Todo[]) => void;
}

export interface EditTodoFormProps {
  editTodo: (title: string, id: string) => void;
  todo: Todo;
}

export interface TodoItemProps {
  completed: boolean;
  id: string;
  title: string;
  toggleTodo: (id: string, completed: boolean) => void;
  editTodo: (id: string) => void;
  deleteTodo: (id: string) => void;
  handleDragStart: (e: React.DragEvent) => void;
  handleDragEnter: (e: React.DragEvent) => void;
  handleDragEnd: (e: React.DragEvent) => void;
}

export interface TodoFiltersProps {
  filter: string;
  onFilterChange: (filter: string) => void;
}
