import React from "react";
import { GoTrash } from "react-icons/go";
import { Update } from "./update";

export const TodoItem = ({
  todo,
  handleUpdateTodo,
  handleDeleteTodo,
  handleCompleteTodo,
}) => {
  return (
    <li>
      <span onClick={() => handleCompleteTodo(todo.id)}>
        <label
          className={`container-done ${todo.done ? "active" : ""}`}
        ></label>
      </span>
      <Update todo={todo} handleUpdateTodo={handleUpdateTodo} />
      <button
        className="btn btn-danger"
        onClick={() => handleDeleteTodo(todo.id)}
      >
        <GoTrash />
      </button>
    </li>
  );
};
