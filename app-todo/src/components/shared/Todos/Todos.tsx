import { TodoList } from '../../types/todo';
import { Todo } from '../Todo/Todo';
import './Todos.css';

interface Props {
  todoList: TodoList;
  changeStatus: (id: string) => void;
  updateTodo: (value: string, id: string) => void;
}

export const Todos: React.FC<Props> = ({
  todoList,
  changeStatus,
  updateTodo
}) => {
  return (
    <div className='container-todos'>
      {todoList.map(todo => (
        <Todo
          key={todo.id}
          completed={todo.completed}
          title={todo.title}
          id={todo.id}
          changeStatus={changeStatus}
          updateTodo={updateTodo}
        />
      ))}
    </div>
  );
};
