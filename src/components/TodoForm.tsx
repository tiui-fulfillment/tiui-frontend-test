import { Button, FormControl, FormHelperText, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useEffect, useState } from "react";
import { categories } from "../data/categories";
import { useTodo } from "../hooks/useTodo";
import { DraftTodo, Todo } from "../types";

type TodoFormProps = {
    handleClose: () => void
}

type Errors = {
    title: boolean;
    category: boolean;
    description: boolean;
    expirationDate: boolean;
};

export const TodoForm = ({ handleClose }: TodoFormProps) => {
    const { dispatch, state } = useTodo();
    const [todo, setTodo] = useState<DraftTodo>({
        title: '',
        category: '',
        description: '',
        completed: false,
        expirationDate: null,
    });


    const [errors, setErrors] = useState<Errors>({
        title: false,
        category: false,
        description: false,
        expirationDate: false,
    });

    useEffect(() => {
        if (state.editingId) {
            const editingTodo = state.todos.filter((currenTodo: Todo) => currenTodo.id === state.editingId)[0];
            setTodo(editingTodo);
        }
    }, [state.editingId])

    const resetValues = (): void => {
        setTodo({
            title: '',
            category: '',
            description: '',
            completed: false,
            expirationDate: null,
        })

        setErrors({
            title: false,
            category: false,
            description: false,
            expirationDate: false,
        })
    }

    const handleInputChange = (e: any
    ) => {
        const { name, value } = e.target;

        resetErrorValues();
        setTodo({
            ...todo,
            [name]: value
        })
    }

    const handleDateChange = (e: any) => {
        setTodo({
            ...todo,
            expirationDate: e
        })
    }

    const validateForm = (): boolean => {
        const validations: { [key in keyof Errors]?: boolean } = {
            title: todo.title === '',
            category: todo.category === '',
        };
        
        if(todo.expirationDate !== null) {
            const selectedDate = new Date(todo.expirationDate!.$d).setHours(0, 0, 0, 0);
            const today = new Date().setHours(0, 0, 0, 0);
            validations.expirationDate = selectedDate < today
        }

        const newErrors: Errors = {
            title: false,
            category: false,
            description: false,
            expirationDate: false,
        };


        for (const key in validations) {
            if (validations[key as keyof Errors]) {
                newErrors[key as keyof Errors] = true;
            }
        }

        setErrors(newErrors);

        return !Object.values(newErrors).some(error => error);
    };


    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const isValidForm = validateForm();
        if (!isValidForm) return        

        if (state.editingId) {
            dispatch({ type: 'update-todo', payload: { todo: { ...todo, id: state.editingId } } });
        } else {
            dispatch({ type: 'add-todo', payload: { todo } });
        }

        resetValues();
        handleClose();

    }

    const resetErrorValues = () => {
        setErrors({
            title: false,
            category: false,
            description: false,
            expirationDate: false,
        })
    }

    return (
        <div className="shadow-sm rounded-md bg-white p-5">
            <header className="pb-5 mb-5 border-b border-slate-200 border-solid">
                <h1 className="font-bold text-2xl">Nueva Tarea</h1>
                <p className="text-slate-400">Completa el formulario para continuar</p>
            </header>


            <form onSubmit={handleSubmit} className="border-slate-200 border-solid">
                <div className="border-slate-200 border-solid p-4">
                    <div className="flex items-center gap-3 mb-10">
                        <FormControl error={errors.title}>
                            <TextField
                                variant="outlined"
                                label="Título de la Tarea *"
                                id="title"
                                name="title"
                                value={todo.title}
                                onChange={handleInputChange}
                                error={errors.title}
                                helperText={errors.title && "Requerido"}
                            />
                        </FormControl>

                        <FormControl error={errors.expirationDate}>
                            <div className="w-full">
                                <LocalizationProvider dateAdapter={AdapterDayjs} >
                                    <DatePicker
                                        className="w-full"
                                        label="Fecha de Expiración"
                                        name="expirationDate"
                                        onChange={handleDateChange}
                                        value={todo.expirationDate}
                                    />
                                </LocalizationProvider>
                            </div>
                            {
                                errors.expirationDate &&
                                <FormHelperText>La fecha no puede ser menor a la actual</FormHelperText>
                            }
                        </FormControl>
                    </div>

                    <div className="mb-10">
                        <FormControl variant="outlined" fullWidth error={errors.category}>
                            <InputLabel>Categoría *</InputLabel>
                            <Select
                                id="category"
                                name="category"
                                value={todo.category}
                                label="Categoría *"
                                onChange={handleInputChange}
                                error={errors.category}
                            >
                                {categories.map((category) => (
                                    <MenuItem key={category.id} value={category.id}>
                                        {category.name}
                                    </MenuItem>
                                ))}
                            </Select>
                            {
                                errors.category &&
                                <FormHelperText>Requerido</FormHelperText>
                            }
                        </FormControl>
                    </div>

                    <div className="flex items-center gap-3 mb-10">
                        <FormControl fullWidth>
                            <TextField
                                multiline
                                minRows={3}
                                maxRows={8}
                                variant="outlined"
                                label="Descripción"
                                className="w-full"
                                id="description"
                                name="description"
                                value={todo.description}
                                onChange={handleInputChange}
                            />
                        </FormControl>
                    </div>
                </div>

                <div className="flex gap-2 justify-end p-2">
                    <Button variant="outlined" color="primary" onClick={handleClose}>Cancelar</Button>
                    <Button variant="contained" color="primary" type="submit">Guardar</Button>
                </div>
            </form>
        </div>
    )
}
