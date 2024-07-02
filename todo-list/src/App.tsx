import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import TodoFilters from "./components/TodoFilters";
import { useSearchParams } from "./hooks/useSearchParams";
import { Todo } from "./types";
import { usePersistedState } from "./hooks/usePersistedState";
import { ThemeProvider } from "@mui/material";
import { theme } from "./theme";

function App() {
  const [todos, setTodos] = usePersistedState<Todo[]>("todos", []);
  const [searchParams, setSearchParams] = useSearchParams();
  const filter = searchParams.get("filter") || "";

  const addTodo = (title: string) => {
    const newTodos = [
      ...todos,
      {
        id: crypto.randomUUID(),
        title: title,
        isEditing: false,
        completed: false,
      },
    ];
    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
  };

  const toggleTodo = (id: string) => {
    const newTodos = todos.map((todo: Todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
  };

  const deleteTodo = (id: string) => {
    const newTodos = todos.filter((todo: Todo) => todo.id !== id);
    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
  };

  const editTodo = (id: string) => {
    setTodos(
      todos.map((todo: Todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  };

  const editTodoForm = (title: string, id: string) => {
    const newTodos = todos.map((todo: Todo) =>
      todo.id === id ? { ...todo, title, isEditing: !todo.isEditing } : todo
    );
    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
  };

  const handleFilterChange = (newFilter: string) => {
    setSearchParams({ filter: newFilter });
  };

  const filteredTodos = todos.filter((todo: Todo) => {
    if (filter === "completed") return todo.completed;
    if (filter === "pending") return !todo.completed;
    return true;
  });

  return (
    <ThemeProvider theme={theme}>
      <div className="body">
        <div className="container">
          <TodoForm onSubmit={addTodo} />
          <TodoFilters filter={filter} onFilterChange={handleFilterChange} />
        </div>
        <TodoList
          todos={filteredTodos}
          toggleTodo={toggleTodo}
          editTodo={editTodo}
          deleteTodo={deleteTodo}
          editTodoForm={editTodoForm}
          setTodos={setTodos}
          filter={filter}
        />
      </div>
    </ThemeProvider>
  );
}

export default App;
