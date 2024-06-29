import List from '@mui/material/List';
import { useState, useEffect } from 'react';
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';
import { Box, Typography } from '@mui/material';
import FilterBtn from './FilterBtn';
import { styles } from '../theme/theme';

const getInitialData = () => {
    const data = JSON.parse(localStorage.getItem('todos'))
    if (!data) return [];
    return data;
}

const FILTER_MAP = {
    All: () => true,
    Pending: (todo) => !todo.completed,
    Completed: (todo) => todo.completed
}

const FILTER_NAMES = Object.keys(FILTER_MAP);

export default function TodoList() {
    const [todos, setTodos] = useState(getInitialData);
    const [filter, setFilter] = useState('All');

    const filterList = FILTER_NAMES.map((name) => (
        <FilterBtn 
            key={name}
            name={name}
            isPressed={name === filter}
            setFilter={setFilter}
        />
    ))

    useEffect(() => {
        localStorage.setItem(
            'todos',
            JSON.stringify(todos)
        )
    }, [todos]);

    const removeTodo = (id) => {
        setTodos((prevTodos) => {
            return prevTodos.filter((t) => t.id !== id);
        });
    };

    const toggleTodo = (id) => {
        setTodos((prevTodos) => {
            return prevTodos.map((todo) => {
                if (todo.id === id) {
                    return {...todo, completed: !todo.completed}
                } else {
                    return todo;
                }
            });
        });
    };

    const addTodo = (text) => {
        console.log(text);
        if (text.trim() === '' || todos.some(todo => todo.text === text.trim())) {
            return;
        }
        setTodos(prevTodo => {
            return [...prevTodo, {
                text: text, 
                id: crypto.randomUUID(), 
                completed: false
            }]
        });
    };

    const editTodo = (id, newText) => {
        setTodos(prevTodos => {
            return prevTodos.map(todo => {
                if (todo.id === id) {
                    return { ...todo, text: newText };
                }
                return todo;
            });
        });
    };

    const taskList = todos
        .filter(FILTER_MAP[filter])
        .map((todo) => (
            <TodoItem 
                todo={todo}
                key={todo.id}
                remove={removeTodo}
                edit={editTodo}
                toggle={() => toggleTodo(todo.id)}
            />
        ))

    return (
        <Box
                className='TodoList'
                sx={styles}
            >
                <List 
                    sx={{
                        width: '100%', 
                        maxWidth: 500, 
                        bgcolor: 'background.paper',
                        fontFamily: 'inherit'
                    }}
                >
                    <Typography 
                        variant='h5' 
                        component='h4'
                        sx={{
                            paddingBottom: '10px',
                            fontWeight: '500',
                            textAlign: 'center'
                        }}    
                    >
                        What are you going to do today?
                    </Typography>
                    <TodoForm addTodo={addTodo} />
                    {taskList}
                    <Typography 
                        variant='h5'
                        component='h5'
                        sx={{
                            display: 'flex',
                            marginTop: '10px',
                            justifyContent: 'space-between'
                        }}
                    >
                        {taskList.length} task{taskList.length !== 1 && 's'} left
                        <span>
                            {filterList}
                        </span>
                    </Typography>
                    
                </List>
            </Box>
    )
}