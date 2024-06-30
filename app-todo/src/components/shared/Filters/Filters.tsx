import { useTodoStore } from '../../../context/todoStore';
import { FILTERS } from '../../types/todo.const';
import { ButtonShared } from '../FormFields/ButtonShared';
import './filters.css';

export const Filters = () => {
  const setFilter = useTodoStore(state => state.setFilter);

  return (
    <section className='container-filters'>
      <ButtonShared
        tittle={FILTERS.ALL}
        type='button'
        eventClick={setFilter}
      />
      <ButtonShared
        tittle={FILTERS.COMPLETED}
        type='button'
        eventClick={setFilter}
      />
      <ButtonShared
        tittle={FILTERS.PENDING}
        type='button'
        eventClick={setFilter}
      />
    </section>
  );
};
