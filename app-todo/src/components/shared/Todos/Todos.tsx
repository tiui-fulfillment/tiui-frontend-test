import { useTodoStore } from '../../../context/todoStore';
import { FILTERS } from '../../types/todo.const';
import { Todo } from '../Todo/Todo';
import './Todos.css';

export const Todos = () => {
  const { todoList, todoUpdate, todoChangeStatus, todoDelete, filter } =
    useTodoStore(state => state);

  const filterTodo =
    filter !== FILTERS.ALL
      ? todoList.filter(todo => todo.completed === filter)
      : todoList;

  return (
    <section className='container-todos'>
      {filterTodo.map(todo => (
        <Todo
          key={todo.id}
          completed={todo.completed}
          title={todo.title}
          id={todo.id}
          changeStatus={todoChangeStatus}
          updateTodo={todoUpdate}
          todoDelete={todoDelete}
        />
      ))}
    </section>
  );
};
