"use client";

import { Box, Drawer } from '@mui/material';
import { useState } from 'react';
import TaskForm from './TaskForm';
import { Task } from '../types/Task';
import { v4 as uuidv4 } from 'uuid';
import TaskFabAdd from './TaskFabAdd';

interface TaskAddProps {
    onAdd: (task: Task) => void;
}

const TaskAdd: React.FC<TaskAddProps> = ({ onAdd }) => {
    const [open, setOpen] = useState<boolean>(false);

    const toggleDrawer = (inOpen: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
        if (
            event.type === 'keydown' &&
            ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')
        ) {
            return;
        }
        setOpen(inOpen);
    };

    const handleSaveTask = (formData: { name: string; description: string }) => {
        const newTask: Task = {
            id: uuidv4(),
            name: formData.name,
            description: formData.description,
            isDone: false,
        };
        onAdd(newTask);
        setOpen(false);
    };

    return (
        <>
            <TaskFabAdd onClick={() => setOpen(true)} />
            <Drawer open={open} onClose={toggleDrawer(false)}>
                <Box
                    role="presentation"
                >
                    <TaskForm isNew={true} onSave={handleSaveTask} />
                </Box>
            </Drawer>
        </>
    );
};

export default TaskAdd;
