import Checkbox from '@mui/material/Checkbox';
import { CalendarToday } from '@mui/icons-material';
import { Todo } from '../types';
import { useTodo } from '../hooks/useTodo';
import { useMemo } from 'react';
import { categories } from '../data/categories';
import {
    LeadingActions,
    SwipeableList,
    SwipeableListItem,
    SwipeAction,
    TrailingActions
} from 'react-swipeable-list'
import 'react-swipeable-list/dist/styles.css'
import { formatDate } from '../helpers';

type TodoItemProps = {
    todo: Todo,
    handleClickOpen: () => void
}

const getCategoryClasses = (categoryId: string) => {
    switch (categoryId) {
        case '1':
            return 'bg-green-100 text-green-700';
        case '2':
            return 'bg-red-100 text-red-700';
        case '3':
            return 'bg-blue-100 text-blue-700';
        default:
            return 'bg-gray-100 text-gray-700';
    }
};

export const TodoItem = ({ todo, handleClickOpen }: TodoItemProps) => {
    const { dispatch } = useTodo();
    const categoryInfo = useMemo(() => categories.filter((category) => category.id === todo.category)[0], [todo.category]);
    const categoryClasses = getCategoryClasses(todo.category);
    const handleClick = () => {
        dispatch({ type: 'get-todo-by-id', payload: { id: todo.id } })
        handleClickOpen();
    }

    const leadingActions = () => (
        <LeadingActions>
        <SwipeAction onClick={() => {
            handleClick();
        }}>
          Actualizar
        </SwipeAction>
      </LeadingActions>
    )

    const trailingActions = () => (
        <TrailingActions>
            <SwipeAction onClick={() => dispatch({ type: 'delete-todo', payload: { id: todo.id } })}>
                Eliminar
            </SwipeAction>
        </TrailingActions>
    )

    const handleCheckboxChange = () => {
        dispatch({ type: 'toggle-todo', payload: { id: todo.id } })
    }

    return (
        <SwipeableList>
            <SwipeableListItem trailingActions={trailingActions()} leadingActions={leadingActions()}>
                <div className="w-full border-b border-slate-200 border-solid py-6 flex cursor-pointer">
                    <div className='pr-4'>
                        <Checkbox value={todo.completed} onChange={handleCheckboxChange} checked={todo.completed}/>
                    </div>
                    <div>
                        <h4>{todo.title}</h4>
                        <p className='text-slate-500 text-sm'>{todo.description}</p>
                        <div className='flex items-center gap-1 mt-2'>
                            {todo.expirationDate ?
                                <>
                                    <CalendarToday fontSize="small" color='action' />
                                    <p className='text-slate-400 font-semibold text-sm'>Expiración: {formatDate(todo.expirationDate?.toString() ?? null)}</p>
                                </> : null
                            }

                        </div>
                    </div>
                    <span className={`font-bold text-sm rounded-full absolute top-3 right-3 py-1 px-5 ${categoryClasses}`}>
                        {categoryInfo.name}
                    </span>
                </div>
            </SwipeableListItem>
        </SwipeableList>
    )
}
