import { AddTodo } from '../shared/AddTodo/AddTodo';
import { Filters } from '../shared/Filters/Filters';
import { Todos } from '../shared/Todos/Todos';

export function TodoPage() {
  return (
    <>
      <AddTodo />
      <Filters />
      <Todos />
    </>
  );
}
