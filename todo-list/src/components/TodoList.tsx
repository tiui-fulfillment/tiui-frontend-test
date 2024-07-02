import "./Todo.css";
import EditTodoForm from "./EditTodoForm";
import TodoItem from "./TodoItem";
import { Todo, TodoListProps } from "../types";
import { useRef } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const TodoList = ({
  todos,
  toggleTodo,
  editTodo,
  deleteTodo,
  editTodoForm,
  setTodos,
  filter,
}: TodoListProps & { filter: string }) => {
  const dragTodo = useRef<number | null>(null);
  const draggedOverTodo = useRef<number | null>(null);

  const handleDragStart = (index: number) => (e: React.DragEvent) => {
    e.currentTarget.classList.add("todo-item-dragging");

    dragTodo.current = index;
  };

  const handleDragEnter = (index: number) => (e: React.DragEvent) => {
    draggedOverTodo.current = index;
  };

  const handleDragEnd = (e: React.DragEvent) => {
    e.currentTarget.classList.remove("todo-item-dragging");

    if (dragTodo.current === null || draggedOverTodo.current === null) {
      return;
    }
    const newTodos = [...todos];
    const draggedItem = newTodos[dragTodo.current];
    newTodos.splice(dragTodo.current, 1);
    newTodos.splice(draggedOverTodo.current, 0, draggedItem);
    setTodos(newTodos);
    dragTodo.current = null;
    draggedOverTodo.current = null;
  };

  const filteredTodos = todos.filter((todo: Todo) => {
    if (filter === "completed") return todo.completed;
    if (filter === "pending") return !todo.completed;
    return true;
  });

  const noTodos = filteredTodos.length === 0;

  return (
    <div className="container">
      {filter === "" && noTodos && (
        <p className="list" style={{ color: "#658147" }}>
          No tienes tareas.
        </p>
      )}
      {filter === "completed" && noTodos && (
        <p className="list" style={{ color: "#658147" }}>
          No tienes tareas completadas.
        </p>
      )}
      {filter === "pending" && noTodos && (
        <p className="list" style={{ color: "#658147" }}>
          No tienes tareas por completar 🎉.
        </p>
      )}
      <TransitionGroup className="todo-list">
        {todos.map((todo: Todo, index) => {
          return todo.isEditing ? (
            <EditTodoForm editTodo={editTodoForm} todo={todo} key={todo.id} />
          ) : (
            <CSSTransition key={todo.id} timeout={300} classNames="todo-item">
              <TodoItem
                {...todo}
                key={todo.id}
                toggleTodo={toggleTodo}
                editTodo={editTodo}
                deleteTodo={deleteTodo}
                handleDragStart={handleDragStart(index)}
                handleDragEnter={handleDragEnter(index)}
                handleDragEnd={handleDragEnd}
              />
            </CSSTransition>
          );
        })}
      </TransitionGroup>
    </div>
  );
};

export default TodoList;
