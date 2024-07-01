"use client";

import { useState, useEffect } from 'react';
import { TextField, Button, Grid, Typography } from '@mui/material';
import { Task } from '../types/Task';

interface TaskFormProps {
    isNew?: boolean;
    onSave: (task: Task) => void;
    initialData?: Task;
}

const TaskForm: React.FC<TaskFormProps> = ({ isNew, onSave, initialData }) => {
    const [formData, setFormData] = useState<Task>({
        id: '',
        name: '',
        description: '',
        isDone: false,
    });

    useEffect(() => {
        if (initialData) {
            setFormData(initialData);
        }
    }, [initialData]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSave(formData);
    };

    const style = {
        form: {
            margin: 20,
        },
    };

    return (
        <form onSubmit={handleSubmit} style={style.form}>
            <Grid container spacing={4}>
                <Grid item xs={12}>
                    <Typography variant="h3">
                        {isNew ? 'New Task' : 'Edit Task'}
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        label="Name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        variant="outlined"
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        label="Description"
                        name="description"
                        value={formData.description}
                        onChange={handleInputChange}
                        variant="outlined"
                        multiline
                        rows={4}
                    />
                </Grid>
                <Grid item xs={12} container justifyContent="flex-end">
                    <Button type="submit" variant="contained" color="primary" size="large">
                        Save
                    </Button>
                </Grid>
            </Grid>
        </form>
    );
};

export default TaskForm;
